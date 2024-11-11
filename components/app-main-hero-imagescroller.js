import { LitElement, css, html } from "lit";
import imgOne from "../src/assets/instagram-fighter-hero.webp";
import imgTwo from "../src/assets/instagram-kneeling-hero.webp";
import imgThree from "../src/assets/instagram-ringcorner-hero.webp";

function style (){
    return css`
    :host {
        display:flex;
        height: 100%;
        width: 100%;
        overflow: hidden;
        z-index: 1; // Lowest level
    }
    .images {
        opacity: 0.75;
        margin: 10px 5px 10px 5px;
        /* SHORTHAND : animation: name | duration | timing | direction    (some missing)*/
        animation-duration: 10s;
        animation-name: scroll;
        animation-direction: alternate;
        animation-timing-function: linear;
        animation-iteration-count: infinite;

        transition: 700ms;
    }

    .images:hover {
        opacity: 1.0;
    }
    /* Scrolling animation */
    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(calc(100vw - 300%));
        }
        
    }
    `;
}

export class HeroImageScroller extends LitElement {
    static styles = style();

    render(){
        return html`
            <img src=${imgOne} class="images imgOne">
            <img src=${imgTwo} class="images imgTwo">
            <img src=${imgThree} class="images imgThree">
        `;
    }
}

window.customElements.define("app-hero-imagescroller", HeroImageScroller);