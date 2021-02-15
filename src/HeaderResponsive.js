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
    <div class="header__container">
        <input type="checkbox" class="header__input" id="toggleOpen" />
        <label tabindex="0" class="header-menu-icon" for="toggleOpen"></label>
        <slot name="logo"></slot>
        <div class="header--container--items">
          <slot name ="navigationMenu"></slot>
          <slot name= "buttonLanguage"></slot>
        </div>
    </div>
    `;
  }
}




