import { LitElement, html, css } from "lit";
import "./app-navbar-btn";
import "./app-logo";
import "./app-socialmedia";

function style () {
    return css`
        :host {
            position: sticky;
            top: 0px;
            z-index: 10; // Highest level
            /* width: 90vw; */
        }

        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;

            height: 70px;
            background-color: rgba(255, 255, 255, 0.7);
            padding: 0 50px 0 50px;
        }

        .btndiv {
            display: flex;
            height: inherit;
            gap: 50px;
            justify-content: space-between;
        }

        .logo {
            height: 80%;
        }
    `;
}

export class Navbar extends LitElement {
    static styles = style();
    
    render () {
        return html`
        <div class="navbar">
            <app-logo class="logo"></app-logo>
            <div class="btndiv">
                <app-navbar-btn btntext="About me" btnlink="about"></app-navbar-btn>
                <app-navbar-btn btntext="Mental Training" btnlink="mentalTraining" ></app-navbar-btn>
                <app-navbar-btn btntext="Client Stories" btnlink="clientStories"></app-navbar-btn>
                <app-navbar-btn btntext="Book a Session" btnlink="bookSession"></app-navbar-btn>
                <app-navbar-btn btntext="For clubs" btnlink="forClubs"></app-navbar-btn>
            </div>
            <app-socialmedia></app-socialmedia>
        </div>
        `;
    };
}

window.customElements.define("app-navbar", Navbar);