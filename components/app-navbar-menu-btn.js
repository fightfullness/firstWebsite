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
            /* color: var(--neutral); */
            color: var(--secondary);
            text-align: center;
            padding: 0 10px 0 10px;
            opacity: 1.0;
        }

        .btn:hover {
            /* background-color: var(--primary);
            color: var(--secondary); */
            background-color: var(--secondary);
            color: var(--primary);
        }
    `;
}

export class NavbarBtn extends LitElement {
    static styles = style();

    static properties = {
        btntext: {type: String},
        btnlink: {type: String}
    }

    render () {
        return html`
            <a href="#${this.btnlink}">
                <div class="btn">
                    ${this.btntext}
                </div>
            </a>   
        `;
    }
}

window.customElements.define('app-navbar-menu-btn', NavbarBtn);