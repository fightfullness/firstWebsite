import { LitElement, html, css } from "lit";

function instaSvg () {
    return html`
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="-8 -8 116 116">
            <rect class="svgStroke" width="100" height="100" x="0" y="0" rx="20" ry="20" fill="none" stroke="black" stroke-width="8" />
            <circle class="svgStroke" cx="50" cy="50" r="25" stroke="black" stroke-width="8" fill="none" />
            <circle class="svgBoth" cx="80" cy="20" r="4" stroke="black" stroke-width="8" fill="black" />
        </svg> 
    `;
}

function style () {
    return css`
        :host {
            display: flex;
            flex-direction: row;

            justify-content: center;
            align-items: center;
            gap: 10px;
        }

        a{
            height: 100%;
            width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        a:hover {
            background-color: black;
        }

        svg {
            width: 25px;
            height: 25px;
        }

        a:hover .svgStroke {
            stroke: white;
        }

        a:hover .svgBoth {
            stroke: white;
            fill: white;
        }
    `;
}

export class Socialmedia extends LitElement {
    static styles = style();

    render () {
        return html`
            <a href="https://www.instagram.com/fightfulness/" target="_blank">
                ${instaSvg()}
            </a>
            <a href="">
                ${instaSvg()}
            </a>
        `;
    }

}

window.customElements.define("app-socialmedia", Socialmedia);

