import { LitElement, css, html } from 'lit';
import './app-main.js';
import '../components/app-navbar.js';
import '../components/app-footer.js';
import '../components/app-main-image-text.js';
import text from '../src/assets/text.json';

export class Wrapper extends LitElement {

  render () {
    return html`
        <app-navbar>

        </app-navbar>
        <app-heropicture></app-heropicture>
        <app-main-image-text id="about" .content=${text.aboutMe.body} heading=${text.aboutMe.heading} ></app-main-image-text>
        <app-main-texter id="mentalTraining" .content=${text.mentalTraining.body} heading=${text.mentalTraining.heading} subheading=${text.mentalTraining.subheading} ></app-main-texter>
        <app-main-texter id="clientStories" .content=${text.clientStories.body} heading=${text.clientStories.heading} ></app-main-texter>
        <app-main-texter id="bookSession" heading="Book your Session Today!" ></app-main-texter>

        <app-footer></app-footer>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

window.customElements.define('app-wrapper', Wrapper);
