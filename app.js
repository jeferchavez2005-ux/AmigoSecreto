(function () {
  'use strict';

  const FORMAT_VERSION = 1;

  function normalizeName(value) {
    return String(value).trim().replace(/\s+/g, ' ').toLocaleLowerCase('es');
  }

  function parseNames(raw) {
    const lines = String(raw).split(/\r?\n/);
    const names = [];
    const seen = new Set();

    for (const line of lines) {
      const name = line.trim().replace(/\s+/g, ' ');
      if (!name) continue;
      const key = normalizeName(name);
      if (seen.has(key)) {
        return { ok: false, error: `El nombre «${name}» aparece más de una vez. Revisa la lista e inténtalo de nuevo.` };
      }
      seen.add(key);
      names.push(name);
    }

    if (names.length < 2) {
      return { ok: false, error: 'Añade al menos dos participantes para poder hacer el sorteo.' };
    }
    return { ok: true, names };
  }

  function randomIndex(maxInclusive, randomSource) {
    if (randomSource) return Math.floor(randomSource() * (maxInclusive + 1));
    if (globalThis.crypto && globalThis.crypto.getRandomValues) {
      const range = maxInclusive + 1;
      const limit = Math.floor(0x100000000 / range) * range;
      const value = new Uint32Array(1);
      do { globalThis.crypto.getRandomValues(value); } while (value[0] >= limit);
      return value[0] % range;
    }
    return Math.floor(Math.random() * (maxInclusive + 1));
  }

  function createDraw(names, randomSource) {
    const recipients = names.slice();
    for (let i = recipients.length - 1; i > 0; i -= 1) {
      const j = randomIndex(i - 1, randomSource);
      [recipients[i], recipients[j]] = [recipients[j], recipients[i]];
    }
    return names.map((participant, index) => ({ participant, recipient: recipients[index] }));
  }

  function encodePayload(payload) {
    const bytes = new TextEncoder().encode(JSON.stringify(payload));
    let binary = '';
    bytes.forEach(byte => { binary += String.fromCharCode(byte); });
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
  }

  function decodePayload(value) {
    try {
      if (!value || !/^[A-Za-z0-9_-]+$/.test(value) || value.length > 3000) return null;
      const padded = value.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - value.length % 4) % 4);
      const binary = atob(padded);
      const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
      const data = JSON.parse(new TextDecoder().decode(bytes));
      if (!data || data.v !== FORMAT_VERSION || typeof data.p !== 'string' || typeof data.r !== 'string') return null;
      const participant = data.p.trim().replace(/\s+/g, ' ');
      const recipient = data.r.trim().replace(/\s+/g, ' ');
      if (!participant || !recipient || participant.length > 120 || recipient.length > 120) return null;
      if (normalizeName(participant) === normalizeName(recipient)) return null;
      return { v: FORMAT_VERSION, p: participant, r: recipient };
    } catch (_) {
      return null;
    }
  }

  function buildLink(baseUrl, assignment) {
    const url = new URL(baseUrl);
    url.hash = `sobre=${encodePayload({ v: FORMAT_VERSION, p: assignment.participant, r: assignment.recipient })}`;
    return url.href;
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return;
      } catch (_) {
        // Continue with the compatible fallback when clipboard permission is denied.
      }
    }
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    const copied = document.execCommand('copy');
    area.remove();
    if (!copied) throw new Error('No se pudo copiar');
  }

  const api = { normalizeName, parseNames, createDraw, encodePayload, decodePayload, buildLink };
  globalThis.AmigoSecreto = api;
  if (typeof document === 'undefined') return;

  const organizerView = document.querySelector('#organizer-view');
  const participantView = document.querySelector('#participant-view');
  const namesInput = document.querySelector('#names');
  const count = document.querySelector('#participant-count');
  const formMessage = document.querySelector('#form-message');
  const results = document.querySelector('#results');
  const resultsBody = document.querySelector('#results-body');
  const copyMessage = document.querySelector('#copy-message');
  let currentAssignments = [];

  function setMessage(element, text, type) {
    element.textContent = text;
    element.className = element === copyMessage ? `message copy-message ${type || ''}` : `message ${type || ''}`;
  }

  function countEnteredNames() {
    const total = namesInput.value.split(/\r?\n/).filter(line => line.trim()).length;
    count.textContent = `${total} ${total === 1 ? 'nombre' : 'nombres'}`;
  }

  function renderResults(assignments) {
    resultsBody.replaceChildren();
    assignments.forEach(assignment => {
      const row = document.createElement('tr');
      const participant = document.createElement('td');
      const recipient = document.createElement('td');
      const action = document.createElement('td');
      const button = document.createElement('button');
      const link = buildLink(window.location.href.split('#')[0], assignment);

      participant.textContent = assignment.participant;
      recipient.textContent = assignment.recipient;
      recipient.className = 'recipient-cell';
      button.type = 'button';
      button.className = 'button copy-button';
      button.textContent = 'Copiar enlace';
      button.setAttribute('aria-label', `Copiar enlace de ${assignment.participant}`);
      button.addEventListener('click', async () => {
        try {
          await copyText(link);
          button.textContent = 'Copiado';
          setMessage(copyMessage, `Enlace de ${assignment.participant} copiado.`, 'success');
          window.setTimeout(() => { button.textContent = 'Copiar enlace'; }, 1800);
        } catch (_) {
          setMessage(copyMessage, 'No pudimos copiar automáticamente. Revisa los permisos del navegador.', 'error');
        }
      });
      action.appendChild(button);
      row.append(participant, recipient, action);
      resultsBody.appendChild(row);
    });
    results.hidden = false;
    results.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  }

  namesInput.addEventListener('input', countEnteredNames);
  document.querySelector('#draw-button').addEventListener('click', () => {
    const parsed = parseNames(namesInput.value);
    if (!parsed.ok) {
      setMessage(formMessage, parsed.error, 'error');
      namesInput.focus();
      return;
    }
    setMessage(formMessage, '', '');
    currentAssignments = createDraw(parsed.names);
    renderResults(currentAssignments);
  });

  document.querySelector('#copy-all').addEventListener('click', async () => {
    const base = window.location.href.split('#')[0];
    const text = currentAssignments.map(item => `🎁 ${item.participant}, abre tu sobre de Amigo Secreto:\n${buildLink(base, item)}`).join('\n\n');
    try {
      await copyText(text);
      setMessage(copyMessage, 'Todos los enlaces están copiados y listos para pegar en WhatsApp.', 'success');
    } catch (_) {
      setMessage(copyMessage, 'No pudimos copiar automáticamente. Revisa los permisos del navegador.', 'error');
    }
  });

  document.querySelector('#new-draw').addEventListener('click', () => {
    if (!window.confirm('¿Quieres descartar este sorteo y volver a empezar? Los enlaces actuales dejarán de mostrarse.')) return;
    currentAssignments = [];
    results.hidden = true;
    resultsBody.replaceChildren();
    setMessage(copyMessage, '', '');
    namesInput.focus();
  });

  function showParticipantError(message) {
    organizerView.hidden = true;
    participantView.hidden = false;
    document.querySelector('#participant-content').hidden = true;
    document.querySelector('#participant-error').hidden = false;
    document.querySelector('#participant-error-text').textContent = message;
    document.title = 'Sobre no válido — Amigo Secreto';
  }

  function initParticipant(payload) {
    organizerView.hidden = true;
    participantView.hidden = false;
    const participantName = document.querySelector('#participant-name');
    const recipientName = document.querySelector('#recipient-name');
    const accessibleRecipientName = document.querySelector('#accessible-recipient-name');
    const identityForm = document.querySelector('#identity-form');
    const identityInput = document.querySelector('#identity-name');
    const identityMessage = document.querySelector('#identity-message');
    const openButton = document.querySelector('#open-envelope');
    const envelope = document.querySelector('#envelope');
    const revealMessage = document.querySelector('#reveal-message');
    let verified = false;

    participantName.textContent = payload.p;
    recipientName.textContent = payload.r;
    accessibleRecipientName.textContent = payload.r;
    document.title = `Un sobre para ${payload.p} — Amigo Secreto`;

    identityForm.addEventListener('submit', event => {
      event.preventDefault();
      if (normalizeName(identityInput.value) !== normalizeName(payload.p)) {
        verified = false;
        openButton.disabled = true;
        identityMessage.textContent = 'Ese nombre no coincide con el destinatario de este enlace. Revisa cómo está escrito.';
        identityMessage.className = 'participant-message';
        identityInput.select();
        return;
      }
      verified = true;
      openButton.disabled = false;
      identityInput.disabled = true;
      identityForm.querySelector('button').disabled = true;
      identityMessage.textContent = 'Identidad confirmada. Tu sobre ya está listo.';
      identityMessage.className = 'participant-message success';
      openButton.focus();
    });

    openButton.addEventListener('click', () => {
      if (!verified) return;
      envelope.classList.add('open');
      revealMessage.hidden = false;
      revealMessage.focus();
      openButton.disabled = true;
      openButton.textContent = 'Sobre abierto';
    });
  }

  const hash = window.location.hash;
  if (hash.startsWith('#sobre=')) {
    const payload = decodePayload(hash.slice(7));
    if (payload) initParticipant(payload);
    else showParticipantError('El enlace está incompleto, fue modificado o utiliza un formato que ya no reconocemos. Pide al organizador que te envíe el enlace nuevamente.');
  }
}());
