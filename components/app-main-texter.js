import { LitElement, html, css } from "lit";
import { fadeIn } from "./generalAnimations";
import { observerInview } from "./helper";

function style () {
    return css`
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
    `;
};

export class MainTexter extends LitElement {
    static styles = [style(), fadeIn("in-view")];

    static properties = {
        content: {type: Object},
        subheading: {type: String},
        heading: {type: String}
    }

    _renderText (text) {
        const array = [];
        this.subheading ? array.push(html`<h4>${this.subheading}</h4>`) : console.log("No subheading");
        
        //To avoid error from undefined.
        if (!text){return array}; 
        
        Object.values(text).forEach(value => {
            array.push(html`<p>${value}</p>`);
        });

        return array;
    }

    firstUpdated () {
        const element = this.shadowRoot.querySelector(".fade-in");
        observerInview(element, "in-view");
    }

    render () {
        return html`
            <div class="text-placer fade-in">
                <h1>${this.heading}</h1>
                ${this._renderText(this.content)}
            </div>
        `;
    }
}

window.customElements.define("app-main-texter", MainTexter);