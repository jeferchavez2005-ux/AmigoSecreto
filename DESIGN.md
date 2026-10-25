---
name: Amigo Secreto
description: Un atelier digital de correspondencia festiva para preparar y abrir sorteos privados.
colors:
  parchment: "#f5efe2"
  letter-paper: "#fffaf0"
  forest-ink: "#173f35"
  forest-hover: "#245849"
  wax-burgundy: "#7f2534"
  wax-burgundy-deep: "#5f1724"
  brass-gold: "#c79736"
  ribbon-gold: "#e8c875"
  writing-ink: "#19372f"
  quiet-ink: "#586960"
  paper-line: "#d9cfbb"
  alert-red: "#a42b35"
  white: "#ffffff"
  gold-ink: "#382509"
  blush-paper: "#f3e5e3"
typography:
  display:
    fontFamily: "Cormorant Garamond Local, Palatino Linotype, Georgia, serif"
    fontSize: "clamp(3.25rem, 6.6vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Cormorant Garamond Local, Palatino Linotype, Georgia, serif"
    fontSize: "clamp(1.55rem, 3vw, 2.1rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Cormorant Garamond Local, Palatino Linotype, Georgia, serif"
    fontSize: "clamp(1.7rem, 3.5vw, 3.2rem)"
    fontWeight: 700
    lineHeight: 1
  body:
    fontFamily: "Arial, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.5
  control:
    fontFamily: "Arial, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 700
    lineHeight: 1.5
  label:
    fontFamily: "Arial, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.08em"
rounded:
  envelope: "5px"
  control: "8px"
  inset: "9px"
  field: "10px"
  panel: "14px"
  pill: "999px"
spacing:
  micro: "0.4rem"
  compact: "0.65rem"
  control-y: "0.75rem"
  base: "1rem"
  panel-compact: "1.25rem"
  content: "1.5rem"
  section: "2rem"
  scene: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.forest-ink}"
    textColor: "{colors.white}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.2rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.forest-hover}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "{colors.wax-burgundy}"
    textColor: "{colors.white}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.2rem"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.wax-burgundy-deep}"
    textColor: "{colors.white}"
  button-gold:
    backgroundColor: "{colors.ribbon-gold}"
    textColor: "{colors.gold-ink}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.2rem"
    height: "48px"
  paper-panel:
    backgroundColor: "{colors.letter-paper}"
    textColor: "{colors.writing-ink}"
    rounded: "{rounded.panel}"
    padding: "clamp(1.35rem, 3vw, 2.25rem)"
  text-field:
    backgroundColor: "{colors.letter-paper}"
    textColor: "{colors.writing-ink}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1rem"
    height: "50px"
  count-chip:
    backgroundColor: "{colors.blush-paper}"
    textColor: "{colors.wax-burgundy}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.38rem 0.7rem"
---

# Design System: Amigo Secreto

## Overview

**Creative North Star: "El atelier de correspondencia festiva"**

Amigo Secreto convierte una tarea operativa en el ritual breve de preparar correspondencia personal. El mundo visual parte de una mesa de escritura: papel crema, tinta verde, lacre borgoña, filetes dorados y una serif editorial. Cada material explica la experiencia; el papel contiene el trabajo, el verde protege el momento privado y el sobre vuelve deliberada la revelación.

La interfaz mantiene una jerarquía de cartel con densidad contenida. La vista del organizador es luminosa, editorial y práctica; la del participante es una escena verde, íntima y ceremonial. Los controles conservan una voz sans directa, estados inequívocos y foco visible para que la celebración nunca esconda la acción principal.

**Key Characteristics:**

- Contraste entre escritorio claro para organizar y escena oscura para revelar.
- Serif editorial local para emoción; sans del sistema para operación.
- Papel plano, líneas finas y profundidad reservada para objetos importantes.
- Borgoña como acento ceremonial y dorado como señal de foco, recompensa y detalle.
- Movimiento único y narrativo: confirmar, abrir la solapa y elevar la carta.

## Colors

La paleta combina papel cálido, tinta forestal, lacre borgoña y metal dorado; los neutros permanecen orgánicos para que ningún estado parezca ajeno al mundo de correspondencia.

### Primary

