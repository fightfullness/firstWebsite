var $t=Object.defineProperty;var ft=(n,t,e)=>t in n?$t(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var m=(n,t,e)=>ft(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,W=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),F=new WeakMap;let nt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(W&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=F.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&F.set(e,t))}return t}toString(){return this.cssText}};const _t=n=>new nt(typeof n=="string"?n:n+"",void 0,q),T=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new nt(e,n,q)},gt=(n,t)=>{if(W)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=M.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},J=W?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return _t(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:mt,defineProperty:yt,getOwnPropertyDescriptor:At,getOwnPropertyNames:vt,getOwnPropertySymbols:bt,getPrototypeOf:Et}=Object,g=globalThis,Z=g.trustedTypes,St=Z?Z.emptyScript:"",z=g.reactiveElementPolyfillSupport,C=(n,t)=>n,B={toAttribute(n,t){switch(t){case Boolean:n=n?St:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},rt=(n,t)=>!mt(n,t),G={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:rt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=G){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&yt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=At(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const l=s==null?void 0:s.call(this);r.call(this,o),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??G}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const t=Et(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const e=this.properties,i=[...vt(e),...bt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(J(s))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var r;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:B).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var r;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:B;this._$Em=s,this[s]=l.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??rt)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,o]of s)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[C("elementProperties")]=new Map,b[C("finalized")]=new Map,z==null||z({ReactiveElement:b}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,k=P.trustedTypes,Q=k?k.createPolicy("lit-html",{createHTML:n=>n}):void 0,ot="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,ht="?"+_,wt=`<${ht}>`,v=document,U=()=>v.createComment(""),O=n=>n===null||typeof n!="object"&&typeof n!="function",K=Array.isArray,xt=n=>K(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",j=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,Y=/>/g,y=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,et=/"/g,at=/^(?:script|style|textarea|title)$/i,Ct=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),w=Ct(1),E=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),st=new WeakMap,A=v.createTreeWalker(v,129);function lt(n,t){if(!K(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Q!==void 0?Q.createHTML(t):t}const Pt=(n,t)=>{const e=n.length-1,i=[];let s,r=t===2?"<svg>":t===3?"<math>":"",o=x;for(let l=0;l<e;l++){const h=n[l];let c,p,a=-1,$=0;for(;$<h.length&&(o.lastIndex=$,p=o.exec(h),p!==null);)$=o.lastIndex,o===x?p[1]==="!--"?o=X:p[1]!==void 0?o=Y:p[2]!==void 0?(at.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=y):p[3]!==void 0&&(o=y):o===y?p[0]===">"?(o=s??x,a=-1):p[1]===void 0?a=-2:(a=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?y:p[3]==='"'?et:tt):o===et||o===tt?o=y:o===X||o===Y?o=x:(o=y,s=void 0);const f=o===y&&n[l+1].startsWith("/>")?" ":"";r+=o===x?h+wt:a>=0?(i.push(c),h.slice(0,a)+ot+h.slice(a)+_+f):h+_+(a===-2?l:f)}return[lt(n,r+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class H{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const l=t.length-1,h=this.parts,[c,p]=Pt(t,e);if(this.el=H.createElement(c,i),A.currentNode=this.el.content,e===2||e===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(s=A.nextNode())!==null&&h.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const a of s.getAttributeNames())if(a.endsWith(ot)){const $=p[o++],f=s.getAttribute(a).split(_),R=/([.?@])?(.*)/.exec($);h.push({type:1,index:r,name:R[2],strings:f,ctor:R[1]==="."?Ot:R[1]==="?"?Ht:R[1]==="@"?Tt:L}),s.removeAttribute(a)}else a.startsWith(_)&&(h.push({type:6,index:r}),s.removeAttribute(a));if(at.test(s.tagName)){const a=s.textContent.split(_),$=a.length-1;if($>0){s.textContent=k?k.emptyScript:"";for(let f=0;f<$;f++)s.append(a[f],U()),A.nextNode(),h.push({type:2,index:++r});s.append(a[$],U())}}}else if(s.nodeType===8)if(s.data===ht)h.push({type:2,index:r});else{let a=-1;for(;(a=s.data.indexOf(_,a+1))!==-1;)h.push({type:7,index:r}),a+=_.length-1}r++}}static createElement(t,e){const i=v.createElement("template");return i.innerHTML=t,i}}function S(n,t,e=n,i){var o,l;if(t===E)return t;let s=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const r=O(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=S(n,s._$AS(n,t.values),s,i)),t}class Ut{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??v).importNode(e,!0);A.currentNode=s;let r=A.nextNode(),o=0,l=0,h=i[0];for(;h!==void 0;){if(o===h.index){let c;h.type===2?c=new N(r,r.nextSibling,this,t):h.type===1?c=new h.ctor(r,h.name,h.strings,this,t):h.type===6&&(c=new Nt(r,this,t)),this._$AV.push(c),h=i[++l]}o!==(h==null?void 0:h.index)&&(r=A.nextNode(),o++)}return A.currentNode=v,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class N{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),O(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):xt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=H.createElement(lt(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(e);else{const o=new Ut(s,this),l=o.u(this.options);o.p(e),this.T(l),this._$AH=o}}_$AC(t){let e=st.get(t.strings);return e===void 0&&st.set(t.strings,e=new H(t)),e}k(t){K(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new N(this.O(U()),this.O(U()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(r===void 0)t=S(this,t,e,0),o=!O(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const l=t;let h,c;for(t=r[0],h=0;h<r.length-1;h++)c=S(this,l[i+h],e,h),c===E&&(c=this._$AH[h]),o||(o=!O(c)||c!==this._$AH[h]),c===d?t=d:t!==d&&(t+=(c??"")+r[h+1]),this._$AH[h]=c}o&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ot extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Ht extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Tt extends L{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??d)===E)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const I=P.litHtmlPolyfillSupport;I==null||I(H,N),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.2.1");const Rt=(n,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const r=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new N(t.insertBefore(U(),r),r,void 0,e??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class u extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return E}}var it;u._$litElement$=!0,u.finalized=!0,(it=globalThis.litElementHydrateSupport)==null||it.call(globalThis,{LitElement:u});const D=globalThis.litElementPolyfillSupport;D==null||D({LitElement:u});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");function Mt(){return T`
        div {
            background-color: grey;
            height:80vh;
        }
    `}class ct extends u{render(){return w`
            <div></div>
        `}}m(ct,"styles",Mt());window.customElements.define("app-heropicture",ct);class kt extends u{render(){return w`
             <app-heropicture>
            </app-heropicture>
            `}}window.customElements.define("app-content",kt);function Lt(){return T`
        a{
            text-decoration: none;
        }

        .btn{
            display:flex;
            align-items: center;

            height: 100%;
            color: grey;
            text-align: center;
            padding: 0 10px 0 10px;
        }

        .btn:hover {
            background-color: black;
            color: white;
        }
    `}class V extends u{render(){return w`
            <a href="#">
                <div class="btn">
                    ${this.btntext}
                </div>
            </a>
        `}}m(V,"styles",Lt()),m(V,"properties",{btntext:{type:String}});window.customElements.define("app-navbar-btn",V);function zt(){return T`
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        img{
            height: auto;
        }
    `}class dt extends u{render(){return w`
                <img src="../src/assets/lit.svg">
            `}}m(dt,"styles",zt());window.customElements.define("app-logo",dt);function jt(){return T`
        :host {
            position: sticky;
            top: 0px;
            /* width: 90vw; */
        }

        .navbar {
            display: flex;
            justify-content: space-between;

            height: 70px;
            background-color: white;
            padding: 0 50px 0 50px;
        }

        .btndiv {
            display: flex;
            gap: 50px;
            justify-content: space-between;
        }
    `}class pt extends u{render(){return w`
        <div class="navbar">
            <app-logo></app-logo>
            <div class="btndiv">
                <app-navbar-btn btntext="Startsida"></app-navbar-btn>
                <app-navbar-btn btntext="Om oss"></app-navbar-btn>
                <app-navbar-btn btntext="Rubrik"></app-navbar-btn>
                <app-navbar-btn btntext="Rubrik 2"></app-navbar-btn>
            </div>
        </div>
        `}}m(pt,"styles",jt());window.customElements.define("app-navbar",pt);function It(){return T`
    :host {
      height: 100vh;
      width: 100vw;
      background-color: black;
    }
  `}class ut extends u{render(){return w`
        <app-navbar>

        </app-navbar>
        <app-content>
          
        </app-content>
    `}}m(ut,"styles",It());window.customElements.define("app-wrapper",ut);
