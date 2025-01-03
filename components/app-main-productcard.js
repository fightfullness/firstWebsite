import { LitElement, css, html } from "lit";

function style () {
    return css`
        :host {
            text-align: -webkit-center;
        }

        .card {
            width: 320px;
            height: 250px;
            border-radius: 10px;
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.3) 0 0 10px 0;
        }

        .wrapper {
            width: 100%;
            height: 100%;
        }

        .img {
            background-color: var(--tertiary30);
            height: 128px;
            width: 100%;
            overflow:hidden;
        }

        .textContainer {
            background-color: white;
            
        }
    `;
}

export class ProductCard extends LitElement {
    static styles = style();

    static properties = {
        url: {type: String}
    }

    render () {
        return html`
            <!-- <embed class="embeddedSite" src=${this.url} > -->
            <div class="card">
                <a href=${this.url} target="_blank">
                    <div class="wrapper">
                        <div class="img">
                            
                        </div>
                        <div class="textContainer">
    
                        </div>
                    </div>
                </a>
            </div>
            
            <!-- <div class="activity-card" id="F3AruiQSul7PlzM6vsYQ">
                <a href="/activities/F3AruiQSul7PlzM6vsYQ" target="_self">
                    <div style="background:#fff;position:relative;border-radius:10px;overflow:hidden;box-shadow:rgba(0, 0, 0, 0.3) 0 0 10px 0">
                        <div style="position:relative;border-bottom-width:1px;border-color:#eee">
                            <div style="overflow:hidden;background-color:#f5f5f5;max-width:600px;position:relative">
                                <img class="activity-card-image" alt="Online Find Your Flow Session" style="object-fit: cover; object-position: center center; width: 100%; visibility: visible; aspect-ratio: 5 / 2;" src="https://firebasestorage.googleapis.com/v0/b/peach-training-app.appspot.com/o/classImages%2Fzl3wCq1aDV2STMyinwDI_1729790321002.jpg?alt=media&amp;token=102b29ea-2dc8-45e1-a23f-83df470f6ba2">
                            </div>
                        </div>
                        <div style="padding:16px;display:flex;flex-direction:column">
                            <div style="font-size:13px;font-weight:bold;color:rgba(0, 0, 0, 0.45);text-transform:uppercase;white-space:nowrap;overflow:hidden">
                                <span>
                                    <time style="display:inline-block;min-width:20px;min-height:20px" datetime="2025-01-05T08:00:00.000Z">
                                        <noscript>
                                            2025-01-05T08:00:00.000Z
                                        </noscript>
                                        Sön 5 jan. 2025 09:00
                                    </time>
                                    <span style="padding:0 3px">
                                         · 
                                        </span>
                                    </span>
                                    <span>Online</span>
                                </div>
                                <div style="display:flex;flex-direction:row;justify-content:space-between">
                                    <p style="font-size:16px;font-weight:bold;color:rgba(0, 0, 0, 0.87)">Online Find Your Flow Session</p>
                                    <div style="font-size:16px;font-weight:bold;color:rgba(0, 0, 0, 0.87);white-space:nowrap;padding-left:10px">€16.00</div>
                                </div>
                                <p style="font-size:15px;color:rgba(0, 0, 0, 0.56)">
                                    Fightfulness Mental Training
                                </p>
                            </div>
                        </div>
                    </a>
                </div> -->
        `;
    }
}

window.customElements.define('app-main-productcard', ProductCard);