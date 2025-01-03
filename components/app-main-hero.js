import { LitElement, html, css } from "lit";
import "./app-main-hero-imagescroller";
import "./app-main-hero-imagePopping";
import { fadeInQuick } from "./generalAnimations";
import { observerInview } from "./helper";

function style () {
    return css`
        .hero {
            background-color: var(--primary90);
            height:calc(100vh - var(--navbar-height)); /*900px, defined in index.css*/
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .btn-container{
            display: flex;
            position: absolute;
            z-index: 5; /* Mid level*/
            opacity: 0;
            /* IF HAVING A BORDER AROUND BTNS */
            /* height: 600px;
            width: 600px;
            display: flex;
            align-items: center;
            justify-content:center; */
        }

        button {
            margin: 10px 20px 10px 20px;
            border-radius: 8px;
            border: 1px solid transparent;
            padding: 0.6em 1.2em;
            font-size: 1em;
            font-weight: 500;
            font-family: inherit;
            background-color: var(--primary10);
            color: white;
            cursor: pointer;
            transition: 0.3s;
        }

        button:hover {
            border-color: var(--secondary);
            background-color: var(--primary50);
            color: var(--tertiary);
        }
    `;
}

export class HeroPicture extends LitElement {
    static styles = [style(), fadeInQuick()]; // for Fade-in
    
    render(){
        return html`
            <div class="hero">
                <div class="btn-container fade-in">
                    <button>For clubs</button>
                    <button>For fighters</button>
                </div>
                <app-hero-imagescroller></app-hero-imagescroller>
                <!-- <app-hero-imagepopping></app-hero-imagepopping> -->
                <!-- <div class="image-gallery">
                    <img src="../src/assets/instagram-fighter-hero.webp" class="imgOne">
                    <img src="../src/assets/instagram-kneeling-hero.webp" class="imgTwo">
                    <img src="../src/assets/instagram-ringcorner-hero.webp" class="imgThree">
                </div> -->
            </div>
        `;
    }

    firstUpdated() {
        //Make fade-in easier. Could use callback instead, so that function in component determine what will happen.
        observerInview(this.shadowRoot.querySelector(".btn-container"), "in-view"); // for Fade-in
    }
}

window.customElements.define("app-heropicture", HeroPicture);