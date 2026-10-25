const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { TextEncoder, TextDecoder } = require('node:util');

const sandbox = {
  console,
  TextEncoder,
  TextDecoder,
  URL,
  Uint8Array,
  Math,
  crypto: require('node:crypto').webcrypto,
  btoa: value => Buffer.from(value, 'binary').toString('base64'),
  atob: value => Buffer.from(value, 'base64').toString('binary')
};
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('app.js', 'utf8'), sandbox);
const app = sandbox.AmigoSecreto;

function seeded(seed) {
  let state = seed >>> 0;
  return () => ((state = (state * 1664525 + 1013904223) >>> 0) / 4294967296);
}

function verifyDraw(names) {
  for (let seed = 1; seed <= 100; seed += 1) {
    const draw = app.createDraw(names, seeded(seed));
    assert.equal(draw.length, names.length);
    assert.equal(new Set(draw.map(item => item.recipient)).size, names.length);
    draw.forEach(item => assert.notEqual(item.participant, item.recipient));
  }
}

verifyDraw(['Ana', 'Luis']);
verifyDraw(['Ana', 'Luis', 'José']);
verifyDraw(['Ana', 'Luis', 'José', 'María', 'Sofía', 'Andrés', 'Óscar', 'Inés', 'Raúl', 'Noemí']);

assert.equal(app.parseNames('Ana\n ana ').ok, false);
assert.equal(app.parseNames(' Ana \n\nJosé ').ok, true);
assert.deepEqual(Array.from(app.parseNames(' Ana \n\nJosé ').names), ['Ana', 'José']);
assert.equal(app.parseNames('Solo').ok, false);

const assignment = { participant: 'María José', recipient: 'Óscar Núñez' };
const link = app.buildLink('https://jeferchavez2005-ux.github.io/AmigoSecreto/', assignment);
assert.ok(link.startsWith('https://jeferchavez2005-ux.github.io/AmigoSecreto/#sobre='));
const encoded = new URL(link).hash.slice(7);
const decoded = app.decodePayload(encoded);
assert.equal(decoded.p, assignment.participant);
assert.equal(decoded.r, assignment.recipient);
assert.equal(app.normalizeName('  MARÍA   JOSÉ '), app.normalizeName('maría josé'));

for (const malformed of ['', '***', 'bm90LWpzb24', app.encodePayload({ v: 2, p: 'Ana', r: 'Luis' }), app.encodePayload({ v: 1, p: 'Ana', r: 'Ana' })]) {
  assert.equal(app.decodePayload(malformed), null);
}

console.log('✓ Sorteos válidos para 2, 3 y 10 participantes (100 iteraciones cada uno)');
console.log('✓ Duplicados, vacíos, tildes y normalización validados');
console.log('✓ Enlace de GitHub Pages y codificación Unicode validados');
console.log('✓ Datos malformados o manipulados rechazados sin excepción');
