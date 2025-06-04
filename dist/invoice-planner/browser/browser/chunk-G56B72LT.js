import{$ as Y,A as Ft,C as Lt,D as Dt,E as L,F as y,I as q,J as R,K as Se,L as et,M as Ke,N as Mt,O as E,P as ee,Q as Qe,R as tt,S as $e,V as w,_ as Bt,b as Ue,d as ae,j as It,m as Ot,u as Je,w as Nt,x as Pt,y as Xe}from"./chunk-R3DGKUZX.js";import{$ as re,A as W,B as Ae,Ba as Ye,C as J,D as oe,H as _,K as mt,Ma as $t,N as G,Na as x,O as ne,Oa as Ct,P as U,Pa as xt,Qa as Ze,R as O,Ra as ye,S as X,Sa as Q,U as j,Ua as wt,V as v,W as ft,Wa as _t,Xa as kt,Y as yt,Ya as Tt,Z as ie,a as ut,aa as se,ba as K,bb as ve,ca as Re,cb as Ge,da as ze,db as Et,ea as vt,ga as St,ha as F,ia as je,ja as Ve,ma as ge,n as C,o as te,oa as me,p as pt,pa as fe,r as g,ra as He,s as he,sa as We,v as bt,w as $,x as ht,y as Be,z as gt,za as A}from"./chunk-NRBLYFRS.js";import{a as S}from"./chunk-VOSPIT4N.js";var Co=Object.defineProperty,xo=Object.defineProperties,wo=Object.getOwnPropertyDescriptors,qe=Object.getOwnPropertySymbols,zt=Object.prototype.hasOwnProperty,jt=Object.prototype.propertyIsEnumerable,At=(e,i,t)=>i in e?Co(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,M=(e,i)=>{for(var t in i||(i={}))zt.call(i,t)&&At(e,t,i[t]);if(qe)for(var t of qe(i))jt.call(i,t)&&At(e,t,i[t]);return e},ot=(e,i)=>xo(e,wo(i)),V=(e,i)=>{var t={};for(var o in e)zt.call(e,o)&&i.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&qe)for(var o of qe(e))i.indexOf(o)<0&&jt.call(e,o)&&(t[o]=e[o]);return t};var _o=Dt(),I=_o;function Rt(e,i){Ke(e)?e.push(...i||[]):q(e)&&Object.assign(e,i)}function ko(e){return q(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function To(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function nt(e="",i=""){return To(`${Se(e,!1)&&Se(i,!1)?`${e}-`:e}${i}`)}function Vt(e="",i=""){return`--${nt(e,i)}`}function Eo(e=""){let i=(e.match(/{/g)||[]).length,t=(e.match(/}/g)||[]).length;return(i+t)%2!==0}function Ht(e,i="",t="",o=[],n){if(Se(e)){let r=/{([^}]*)}/g,s=e.trim();if(Eo(s))return;if(E(s,r)){let a=s.replaceAll(r,c=>{let b=c.replace(/{|}/g,"").split(".").filter(u=>!o.some(h=>E(u,h)));return`var(${Vt(t,Qe(b.join("-")))}${y(n)?`, ${n}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,d=/var\([^)]+\)/g;return E(a.replace(d,"0"),l)?`calc(${a})`:a}return s}else if(Mt(e))return e}function Io(e,i,t){Se(i,!1)&&e.push(`${i}:${t};`)}function le(e,i){return e?`${e}{${i}}`:""}var ce=(...e)=>Oo(m.getTheme(),...e),Oo=(e={},i,t,o)=>{if(i){let{variable:n,options:r}=m.defaults||{},{prefix:s,transform:a}=e?.options||r||{},d=E(i,/{([^}]*)}/g)?i:`{${i}}`;return o==="value"||L(o)&&a==="strict"?m.getTokenValue(i):Ht(d,void 0,s,[n.excludedKeyRegex],t)}return""};function No(e,i={}){let t=m.defaults.variable,{prefix:o=t.prefix,selector:n=t.selector,excludedKeyRegex:r=t.excludedKeyRegex}=i,s=(d,c="")=>Object.entries(d).reduce((p,[b,u])=>{let h=E(b,r)?nt(c):nt(c,Qe(b)),f=ko(u);if(q(f)){let{variables:N,tokens:B}=s(f,h);Rt(p.tokens,B),Rt(p.variables,N)}else p.tokens.push((o?h.replace(`${o}-`,""):h).replaceAll("-",".")),Io(p.variables,Vt(h),Ht(f,h,o,[r]));return p},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(e,o);return{value:a,tokens:l,declarations:a.join(""),css:le(n,a.join(""))}}var D={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let i=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[e].flat().map(t=>{var o;return(o=i.map(n=>n.resolve(t)).find(n=>n.matched))!=null?o:this.rules.custom.resolve(t)})}},_toVariables(e,i){return No(e,{prefix:i?.prefix})},getCommon({name:e="",theme:i={},params:t,set:o,defaults:n}){var r,s,a,l,d,c,p;let{preset:b,options:u}=i,h,f,N,B,T,Z,P;if(y(b)&&u.transform!=="strict"){let{primitive:Ce,semantic:xe,extend:we}=b,ue=xe||{},{colorScheme:_e}=ue,ke=V(ue,["colorScheme"]),Te=we||{},{colorScheme:Ee}=Te,pe=V(Te,["colorScheme"]),be=_e||{},{dark:Ie}=be,Oe=V(be,["dark"]),Ne=Ee||{},{dark:Pe}=Ne,Fe=V(Ne,["dark"]),Le=y(Ce)?this._toVariables({primitive:Ce},u):{},De=y(ke)?this._toVariables({semantic:ke},u):{},Me=y(Oe)?this._toVariables({light:Oe},u):{},at=y(Ie)?this._toVariables({dark:Ie},u):{},lt=y(pe)?this._toVariables({semantic:pe},u):{},ct=y(Fe)?this._toVariables({light:Fe},u):{},dt=y(Pe)?this._toVariables({dark:Pe},u):{},[no,io]=[(r=Le.declarations)!=null?r:"",Le.tokens],[ro,so]=[(s=De.declarations)!=null?s:"",De.tokens||[]],[ao,lo]=[(a=Me.declarations)!=null?a:"",Me.tokens||[]],[co,uo]=[(l=at.declarations)!=null?l:"",at.tokens||[]],[po,bo]=[(d=lt.declarations)!=null?d:"",lt.tokens||[]],[ho,go]=[(c=ct.declarations)!=null?c:"",ct.tokens||[]],[mo,fo]=[(p=dt.declarations)!=null?p:"",dt.tokens||[]];h=this.transformCSS(e,no,"light","variable",u,o,n),f=io;let yo=this.transformCSS(e,`${ro}${ao}`,"light","variable",u,o,n),vo=this.transformCSS(e,`${co}`,"dark","variable",u,o,n);N=`${yo}${vo}`,B=[...new Set([...so,...lo,...uo])];let So=this.transformCSS(e,`${po}${ho}color-scheme:light`,"light","variable",u,o,n),$o=this.transformCSS(e,`${mo}color-scheme:dark`,"dark","variable",u,o,n);T=`${So}${$o}`,Z=[...new Set([...bo,...go,...fo])],P=R(b.css,{dt:ce})}return{primitive:{css:h,tokens:f},semantic:{css:N,tokens:B},global:{css:T,tokens:Z},style:P}},getPreset({name:e="",preset:i={},options:t,params:o,set:n,defaults:r,selector:s}){var a,l,d;let c,p,b;if(y(i)&&t.transform!=="strict"){let u=e.replace("-directive",""),h=i,{colorScheme:f,extend:N,css:B}=h,T=V(h,["colorScheme","extend","css"]),Z=N||{},{colorScheme:P}=Z,Ce=V(Z,["colorScheme"]),xe=f||{},{dark:we}=xe,ue=V(xe,["dark"]),_e=P||{},{dark:ke}=_e,Te=V(_e,["dark"]),Ee=y(T)?this._toVariables({[u]:M(M({},T),Ce)},t):{},pe=y(ue)?this._toVariables({[u]:M(M({},ue),Te)},t):{},be=y(we)?this._toVariables({[u]:M(M({},we),ke)},t):{},[Ie,Oe]=[(a=Ee.declarations)!=null?a:"",Ee.tokens||[]],[Ne,Pe]=[(l=pe.declarations)!=null?l:"",pe.tokens||[]],[Fe,Le]=[(d=be.declarations)!=null?d:"",be.tokens||[]],De=this.transformCSS(u,`${Ie}${Ne}`,"light","variable",t,n,r,s),Me=this.transformCSS(u,Fe,"dark","variable",t,n,r,s);c=`${De}${Me}`,p=[...new Set([...Oe,...Pe,...Le])],b=R(B,{dt:ce})}return{css:c,tokens:p,style:b}},getPresetC({name:e="",theme:i={},params:t,set:o,defaults:n}){var r;let{preset:s,options:a}=i,l=(r=s?.components)==null?void 0:r[e];return this.getPreset({name:e,preset:l,options:a,params:t,set:o,defaults:n})},getPresetD({name:e="",theme:i={},params:t,set:o,defaults:n}){var r;let s=e.replace("-directive",""),{preset:a,options:l}=i,d=(r=a?.directives)==null?void 0:r[s];return this.getPreset({name:s,preset:d,options:l,params:t,set:o,defaults:n})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,i){var t;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?i.options.darkModeSelector:(t=e.darkModeSelector)!=null?t:i.options.darkModeSelector):[]},getLayerOrder(e,i={},t,o){let{cssLayer:n}=i;return n?`@layer ${R(n.order||"primeui",t)}`:""},getCommonStyleSheet({name:e="",theme:i={},params:t,props:o={},set:n,defaults:r}){let s=this.getCommon({name:e,theme:i,params:t,set:n,defaults:r}),a=Object.entries(o).reduce((l,[d,c])=>l.push(`${d}="${c}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[d,c])=>{if(c?.css){let p=ee(c?.css),b=`${d}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${b}" ${a}>${p}</style>`)}return l},[]).join("")},getStyleSheet({name:e="",theme:i={},params:t,props:o={},set:n,defaults:r}){var s;let a={name:e,theme:i,params:t,set:n,defaults:r},l=(s=e.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,d=Object.entries(o).reduce((c,[p,b])=>c.push(`${p}="${b}"`)&&c,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${d}>${ee(l)}</style>`:""},createTokens(e={},i,t="",o="",n={}){return Object.entries(e).forEach(([r,s])=>{let a=E(r,i.variable.excludedKeyRegex)?t:t?`${t}.${tt(r)}`:tt(r),l=o?`${o}.${r}`:r;q(s)?this.createTokens(s,i,a,l,n):(n[a]||(n[a]={paths:[],computed(d,c={}){var p,b;return this.paths.length===1?(p=this.paths[0])==null?void 0:p.computed(this.paths[0].scheme,c.binding):d&&d!=="none"?(b=this.paths.find(u=>u.scheme===d))==null?void 0:b.computed(d,c.binding):this.paths.map(u=>u.computed(u.scheme,c[u.scheme]))}}),n[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(d,c={}){let p=/{([^}]*)}/g,b=s;if(c.name=this.path,c.binding||(c.binding={}),E(s,p)){let h=s.trim().replaceAll(p,B=>{var T;let Z=B.replace(/{|}/g,""),P=(T=n[Z])==null?void 0:T.computed(d,c);return Ke(P)&&P.length===2?`light-dark(${P[0].value},${P[1].value})`:P?.value}),f=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,N=/var\([^)]+\)/g;b=E(h.replace(N,"0"),f)?`calc(${h})`:h}return L(c.binding)&&delete c.binding,{colorScheme:d,path:this.path,paths:c,value:b.includes("undefined")?void 0:b}}}))}),n},getTokenValue(e,i,t){var o;let r=(l=>l.split(".").filter(c=>!E(c.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(i),s=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,a=[(o=e[r])==null?void 0:o.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},d)=>{let c=d,{colorScheme:p}=c,b=V(c,["colorScheme"]);return l[p]=b,l},void 0)},getSelectorRule(e,i,t,o){return t==="class"||t==="attr"?le(y(i)?`${e}${i},${e} ${i}`:e,o):le(e,y(i)?le(i,o):o)},transformCSS(e,i,t,o,n={},r,s,a){if(y(i)){let{cssLayer:l}=n;if(o!=="style"){let d=this.getColorSchemeOption(n,s);i=t==="dark"?d.reduce((c,{type:p,selector:b})=>(y(b)&&(c+=b.includes("[CSS]")?b.replace("[CSS]",i):this.getSelectorRule(b,a,p,i)),c),""):le(a??":root",i)}if(l){let d={name:"primeui",order:"primeui"};q(l)&&(d.name=R(l.name,{name:e,type:o})),y(d.name)&&(i=le(`@layer ${d.name}`,i),r?.layerNames(d.name))}return i}return""}},m={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:i}=e;i&&(this._theme=ot(M({},i),{options:M(M({},this.defaults.options),i.options)}),this._tokens=D.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),I.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=ot(M({},this.theme),{preset:e}),this._tokens=D.createTokens(e,this.defaults),this.clearLoadedStyleNames(),I.emit("preset:change",e),I.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=ot(M({},this.theme),{options:e}),this.clearLoadedStyleNames(),I.emit("options:change",e),I.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return D.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",i){return D.getCommon({name:e,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",i){let t={name:e,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return D.getPresetC(t)},getDirective(e="",i){let t={name:e,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return D.getPresetD(t)},getCustomPreset(e="",i,t,o){let n={name:e,preset:i,options:this.options,selector:t,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return D.getPreset(n)},getLayerOrderCSS(e=""){return D.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",i,t="style",o){return D.transformCSS(e,i,o,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",i,t={}){return D.getCommonStyleSheet({name:e,theme:this.theme,params:i,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,i,t={}){return D.getStyleSheet({name:e,theme:this.theme,params:i,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),I.emit(`theme:${i}:load`,e),!this._loadingStyles.size&&I.emit("theme:load"))}};var Po=0,Wt=(()=>{class e{document=g(Q);use(t,o={}){let n=!1,r=t,s=null,{immediate:a=!0,manual:l=!1,name:d=`style_${++Po}`,id:c=void 0,media:p=void 0,nonce:b=void 0,first:u=!1,props:h={}}=o;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${d}"]`)||c&&this.document.getElementById(c)||this.document.createElement("style"),!s.isConnected){r=t,Ot(s,{type:"text/css",media:p,nonce:b});let f=this.document.head;u&&f.firstChild?f.insertBefore(s,f.firstChild):f.appendChild(s),Lt(s,"data-primeng-style-id",d)}return s.textContent!==r&&(s.textContent=r),{id:c,name:d,el:s,css:r}}}static \u0275fac=function(o){return new(o||e)};static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var de={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Fo=({dt:e})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${e("disabled.opacity")};
}

.pi {
    font-size: ${e("icon.size")};
}

.p-icon {
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-unselectable-text {
    user-select: none;
}

.p-overlay-mask {
    background: ${e("mask.background")};
    color: ${e("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${e("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${e("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${e("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${e("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,Lo=({dt:e})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${e("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,k=(()=>{class e{name="base";useStyle=g(Wt);theme=void 0;css=void 0;classes={};inlineStyles={};load=(t,o={},n=r=>r)=>{let r=n(R(t,{dt:ce}));return r?this.useStyle.use(ee(r),S({name:this.name},o)):{}};loadCSS=(t={})=>this.load(this.css,t);loadTheme=(t={},o="")=>this.load(this.theme,t,(n="")=>m.transformCSS(t.name||this.name,`${n}${o}`));loadGlobalCSS=(t={})=>this.load(Lo,t);loadGlobalTheme=(t={},o="")=>this.load(Fo,t,(n="")=>m.transformCSS(t.name||this.name,`${n}${o}`));getCommonTheme=t=>m.getCommon(this.name,t);getComponentTheme=t=>m.getComponent(this.name,t);getDirectiveTheme=t=>m.getDirective(this.name,t);getPresetTheme=(t,o,n)=>m.getCustomPreset(this.name,t,o,n);getLayerOrderThemeCSS=()=>m.getLayerOrderCSS(this.name);getStyleSheet=(t="",o={})=>{if(this.css){let n=R(this.css,{dt:ce}),r=ee(`${n}${t}`),s=Object.entries(o).reduce((a,[l,d])=>a.push(`${l}="${d}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(t,o={})=>m.getCommonStyleSheet(this.name,t,o);getThemeStyleSheet=(t,o={})=>{let n=[m.getStyleSheet(this.name,t,o)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=R(this.theme,{dt:ce}),a=ee(m.transformCSS(r,s)),l=Object.entries(o).reduce((d,[c,p])=>d.push(`${c}="${p}"`)&&d,[]).join(" ");n.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return n.join("")};static \u0275fac=function(o){return new(o||e)};static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Do=(()=>{class e{theme=J(void 0);csp=J({nonce:void 0});isThemeChanged=!1;document=g(Q);baseStyle=g(k);constructor(){ye(()=>{I.on("theme:change",t=>{xt(()=>{this.isThemeChanged=!0,this.theme.set(t)})})}),ye(()=>{let t=this.theme();this.document&&t&&(this.isThemeChanged||this.onThemeChange(t),this.isThemeChanged=!1)})}ngOnDestroy(){m.clearLoadedStyleNames(),I.clear()}onThemeChange(t){m.setTheme(t),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!m.isStyleNameLoaded("common")){let{primitive:t,semantic:o,global:n,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(t?.css,S({name:"primitive-variables"},s)),this.baseStyle.load(o?.css,S({name:"semantic-variables"},s)),this.baseStyle.load(n?.css,S({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(S({name:"global-style"},s),r),m.setLoadedStyleName("common")}}setThemeConfig(t){let{theme:o,csp:n}=t||{};o&&this.theme.set(o),n&&this.csp.set(n)}static \u0275fac=function(o){return new(o||e)};static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Gt=(()=>{class e extends Do{ripple=J(!1);platformId=g(oe);inputStyle=J(null);inputVariant=J(null);overlayOptions={};csp=J({nonce:void 0});filterMatchModeOptions={text:[w.STARTS_WITH,w.CONTAINS,w.NOT_CONTAINS,w.ENDS_WITH,w.EQUALS,w.NOT_EQUALS],numeric:[w.EQUALS,w.NOT_EQUALS,w.LESS_THAN,w.LESS_THAN_OR_EQUAL_TO,w.GREATER_THAN,w.GREATER_THAN_OR_EQUAL_TO],date:[w.DATE_IS,w.DATE_IS_NOT,w.DATE_BEFORE,w.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new ut;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=S(S({},this.translation),t),this.translationSource.next(this.translation)}setConfig(t){let{csp:o,ripple:n,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:d}=t||{};o&&this.csp.set(o),n&&this.ripple.set(n),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),d&&this.setTranslation(d),a&&this.setThemeConfig({theme:a,csp:o})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=$(e)))(n||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Hn=new pt("PRIME_NG_CONFIG");var Ut=(()=>{class e extends k{name="common";static \u0275fac=(()=>{let t;return function(n){return(t||(t=$(e)))(n||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),z=(()=>{class e{document=g(Q);platformId=g(oe);el=g(Ae);injector=g(ht);cd=g($t);renderer=g(mt);config=g(Gt);baseComponentStyle=g(Ut);baseStyle=g(k);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=$e("pc");themeChangeListeners=[];_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,o="",n={}){return et(t,o,n)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!Et(this.platformId)){let{dt:o}=t;o&&o.currentValue&&(this._loadScopedThemeStyles(o.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(o.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(t=>I.off("theme:change",t))}_loadStyles(){let t=()=>{de.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),de.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!de.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),de.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!m.isStyleNameLoaded("common")){let{primitive:t,semantic:o,global:n,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,S({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(o?.css,S({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(n?.css,S({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(S({name:"global-style"},this.styleOptions),r),m.setLoadedStyleName("common")}if(!m.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:o}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,S({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(S({name:`${this.componentStyle?.name}-style`},this.styleOptions),o),m.setLoadedStyleName(this.componentStyle?.name)}if(!m.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,S({name:"layer-order",first:!0},this.styleOptions)),m.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:o}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},n=this.componentStyle?.load(o,S({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){de.clearLoadedStyleNames(),I.on("theme:change",t),this.themeChangeListeners.push(t)}cx(t,o){let n=this.parent?this.parent.componentStyle?.classes?.[t]:this.componentStyle?.classes?.[t];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:t}sx(t){let o=this.componentStyle?.inlineStyles?.[t];return typeof o=="function"?o({instance:this}):typeof o=="string"?o:S({},o)}get parent(){return this.parentInstance}static \u0275fac=function(o){return new(o||e)};static \u0275dir=U({type:e,inputs:{dt:"dt"},features:[A([Ut,k]),he]})}return e})();var Mo=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Bo={root:({props:e,instance:i})=>["p-badge p-component",{"p-badge-circle":y(e.value)&&String(e.value).length===1,"p-badge-dot":L(e.value)&&!i.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},Kt=(()=>{class e extends k{name="badge";theme=Mo;classes=Bo;static \u0275fac=(()=>{let t;return function(n){return(t||(t=$(e)))(n||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var rt=(()=>{class e extends z{styleClass=W();style=W();badgeSize=W();size=W();severity=W();value=W();badgeDisabled=W(!1,{transform:x});_componentStyle=g(Kt);containerClass=Ze(()=>{let t="p-badge p-component";return y(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),L(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(n){return(t||(t=$(e)))(n||e)}})();static \u0275cmp=G({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(o,n){o&2&&(yt(n.style()),ie(n.containerClass()),ft("display",n.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[A([Kt]),O],decls:1,vars:1,template:function(o,n){o&1&&He(0),o&2&&We(n.value())},dependencies:[ve,Y],encapsulation:2,changeDetection:0})}return e})(),Qt=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=ne({type:e});static \u0275inj=te({imports:[rt,Y,Y]})}return e})();var st=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,o){t&&o&&(t.classList?t.classList.add(o):t.className+=" "+o)}static addMultipleClasses(t,o){if(t&&o)if(t.classList){let n=o.trim().split(" ");for(let r=0;r<n.length;r++)t.classList.add(n[r])}else{let n=o.split(" ");for(let r=0;r<n.length;r++)t.className+=" "+n[r]}}static removeClass(t,o){t&&o&&(t.classList?t.classList.remove(o):t.className=t.className.replace(new RegExp("(^|\\b)"+o.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,o){t&&o&&[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,o){return t&&o?t.classList?t.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(o){return o!==t})}static find(t,o){return Array.from(t.querySelectorAll(o))}static findSingle(t,o){return this.isElement(t)?t.querySelector(o):null}static index(t){let o=t.parentNode.childNodes,n=0;for(var r=0;r<o.length;r++){if(o[r]==t)return n;o[r].nodeType==1&&n++}return-1}static indexWithinGroup(t,o){let n=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<n.length;s++){if(n[s]==t)return r;n[s].attributes&&n[s].attributes[o]&&n[s].nodeType==1&&r++}return-1}static appendOverlay(t,o,n="self"){n!=="self"&&t&&o&&this.appendChild(t,o)}static alignOverlay(t,o,n="self",r=!0){t&&o&&(r&&(t.style.minWidth=`${e.getOuterWidth(o)}px`),n==="self"?this.relativePosition(t,o):this.absolutePosition(t,o))}static relativePosition(t,o,n=!0){let r=T=>{if(T)return getComputedStyle(T).getPropertyValue("position")==="relative"?T:r(T.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=o.offsetHeight,l=o.getBoundingClientRect(),d=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),p=this.getViewport(),u=r(t)?.getBoundingClientRect()||{top:-1*d,left:-1*c},h,f;l.top+a+s.height>p.height?(h=l.top-u.top-s.height,t.style.transformOrigin="bottom",l.top+h<0&&(h=-1*l.top)):(h=a+l.top-u.top,t.style.transformOrigin="top");let N=l.left+s.width-p.width,B=l.left-u.left;s.width>p.width?f=(l.left-u.left)*-1:N>0?f=B-N:f=l.left-u.left,t.style.top=h+"px",t.style.left=f+"px",n&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,o,n=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,a=r.width,l=o.offsetHeight,d=o.offsetWidth,c=o.getBoundingClientRect(),p=this.getWindowScrollTop(),b=this.getWindowScrollLeft(),u=this.getViewport(),h,f;c.top+l+s>u.height?(h=c.top+p-s,t.style.transformOrigin="bottom",h<0&&(h=p)):(h=l+c.top+p,t.style.transformOrigin="top"),c.left+a>u.width?f=Math.max(0,c.left+b+d-a):f=c.left+b,t.style.top=h+"px",t.style.left=f+"px",n&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,o=[]){return t.parentNode===null?o:this.getParents(t.parentNode,o.concat([t.parentNode]))}static getScrollableParents(t){let o=[];if(t){let n=this.getParents(t),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of n){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let d=l.split(",");for(let c of d){let p=this.findSingle(a,c);p&&s(p)&&o.push(p)}}a.nodeType!==9&&s(a)&&o.push(a)}}return o}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let o=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",o}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let o=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",o}static getHiddenElementDimensions(t){let o={};return t.style.visibility="hidden",t.style.display="block",o.width=t.offsetWidth,o.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",o}static scrollInView(t,o){let n=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=n?parseFloat(n):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),c=o.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,p=t.scrollTop,b=t.clientHeight,u=this.getOuterHeight(o);c<0?t.scrollTop=p+c:c+u>b&&(t.scrollTop=p+c-b+u)}static fadeIn(t,o){t.style.opacity=0;let n=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-n)/o,t.style.opacity=r,n=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,o){var n=1,r=50,s=o,a=r/s;let l=setInterval(()=>{n=n-a,n<=0&&(n=0,clearInterval(l)),t.style.opacity=n},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,o){var n=Element.prototype,r=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,o)}static getOuterWidth(t,o){let n=t.offsetWidth;if(o){let r=getComputedStyle(t);n+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return n}static getHorizontalPadding(t){let o=getComputedStyle(t);return parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)}static getHorizontalMargin(t){let o=getComputedStyle(t);return parseFloat(o.marginLeft)+parseFloat(o.marginRight)}static innerWidth(t){let o=t.offsetWidth,n=getComputedStyle(t);return o+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),o}static width(t){let o=t.offsetWidth,n=getComputedStyle(t);return o-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),o}static getInnerHeight(t){let o=t.offsetHeight,n=getComputedStyle(t);return o+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),o}static getOuterHeight(t,o){let n=t.offsetHeight;if(o){let r=getComputedStyle(t);n+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return n}static getHeight(t){let o=t.offsetHeight,n=getComputedStyle(t);return o-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),o}static getWidth(t){let o=t.offsetWidth,n=getComputedStyle(t);return o-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),o}static getViewport(){let t=window,o=document,n=o.documentElement,r=o.getElementsByTagName("body")[0],s=t.innerWidth||n.clientWidth||r.clientWidth,a=t.innerHeight||n.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(t){var o=t.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,o){let n=t.parentNode;if(!n)throw"Can't replace element";return n.replaceChild(o,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,o=t.indexOf("MSIE ");if(o>0)return!0;var n=t.indexOf("Trident/");if(n>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,o){if(this.isElement(o))o.appendChild(t);else if(o&&o.el&&o.el.nativeElement)o.el.nativeElement.appendChild(t);else throw"Cannot append "+o+" to "+t}static removeChild(t,o){if(this.isElement(o))o.removeChild(t);else if(o.el&&o.el.nativeElement)o.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+o}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let o=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(o.borderLeftWidth)-parseFloat(o.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let o=document.createElement("div");o.className="p-scrollbar-measure",document.body.appendChild(o);let n=o.offsetWidth-o.clientWidth;return document.body.removeChild(o),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let o=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=o,o}static invokeElementMethod(t,o,n){t[o].apply(t,n)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),o=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:o[1]||"",version:o[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,o){t&&document.activeElement!==t&&t.focus(o)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,o=""){let n=this.find(t,this.getFocusableSelectorString(o)),r=[];for(let s of n){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,o=""){let n=this.findSingle(t,this.getFocusableSelectorString(o));if(n){let r=getComputedStyle(n);if(this.isVisible(n)&&r.display!="none"&&r.visibility!="hidden")return n}return null}static getFirstFocusableElement(t,o=""){let n=this.getFocusableElements(t,o);return n.length>0?n[0]:null}static getLastFocusableElement(t,o){let n=this.getFocusableElements(t,o);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(t,o=!1){let n=e.getFocusableElements(t),r=0;if(n&&n.length>0){let s=n.indexOf(n[0].ownerDocument.activeElement);o?s==-1||s===0?r=n.length-1:r=s-1:s!=-1&&s!==n.length-1&&(r=s+1)}return n[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,o){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return o?.nextElementSibling;case"@prev":return o?.previousElementSibling;case"@parent":return o?.parentElement;case"@grandparent":return o?.parentElement.parentElement;default:let n=typeof t;if(n==="string")return document.querySelector(t);if(n==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,o){if(t){let n=t.getAttribute(o);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,o={},...n){if(t){let r=document.createElement(t);return this.setAttributes(r,o),r.append(...n),r}}static setAttribute(t,o="",n){this.isElement(t)&&n!==null&&n!==void 0&&t.setAttribute(o,n)}static setAttributes(t,o={}){if(this.isElement(t)){let n=(r,s)=>{let a=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((l,d)=>{if(d!=null){let c=typeof d;if(c==="string"||c==="number")l.push(d);else if(c==="object"){let p=Array.isArray(d)?n(r,d):Object.entries(d).map(([b,u])=>r==="style"&&(u||u===0)?`${b.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${u}`:u?b:void 0);l=p.length?l.concat(p.filter(b=>!!b)):l}}return l},a)};Object.entries(o).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(n("class",s))].join(" ").trim():r==="style"?n("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,o=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o}`):!1}}return e})(),qt=class{element;listener;scrollableParents;constructor(i,t=()=>{}){this.element=i,this.listener=t}bindScrollListener(){this.scrollableParents=st.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Yt=(()=>{class e extends z{autofocus=!1;_autofocus=!1;focused=!1;platformId=g(oe);document=g(Q);host=g(Ae);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Ge(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=st.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=$(e)))(n||e)}})();static \u0275dir=U({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",x],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[O]})}return e})();var Ro=["*"],zo=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,jo=(()=>{class e extends k{name="baseicon";inlineStyles=zo;static \u0275fac=(()=>{let t;return function(n){return(t||(t=$(e)))(n||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var Zt=(()=>{class e extends z{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=L(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(n){return(t||(t=$(e)))(n||e)}})();static \u0275cmp=G({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",x],styleClass:"styleClass"},features:[A([jo]),O],ngContentSelectors:Ro,decls:1,vars:0,template:function(o,n){o&1&&(je(),Ve(0))},encapsulation:2,changeDetection:0})}return e})();var Jt=(()=>{class e extends Zt{pathId;ngOnInit(){this.pathId="url(#"+$e()+")"}static \u0275fac=(()=>{let t;return function(n){return(t||(t=$(e)))(n||e)}})();static \u0275cmp=G({type:e,selectors:[["SpinnerIcon"]],features:[O],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,n){o&1&&(bt(),re(0,"svg",0)(1,"g"),K(2,"path",1),se(),re(3,"defs")(4,"clipPath",2),K(5,"rect",3),se()()()),o&2&&(ie(n.getClassNames()),j("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),_(),j("clip-path",n.pathId),_(3),v("id",n.pathId))},encapsulation:2})}return e})();var Vo=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Ho={root:"p-ink"},Xt=(()=>{class e extends k{name="ripple";theme=Vo;classes=Ho;static \u0275fac=(()=>{let t;return function(n){return(t||(t=$(e)))(n||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var eo=(()=>{class e extends z{zone=g(gt);_componentStyle=g(Xt);animationListener;mouseDownListener;timeout;constructor(){super(),ye(()=>{Ge(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let o=this.getInk();if(!o||this.document.defaultView?.getComputedStyle(o,null).display==="none")return;if(ae(o,"p-ink-active"),!Je(o)&&!Xe(o)){let a=Math.max(It(this.el.nativeElement),Pt(this.el.nativeElement));o.style.height=a+"px",o.style.width=a+"px"}let n=Nt(this.el.nativeElement),r=t.pageX-n.left+this.document.body.scrollTop-Xe(o)/2,s=t.pageY-n.top+this.document.body.scrollLeft-Je(o)/2;this.renderer.setStyle(o,"top",s+"px"),this.renderer.setStyle(o,"left",r+"px"),Ue(o,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&ae(a,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let o=0;o<t.length;o++)if(typeof t[o].className=="string"&&t[o].className.indexOf("p-ink")!==-1)return t[o];return null}resetInk(){let t=this.getInk();t&&ae(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),ae(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Ft(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(o){return new(o||e)};static \u0275dir=U({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[A([Xt]),O]})}return e})();var Wo=["content"],Go=["loading"],Uo=["icon"],Ko=["*"],oo=e=>({class:e});function Qo(e,i){e&1&&vt(0)}function qo(e,i){if(e&1&&K(0,"span",8),e&2){let t=F(3);v("ngClass",t.iconClass()),j("aria-hidden",!0)("data-pc-section","loadingicon")}}function Yo(e,i){if(e&1&&K(0,"SpinnerIcon",9),e&2){let t=F(3);v("styleClass",t.spinnerIconClass())("spin",!0),j("aria-hidden",!0)("data-pc-section","loadingicon")}}function Zo(e,i){if(e&1&&(Re(0),X(1,qo,1,3,"span",6)(2,Yo,1,4,"SpinnerIcon",7),ze()),e&2){let t=F(2);_(),v("ngIf",t.loadingIcon),_(),v("ngIf",!t.loadingIcon)}}function Jo(e,i){}function Xo(e,i){if(e&1&&X(0,Jo,0,0,"ng-template",10),e&2){let t=F(2);v("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function en(e,i){if(e&1&&(Re(0),X(1,Zo,3,2,"ng-container",2)(2,Xo,1,1,null,5),ze()),e&2){let t=F();_(),v("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),_(),v("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",Ye(3,oo,t.iconClass()))}}function tn(e,i){if(e&1&&K(0,"span",8),e&2){let t=F(2);ie(t.icon),v("ngClass",t.iconClass()),j("data-pc-section","icon")}}function on(e,i){}function nn(e,i){if(e&1&&X(0,on,0,0,"ng-template",10),e&2){let t=F(2);v("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function rn(e,i){if(e&1&&(Re(0),X(1,tn,1,4,"span",11)(2,nn,1,1,null,5),ze()),e&2){let t=F();_(),v("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),_(),v("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",Ye(3,oo,t.iconClass()))}}function sn(e,i){if(e&1&&(re(0,"span",12),He(1),se()),e&2){let t=F();j("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),_(),We(t.label)}}function an(e,i){if(e&1&&K(0,"p-badge",13),e&2){let t=F();v("value",t.badge)("severity",t.badgeSeverity)}}var ln=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${e("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${e("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${e("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${e("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,cn={root:({instance:e,props:i})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!i.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-button-loading":i.loading,"p-button-link":i.link,[`p-button-${i.severity}`]:i.severity,"p-button-raised":i.raised,"p-button-rounded":i.rounded,"p-button-text":i.text,"p-button-outlined":i.outlined,"p-button-sm":i.size==="small","p-button-lg":i.size==="large","p-button-plain":i.plain,"p-button-fluid":i.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},to=(()=>{class e extends k{name="button";theme=ln;classes=cn;static \u0275fac=(()=>{let t;return function(n){return(t||(t=$(e)))(n||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var dn=(()=>{class e extends z{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new Be;onFocus=new Be;onBlur=new Be;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([o,n])=>this[`_${o}`]!==n&&(this[`_${o}`]=n))}get hasFluid(){let o=this.el.nativeElement.closest("p-fluid");return L(this.fluid)?!!o:this.fluid}_componentStyle=g(to);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:o}=t;if(o){let n=o.currentValue;for(let r in n)this[r]=n[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[o])=>t+` ${o}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(n){return(t||(t=$(e)))(n||e)}})();static \u0275cmp=G({type:e,selectors:[["p-button"]],contentQueries:function(o,n,r){if(o&1&&(ge(r,Wo,5),ge(r,Go,5),ge(r,Uo,5),ge(r,Bt,4)),o&2){let s;me(s=fe())&&(n.contentTemplate=s.first),me(s=fe())&&(n.loadingIconTemplate=s.first),me(s=fe())&&(n.iconTemplate=s.first),me(s=fe())&&(n.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",x],loading:[2,"loading","loading",x],loadingIcon:"loadingIcon",raised:[2,"raised","raised",x],rounded:[2,"rounded","rounded",x],text:[2,"text","text",x],plain:[2,"plain","plain",x],severity:"severity",outlined:[2,"outlined","outlined",x],link:[2,"link","link",x],tabindex:[2,"tabindex","tabindex",Ct],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",x],fluid:[2,"fluid","fluid",x],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[A([to]),O,he],ngContentSelectors:Ko,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(o,n){o&1&&(je(),re(0,"button",0),St("click",function(s){return n.onClick.emit(s)})("focus",function(s){return n.onFocus.emit(s)})("blur",function(s){return n.onBlur.emit(s)}),Ve(1),X(2,Qo,1,0,"ng-container",1)(3,en,3,5,"ng-container",2)(4,rn,3,5,"ng-container",2)(5,sn,2,3,"span",3)(6,an,1,2,"p-badge",4),se()),o&2&&(v("ngStyle",n.style)("disabled",n.disabled||n.loading)("ngClass",n.buttonClass)("pAutoFocus",n.autofocus),j("type",n.type)("aria-label",n.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",n.tabindex),_(2),v("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),_(),v("ngIf",n.loading),_(),v("ngIf",!n.loading),_(),v("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.label),_(),v("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.badge))},dependencies:[ve,wt,_t,Tt,kt,eo,Yt,Jt,Qt,rt,Y],encapsulation:2,changeDetection:0})}return e})(),Sr=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=ne({type:e});static \u0275inj=te({imports:[ve,dn,Y,Y]})}return e})();export{k as a,z as b,st as c,qt as d,Yt as e,rt as f,Qt as g,Zt as h,eo as i,dn as j,Sr as k};
