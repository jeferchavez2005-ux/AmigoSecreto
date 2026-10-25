# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

HTML5, CSS3 y JavaScript vanilla, como aplicación estática compatible con GitHub Pages.

## Users

Organizadores de intercambios de regalos que necesitan sortear participantes y compartir el resultado individualmente. Cada participante abre su propio enlace y confirma su nombre antes de ver a quién regalará.

## Product Purpose

Permitir crear un sorteo de amigo secreto correcto, comprensible y fácil de compartir sin cuentas, backend ni almacenamiento persistente. El éxito consiste en que cada persona reciba exactamente un destinatario distinto de sí misma y pueda descubrirlo desde su enlace personal.

## Positioning

Cada resultado viaja en un sobre individual construido en la propia URL: el organizador no necesita registrar datos ni depender de un servicio externo.

## Operating Context

El organizador introduce nombres, genera el sorteo, copia enlaces individuales o un mensaje completo y los comparte normalmente por WhatsApp. Los participantes abren el enlace desde móvil o computadora, confirman su identidad y abren un sobre animado.

## Capabilities and Constraints

- Validar un mínimo de dos nombres y rechazar vacíos o duplicados normalizados.
- Crear una permutación aleatoria sin autoasignaciones ni destinatarios repetidos.
- Generar enlaces mediante `#sobre=` con versión, participante y destinatario solamente.
- Mantener separadas las vistas de organización y participante.
- No usar frameworks, backend, base de datos ni almacenamiento persistente.
- Compatible con una publicación bajo `/AmigoSecreto/` en GitHub Pages.
- Representar entradas del usuario con APIs seguras del DOM, nunca con `innerHTML`.

## Brand Commitments

Nombre: Amigo Secreto. Voz natural, cálida y clara en español. Estética festiva y elegante con crema, verde oscuro, borgoña y dorado.

## Evidence on Hand

No hay logotipo, imágenes, testimonios ni métricas suministradas; no deben inventarse.

## Product Principles

- La privacidad percibida se expresa con una revelación individual y deliberada.
- La corrección del sorteo debe ser comprobable y no depender de reintentos casuales.
- Compartir debe requerir el mínimo esfuerzo, especialmente desde el móvil.
- Los errores deben explicar el problema y cómo corregirlo.
- La experiencia festiva nunca debe ocultar la acción principal.

## Accessibility & Inclusion

La interfaz debe admitir teclado, foco visible, semántica básica, mensajes anunciados y preferencia de movimiento reducido.
