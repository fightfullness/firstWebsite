import { LitElement, html, css } from "lit";
import "./app-navbar-btn";
import "./app-logo";

function style () {
    return css`
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
    `;
}

export class Navbar extends LitElement {
    static styles = style();
    
    render () {
        return html`
        <div class="navbar">
            <app-logo></app-logo>
            <div class="btndiv">
                <app-navbar-btn btntext="Startsida"></app-navbar-btn>
                <app-navbar-btn btntext="Om oss"></app-navbar-btn>
                <app-navbar-btn btntext="Rubrik"></app-navbar-btn>
                <app-navbar-btn btntext="Rubrik 2"></app-navbar-btn>
            </div>
        </div>
        `;
    };
}

window.customElements.define("app-navbar", Navbar);