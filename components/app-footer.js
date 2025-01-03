import { LitElement, html, css } from "lit";

// Första approachen med text nedan, finns även en annan approach.  (Mer säljig och highlightar kontakta)
// Andra approachen är mkt mer clean, likt The noun project på https://fireart.studio/blog/15-website-footer-design-examples/.
// En liten sitemap , sociala media, och logo med sidnamn. (Lite mer chill men kan ha "sälj" orienterade sitemap länkar.    )

function style () {
    return css`
        :host {
            display: flex;
            background-color: var(--primary);
            padding: 20px;
            margin-top: 35px;

            color: var(--secondary);
        }

        .top-div {
            display: flex;
            justify-content: space-between;

        }
        .footer-first {
            flex-direction: row;
            padding: 20px;
            width: 80%;

        }
        .footer-second {
            display:inline-block;
            width:20%;
        }

        h3 {
            margin-bottom: 0;
        }

        .placeholder-knapp {
            display: flex;
            align-self: flex-end;
            width: fit-content;
            height: 30px;
            cursor: pointer;
            background-color: black;
            color: white;
            border-radius: 10px;
            margin-top: 16px;

            padding: 5px 10px 5px 10px;

        }
        .placeholder-knapp:hover {
            background-color: white;
            color: black;
            transition-duration: 300ms;
        }
    `;
}

export class AppFooter extends LitElement {
    static styles = style();

    render () {
        return html`
            <div class="footer-first">
                <h3>fightfulness</h3>
            </div>
            <hr>
            <div class="footer-second">
                <app-socialmedia footer></app-socialmedia>
            </div>
        `;
    }
}

window.customElements.define("app-footer", AppFooter)