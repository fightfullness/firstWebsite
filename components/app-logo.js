import { LitElement, html, css } from "lit";
import imgUrl from "../src/assets/wix-full-logo.webp";

function style () {
    return css`
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