import { css } from "lit";

export function fadeIn () {
    return css`
        /* SHORTHAND : animation: name | duration | timing | direction    (some missing)*/
        .fade-in  {
            animation-duration: 1s;
            animation-name: fade-in;
            animation-direction: normal;
            animation-timing-function: ease-out;
            animation-iteration-count: 1;
            animation-play-state: paused
        }
        .in-view {
            animation-play-state: running;
        }

        @keyframes fade-in {
            from {
                transform: translateY(20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1.0;
            }
            
        }

    `;
}