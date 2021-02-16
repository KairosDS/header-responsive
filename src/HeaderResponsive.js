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
      /**
       *
       * @property
       * @type {Array}
       */
      slotsItems: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.slotsItems= [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.slotsItems = [...this.querySelectorAll('[slot]')]
    this.logo = this.slotsItems.find(el => el.slot === 'logo'); 
    this.items= this.slotsItems.filter(el => el.slot !== 'logo');
  }

  render() {
    return html`
    <div class="header-responsive header__container" part="container-header">
        <input type="checkbox" class="header__input" id="toggleOpen" />
        <label tabindex="0" class="header-menu-icon" for="toggleOpen"></label>
        ${this.logo && window.innerWidth < 1029 ? html`<slot name="${this.logo.slot}"></slot>`: ''}
        <div class="header--container--items" part="container-items">
        ${this.logo && window.innerWidth > 1029 ? html`<slot name="${this.logo.slot}"></slot>`: ''}
          ${this.items.map(el =>{
            return html `
              <slot name ="${el.slot}"></slot>
            `;
          })}
        </div>
    </div>
    `;
  }
}




