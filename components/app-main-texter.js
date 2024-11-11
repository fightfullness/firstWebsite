import { LitElement, html, css } from "lit";
import { fadeIn } from "./generalAnimations";
import { addObserver } from "./helper";

function style () {
    return css`
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
    `;
};

export class MainTexter extends LitElement {
    static styles = [style(), fadeIn()];

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
        addObserver(element);
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