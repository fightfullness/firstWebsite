import { LitElement, html, css } from "lit";

function style () {
    return css`
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
    `;
}

export class NavbarBtn extends LitElement {
    static styles = style();

    static properties = {
        btntext: {type: String}
    }
    

    render () {
        return html`
            <a href="#">
                <div class="btn">
                    ${this.btntext}
                </div>
            </a>
        `;
    }
}

window.customElements.define('app-navbar-btn', NavbarBtn);