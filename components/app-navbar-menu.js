import { LitElement, html, css } from "lit";
import "./app-navbar-menu-btn";
import "./app-socialmedia";

function style () {

    /// BUG, TODO: Nav bar linkes calculate wrong when scrolling because navbar change height during scroll.
    
    return css`
        .btndiv {
            display: flex;
            height: var(--navbar-btn-height); /*50px, defined in index.css*/
            /* gap: 50px; */
            width: var(--content-width);
            justify-content: space-around;
        }
        /* .nav-socialmedia {
            justify-self: flex-end; // Only working for grid. 
        } */
    `;
}

export class NavbarMenu extends LitElement {
    static styles = style();
    
    render () {
        return html`
            <div class="btndiv">
                <app-navbar-menu-btn btntext="Mental Training" btnlink="mentalTraining" ></app-navbar-menu-btn>
                <app-navbar-menu-btn btntext="Client Stories" btnlink="testimonials"></app-navbar-menu-btn>
                <app-navbar-menu-btn btntext="Book a Session" btnlink="bookSession"></app-navbar-menu-btn>
                <app-navbar-menu-btn btntext="For clubs" btnlink="forClubs"></app-navbar-menu-btn>
                <app-socialmedia class="nav-socialmedia"></app-socialmedia>
            </div>
        `;
    };
}

window.customElements.define("app-navbar-menu", NavbarMenu);