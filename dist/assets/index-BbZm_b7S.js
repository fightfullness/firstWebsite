var Se=Object.defineProperty;var Ee=(s,e,t)=>e in s?Se(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var d=(s,e,t)=>Ee(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,K=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),ee=new WeakMap;let pe=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(K&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ee.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ee.set(t,e))}return e}toString(){return this.cssText}};const ke=s=>new pe(typeof s=="string"?s:s+"",void 0,G),f=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,n,r)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[r+1],s[0]);return new pe(t,s,G)},Te=(s,e)=>{if(K)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),n=N.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,s.appendChild(i)}},te=K?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return ke(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ce,defineProperty:Oe,getOwnPropertyDescriptor:Pe,getOwnPropertyNames:Ue,getOwnPropertySymbols:Me,getPrototypeOf:He}=Object,$=globalThis,ie=$.trustedTypes,Re=ie?ie.emptyScript:"",j=$.reactiveElementPolyfillSupport,C=(s,e)=>s,F={toAttribute(s,e){switch(e){case Boolean:s=s?Re:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},ue=(s,e)=>!Ce(s,e),ne={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:ue};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);class S extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ne){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&Oe(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:r}=Pe(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return n==null?void 0:n.call(this)},set(a){const c=n==null?void 0:n.call(this);r.call(this,a),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ne}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const e=He(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const t=this.properties,i=[...Ue(t),...Me(t)];for(const n of i)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(te(n))}else e!==void 0&&t.push(te(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Te(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var r;const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const a=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:F).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(e,t){var r;const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const a=i.getPropertyOptions(n),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)==null?void 0:r.fromAttribute)!==void 0?a.converter:F;this._$Em=n,this[n]=c.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??ue)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[r,a]of n)a.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(n=>{var r;return(r=n.hostUpdate)==null?void 0:r.call(n)}),this.update(t)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[C("elementProperties")]=new Map,S[C("finalized")]=new Map,j==null||j({ReactiveElement:S}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=globalThis,I=O.trustedTypes,se=I?I.createPolicy("lit-html",{createHTML:s=>s}):void 0,ge="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,me="?"+y,Ne=`<${me}>`,A=document,P=()=>A.createComment(""),U=s=>s===null||typeof s!="object"&&typeof s!="function",J=Array.isArray,Ie=s=>J(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",B=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,re=/-->/g,ae=/>/g,w=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),oe=/'/g,le=/"/g,fe=/^(?:script|style|textarea|title)$/i,Le=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),h=Le(1),E=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ce=new WeakMap,_=A.createTreeWalker(A,129);function ve(s,e){if(!J(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return se!==void 0?se.createHTML(e):e}const je=(s,e)=>{const t=s.length-1,i=[];let n,r=e===2?"<svg>":e===3?"<math>":"",a=T;for(let c=0;c<t;c++){const o=s[c];let p,m,l=-1,v=0;for(;v<o.length&&(a.lastIndex=v,m=a.exec(o),m!==null);)v=a.lastIndex,a===T?m[1]==="!--"?a=re:m[1]!==void 0?a=ae:m[2]!==void 0?(fe.test(m[2])&&(n=RegExp("</"+m[2],"g")),a=w):m[3]!==void 0&&(a=w):a===w?m[0]===">"?(a=n??T,l=-1):m[1]===void 0?l=-2:(l=a.lastIndex-m[2].length,p=m[1],a=m[3]===void 0?w:m[3]==='"'?le:oe):a===le||a===oe?a=w:a===re||a===ae?a=T:(a=w,n=void 0);const b=a===w&&s[c+1].startsWith("/>")?" ":"";r+=a===T?o+Ne:l>=0?(i.push(p),o.slice(0,l)+ge+o.slice(l)+y+b):o+y+(l===-2?c:b)}return[ve(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class M{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,a=0;const c=e.length-1,o=this.parts,[p,m]=je(e,t);if(this.el=M.createElement(p,i),_.currentNode=this.el.content,t===2||t===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(n=_.nextNode())!==null&&o.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const l of n.getAttributeNames())if(l.endsWith(ge)){const v=m[a++],b=n.getAttribute(l).split(y),R=/([.?@])?(.*)/.exec(v);o.push({type:1,index:r,name:R[2],strings:b,ctor:R[1]==="."?ze:R[1]==="?"?De:R[1]==="@"?Fe:L}),n.removeAttribute(l)}else l.startsWith(y)&&(o.push({type:6,index:r}),n.removeAttribute(l));if(fe.test(n.tagName)){const l=n.textContent.split(y),v=l.length-1;if(v>0){n.textContent=I?I.emptyScript:"";for(let b=0;b<v;b++)n.append(l[b],P()),_.nextNode(),o.push({type:2,index:++r});n.append(l[v],P())}}}else if(n.nodeType===8)if(n.data===me)o.push({type:2,index:r});else{let l=-1;for(;(l=n.data.indexOf(y,l+1))!==-1;)o.push({type:7,index:r}),l+=y.length-1}r++}}static createElement(e,t){const i=A.createElement("template");return i.innerHTML=e,i}}function k(s,e,t=s,i){var a,c;if(e===E)return e;let n=i!==void 0?(a=t._$Co)==null?void 0:a[i]:t._$Cl;const r=U(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==r&&((c=n==null?void 0:n._$AO)==null||c.call(n,!1),r===void 0?n=void 0:(n=new r(s),n._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=n:t._$Cl=n),n!==void 0&&(e=k(s,n._$AS(s,e.values),n,i)),e}class Be{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=((e==null?void 0:e.creationScope)??A).importNode(t,!0);_.currentNode=n;let r=_.nextNode(),a=0,c=0,o=i[0];for(;o!==void 0;){if(a===o.index){let p;o.type===2?p=new H(r,r.nextSibling,this,e):o.type===1?p=new o.ctor(r,o.name,o.strings,this,e):o.type===6&&(p=new qe(r,this,e)),this._$AV.push(p),o=i[++c]}a!==(o==null?void 0:o.index)&&(r=_.nextNode(),a++)}return _.currentNode=A,n}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class H{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=k(this,e,t),U(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ie(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&U(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=M.createElement(ve(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===n)this._$AH.p(t);else{const a=new Be(n,this),c=a.u(this.options);a.p(t),this.T(c),this._$AH=a}}_$AC(e){let t=ce.get(e.strings);return t===void 0&&ce.set(e.strings,t=new M(e)),t}k(e){J(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new H(this.O(P()),this.O(P()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}_$AI(e,t=this,i,n){const r=this.strings;let a=!1;if(r===void 0)e=k(this,e,t,0),a=!U(e)||e!==this._$AH&&e!==E,a&&(this._$AH=e);else{const c=e;let o,p;for(e=r[0],o=0;o<r.length-1;o++)p=k(this,c[i+o],t,o),p===E&&(p=this._$AH[o]),a||(a=!U(p)||p!==this._$AH[o]),p===u?e=u:e!==u&&(e+=(p??"")+r[o+1]),this._$AH[o]=p}a&&!n&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ze extends L{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}class De extends L{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}}class Fe extends L{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){if((e=k(this,e,t,0)??u)===E)return;const i=this._$AH,n=e===u&&i!==u||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==u&&(i===u||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class qe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){k(this,e)}}const z=O.litHtmlPolyfillSupport;z==null||z(M,H),(O.litHtmlVersions??(O.litHtmlVersions=[])).push("3.2.1");const Ve=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let n=i._$litPart$;if(n===void 0){const r=(t==null?void 0:t.renderBefore)??null;i._$litPart$=n=new H(e.insertBefore(P(),r),r,void 0,t??{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class g extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ve(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return E}}var he;g._$litElement$=!0,g.finalized=!0,(he=globalThis.litElementHydrateSupport)==null||he.call(globalThis,{LitElement:g});const D=globalThis.litElementPolyfillSupport;D==null||D({LitElement:g});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");const de="/assets/hero-image-from-wix-BUOoD9JI.webp";function We(){return f`
    :host {
        display: flex;
        height: 100%;
        width: 100%;
        overflow: hidden;
        z-index: 1; // Lowest level
    }

    .slider{
        display: inline-block;
        white-space: nowrap;
        height: auto;
    }

    /* // ALT 1 : Gradient on each side

    .slider:before, .slider:after {
        position: absolute;
        top: var(--navbar-height);
        width: 30px;
        height: calc(100% - var(--navbar-height));
        content: "";
        z-index: 3;
    }

    .slider:after {
        background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), var(--primary));
        right: var(--wrapper-padding); 
    }
    .slider:before {
        background-image: linear-gradient(270deg, rgba(255, 255, 255, 0), var(--primary));
        left: var(--wrapper-padding); 
    } */

     /* // ALT 2 : Gradient in the bottom   

    .slider:after {
        position: absolute;
        bottom: 0;
        right: var(--wrapper-padding);
        width: calc(100% - var(--wrapper-padding)*2);
        height: calc(100% - var(--navbar-height));
        background-image: linear-gradient(rgba(253, 252, 242, 0), rgba(253, 252, 242, 0.1), rgba(253, 252, 242, 0.5), var(--secondary), var(--secondary));
        content: "";
        z-index: 3;
    } */

        /* ALT 3 : Gradient on image, (to make buttons pop) */

    .image {
        height: 100%;
        opacity: 0.5;
        /* SHORTHAND : animation: name | duration | iteration | timing |    (some missing)*/
        animation: scroll 60s infinite linear;

        transition: 700ms;
    }

    .images:hover {
        opacity: 1.0;
    }
    /* Scrolling animation */
    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
        
    }
    `}class be extends g{render(){return h`
        <div class="slider">
            <img src=${de} class="image">
            <img src=${de} class="image">
        </div>
        `}}d(be,"styles",We());window.customElements.define("app-hero-imagescroller",be);const Ye="/assets/instagram-fighter-hero-Cw8L-Pf3.webp",Ze="/assets/instagram-kneeling-hero-D1SkfcBq.webp",Qe="/assets/instagram-ringcorner-hero-BvJQPAgH.webp";function Ke(){return f`
    .container{
        display:flex;
        height: 100%;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        overflow: hidden;
        z-index: 1; // Lowest level
    }

    .first {
        align-self: start;
    }

    .last {
        align-self: end;
    }

    .hero-image {
        opacity: 0;
        margin: 10px 0px 10px 0px;
        height: calc((100vw/3) - 16px);
        transition: 800ms ease-in-out;
    }

    .active {
        opacity: 1;
    }
    `}class ye extends g{_animationLoop(e,t){t!=-1&&e[t].classList.remove("active"),t=Math.floor(Math.random()*e.length),e[t].classList.add("active"),setTimeout(()=>{this._animationLoop(e,t)},2e3)}_showRandomImages(){const e=this.shadowRoot.querySelectorAll(".hero-image");this._animationLoop(e,-1)}render(){return h`
        <div class="container">
            <img src=${Ye} class="hero-image first">
            <img src=${Ze} class="hero-image">
            <img src=${Qe} class="hero-image last">
        </div>
        `}firstUpdated(){this._showRandomImages()}}d(ye,"styles",Ke());window.customElements.define("app-hero-imagepopping",ye);function $e(){return f`
        /* SHORTHAND : animation: name | duration | timing | direction    (some missing)*/
        .fade-in  {
            animation-duration: 1s;
            animation-name: fade-in;
            animation-direction: normal;
            animation-timing-function: ease-out;
            animation-iteration-count: 1;
            animation-play-state: paused
        }
        .in-view {
            animation-play-state: running;
        }

        @keyframes fade-in {
            from {
                transform: translateY(20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1.0;
            }
            
        }

    `}function Ge(){return f`
        /* SHORTHAND : animation: name | duration | timing | direction    (some missing)*/
        .fade-in  {
            animation-delay:1s;
            animation-duration: 500ms;
            animation-name: fade-in;
            animation-direction: normal;
            animation-timing-function: ease-out;
            animation-iteration-count: 1;
            animation-play-state: paused;
            animation-fill-mode: forwards;
        }
        .in-view {
            animation-play-state: running;
        }

        @keyframes fade-in {
            from {
                transform: translateY(20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1.0;
            }
            
        }

    `}function X(s,e){const t=new IntersectionObserver(i=>{i[0].isIntersecting&&(s.classList.add(e),t.disconnect())});t.observe(s)}function Je(s,e,t){new IntersectionObserver(n=>{n[0].isIntersecting?s.classList.remove(t):s.classList.add(t)}).observe(e)}function Xe(){return f`
        .hero {
            background-color: var(--primary90);
            height:calc(100vh - var(--navbar-height)); /*900px, defined in index.css*/
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .btn-container{
            display: flex;
            position: absolute;
            z-index: 5; /* Mid level*/
            opacity: 0;
            /* IF HAVING A BORDER AROUND BTNS */
            /* height: 600px;
            width: 600px;
            display: flex;
            align-items: center;
            justify-content:center; */
        }

        button {
            margin: 10px 20px 10px 20px;
            border-radius: 8px;
            border: 1px solid transparent;
            padding: 0.6em 1.2em;
            font-size: 1em;
            font-weight: 500;
            font-family: inherit;
            background-color: var(--primary10);
            color: white;
            cursor: pointer;
            transition: 0.3s;
        }

        button:hover {
            border-color: var(--secondary);
            background-color: var(--primary50);
            color: var(--tertiary);
        }
    `}class we extends g{render(){return h`
            <div class="hero">
                <div class="btn-container fade-in">
                    <button>For clubs</button>
                    <button>For fighters</button>
                </div>
                <app-hero-imagescroller></app-hero-imagescroller>
                <!-- <app-hero-imagepopping></app-hero-imagepopping> -->
                <!-- <div class="image-gallery">
                    <img src="../src/assets/instagram-fighter-hero.webp" class="imgOne">
                    <img src="../src/assets/instagram-kneeling-hero.webp" class="imgTwo">
                    <img src="../src/assets/instagram-ringcorner-hero.webp" class="imgThree">
                </div> -->
            </div>
        `}firstUpdated(){X(this.shadowRoot.querySelector(".btn-container"),"in-view")}}d(we,"styles",[Xe(),Ge()]);window.customElements.define("app-heropicture",we);function et(){return f`
        :host {
            display:flex;
            justify-content: center;
            align-items: center;
            scroll-margin-top: var(--navbar-btn-height);
            background-color: var(--secondary);
        }
        .text-placer {
            width: var(--content-width); /*900px, defined in index.css*/
        }

        h1{
            color: var(--primary);
        }
    `}class q extends g{_renderText(e){const t=[];return this.subheading?t.push(h`<h4>${this.subheading}</h4>`):console.log("No subheading"),e&&Object.values(e).forEach(i=>{t.push(h`<p>${i}</p>`)}),t}firstUpdated(){const e=this.shadowRoot.querySelector(".fade-in");X(e,"in-view")}render(){return h`
            <div class="text-placer fade-in">
                <h1>${this.heading}</h1>
                ${this._renderText(this.content)}
            </div>
        `}}d(q,"styles",[et(),$e()]),d(q,"properties",{content:{type:Object},subheading:{type:String},heading:{type:String}});window.customElements.define("app-main-texter",q);function tt(){return f`
        a{
            text-decoration: none;
            
        }

        .btn{
            display:flex;
            align-items: center;
            
            
            height: 100%;
            /* color: var(--neutral); */
            color: var(--secondary);
            text-align: center;
            padding: 0 10px 0 10px;
            opacity: 1.0;
        }

        .btn:hover {
            /* background-color: var(--primary);
            color: var(--secondary); */
            background-color: var(--secondary);
            color: var(--primary);
        }
    `}class V extends g{render(){return h`
            <a href="#${this.btnlink}">
                <div class="btn">
                    ${this.btntext}
                </div>
            </a>   
        `}}d(V,"styles",tt()),d(V,"properties",{btntext:{type:String},btnlink:{type:String}});window.customElements.define("app-navbar-menu-btn",V);function it(){return h`
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="-8 -8 116 116">
            <rect class="svgStroke" width="100" height="100" x="0" y="0" rx="20" ry="20" fill="none" stroke-width="8" />
            <circle class="svgStroke" cx="50" cy="50" r="25" stroke="black" stroke-width="10" fill="none" />
            <circle class="svgBoth" cx="80" cy="20" r="4" stroke="black" stroke-width="8" fill="black" />
        </svg> 
    `}function nt(){return h`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 318.46 468.43">
  <path class="svgBoth" opacity="1" d="M0,272.87c2.06-4.6,1.93-9.65,2.93-14.46,9.43-45.22,35.86-75.35,80.07-88.95,54.6-16.79,110.89,12.68,129.76,66.97,11.06,31.82,5.98,61.44-10.77,89.85-13.74,23.3-33.86,39.89-56.13,54.35-1.95,1.27-2.78.79-3.95-.89-7.62-10.91-15.3-21.78-23.04-32.61-1.98-2.77.02-3.87,1.79-5.12,8.68-6.16,17.82-11.71,25.44-19.25,15.75-15.58,27.43-33.06,25.91-56.53-1.38-21.26-18.52-49.89-48.75-54.65-25.59-4.03-55.9,10.82-66.4,32.14-13.28,26.97-15.41,54.43-.89,81.83,11.56,21.83,26.51,41.06,44.85,57.63,15.94,14.4,33.81,25.77,53.56,34.25,4.13,1.77,7.69,1.68,11.8-.53,26.86-14.5,51.59-31.81,71.92-54.78,24.08-27.22,37.25-58.59,33.7-95.46-2.52-26.27-13.38-49.22-30.67-69.09-7.22-8.29-15.29-15.76-23.69-22.82-3.49-2.93-4.18-4.9-.54-8.57,8.67-8.74,16.91-17.91,25.1-27.11,1.87-2.09,2.9-1.84,4.76-.29,36.61,30.48,62.77,67.46,69.88,115.55,6.28,42.46-3.82,81.42-27.6,117.01-21.45,32.09-50.49,55.84-82.97,75.82-12.06,7.42-24.54,14.07-37.31,20.19-2.19,1.05-4.12,1.37-6.63.78-29.06-6.85-54.51-20.99-78.03-38.83-31.63-23.98-55.49-54.36-72.79-89.95-5.79-11.91-9.14-24.57-10.36-37.77-.09-.99-.07-2.01-.93-2.73v-25.99Z"/>
  <path class="svgBoth" opacity="1" d="M278.95,0c0,14.12-.03,28.16-2.85,42.18-9.84,48.95-52.21,90.8-101.63,99.74-3.59.65-7.19,1.29-10.8,1.89-2.7.44-4.43-.17-4.6-3.47-1.76-33.14,6.42-63.41,26.92-89.74C207.81,22.6,236.4,5.77,271.74.8c.43-.06.81-.53,1.21-.8,2,0,4,0,6,0Z"/>
  <path class="svgBoth" opacity="1" d="M60.54,65.11c41.73.98,73.36,31.88,77.64,68.15.33,2.83-.03,3.63-3.01,3.85-39.14,2.95-75.9-24.59-82.95-65.66-.96-5.59.09-6.36,8.32-6.35Z"/>
</svg>
    `}function st(){return f`
        div {
            display: flex;
            height: inherit;
            
            justify-content: center;
            align-items: center;
            gap: 10px;
            height: 100%;
        }
        .row {
            flex-direction: row;
        }
        .column {
            flex-direction: column;
        }
        
        a {
            height: 100%;
            width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        a:hover {
            background-color: var(--secondary);
        }

        svg {
            width: 25px;
            height: 25px;
        }

        .svgStroke {
            stroke: var(--secondary);
        }

        .svgBoth {
            stroke: var(--secondary);
            fill: var(--secondary);
        }

        a:hover .svgStroke {
            stroke: var(--primary);
        }

        a:hover .svgBoth {
            stroke: var(--primary);
            fill: var(--primary);
        }
    `}class W extends g{render(){return h`
        <div class=${this.footer?"column":"row"}>
            <a href="https://www.instagram.com/fightfulness/" target="_blank">
                ${it()}
            </a>
            <a href="https://peach.nu/instructors/fightfulness" target="_blank">
                ${nt()}
            </a>
        </div>
        `}}d(W,"properties",{footer:{type:Boolean}}),d(W,"styles",st());window.customElements.define("app-socialmedia",W);function rt(){return f`
        .btndiv {
            display: flex;
            height: var(--navbar-btn-height); /*50px, defined in index.css*/
            /* gap: 50px; */
            width: var(--content-width);
            justify-content: space-around;
        }
        /* .nav-socialmedia {
            justify-self: flex-end; // Only working for grid. 
        } */
    `}class xe extends g{render(){return h`
            <div class="btndiv">
                <app-navbar-menu-btn btntext="Mental Training" btnlink="mentalTraining" ></app-navbar-menu-btn>
                <app-navbar-menu-btn btntext="Client Stories" btnlink="testimonials"></app-navbar-menu-btn>
                <app-navbar-menu-btn btntext="Book a Session" btnlink="bookSession"></app-navbar-menu-btn>
                <app-navbar-menu-btn btntext="For clubs" btnlink="forClubs"></app-navbar-menu-btn>
                <app-socialmedia class="nav-socialmedia"></app-socialmedia>
            </div>
        `}}d(xe,"styles",rt());window.customElements.define("app-navbar-menu",xe);const at="/assets/wix-full-logo-DNmHf0hV.webp";function ot(){return f`
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }

        a {
            height: inherit;
        }

        a img {
            height: calc(100% - 10px);
            width: auto;
        }
    `}class Y extends g{render(){return h`
                <a href="#">
                    <img src=${at}>
                </a>
            `}}d(Y,"styles",ot()),d(Y,"properties",{height:{Type:String}});window.customElements.define("app-logo",Y);function lt(){return f`
        .scroll-menu {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: fixed;
            z-index: 10; //Highest level

            background-color: var(--primary);
            overflow: hidden;
            height: 0;
            width: calc(100% - var(--wrapper-padding)*2);
            opacity: 0;
            
            background-color: var(--primary);

            transition-duration: 300ms;
        }
        .active{
            height: var(--navbar-btn-height);
            opacity: 0.8;
        }

        .scroll-menu:not(.active) {
            transition-duration: 100ms;
        }

        .navbar {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            
            height: var(--navbar-height); /* Testing */

            background-color: var(--primary);
            padding: 0 50px 0 50px;
        }

        .logo {
            display: flex;
            flex: 1;
            max-height: calc(100% - var(--navbar-btn-height));
        }
    `}class _e extends g{firstUpdated(){const e=this.shadowRoot.querySelector(".scroll-menu"),t=this.shadowRoot.querySelector(".observed");Je(e,t,"active")}render(){return h`
        <app-navbar-menu class="scroll-menu"></app-navbar-menu>
        <div class="navbar observed">
            <app-logo class="logo"></app-logo>
            <!-- <div class="btndiv">
                <app-navbar-menu-btn btntext="Mental Training" btnlink="mentalTraining" ></app-navbar-menu-btn>
                <app-navbar-menu-btn btntext="Client Stories" btnlink="testimonials"></app-navbar-menu-btn>
                <app-navbar-menu-btn btntext="Book a Session" btnlink="bookSession"></app-navbar-menu-btn>
                <app-navbar-menu-btn btntext="For clubs" btnlink="forClubs"></app-navbar-menu-btn>
            </div> -->
            <app-navbar-menu class="top-menu"></app-navbar-menu>
            <!-- <app-socialmedia></app-socialmedia> -->
        </div>
        <!-- <div class="observed"></div> -->
        `}}d(_e,"styles",lt());window.customElements.define("app-navbar",_e);function ct(){return f`
        :host {
            display: flex;
            background-color: var(--primary);
            padding: 20px;
            margin-top: 35px;

            color: var(--secondary);
        }

        .top-div {
            display: flex;
            justify-content: space-between;

        }
        .footer-first {
            flex-direction: row;
            padding: 20px;
            width: 80%;

        }
        .footer-second {
            display:inline-block;
            width:20%;
        }

        h3 {
            margin-bottom: 0;
        }

        .placeholder-knapp {
            display: flex;
            align-self: flex-end;
            width: fit-content;
            height: 30px;
            cursor: pointer;
            background-color: black;
            color: white;
            border-radius: 10px;
            margin-top: 16px;

            padding: 5px 10px 5px 10px;

        }
        .placeholder-knapp:hover {
            background-color: white;
            color: black;
            transition-duration: 300ms;
        }
    `}class Ae extends g{render(){return h`
            <div class="footer-first">
                <h3>fightfulness</h3>
            </div>
            <hr>
            <div class="footer-second">
                <app-socialmedia footer></app-socialmedia>
            </div>
        `}}d(Ae,"styles",ct());window.customElements.define("app-footer",Ae);const dt="/assets/krille-smaller-Dj7Euhd3.png";function ht(){return f`
        :host {
            display:flex;
            justify-content: center;
            align-items: center;
            scroll-margin-top: var(--navbar-btn-height);
            background-color: var(--secondary);
        }
        .wrapper {
            /* Old width */
            /* width: 760px; */
            width: var(--content-width);
            display:flex; 
            flex-direction: column;
            align-items: flex-start;
        }
        .container {
            display: flex;
            flex-direction: row;
        }
        
        .text-container {
            display: flex; 
            flex-direction: column;
            /* width: 600px; */
            padding-left: 15px;
        }

        .text-container > p:first-child {
            margin-top: 0;
        }

        .image-container{
            width: 100%;
            padding-right: 15px;
            /* overflow: hidden; */
        }

        h1 {
            color: var(--primary);
        }

        p {
            margin-bottom: 0;
        }

        /* Smaller image, solution probably div with overflow. */
        img {
            object-fit: contain;
        }
    `}class Z extends g{_renderText(e){const t=[];return this.subheading?t.push(h`<h4>${this.subheading}</h4>`):console.log("No subheading"),e&&Object.values(e).forEach(i=>{t.push(h`<p>${i}</p>`)}),t}firstUpdated(){const e=this.shadowRoot.querySelector(".fade-in");X(e,"in-view")}render(){return h`
            <div class="wrapper fade-in">
                <h1>${this.heading}</h1>
                <div class="container">
                    <div class="image-container">
                        <img alt="A picture of Kristoffer Modig" src=${dt}>
                    </div>
                    <div class="text-container"> 
                        ${this._renderText(this.content)}
                    </div>
                </div>
            </div>
        `}}d(Z,"styles",[ht(),$e()]),d(Z,"properties",{content:{type:Object},subheading:{type:String},heading:{type:String}});window.customElements.define("app-main-image-text",Z);function pt(){return f`
        :host {
            text-align: -webkit-center;
        }

        .card {
            width: 320px;
            height: 250px;
            border-radius: 10px;
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.3) 0 0 10px 0;
        }

        .wrapper {
            width: 100%;
            height: 100%;
        }

        .img {
            background-color: var(--tertiary30);
            height: 128px;
            width: 100%;
            overflow:hidden;
        }

        .textContainer {
            background-color: white;
            
        }
    `}class Q extends g{render(){return h`
            <!-- <embed class="embeddedSite" src=${this.url} > -->
            <div class="card">
                <a href=${this.url} target="_blank">
                    <div class="wrapper">
                        <div class="img">
                            
                        </div>
                        <div class="textContainer">
    
                        </div>
                    </div>
                </a>
            </div>
            
            <!-- <div class="activity-card" id="F3AruiQSul7PlzM6vsYQ">
                <a href="/activities/F3AruiQSul7PlzM6vsYQ" target="_self">
                    <div style="background:#fff;position:relative;border-radius:10px;overflow:hidden;box-shadow:rgba(0, 0, 0, 0.3) 0 0 10px 0">
                        <div style="position:relative;border-bottom-width:1px;border-color:#eee">
                            <div style="overflow:hidden;background-color:#f5f5f5;max-width:600px;position:relative">
                                <img class="activity-card-image" alt="Online Find Your Flow Session" style="object-fit: cover; object-position: center center; width: 100%; visibility: visible; aspect-ratio: 5 / 2;" src="https://firebasestorage.googleapis.com/v0/b/peach-training-app.appspot.com/o/classImages%2Fzl3wCq1aDV2STMyinwDI_1729790321002.jpg?alt=media&amp;token=102b29ea-2dc8-45e1-a23f-83df470f6ba2">
                            </div>
                        </div>
                        <div style="padding:16px;display:flex;flex-direction:column">
                            <div style="font-size:13px;font-weight:bold;color:rgba(0, 0, 0, 0.45);text-transform:uppercase;white-space:nowrap;overflow:hidden">
                                <span>
                                    <time style="display:inline-block;min-width:20px;min-height:20px" datetime="2025-01-05T08:00:00.000Z">
                                        <noscript>
                                            2025-01-05T08:00:00.000Z
                                        </noscript>
                                        Sön 5 jan. 2025 09:00
                                    </time>
                                    <span style="padding:0 3px">
                                         · 
                                        </span>
                                    </span>
                                    <span>Online</span>
                                </div>
                                <div style="display:flex;flex-direction:row;justify-content:space-between">
                                    <p style="font-size:16px;font-weight:bold;color:rgba(0, 0, 0, 0.87)">Online Find Your Flow Session</p>
                                    <div style="font-size:16px;font-weight:bold;color:rgba(0, 0, 0, 0.87);white-space:nowrap;padding-left:10px">€16.00</div>
                                </div>
                                <p style="font-size:15px;color:rgba(0, 0, 0, 0.56)">
                                    Fightfulness Mental Training
                                </p>
                            </div>
                        </div>
                    </a>
                </div> -->
        `}}d(Q,"styles",pt()),d(Q,"properties",{url:{type:String}});window.customElements.define("app-main-productcard",Q);const ut={example:"Lorem Itsum badadum",heading:"About me",body:{1:"I'm Kristoffer Modig, the mental coach behind Fightfulness.",2:"For the past four years, I've dedicated myself to social work as a therapist in different areas, where I've had the privilege of connecting with people during their most pivotal moments. My passion lies in helping individuals gain perspective and create space to enhance their mental skills in every moment of life, both as an athlete and a human being.",3:"For years, I've observed how mental training can play a crucial role in martial arts. I've seen fighters struggle with the mental aspects of the sport, often getting trapped in negative thought patterns and losing sight of the peace of being a mental tough fighter.",4:"At Fightfulness, I meet my clients where they are, addressing the unique challenges their minds present. I utilize a range of mental techniques, analyses, and tools to help them better understand themselves—not just as fighters, but as individuals.",5:"With a background in competitive fighting, experience in the martial arts environment, and a Bachelor's degree in Sports Psychology, I bring together the key elements needed to elevate my clients' mental game."}},gt={example:"Lorem Itsum badadum",heading:"Mental Training",subheading:"Introducing Mental Training for fighters to boost mental health and elevate performance! 🥊🧠",body:{1:"📚🔎 I use CBT (Cognitive Behavioral Therapy) as a foundation to effectively create a motivational approach that's simple and educational for both me as a mental coach and you as an athlete. By building an understanding of thought, emotion, body, and action, you'll also gain insight into who you are and how you act as a fighter.",2:"❤️‍🩹🎖 Striking a balance between wealth and high performance isn't just a winning combination—it's essential for a sustainable, fulfilling career.",3:"🧠 Self-reflection strengthens our ability to understand ourselves and the world around us. Our actions, thoughts, and feelings reflect our reality. Recognizing and becoming aware of yourself is key to staying true to who you are and what you want."}},mt={example:"Lorem Itsum badadum",heading:"Client Stories",body:{1:"Here is Natalia, a fighter with a big heart and tough mindset, pursuing a fight career with a mindset of clarity and resilience, ready for whatever it takes.🥊",2:"In general when we spar, we confront a range of emotions and thoughts, both of which shape our performance. 💭🪷",3:"Emotions fuel our focus, while thoughts guide our strategy. Without feeling, we can't sharpen our awareness, and without clear thinking, we can't execute our best performance. 🌟"}},x={aboutMe:ut,mentalTraining:gt,testimonials:mt};class ft extends g{render(){return h`
        <app-navbar>

        </app-navbar>
        <app-heropicture></app-heropicture>
        <app-main-image-text id="about" .content=${x.aboutMe.body} heading=${x.aboutMe.heading} ></app-main-image-text>
        <app-main-texter id="mentalTraining" .content=${x.mentalTraining.body} heading=${x.mentalTraining.heading} subheading=${x.mentalTraining.subheading} ></app-main-texter>
        <app-main-texter id="testimonials" .content=${x.testimonials.body} heading=${x.testimonials.heading} ></app-main-texter>
        <app-main-texter id="bookSession" heading="Book your Session Today!" ></app-main-texter>


        <app-footer></app-footer>
    `}createRenderRoot(){return this}}window.customElements.define("app-wrapper",ft);
