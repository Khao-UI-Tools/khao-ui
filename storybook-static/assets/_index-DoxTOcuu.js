import{aj as d,al as _}from"./index-D9qqLuUO.js";import{u as p}from"./index-DqtEGu6O.js";import"./iframe-D8EZVHwq.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";var f={exports:{}},n={};/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=d,u=60103;n.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var c=Symbol.for;u=c("react.element"),n.Fragment=c("react.fragment")}var j=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function x(r,e,a){var o,s={},i=null,m=null;a!==void 0&&(i=""+a),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(m=e.ref);for(o in e)y.call(e,o)&&!v.hasOwnProperty(o)&&(s[o]=e[o]);if(r&&r.defaultProps)for(o in e=r.defaultProps,e)s[o]===void 0&&(s[o]=e[o]);return{$$typeof:u,type:r,key:i,ref:m,props:s,_owner:j.current}}n.jsx=x;n.jsxs=x;f.exports=n;var t=f.exports;function l(r){const e={h1:"h1",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(_,{title:"Khao UI"}),`
`,t.jsx("div",{className:"sb-container",children:t.jsxs("div",{className:"sb-section-title",children:[t.jsx(e.h1,{id:"khao-ui",children:"Khao UI"}),t.jsx("img",{src:"https://bilder.koch-reis.de/logo/khao-ui.jpg"})]})}),`
`,t.jsx("style",{children:`
  .sb-container {
    margin-bottom: 48px;
  }
  `})]})}function w(r={}){const{wrapper:e}={...p(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(l,{...r})}):l(r)}export{w as default};
