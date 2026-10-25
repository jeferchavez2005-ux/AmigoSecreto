# Amigo Secreto

Aplicación web estática para crear sorteos de amigo secreto y compartir un sobre individual con cada participante. Funciona completamente en el navegador: no utiliza cuentas, backend, base de datos ni almacenamiento persistente.

## Cómo usarla

1. Abre la página de la aplicación.
2. Escribe un nombre por línea. Debe haber al menos dos participantes y no puede haber duplicados.
3. Pulsa **Generar sorteo**.
4. Copia el enlace individual de cada persona o pulsa **Copiar todos para WhatsApp**.
5. Envía a cada participante su enlace. Al abrirlo, deberá escribir su nombre, confirmar su identidad y pulsar **Abrir mi sobre**.

Cada enlace incluye únicamente el nombre de ese participante y el de su destinatario. La confirmación del nombre es una barrera de interfaz, no un sistema de autenticación seguro: una persona con conocimientos técnicos podría inspeccionar el contenido codificado de la URL.

## Ejecutar localmente

Puedes abrir `index.html` directamente en un navegador. Para probar el portapapeles con todos los permisos disponibles, sirve la carpeta con cualquier servidor HTTP local, por ejemplo la extensión Live Server de VS Code.

## Publicar gratis con GitHub Pages

1. Abre el repositorio `jeferchavez2005-ux/AmigoSecreto` en GitHub.
2. Entra en **Settings**.
3. En el menú lateral, entra en **Pages**.
4. En **Source**, selecciona **Deploy from a branch**.
5. Elige la rama **main** y la carpeta **/ (root)**.
6. Pulsa **Save** y espera a que GitHub termine la publicación.

La URL prevista es:

`https://jeferchavez2005-ux.github.io/AmigoSecreto/`

La aplicación construye los enlaces a partir de la URL actual, por lo que funciona correctamente dentro de la ruta `/AmigoSecreto/`.

## Privacidad y funcionamiento

- Los nombres y asignaciones solo existen en la página abierta.
- No se escriben en `localStorage`, cookies, archivos ni servicios externos.
- El fragmento `#sobre=` no se envía al servidor durante una petición HTTP.
- El sorteo usa un ciclo aleatorio: cada participante recibe exactamente un destinatario, nadie se recibe a sí mismo y no hay destinatarios repetidos.

## Archivos

- `index.html`: estructura semántica de las vistas del organizador y participante.
- `styles.css`: diseño responsive, animación del sobre y estados accesibles.
- `app.js`: validación, sorteo, enlaces, copiado y apertura del sobre.
- `.nojekyll`: indica a GitHub Pages que sirva los archivos estáticos directamente.

La tipografía Cormorant Garamond se incluye localmente en `assets/fonts` bajo la licencia SIL Open Font License 1.1, disponible junto al archivo de fuente.