- **Tinta Forestal:** fondo inmersivo de la experiencia privada y acción principal del organizador.
- **Tinta Forestal Viva:** respuesta de interacción y confirmación positiva sobre superficies claras.

### Secondary

- **Lacre Borgoña:** acento ceremonial para titulares, destinatarios y acciones secundarias.
- **Lacre Profundo:** estado hover que conserva el carácter del sello sin añadir un color nuevo.

### Tertiary

- **Latón Dorado:** líneas ornamentales, borde de carta y contorno de foco.
- **Cinta Dorada:** acciones de revelación y texto destacado sobre el escenario verde.

### Neutral

- **Pergamino:** lienzo general cálido de la vista de organización.
- **Papel de Carta:** paneles, campos claros y carta revelada.
- **Tinta de Escritura:** texto principal sobre superficies claras.
- **Tinta Quieta:** explicaciones, ayudas y encabezados de tabla.
- **Filete de Papel:** divisores y estructura de baja intensidad.
- **Papel Rubor:** fondo del contador de participantes.
- **Blanco:** texto de alto contraste en botones sólidos.
- **Tinta Dorada Oscura:** texto legible sobre acciones doradas.

### Named Rules

**The Material Carries Meaning Rule.** El crema pertenece al trabajo compartido, el verde a la privacidad y el borgoña a los momentos ceremoniales; no se intercambian como decoración arbitraria.

**The Gold Rewards Attention Rule.** El dorado marca foco, logro, revelación o un filete material; nunca llena grandes superficies.

## Typography

**Display Font:** Cormorant Garamond Local (con Palatino Linotype, Georgia y serif como respaldo)  
**Body Font:** Arial (con sans-serif como respaldo)  
**Label/Control Font:** Arial (con sans-serif como respaldo)

**Character:** La serif aporta la voz íntima de una invitación impresa y permite titulares de escala generosa. Arial mantiene formularios, mensajes, tablas y botones sobrios, rápidos de leer y ajenos al gesto ornamental.

### Hierarchy

- **Display:** peso medio, escala fluida y línea compacta; reservado para la promesa principal y el saludo individual.
- **Headline:** serif fuerte y compacta; nombra paneles, resultados y estados terminales.
- **Title:** serif de alto contraste visual; revela el nombre del destinatario dentro de la carta.
- **Body:** sans regular de lectura cómoda; explica el flujo en bloques cortos con un ancho aproximado máximo de 570–600px.
- **Control:** sans en negrita; mantiene acciones reconocibles a 48px de altura mínima.
- **Label:** sans pequeña y firme, con espaciado cuando se usa en mayúsculas; describe campos, metadatos y tablas.

### Named Rules

**The Two Voices Rule.** La serif habla de ceremonia y personas; la sans explica acciones, validaciones y datos. No se sustituye una por otra para llenar espacio.

## Layout

El lienzo del organizador usa un contenedor máximo de 1240px y padding horizontal fluido. Su composición principal es una cuadrícula asimétrica de dos columnas: titular de cartel a la izquierda y hoja operativa de al menos 420px a la derecha, con un intervalo fluido entre 3rem y 8rem. La vista de participante conserva la misma dualidad entre mensaje y sobre dentro de un ancho máximo de 1180px.

El ritmo parte de incrementos de 0.4–1rem para controles y de 1.5–3rem para contenido y escenas. A 850px ambas composiciones pasan a una columna, centran el relato y conservan los formularios alineados para lectura. A 580px se compactan paneles, acciones y tablas; los botones del flujo privado ocupan todo el ancho y la tabla oculta únicamente la columna de destinatario, manteniendo la acción de compartir.

## Elevation & Depth

El sistema es plano por defecto y usa profundidad ambiental solo para separar hojas accionables o dar corporeidad al sobre. Los bordes finos y los cambios tonales construyen la mayor parte de la jerarquía; las sombras aparecen en paneles principales, botones sólidos, lacre y objeto revelable.

### Shadow Vocabulary

- **Hoja elevada:** sombra amplia y tenue para el formulario y el bloque de resultados.
- **Acción forestal:** sombra verde contenida bajo el botón principal.
- **Acción dorada:** sombra oscura difusa que separa las acciones privadas del fondo verde.
- **Sobre suspendido:** drop shadow profunda que trata el sobre como objeto físico, no como tarjeta.
- **Foco de campo:** halo dorado translúcido acompañado por cambio de borde.

