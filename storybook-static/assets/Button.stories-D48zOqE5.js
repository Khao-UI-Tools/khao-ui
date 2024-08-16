import{c as $,S as tt,i as ot,f as y,s as et,a as rt,e as X,x as at,q as nt,b as i,d as Y,w as B,l as st,A as lt,t as _,g as N,h as it,j as Z,k as ct,m as ut,n as ht,o as mt,p as yt}from"./index-CCgjxTXL.js";import{I as bt}from"./Icon-D7rHeijA.js";function kt(o){rt(o,"svelte-hgw2o1",`.button.svelte-hgw2o1{appearance:none;background:transparent;border:none;cursor:pointer;flex-grow:0;flex-shrink:0;font:inherit;padding:0;user-select:none;&:focus {
    outline: none !important;
  }}:host{--khao-button-container-color:var(--khao-sys-color-container);--khao-button-label-text-color:var(--khao-sys-color-on-container);--khao-button-state-layer-color:var(--khao-sys-color-on-container);--khao-button-label-font-weight:var(
      --khao-sys-typescale-label-medium-weight-prominent
    );--khao-button-height:var(--khao-sys-size-regular-10);--khao-button-container-shape:var(--khao-sys-shape-corner-medium);--khao-button-leading-space:var(--khao-sys-size-regular-5);--khao-button-trailing-space:var(--khao-sys-size-regular-5);--khao-button-icon-size:var(--khao-sys-size-regular-5);--khao-button-icon-color:var(--khao-sys-color-on-container);--khao-button-icon-leading-space:var(--khao-sys-size-regular-2);--khao-button-width:150px;--khao-button-hover-state-layer-opacity:var(
      --khao-sys-state-hover-state-layer-opacity
    );--khao-button-focus-state-layer-opacity:var(
      --khao-sys-state-focus-state-layer-opacity
    );--khao-button-pressed-state-layer-opacity:var(
      --khao-sys-state-pressed-state-layer-opacity
    )}a.button.svelte-hgw2o1{text-decoration:none}.button.svelte-hgw2o1{display:inline-flex;color:var(--khao-button-label-text-color);background-color:var(--khao-button-container-color);min-width:var(--khao-button-width);height:var(--khao-button-height, 40px);align-items:center;justify-content:center;padding:0.2rem;border-radius:var(--khao-button-container-shape);font-weight:var(--khao-button-label-font-weight);cursor:pointer;padding-inline-start:var(--khao-button-leading-space);padding-inline-end:var(--khao-button-trailing-space);gap:var(--khao-button-icon-leading-space);transition:background-color 0.1s,
      color 0.2s;&:hover {
      background-color: color-mix(
        in srgb,
        var(--khao-button-container-color),
        var(--khao-button-state-layer-color)
          var(--khao-button-hover-state-layer-opacity)
      );
    };&:focus-visible {
      background-color: color-mix(
        in srgb,
        var(--khao-button-container-color),
        var(--khao-button-state-layer-color)
          var(--khao-button-focus-state-layer-opacity)
      );
    };&:active {
      background-color: color-mix(
        in srgb,
        var(--khao-button-container-color),
        var(--khao-button-state-layer-color)
          var(--khao-button-pressed-state-layer-opacity)
      );
    }}.button-primary.svelte-hgw2o1{--khao-button-container-color:var(--khao-sys-color-primary);--khao-button-label-text-color:var(--khao-sys-color-on-primary);--khao-button-icon-color:var(--khao-sys-color-on-primary);--khao-button-state-layer-color:var(--khao-sys-color-on-primary)}.button-secondary.svelte-hgw2o1{--khao-button-container-color:var(--khao-sys-color-secondary);--khao-button-label-text-color:var(--khao-sys-color-on-secondary);--khao-button-icon-color:var(--khao-sys-color-on-secondary);--khao-button-state-layer-color:var(--khao-sys-color-on-secondary)}.button-tertiary.svelte-hgw2o1{--khao-button-container-color:var(--khao-sys-color-tertiary);--khao-button-label-text-color:var(--khao-sys-color-on-tertiary);--khao-button-icon-color:var(--khao-sys-color-on-tertiary);--khao-button-state-layer-color:var(--khao-sys-color-on-tertiary)}.icon.svelte-hgw2o1{stroke:var(--khao-button-icon-color);fill:var(--khao-button-icon-color);width:var(--khao-button-icon-size);height:var(--khao-button-icon-size)}`)}function S(o){let t,e,c;return e=new bt({props:{iconName:o[8]}}),{c(){t=X("div"),ct(e.$$.fragment),i(t,"class","icon svelte-hgw2o1")},m(n,u){Y(n,t,u),ut(e,t,null),c=!0},p(n,u){const h={};u&256&&(h.iconName=n[8]),e.$set(h)},i(n){c||(_(e.$$.fragment,n),c=!0)},o(n){N(e.$$.fragment,n),c=!1},d(n){n&&Z(t),ht(e)}}}function gt(o){let t,e,c,n,u,h,s,b,k,r=o[8]!==""&&S(o);return{c(){t=X("a"),e=at(o[0]),c=nt(),r&&r.c(),i(t,"class",n="button button-"+o[5]+" svelte-hgw2o1"),i(t,"title",o[1]),i(t,"href",o[2]),i(t,"target",o[4]),i(t,"rel",o[3]),i(t,"style",u=x(o[6],o[7])),i(t,"role",h=G(o[2],o[9]))},m(m,l){Y(m,t,l),B(t,e),B(t,c),r&&r.m(t,null),s=!0,b||(k=st(t,"click",function(){mt(o[9])&&o[9].apply(this,arguments)}),b=!0)},p(m,[l]){o=m,(!s||l&1)&&lt(e,o[0]),o[8]!==""?r?(r.p(o,l),l&256&&_(r,1)):(r=S(o),r.c(),_(r,1),r.m(t,null)):r&&(yt(),N(r,1,1,()=>{r=null}),it()),(!s||l&32&&n!==(n="button button-"+o[5]+" svelte-hgw2o1"))&&i(t,"class",n),(!s||l&2)&&i(t,"title",o[1]),(!s||l&4)&&i(t,"href",o[2]),(!s||l&16)&&i(t,"target",o[4]),(!s||l&8)&&i(t,"rel",o[3]),(!s||l&192&&u!==(u=x(o[6],o[7])))&&i(t,"style",u),(!s||l&516&&h!==(h=G(o[2],o[9])))&&i(t,"role",h)},i(m){s||(_(r),s=!0)},o(m){N(r),s=!1},d(m){m&&Z(t),r&&r.d(),b=!1,k()}}}function x(o,t){var e=o!==""&&t!==""?`--khao-button-container-color:${o}; --khao-button-label-text-color:${t}; --khao-button-icon-color: ${t}; --khao-button-state-layer-color: ${t}`:"";return e}function G(o,t){return o===null&&t!==null?"button":""}function ft(o,t,e){let{label:c}=t,{title:n=c}=t,{href:u=null}=t,{rel:h=null}=t,{target:s=null}=t,{priority:b="primary"}=t,{customBGColor:k=""}=t,{customColor:r=""}=t,{iconName:m=""}=t,{onClick:l=null}=t;return o.$$set=a=>{"label"in a&&e(0,c=a.label),"title"in a&&e(1,n=a.title),"href"in a&&e(2,u=a.href),"rel"in a&&e(3,h=a.rel),"target"in a&&e(4,s=a.target),"priority"in a&&e(5,b=a.priority),"customBGColor"in a&&e(6,k=a.customBGColor),"customColor"in a&&e(7,r=a.customColor),"iconName"in a&&e(8,m=a.iconName),"onClick"in a&&e(9,l=a.onClick)},[c,n,u,h,s,b,k,r,m,l]}class pt extends tt{constructor(t){super(),ot(this,t,ft,gt,et,{label:0,title:1,href:2,rel:3,target:4,priority:5,customBGColor:6,customColor:7,iconName:8,onClick:9},kt)}get label(){return this.$$.ctx[0]}set label(t){this.$$set({label:t}),y()}get title(){return this.$$.ctx[1]}set title(t){this.$$set({title:t}),y()}get href(){return this.$$.ctx[2]}set href(t){this.$$set({href:t}),y()}get rel(){return this.$$.ctx[3]}set rel(t){this.$$set({rel:t}),y()}get target(){return this.$$.ctx[4]}set target(t){this.$$set({target:t}),y()}get priority(){return this.$$.ctx[5]}set priority(t){this.$$set({priority:t}),y()}get customBGColor(){return this.$$.ctx[6]}set customBGColor(t){this.$$set({customBGColor:t}),y()}get customColor(){return this.$$.ctx[7]}set customColor(t){this.$$set({customColor:t}),y()}get iconName(){return this.$$.ctx[8]}set iconName(t){this.$$set({iconName:t}),y()}get onClick(){return this.$$.ctx[9]}set onClick(t){this.$$set({onClick:t}),y()}}customElements.define("khao-button",$(pt,{label:{},title:{},href:{},rel:{},target:{},priority:{},customBGColor:{},customColor:{},iconName:{},onClick:{}},[],[],!0));const Ct={title:"Buttons/Button",component:"khao-button",tags:["autodocs"],argTypes:{customBGColor:{control:"color"},customColor:{control:"color"},priority:{control:{type:"select"},options:["primary","secondary","tertiary"]},iconName:{control:{type:"select"},options:["cart","external-link","facebook","instagram","newsletter","pinterest","printer","rss"]},label:{control:"text",type:"string"},title:{control:"text",type:"string"},href:{control:"text",type:"string"},rel:{control:"text",type:"string"},target:{control:"text",type:"string"},onClick:{type:"function"}}},g={args:{priority:"primary",label:"Primary Button"}},f={args:{priority:"secondary",label:"Secondary Button"}},p={args:{priority:"tertiary",label:"Tertiary Button"}},d={args:{priority:"tertiary",label:"Newsletter",iconName:"newsletter"}},v={args:{priority:"primary",label:"Print",iconName:"printer"}},C={args:{label:"Facebook",iconName:"facebook",customBGColor:"#3b5998",customColor:"white"}},w={args:{label:"Pinterest",iconName:"pinterest",customBGColor:"rgb(189, 8, 28)",customColor:"white"}};var P,z,E;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    priority: "primary",
    label: "Primary Button"
  }
}`,...(E=(z=g.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var T,j,q;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    priority: "secondary",
    label: "Secondary Button"
  }
}`,...(q=(j=f.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var F,I,A;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    priority: "tertiary",
    label: "Tertiary Button"
  }
}`,...(A=(I=p.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var O,R,D;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    priority: "tertiary",
    label: "Newsletter",
    iconName: "newsletter"
  }
}`,...(D=(R=d.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var H,J,K;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    priority: "primary",
    label: "Print",
    iconName: "printer"
  }
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,M,Q;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: "Facebook",
    iconName: "facebook",
    customBGColor: "#3b5998",
    customColor: "white"
  }
}`,...(Q=(M=C.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var U,V,W;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: "Pinterest",
    iconName: "pinterest",
    customBGColor: "rgb(189, 8, 28)",
    customColor: "white"
  }
}`,...(W=(V=w.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const wt=["Primary","Secondary","Tertiary","Newsletter","Print","CustomColorsExample1","CustomColorsExample2"];export{C as CustomColorsExample1,w as CustomColorsExample2,d as Newsletter,g as Primary,v as Print,f as Secondary,p as Tertiary,wt as __namedExportsOrder,Ct as default};
