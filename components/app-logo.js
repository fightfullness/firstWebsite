import { LitElement, html, css } from "lit";

function style () {
    return css`
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        img{
            height: auto;
        }
    `;
}

export class Logo extends LitElement {
    static styles = style(); 

    render() {
        return html`
                <img src="../src/assets/lit.svg">
            `;
    }
}

window.customElements.define("app-logo", Logo);