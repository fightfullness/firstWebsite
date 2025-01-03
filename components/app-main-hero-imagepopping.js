import { LitElement, css, html } from "lit";
import imgOne from "../src/assets/instagram-fighter-hero.webp";
import imgTwo from "../src/assets/instagram-kneeling-hero.webp";
import imgThree from "../src/assets/instagram-ringcorner-hero.webp";


function style (){
    return css`
    .container{
        display:flex;
        height: 100%;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        overflow: hidden;
        z-index: 1; // Lowest level
    }

    .first {
        align-self: start;
    }

    .last {
        align-self: end;
    }

    .hero-image {
        opacity: 0;
        margin: 10px 0px 10px 0px;
        height: calc((100vw/3) - 16px);
        transition: 800ms ease-in-out;
    }

    .active {
        opacity: 1;
    }
    `;
}

export class HeroImagePopping extends LitElement {
    static styles = style();

    _animationLoop(images, currentIndex) {
        if(currentIndex != -1){
            images[currentIndex].classList.remove("active");
        }
        
        currentIndex = Math.floor(Math.random()*images.length);

        images[currentIndex].classList.add("active");
        
        setTimeout( () => {
            this._animationLoop(images, currentIndex);
        }, 2000); 
    }

    _showRandomImages () {
        const images = this.shadowRoot.querySelectorAll(".hero-image");
        let currentIndex = -1;
        this._animationLoop(images, currentIndex);
    }
    

    render(){
        return html`
        <div class="container">
            <img src=${imgOne} class="hero-image first">
            <img src=${imgTwo} class="hero-image">
            <img src=${imgThree} class="hero-image last">
        </div>
        `;
    }

    firstUpdated () {

        this._showRandomImages();
    }
}

window.customElements.define("app-hero-imagepopping", HeroImagePopping);