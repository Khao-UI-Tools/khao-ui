import{j as o}from"./jsx-runtime-j4GJ2ZtZ.js";import{u as a}from"./index-BfzNTmkk.js";import{ae as s}from"./index-Fnerto0i.js";import"./iframe-YSesXUft.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";function c(e){const r={a:"a",h1:"h1",h2:"h2",p:"p",...a(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{title:"Color Palette"}),`
`,o.jsx(r.h1,{id:"color-palette",children:"Color Palette"}),`
`,o.jsxs(r.p,{children:["The color Palette is provides by the ",o.jsx(r.a,{href:"https://www.npmjs.com/package/@der-reiskoch/khao-malet",rel:"nofollow",children:"Khao Malet"})," design system"]}),`
`,o.jsx(r.h2,{id:"main-colors",children:"Main Colors"}),`
`,o.jsx("div",{className:"sb-container",children:o.jsxs("div",{className:"container",children:[o.jsx("div",{className:"color-item color-primary",children:o.jsx("p",{children:o.jsx(r.p,{children:"--khao-sys-color-primary"})})}),o.jsx("div",{className:"color-item color-secondary",children:o.jsx("p",{children:o.jsx(r.p,{children:"--khao-sys-color-secondary"})})}),o.jsx("div",{className:"color-item color-tertiary",children:o.jsx("p",{children:o.jsx(r.p,{children:"--khao-sys-color-tertiary"})})}),o.jsx("div",{className:"color-item color-container",children:o.jsx("p",{children:o.jsx(r.p,{children:"--khao-sys-color-container"})})}),o.jsx("div",{className:"color-item color-surface",children:o.jsx("p",{children:o.jsx(r.p,{children:"--khao-sys-color-surface"})})}),o.jsx("div",{className:"color-item color-outline",children:o.jsx("p",{children:o.jsx(r.p,{children:"--khao-sys-color-outline"})})})]})}),`
`,o.jsx("style",{children:`
  .sb-container {
    margin-top: 24px;
    margin-bottom: 48px;
  }

  .container {
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    
  }

  .color-item {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    width: 200px;
    height: 200px;
  }

  .color-primary {
      background-color: var(--khao-sys-color-primary);

      p {
        color: var(--khao-sys-color-on-primary) !important;
      }
  }

  .color-secondary {
      background-color: var(--khao-sys-color-secondary);

      p {
        color: var(--khao-sys-color-on-secondary) !important;
      }
  }

  .color-tertiary {
      background-color: var(--khao-sys-color-tertiary);

      p {
        color: var(--khao-sys-color-on-tertiary) !important;
      }
  }


  .color-container {
      background-color: var(--khao-sys-color-container);

      p {
        color: var(--khao-sys-color-on-container) !important;
      }
  }

  .color-surface {
      background-color: var(--khao-sys-color-surface);

      p {
        color: var(--khao-sys-color-on-surface) !important;
      }
  }

  .color-outline {
      background-color: var(--khao-ref-palette-neutral50);

      p {
        color: var(-khao-ref-palette-neutral80) !important;
      }
  }
  `})]})}function x(e={}){const{wrapper:r}={...a(),...e.components};return r?o.jsx(r,{...e,children:o.jsx(c,{...e})}):c(e)}export{x as default};
