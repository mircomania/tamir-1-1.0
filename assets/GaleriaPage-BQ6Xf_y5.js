import{j as e,N as r}from"./index-C_bfaJ4R.js";import{B as c}from"./BotonAgendar-lzVUhqcy.js";const m="_sectionContainer_1o9iy_1",l="_sectionTitulo_1o9iy_19",d="_sectionTexto_1o9iy_33",x="_sectionCategorias_1o9iy_73",g="_sectionCategoria_1o9iy_73",o={sectionContainer:m,sectionTitulo:l,sectionTexto:d,sectionCategorias:x,sectionCategoria:g},a="/tamir-1-1.0/assets/img-1-galerias-1.1-BG4tai3X.webp",i="/tamir-1-1.0/assets/img-1-galerias-1.2-IFdrczdR.webp",n="/tamir-1-1.0/assets/img-1-galerias-1.3-DcuT0vqq.webp",t="/tamir-1-1.0/assets/img-1-galerias-1.4-Cbbs1OPv.webp",p=[{nombre:"Newborn",id:"newborn",alt:"Galería de Sesiones Newborn: Sus primeros momentos para siempre.",imagenes:{default:a,xs:i,sm:a,md:i,lg:n,xl:t}},{nombre:"Niños",id:"niños",alt:"Galería de Sesiones Niños: Que sean nuestros niños por siempre.",imagenes:{default:a,xs:i,sm:a,md:i,lg:n,xl:t}},{nombre:"Embarazo",id:"embarazo",alt:"Galería de Sesiones Embarazo: La belleza y calidez esperando su llegada.",imagenes:{default:a,xs:i,sm:a,md:i,lg:n,xl:t}},{nombre:"Familia",id:"familia",alt:"Galería de Sesiones Familia: Complicidad y amor incondicional",imagenes:{default:a,xs:i,sm:a,md:i,lg:n,xl:t}}],u=()=>e.jsxs("section",{className:o.sectionContainer,children:[e.jsxs("header",{className:o.sectionTitulo,children:[e.jsx("h1",{className:"pacifico-text",children:"Galería"}),e.jsx("h2",{className:"light-text-montserrat-b",children:"Capturamos tu historia en cada imagen"}),e.jsx("h3",{className:"light-text-montserrat-b",children:"Los momentos, recuerdos y etapas más especiales inmortalizados con nuestras sesiones fotográficas"})]}),e.jsx("section",{className:o.sectionCategorias,children:p.map(s=>e.jsx("div",{className:o.sectionCategoria,children:e.jsxs(r,{to:`/galeria/${s.id}`,"aria-label":`Ver todas la Galería de Fotos de ${s.nombre}`,children:[e.jsxs("picture",{children:[e.jsx("source",{srcSet:s.imagenes.xl,media:"(min-width: 1700px)"}),e.jsx("source",{srcSet:s.imagenes.lg,media:"(min-width: 1400px)"}),e.jsx("source",{srcSet:s.imagenes.md,media:"(min-width: 992px)"}),e.jsx("source",{srcSet:s.imagenes.sm,media:"(min-width: 768px)"}),e.jsx("source",{srcSet:s.imagenes.xs,media:"(min-width: 576px)"}),e.jsx("img",{src:s.imagenes.default,alt:s.alt})]}),e.jsx("div",{className:o.sectionCategoriaTexto,children:e.jsx("p",{className:"bold-text-montserrat",children:s.nombre})})]})},s.nombre))}),e.jsx("section",{className:o.sectionTexto,children:e.jsx("p",{className:"light-text-montserrat-b",children:"Cada imagen nos cuenta una historia, sesiones de fotos que realzan la emoción con nuestra galería de newborn, niños, embarazo, familia y mas, destacándonos por nuestro enfoque único y profesional."})}),e.jsx("hr",{})]}),j=()=>e.jsxs("main",{className:"fade-in fondo1",children:[e.jsx("section",{children:e.jsx(u,{})}),e.jsx("section",{className:"boton-container",children:e.jsx(c,{})})]});export{j as default};
