import { LitElement, css, html } from 'lit';
import '../components/app-content.js';
import '../components/app-navbar.js';

function style () {
  return css`
    :host {
      height: 100vh;
      width: 100vw;
      background-color: black;
    }
  `;
}

export class Wrapper extends LitElement {

  static styles = style();

  render () {
    return html`
        <app-navbar>

        </app-navbar>
        <app-content>
          
        </app-content>
    `;
  }
}

window.customElements.define('app-wrapper', Wrapper);
