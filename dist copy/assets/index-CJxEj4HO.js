var _t=Object.defineProperty;var wt=(n,t,e)=>t in n?_t(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var g=(n,t,e)=>wt(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,G=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),Y=new WeakMap;let ht=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(G&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Y.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Y.set(e,t))}return t}toString(){return this.cssText}};const xt=n=>new ht(typeof n=="string"?n:n+"",void 0,J),f=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new ht(e,n,J)},At=(n,t)=>{if(G)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=R.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},Q=G?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return xt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:St,defineProperty:Et,getOwnPropertyDescriptor:kt,getOwnPropertyNames:Ct,getOwnPropertySymbols:Tt,getPrototypeOf:Pt}=Object,b=globalThis,tt=b.trustedTypes,Ot=tt?tt.emptyScript:"",j=b.reactiveElementPolyfillSupport,T=(n,t)=>n,W={toAttribute(n,t){switch(t){case Boolean:n=n?Ot:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},ct=(n,t)=>!St(n,t),et={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:ct};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=et){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Et(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=kt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const h=s==null?void 0:s.call(this);r.call(this,o),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??et}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const t=Pt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const e=this.properties,i=[...Ct(e),...Tt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Q(s))}else t!==void 0&&e.push(Q(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return At(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var r;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:W).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var r;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:W;this._$Em=s,this[s]=h.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??ct)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,o]of s)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[T("elementProperties")]=new Map,S[T("finalized")]=new Map,j==null||j({ReactiveElement:S}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,I=P.trustedTypes,it=I?I.createPolicy("lit-html",{createHTML:n=>n}):void 0,dt="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,pt="?"+v,Ut=`<${pt}>`,A=document,O=()=>A.createComment(""),U=n=>n===null||typeof n!="object"&&typeof n!="function",X=Array.isArray,Ht=n=>X(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",L=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,nt=/>/g,_=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rt=/'/g,ot=/"/g,ut=/^(?:script|style|textarea|title)$/i,Mt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),p=Mt(1),E=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),at=new WeakMap,x=A.createTreeWalker(A,129);function gt(n,t){if(!X(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return it!==void 0?it.createHTML(t):t}const Nt=(n,t)=>{const e=n.length-1,i=[];let s,r=t===2?"<svg>":t===3?"<math>":"",o=C;for(let h=0;h<e;h++){const a=n[h];let c,u,l=-1,y=0;for(;y<a.length&&(o.lastIndex=y,u=o.exec(a),u!==null);)y=o.lastIndex,o===C?u[1]==="!--"?o=st:u[1]!==void 0?o=nt:u[2]!==void 0?(ut.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=_):u[3]!==void 0&&(o=_):o===_?u[0]===">"?(o=s??C,l=-1):u[1]===void 0?l=-2:(l=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?_:u[3]==='"'?ot:rt):o===ot||o===rt?o=_:o===st||o===nt?o=C:(o=_,s=void 0);const $=o===_&&n[h+1].startsWith("/>")?" ":"";r+=o===C?a+Ut:l>=0?(i.push(c),a.slice(0,l)+dt+a.slice(l)+v+$):a+v+(l===-2?h:$)}return[gt(n,r+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class H{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const h=t.length-1,a=this.parts,[c,u]=Nt(t,e);if(this.el=H.createElement(c,i),x.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=x.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(dt)){const y=u[o++],$=s.getAttribute(l).split(v),N=/([.?@])?(.*)/.exec(y);a.push({type:1,index:r,name:N[2],strings:$,ctor:N[1]==="."?It:N[1]==="?"?Bt:N[1]==="@"?jt:B}),s.removeAttribute(l)}else l.startsWith(v)&&(a.push({type:6,index:r}),s.removeAttribute(l));if(ut.test(s.tagName)){const l=s.textContent.split(v),y=l.length-1;if(y>0){s.textContent=I?I.emptyScript:"";for(let $=0;$<y;$++)s.append(l[$],O()),x.nextNode(),a.push({type:2,index:++r});s.append(l[y],O())}}}else if(s.nodeType===8)if(s.data===pt)a.push({type:2,index:r});else{let l=-1;for(;(l=s.data.indexOf(v,l+1))!==-1;)a.push({type:7,index:r}),l+=v.length-1}r++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function k(n,t,e=n,i){var o,h;if(t===E)return t;let s=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const r=U(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((h=s==null?void 0:s._$AO)==null||h.call(s,!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=k(n,s._$AS(n,t.values),s,i)),t}class Rt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??A).importNode(e,!0);x.currentNode=s;let r=x.nextNode(),o=0,h=0,a=i[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new M(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new Lt(r,this,t)),this._$AV.push(c),a=i[++h]}o!==(a==null?void 0:a.index)&&(r=x.nextNode(),o++)}return x.currentNode=A,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class M{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),U(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ht(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=H.createElement(gt(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(e);else{const o=new Rt(s,this),h=o.u(this.options);o.p(e),this.T(h),this._$AH=o}}_$AC(t){let e=at.get(t.strings);return e===void 0&&at.set(t.strings,e=new H(t)),e}k(t){X(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new M(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class B{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(r===void 0)t=k(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const h=t;let a,c;for(t=r[0],a=0;a<r.length-1;a++)c=k(this,h[i+a],e,a),c===E&&(c=this._$AH[a]),o||(o=!U(c)||c!==this._$AH[a]),c===d?t=d:t!==d&&(t+=(c??"")+r[a+1]),this._$AH[a]=c}o&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class It extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Bt extends B{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class jt extends B{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=k(this,t,e,0)??d)===E)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Lt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}}const z=P.litHtmlPolyfillSupport;z==null||z(H,M),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.2.1");const zt=(n,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const r=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new M(t.insertBefore(O(),r),r,void 0,e??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class m extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=zt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return E}}var lt;m._$litElement$=!0,m.finalized=!0,(lt=globalThis.litElementHydrateSupport)==null||lt.call(globalThis,{LitElement:m});const D=globalThis.litElementPolyfillSupport;D==null||D({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");const Dt="/assets/instagram-fighter-hero-Cw8L-Pf3.webp",Wt="/assets/instagram-kneeling-hero-D1SkfcBq.webp",Ft="/assets/instagram-ringcorner-hero-BvJQPAgH.webp";function qt(){return f`
    :host {
        display:flex;
        height: 100%;
        width: 100%;
        overflow: hidden;
        z-index: 1; // Lowest level
    }
    .images {
        opacity: 0.75;
        margin: 10px 5px 10px 5px;
        /* SHORTHAND : animation: name | duration | timing | direction    (some missing)*/
        animation-duration: 10s;
        animation-name: scroll;
        animation-direction: alternate;
        animation-timing-function: linear;
        animation-iteration-count: infinite;

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
            transform: translateX(calc(100vw - 300%));
        }
        
    }
    `}class mt extends m{render(){return p`
            <img src=${Dt} class="images imgOne">
            <img src=${Wt} class="images imgTwo">
            <img src=${Ft} class="images imgThree">
        `}}g(mt,"styles",qt());window.customElements.define("app-hero-imagescroller",mt);function Vt(){return f`
        .hero {
            background-color: var(--primary90);
            height:calc(100vh - 70px);
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .btn-container{
            position: absolute;
            z-index: 5; // Mid level
            // IF HAVING A BORDER AROUND BTNS
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
    `}class ft extends m{render(){return p`
            <div class="hero">
                <div class="btn-container">
                    <button>For clubs</button>
                    <button>For fighters</button>
                </div>
                <app-hero-imagescroller></app-hero-imagescroller>
                <!-- <div class="image-gallery">
                    <img src="../src/assets/instagram-fighter-hero.webp" class="imgOne">
                    <img src="../src/assets/instagram-kneeling-hero.webp" class="imgTwo">
                    <img src="../src/assets/instagram-ringcorner-hero.webp" class="imgThree">
                </div> -->
            </div>
        `}}g(ft,"styles",Vt());window.customElements.define("app-heropicture",ft);function yt(){return f`
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

    `}function $t(n){const t=new IntersectionObserver(e=>{e[0].isIntersecting&&(n.classList.add("in-view"),console.log(e),t.disconnect())});t.observe(n)}function Kt(){return f`
        :host {
            display:flex;
            justify-content: center;
            align-items: center;
            scroll-margin-top: 70px;
        }
        .text-placer {
            width: 900px;
        }

        h1{
            color: var(--primary);
        }
    `}class F extends m{_renderText(t){const e=[];return this.subheading?e.push(p`<h4>${this.subheading}</h4>`):console.log("No subheading"),t&&Object.values(t).forEach(i=>{e.push(p`<p>${i}</p>`)}),e}firstUpdated(){const t=this.shadowRoot.querySelector(".fade-in");$t(t)}render(){return p`
            <div class="text-placer fade-in">
                <h1>${this.heading}</h1>
                ${this._renderText(this.content)}
            </div>
        `}}g(F,"styles",[Kt(),yt()]),g(F,"properties",{content:{type:Object},subheading:{type:String},heading:{type:String}});window.customElements.define("app-main-texter",F);class Zt extends m{render(){return p`
            <app-heropicture>
            </app-heropicture>
            <app-main-texter sectionId="about"></app-main-texter>
            `}}window.customElements.define("app-main",Zt);function Gt(){return f`
        a{
            text-decoration: none;
            
        }

        .btn{
            display:flex;
            align-items: center;
            
            
            height: 100%;
            color: var(--neutral);
            text-align: center;
            padding: 0 10px 0 10px;
            opacity: 1.0;
        }

        .btn:hover {
            background-color: var(--primary);
            color: var(--secondary);
        }
    `}class q extends m{render(){return p`
            <a href="#${this.btnlink}">
                <div class="btn">
                    ${this.btntext}
                </div>
            </a>   
        `}}g(q,"styles",Gt()),g(q,"properties",{btntext:{type:String},btnlink:{type:String}});window.customElements.define("app-navbar-btn",q);const Jt="/assets/instagram-small-logo-invert-BOfGPrGW.png";function Xt(){return f`
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        a {
            height: inherit;
        }

        a img {
            height: 100%;
            width: auto;
        }
    `}class V extends m{render(){return p`
                <a href="#">
                    <img src=${Jt}>
                </a>
            `}}g(V,"styles",Xt()),g(V,"properties",{height:{Type:String}});window.customElements.define("app-logo",V);function Yt(){return p`
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="-8 -8 116 116">
            <rect class="svgStroke" width="100" height="100" x="0" y="0" rx="20" ry="20" fill="none" stroke="black" stroke-width="8" />
            <circle class="svgStroke" cx="50" cy="50" r="25" stroke="black" stroke-width="10" fill="none" />
            <circle class="svgBoth" cx="80" cy="20" r="4" stroke="black" stroke-width="8" fill="black" />
        </svg> 
    `}function Qt(){return p`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 318.46 468.43">
  <path class="svgBoth" opacity="1" d="M0,272.87c2.06-4.6,1.93-9.65,2.93-14.46,9.43-45.22,35.86-75.35,80.07-88.95,54.6-16.79,110.89,12.68,129.76,66.97,11.06,31.82,5.98,61.44-10.77,89.85-13.74,23.3-33.86,39.89-56.13,54.35-1.95,1.27-2.78.79-3.95-.89-7.62-10.91-15.3-21.78-23.04-32.61-1.98-2.77.02-3.87,1.79-5.12,8.68-6.16,17.82-11.71,25.44-19.25,15.75-15.58,27.43-33.06,25.91-56.53-1.38-21.26-18.52-49.89-48.75-54.65-25.59-4.03-55.9,10.82-66.4,32.14-13.28,26.97-15.41,54.43-.89,81.83,11.56,21.83,26.51,41.06,44.85,57.63,15.94,14.4,33.81,25.77,53.56,34.25,4.13,1.77,7.69,1.68,11.8-.53,26.86-14.5,51.59-31.81,71.92-54.78,24.08-27.22,37.25-58.59,33.7-95.46-2.52-26.27-13.38-49.22-30.67-69.09-7.22-8.29-15.29-15.76-23.69-22.82-3.49-2.93-4.18-4.9-.54-8.57,8.67-8.74,16.91-17.91,25.1-27.11,1.87-2.09,2.9-1.84,4.76-.29,36.61,30.48,62.77,67.46,69.88,115.55,6.28,42.46-3.82,81.42-27.6,117.01-21.45,32.09-50.49,55.84-82.97,75.82-12.06,7.42-24.54,14.07-37.31,20.19-2.19,1.05-4.12,1.37-6.63.78-29.06-6.85-54.51-20.99-78.03-38.83-31.63-23.98-55.49-54.36-72.79-89.95-5.79-11.91-9.14-24.57-10.36-37.77-.09-.99-.07-2.01-.93-2.73v-25.99Z"/>
  <path class="svgBoth" opacity="1" d="M278.95,0c0,14.12-.03,28.16-2.85,42.18-9.84,48.95-52.21,90.8-101.63,99.74-3.59.65-7.19,1.29-10.8,1.89-2.7.44-4.43-.17-4.6-3.47-1.76-33.14,6.42-63.41,26.92-89.74C207.81,22.6,236.4,5.77,271.74.8c.43-.06.81-.53,1.21-.8,2,0,4,0,6,0Z"/>
  <path class="svgBoth" opacity="1" d="M60.54,65.11c41.73.98,73.36,31.88,77.64,68.15.33,2.83-.03,3.63-3.01,3.85-39.14,2.95-75.9-24.59-82.95-65.66-.96-5.59.09-6.36,8.32-6.35Z"/>
</svg>
    `}function te(){return f`
        :host {
            display: flex;
            flex-direction: row;
            height: inherit;

            justify-content: center;
            align-items: center;
            gap: 10px;
        }

        a {
            height: 100%;
            width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        a:hover {
            background-color: var(--primary);
        }

        svg {
            width: 25px;
            height: 25px;
        }

        a:hover .svgStroke {
            stroke: var(--secondary);
        }

        a:hover .svgBoth {
            stroke: var(--secondary);
            fill: var(--secondary);
        }
    `}class K extends m{render(){return p`
            <a href="https://www.instagram.com/fightfulness/" target="_blank">
                ${Yt()}
            </a>
            <a href="https://peach.nu/instructors/fightfulness" target="_blank">
                ${Qt()}
            </a>
        `}}g(K,"properties",{footer:{type:Boolean}}),g(K,"styles",te());window.customElements.define("app-socialmedia",K);function ee(){return f`
        :host {
            position: sticky;
            top: 0px;
            z-index: 10; // Highest level
            /* width: 90vw; */
        }

        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;

            height: 70px;
            background-color: rgba(255, 255, 255, 0.7);
            padding: 0 50px 0 50px;
        }

        .btndiv {
            display: flex;
            height: inherit;
            gap: 50px;
            justify-content: space-between;
        }

        .logo {
            height: 80%;
        }
    `}class vt extends m{render(){return p`
        <div class="navbar">
            <app-logo class="logo"></app-logo>
            <div class="btndiv">
                <app-navbar-btn btntext="About me" btnlink="about"></app-navbar-btn>
                <app-navbar-btn btntext="Mental Training" btnlink="mentalTraining" ></app-navbar-btn>
                <app-navbar-btn btntext="Client Stories" btnlink="clientStories"></app-navbar-btn>
                <app-navbar-btn btntext="Book a Session" btnlink="bookSession"></app-navbar-btn>
                <app-navbar-btn btntext="For clubs" btnlink="forClubs"></app-navbar-btn>
            </div>
            <app-socialmedia></app-socialmedia>
        </div>
        `}}g(vt,"styles",ee());window.customElements.define("app-navbar",vt);function ie(){return f`
        :host {
            display: flex;
            background-color: var(--tertiary70);
            padding: 20px;
            margin-top: 35px;

            color: var(--secondary);
        }

        .top-div {
            display: flex;
            justify-content: space-between;

        }
        .footer-card {
            display: flex;
            flex-direction: row;
            padding: 20px;
            width: 70%;

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
    `}class bt extends m{render(){return p`
            <div class="footer-card">
                <h3>fightfulness</h3>
            </div>
            <hr>
            <div>
                <div >
                    <app-socialmedia footer></app-socialmedia>
                </div>
            </div>
        `}}g(bt,"styles",ie());window.customElements.define("app-footer",bt);const se="/assets/krille-smaller-Dj7Euhd3.png";function ne(){return f`
        :host {
            display:flex;
            justify-content: center;
            align-items: center;
            scroll-margin-top: 70px;
        }
        .wrapper {
            /* Old width */
            /* width: 760px; */
            width: 900px;
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
    `}class Z extends m{_renderText(t){const e=[];return this.subheading?e.push(p`<h4>${this.subheading}</h4>`):console.log("No subheading"),t&&Object.values(t).forEach(i=>{e.push(p`<p>${i}</p>`)}),e}firstUpdated(){const t=this.shadowRoot.querySelector(".fade-in");$t(t)}render(){return p`
            <div class="wrapper fade-in">
                <h1>${this.heading}</h1>
                <div class="container">
                    <div class="image-container">
                        <img alt="A picture of Kristoffer Modig" src=${se}>
                    </div>
                    <div class="text-container"> 
                        ${this._renderText(this.content)}
                    </div>
                </div>
            </div>
        `}}g(Z,"styles",[ne(),yt()]),g(Z,"properties",{content:{type:Object},subheading:{type:String},heading:{type:String}});window.customElements.define("app-main-image-text",Z);const re={example:"Lorem Itsum badadum",heading:"About me",body:{1:"I'm Kristoffer Modig, the mental coach behind Fightfulness.",2:"For the past four years, I've dedicated myself to social work as a therapist in different areas, where I've had the privilege of connecting with people during their most pivotal moments. My passion lies in helping individuals gain perspective and create space to enhance their mental skills in every moment of life, both as an athlete and a human being.",3:"For years, I've observed how mental training can play a crucial role in martial arts. I've seen fighters struggle with the mental aspects of the sport, often getting trapped in negative thought patterns and losing sight of the peace of being a mental tough fighter.",4:"At Fightfulness, I meet my clients where they are, addressing the unique challenges their minds present. I utilize a range of mental techniques, analyses, and tools to help them better understand themselves—not just as fighters, but as individuals.",5:"With a background in competitive fighting, experience in the martial arts environment, and a Bachelor's degree in Sports Psychology, I bring together the key elements needed to elevate my clients' mental game."}},oe={example:"Lorem Itsum badadum",heading:"Mental Training",subheading:"Introducing Mental Training for fighters to boost mental health and elevate performance! 🥊🧠",body:{1:"📚🔎 I use CBT (Cognitive Behavioral Therapy) as a foundation to effectively create a motivational approach that's simple and educational for both me as a mental coach and you as an athlete. By building an understanding of thought, emotion, body, and action, you'll also gain insight into who you are and how you act as a fighter.",2:"❤️‍🩹🎖 Striking a balance between wealth and high performance isn't just a winning combination—it's essential for a sustainable, fulfilling career.",3:"🧠 Self-reflection strengthens our ability to understand ourselves and the world around us. Our actions, thoughts, and feelings reflect our reality. Recognizing and becoming aware of yourself is key to staying true to who you are and what you want."}},ae={example:"Lorem Itsum badadum",heading:"Client Stories",body:{1:"Here is Natalia, a fighter with a big heart and tough mindset, pursuing a fight career with a mindset of clarity and resilience, ready for whatever it takes.🥊",2:"In general when we spar, we confront a range of emotions and thoughts, both of which shape our performance. 💭🪷",3:"Emotions fuel our focus, while thoughts guide our strategy. Without feeling, we can't sharpen our awareness, and without clear thinking, we can't execute our best performance. 🌟"}},w={aboutMe:re,mentalTraining:oe,clientStories:ae};class le extends m{render(){return p`
        <app-navbar>

        </app-navbar>
        <app-heropicture></app-heropicture>
        <app-main-image-text id="about" .content=${w.aboutMe.body} heading=${w.aboutMe.heading} ></app-main-image-text>
        <app-main-texter id="mentalTraining" .content=${w.mentalTraining.body} heading=${w.mentalTraining.heading} subheading=${w.mentalTraining.subheading} ></app-main-texter>
        <app-main-texter id="clientStories" .content=${w.clientStories.body} heading=${w.clientStories.heading} ></app-main-texter>
        <app-main-texter id="bookSession" heading="Book your Session Today!" ></app-main-texter>

        <app-footer></app-footer>
    `}createRenderRoot(){return this}}window.customElements.define("app-wrapper",le);
