import { LitElement, html, css } from 'lit';
import { customElement, property } from "lit/decorators.js";

@customElement("song-item")
export class SongItemElement extends LitElement {
    @property({ type: String })
    href ="platform.html";

    render() {
        return html`
            <li class="song-item">
                <a href=${this.href}>
                    <slot name="image"></slot>
                    <span class="title">
                        <slot name="title"></slot>
                    </span>
                </a>
            </li>
        `;
    }

    static styles = css`
        .song-item {
            display: inline-block;
            margin-right: 100px; /* Add space between the list items */
            font-size: 18px;
            color: var(--color-text-light); /* Use custom text color */
            list-style: none; /* Remove default list styling */
        }

        .song-item a {
            color: var(--color-text-light); /* Set link text color to custom color */
            text-decoration: none; /* Remove default underline styling */
        }

        .song-image {
            width: 300px;
            height: 300px;
            display: block;
            margin: 0 auto; /* Center the image */
        }

        .song-title {
            display: block;
            text-align: center;
            margin-top: 10px;
        }
    `;
}
