import { html, LitElement } from 'lit-element';
import { HeaderResponsiveStyles } from './header-responsive-style';

/**
 * `header-responsive`
 * HeaderResponsive
 *
 * @customElement header-responsive
 * @litElement
 * @demo demo/index.html
 */

export class HeaderResponsive extends LitElement {
  static get is() {
    return 'header-responsive';
  }

  static get styles() {
    return [ HeaderResponsiveStyles ];
  }

  static get properties() {
    return {
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
    <header>
        <input type="checkbox" class="header__input" id="toggleOpen" />
        <label tabindex="0" class="header-menu-icon" for="toggleOpen"></label>
        <div class="header--container">
          <li>hahahaha</li>
          <li>hahaha</li>
          <li>hahahah</li>
        </div>
    </header>
    `;
  }
}