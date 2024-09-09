import { html, LitElement, property } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map.js';
import styles from './width-container.scss'; // Ensure you have this SCSS file set up

export class CDSWidthContainer extends LitElement {
  @property({ type: String }) width = ''; // Default width
  @property({ type: String }) minWidth = ''; // Default width
  @property({ type: Boolean }) flex = false; // Determines if flexbox is used
  @property({ type: String }) justifyContent = ''; // Default justify-content
  @property({ type: String }) alignItems = ''; // Default align-items
  @property({ type: String }) gap = ''; // Default align-items

  static styles = styles;

  render() {
    const containerStyles = {
      width: this.width,
      minWidth: this.minWidth,
      gap: this.gap,
      display: this.flex ? 'flex' : 'block',
      justifyContent: this.flex ? this.justifyContent : '',
      alignItems: this.flex ? this.alignItems : '',
    };

    return html`<div style=${styleMap(containerStyles)}>
      <slot></slot>
    </div>`;
  }
}

customElements.define('cds-width-container', CDSWidthContainer);
