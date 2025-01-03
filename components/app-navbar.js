import { LitElement, html, css } from "lit";
import "./app-navbar-menu";
import "./app-logo";
import "./app-socialmedia";
import { observerNavbar } from "./helper";

function style () {
    return css`
        .scroll-menu {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: fixed;
            z-index: 10; //Highest level

            background-color: var(--primary);
            overflow: hidden;
            height: 0;
            width: calc(100% - var(--wrapper-padding)*2);
            opacity: 0;
            
            background-color: var(--primary);

            transition-duration: 300ms;
        }
        .active{
            height: var(--navbar-btn-height);
            opacity: 0.8;
        }

        .scroll-menu:not(.active) {
            transition-duration: 100ms;
        }

        .navbar {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            
            height: var(--navbar-height); /* Testing */

            background-color: var(--primary);
            padding: 0 50px 0 50px;
        }

        .logo {
            display: flex;
            flex: 1;
            max-height: calc(100% - var(--navbar-btn-height));
        }
    `;
}

export class Navbar extends LitElement {
    static styles = style();

    firstUpdated () {
        const element = this.shadowRoot.querySelector(".scroll-menu");
        // const elementHide = this.shadowRoot.querySelector(".logo");
        const observee = this.shadowRoot.querySelector(".observed");
        // observerNavbar(observee, element, elementHide, "scrolled");
        observerNavbar(element, observee, "active");
    }
    
    render () {
        return html`
        <app-navbar-menu class="scroll-menu"></app-navbar-menu>
        <div class="navbar observed">
            <app-logo class="logo"></app-logo>
            <!-- <div class="btndiv">
                <app-navbar-menu-btn btntext="Mental Training" btnlink="mentalTraining" ></app-navbar-menu-btn>
                <app-navbar-menu-btn btntext="Client Stories" btnlink="testimonials"></app-navbar-menu-btn>
                <app-navbar-menu-btn btntext="Book a Session" btnlink="bookSession"></app-navbar-menu-btn>
                <app-navbar-menu-btn btntext="For clubs" btnlink="forClubs"></app-navbar-menu-btn>
            </div> -->
            <app-navbar-menu class="top-menu"></app-navbar-menu>
            <!-- <app-socialmedia></app-socialmedia> -->
        </div>
        <!-- <div class="observed"></div> -->
        `;
    };
}

window.customElements.define("app-navbar", Navbar);