import { LitElement, html, css } from "lit";
import imgUrl from "../src/assets/instagram-small-logo-invert.png";

function style () {
    return css`
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
    `;
}

export class Logo extends LitElement {
    static styles = style(); 

    static properties = {
        height: {Type: String}
    }

    render() {
        return html`
                <a href="#">
                    <img src=${imgUrl}>
                </a>
            `;
    }
}

window.customElements.define("app-logo", Logo);