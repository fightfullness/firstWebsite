import { LitElement, html, css } from "lit";
import './app-main-hero.js';
import './app-main-texter.js';

// const style = () => {
//     return css`
//         :host {

//         }
//     `;
// }

export class AppMain extends LitElement {
        // static styles = style ();

    render () {
        return html`
            <app-heropicture>
            </app-heropicture>
            <app-main-texter sectionId="about"></app-main-texter>
            `;
    }
}

    // DEPRICATED
// window.customElements.define('app-main', AppMain);