import { LitElement, html, css } from "lit";
import '../components/heropicture.js';

// const style = () => {
//     return css`
//         :host {

//         }
//     `;
// }

export class AppContent extends LitElement {
        // static styles = style ();
    
    render () {
        return html`
             <app-heropicture>
            </app-heropicture>
            `;
    }
}

window.customElements.define('app-content', AppContent);