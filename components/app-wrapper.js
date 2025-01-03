import { LitElement, css, html } from 'lit';
import './app-main.js';
import './app-navbar.js';
import './app-footer.js';
import './app-main-image-text.js';
import './app-main-productcard.js'
import text from '../src/assets/text.json';

export class Wrapper extends LitElement {

  render () {
    return html`
        <app-navbar>

        </app-navbar>
        <app-heropicture></app-heropicture>
        <app-main-image-text id="about" .content=${text.aboutMe.body} heading=${text.aboutMe.heading} ></app-main-image-text>
        <app-main-texter id="mentalTraining" .content=${text.mentalTraining.body} heading=${text.mentalTraining.heading} subheading=${text.mentalTraining.subheading} ></app-main-texter>
        <app-main-texter id="testimonials" .content=${text.testimonials.body} heading=${text.testimonials.heading} ></app-main-texter>
        <app-main-texter id="bookSession" heading="Book your Session Today!" ></app-main-texter>


        <app-footer></app-footer>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

window.customElements.define('app-wrapper', Wrapper);
