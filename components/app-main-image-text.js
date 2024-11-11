import { LitElement, html, css } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { fadeIn } from "./generalAnimations";
import { addObserver } from "./helper";
import imgUrl from "../src/assets/krille-smaller.png";


function style () {
    return css`
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
    `;
};

export class MainImageText extends LitElement {
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
            <div class="wrapper fade-in">
                <h1>${this.heading}</h1>
                <div class="container">
                    <div class="image-container">
                        <img alt="A picture of Kristoffer Modig" src=${imgUrl}>
                    </div>
                    <div class="text-container"> 
                        ${this._renderText(this.content)}
                    </div>
                </div>
            </div>
        `;
    }
}

window.customElements.define("app-main-image-text", MainImageText);