import{u as d,r,j as e}from"./index-B2s1S-iw.js";const u=()=>{const{categoria:s}=d(),[t,i]=r.useState([]),[c,l]=r.useState(!0),[n,g]=r.useState(null);return r.useEffect(()=>{(async()=>{try{const a=await fetch(`http://localhost:5000/api/galeria?categoria=${s}`);if(!a.ok)throw new Error("Error al obtener las imágenes");const m=await a.json();i(m.images)}catch(a){g(a.message)}finally{l(!1)}})()},[s]),c?e.jsx("p",{children:"Cargando imágenes..."}):n?e.jsxs("p",{children:["Error: ",n]}):e.jsxs("main",{children:[e.jsx("section",{children:e.jsxs("h1",{children:["Galería de ",s]})}),e.jsx("section",{children:t.length>0?t.map((o,a)=>e.jsx("img",{src:o,alt:`Imagen ${a+1} de ${s}`,loading:"lazy",style:{maxWidth:"100%",marginBottom:"1rem"}},id)):e.jsxs("p",{children:["No se encontraron imágenes para la categoría ",s]})})]})};export{u as default};
