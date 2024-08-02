import { LitElement, html, css } from 'lit';
import { prefix } from '../../globals/settings';
import styles from './card.scss';
import { property } from 'lit/decorators.js';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

@customElement(`${prefix}-card`)
class CDSCard extends LitElement {
  @property({ type: String }) type = 'green';
  @property({ type: Boolean }) isSolved = false;

  updated(changedProperties) {
    super.updated(changedProperties);
    this.style.setProperty('--cds-layer', 'white');
  }

  render() {
    const { type, isSolved } = this;
    const typeClass = isSolved
      ? 'container__solved'
      : type
      ? `container__border-left-${type}`
      : '';

    return html`
      <div class="container ${typeClass}">
        <div class="top-line">
          <slot name="status" class="status"></slot>
          <slot name="overflow-menu" class="overflow-menu"></slot>
        </div>
        <cds-expandable-tile with-interactive>
          <cds-tile-above-the-fold-content slot="above-the-fold-content">
            <slot name="above-the-fold-content"></slot>
          </cds-tile-above-the-fold-content>
          <cds-tile-below-the-fold-content>
            <cds-divider> </cds-divider>
            <slot name="below-the-fold-content"></slot>
          </cds-tile-below-the-fold-content>
        </cds-expandable-tile>
      </div>
    `;
  }

  static styles = [
    css`
      :host {
        --cds-layer: initial; /* Default value */
      }
    `,
    styles,
  ];
}

export default CDSCard;
