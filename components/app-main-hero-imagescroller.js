import { LitElement, css, html } from "lit";
import slideImg from "../src/assets/hero-image-from-wix.webp";

function style (){
    return css`
    :host {
        display: flex;
        height: 100%;
        width: 100%;
        overflow: hidden;
        z-index: 1; // Lowest level
    }

    .slider{
        display: inline-block;
        white-space: nowrap;
        height: auto;
    }

    /* // ALT 1 : Gradient on each side

    .slider:before, .slider:after {
        position: absolute;
        top: var(--navbar-height);
        width: 30px;
        height: calc(100% - var(--navbar-height));
        content: "";
        z-index: 3;
    }

    .slider:after {
        background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), var(--primary));
        right: var(--wrapper-padding); 
    }
    .slider:before {
        background-image: linear-gradient(270deg, rgba(255, 255, 255, 0), var(--primary));
        left: var(--wrapper-padding); 
    } */

     /* // ALT 2 : Gradient in the bottom   

    .slider:after {
        position: absolute;
        bottom: 0;
        right: var(--wrapper-padding);
        width: calc(100% - var(--wrapper-padding)*2);
        height: calc(100% - var(--navbar-height));
        background-image: linear-gradient(rgba(253, 252, 242, 0), rgba(253, 252, 242, 0.1), rgba(253, 252, 242, 0.5), var(--secondary), var(--secondary));
        content: "";
        z-index: 3;
    } */

        /* ALT 3 : Gradient on image, (to make buttons pop) */

    .image {
        height: 100%;
        opacity: 0.5;
        /* SHORTHAND : animation: name | duration | iteration | timing |    (some missing)*/
        animation: scroll 60s infinite linear;

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
            transform: translateX(-100%);
        }
        
    }
    `;
}

export class HeroImageScroller extends LitElement {
    static styles = style();

    render(){
        return html`
        <div class="slider">
            <img src=${slideImg} class="image">
            <img src=${slideImg} class="image">
        </div>
        `;
    }
}

window.customElements.define("app-hero-imagescroller", HeroImageScroller);