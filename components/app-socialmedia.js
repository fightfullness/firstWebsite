import { LitElement, html, css } from "lit";

function instaSvg () {
    return html`
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="-8 -8 116 116">
            <rect class="svgStroke" width="100" height="100" x="0" y="0" rx="20" ry="20" fill="none" stroke="black" stroke-width="8" />
            <circle class="svgStroke" cx="50" cy="50" r="25" stroke="black" stroke-width="10" fill="none" />
            <circle class="svgBoth" cx="80" cy="20" r="4" stroke="black" stroke-width="8" fill="black" />
        </svg> 
    `;
}

function peachSvg () {
    return html`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 318.46 468.43">
  <path class="svgBoth" opacity="1" d="M0,272.87c2.06-4.6,1.93-9.65,2.93-14.46,9.43-45.22,35.86-75.35,80.07-88.95,54.6-16.79,110.89,12.68,129.76,66.97,11.06,31.82,5.98,61.44-10.77,89.85-13.74,23.3-33.86,39.89-56.13,54.35-1.95,1.27-2.78.79-3.95-.89-7.62-10.91-15.3-21.78-23.04-32.61-1.98-2.77.02-3.87,1.79-5.12,8.68-6.16,17.82-11.71,25.44-19.25,15.75-15.58,27.43-33.06,25.91-56.53-1.38-21.26-18.52-49.89-48.75-54.65-25.59-4.03-55.9,10.82-66.4,32.14-13.28,26.97-15.41,54.43-.89,81.83,11.56,21.83,26.51,41.06,44.85,57.63,15.94,14.4,33.81,25.77,53.56,34.25,4.13,1.77,7.69,1.68,11.8-.53,26.86-14.5,51.59-31.81,71.92-54.78,24.08-27.22,37.25-58.59,33.7-95.46-2.52-26.27-13.38-49.22-30.67-69.09-7.22-8.29-15.29-15.76-23.69-22.82-3.49-2.93-4.18-4.9-.54-8.57,8.67-8.74,16.91-17.91,25.1-27.11,1.87-2.09,2.9-1.84,4.76-.29,36.61,30.48,62.77,67.46,69.88,115.55,6.28,42.46-3.82,81.42-27.6,117.01-21.45,32.09-50.49,55.84-82.97,75.82-12.06,7.42-24.54,14.07-37.31,20.19-2.19,1.05-4.12,1.37-6.63.78-29.06-6.85-54.51-20.99-78.03-38.83-31.63-23.98-55.49-54.36-72.79-89.95-5.79-11.91-9.14-24.57-10.36-37.77-.09-.99-.07-2.01-.93-2.73v-25.99Z"/>
  <path class="svgBoth" opacity="1" d="M278.95,0c0,14.12-.03,28.16-2.85,42.18-9.84,48.95-52.21,90.8-101.63,99.74-3.59.65-7.19,1.29-10.8,1.89-2.7.44-4.43-.17-4.6-3.47-1.76-33.14,6.42-63.41,26.92-89.74C207.81,22.6,236.4,5.77,271.74.8c.43-.06.81-.53,1.21-.8,2,0,4,0,6,0Z"/>
  <path class="svgBoth" opacity="1" d="M60.54,65.11c41.73.98,73.36,31.88,77.64,68.15.33,2.83-.03,3.63-3.01,3.85-39.14,2.95-75.9-24.59-82.95-65.66-.96-5.59.09-6.36,8.32-6.35Z"/>
</svg>
    `;
}

function navbarStyle () {
    return css`
        :host {
            display: flex;
            flex-direction: row;
            height: inherit;

            justify-content: center;
            align-items: center;
            gap: 10px;
        }

        a {
            height: 100%;
            width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        a:hover {
            background-color: var(--primary);
        }

        svg {
            width: 25px;
            height: 25px;
        }

        a:hover .svgStroke {
            stroke: var(--secondary);
        }

        a:hover .svgBoth {
            stroke: var(--secondary);
            fill: var(--secondary);
        }
    `;
}

export class Socialmedia extends LitElement {
    static properties = {
        footer: {type: Boolean}
    }

    static styles = navbarStyle();
    // ADD layout option "column"

    render () {
        return html`
            <a href="https://www.instagram.com/fightfulness/" target="_blank">
                ${instaSvg()}
            </a>
            <a href="https://peach.nu/instructors/fightfulness" target="_blank">
                ${peachSvg()}
            </a>
        `;
    }

}

window.customElements.define("app-socialmedia", Socialmedia);

