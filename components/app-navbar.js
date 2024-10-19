import { LitElement, html, css } from "lit";

function style () {
    return css`
        .navbar{
            position: sticky; 

            width: 100vw;
            height: 100px;
            background-color: white;
            
        }
    `;
}

export class Navbar extends LitElement {
    static styles = style();
    
    render () {
        return html`
        <div class="navbar">

        </div>
        `;
    };
}

window.customElements.define("app-navbar", Navbar);