### Named Rules

**The Flat Paper, Lifted Moments Rule.** Las superficies descansan planas; solo la hoja de trabajo, una acción prioritaria o el objeto de revelación merecen elevación.

## Shapes

La forma base es suavemente editorial: controles de 8px, campos de 8–10px y hojas de 14px. Un filete interior a 8px del borde refuerza el panel como pieza impresa. Las píldoras y círculos se reservan para conteos, confirmaciones y sellos; el sobre conserva pliegues geométricos y esquinas mínimas de 5px para parecer papel doblado, no una tarjeta de aplicación.

## Components

### Buttons

- **Shape:** rectángulos contenidos con esquinas de 8px y altura mínima de 48px.
- **Primary:** tinta forestal con texto blanco, ancho completo en el formulario y sombra verde discreta.
- **Secondary:** lacre borgoña con texto blanco para compartir el conjunto de enlaces.
- **Gold:** cinta dorada con texto oscuro para confirmar identidad y abrir el sobre sobre el fondo verde.
- **Hover / Focus:** elevación vertical de 2px, cambio tonal dentro de la misma familia y contorno dorado exterior; active vuelve a la línea base y disabled pierde opacidad sin moverse.
- **Text / Copy:** la acción de reinicio es subrayada y transparente; copiar un enlace usa borde verde grisáceo y se rellena de verde al pasar el cursor.

### Chips

- **Style:** píldora rubor con texto borgoña en sans pequeña y negrita.
- **State:** el contenido cuenta nombres; no funciona como filtro ni acción.

### Cards / Containers

- **Corner Style:** hoja amplia con esquinas de 14px y filete interior de 9px.
- **Background:** papel de carta sobre pergamino.
- **Shadow Strategy:** elevación ambiental única para separar trabajo y resultado del lienzo.
- **Border:** filete dorado translúcido dentro del panel; el resultado añade una línea dorada de 4px en su borde superior.
- **Internal Padding:** fluido en escritorio y compacto en móvil.

### Inputs / Fields

- **Style:** papel claro, tinta oscura, borde neutro fino y esquinas de 8–10px; el textarea mantiene una línea amplia para listas de nombres.
- **Focus:** borde dorado y halo exterior dorado translúcido, además del foco global de 3px cuando corresponde.
- **Error / Disabled:** los errores usan rojo explícito y negrita; los controles deshabilitados bajan a 52% de opacidad y conservan su geometría.

### Navigation

- **Style:** marca de sobre lineal y nombre serif en verde; la cabecera clara añade una promesa sans en mayúsculas espaciadas y un divisor fino. En la escena privada, la marca cambia a dorado y permanece alineada al inicio.

### Sealed Envelope

El componente de firma ensambla dorso, frente, solapa, carta y sello de lacre mediante polígonos y capas de papel. Parte inclinado dos grados; después de confirmar la identidad, la solapa rota 180 grados, el sello desaparece y la carta asciende. La revelación accesible aparece como contenido separado y recibe el foco. Con movimiento reducido, todas las transiciones se resuelven prácticamente de inmediato.

## Do's and Don'ts

### Do:

- **Do** mantener el contraste narrativo entre el escritorio crema del organizador y el escenario verde del participante.
- **Do** usar el dorado para foco, recompensa y detalle material, siempre en áreas pequeñas.
- **Do** conservar acciones y mensajes operativos en Arial con estados visibles y altura táctil mínima de 48px.
- **Do** reservar la animación compleja para la apertura del sobre después de confirmar la identidad.
- **Do** apilar en una columna a 850px sin cambiar el orden de lectura ni introducir desplazamiento horizontal.

### Don't:

- **Don't** convertir el papel en una cuadrícula de tarjetas: los paneles grandes y las líneas finas sostienen la composición.
- **Don't** usar gradientes decorativos, neón o colores fríos saturados que rompan el mundo material.
- **Don't** aplicar borgoña o dorado a grandes fondos; su rareza sostiene la ceremonia.
- **Don't** usar la serif para validaciones, botones, tablas o instrucciones operativas densas.
- **Don't** reproducir la apertura antes de verificar la identidad ni ocultar el resultado accesible dentro de la animación.
