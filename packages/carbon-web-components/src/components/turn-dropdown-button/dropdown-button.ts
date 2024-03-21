/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { prefix } from '../../globals/settings';
import styles from './dropdown-button.scss';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import { property } from 'lit/decorators';

@customElement(`${prefix}-dropdown-button`)
class CDSDropdownButtonTest extends LitElement {
  @property({ type: Array }) accordionItems = [{ value: String, text: String }];
  @property({ type: Function }) dropdownHandler = () => {};

  static styles = styles;

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://demo.turn.lv/cfla_dist/assets/css/themes.css" />
      <div class="cds-theme-zone-turn-dropdown-button dropdown-container">
        <cds-dropdown
          label="Mainīt statusu"
          @cds-dropdown-selected="${this.dropdownHandler}">
          ${this.accordionItems?.map(
            (item) => html`
              <cds-dropdown-item value="${item.value}"
                >${item.text}</cds-dropdown-item
              >
            `
          )}
        </cds-dropdown>
      </div>
    `;
  }
}

export default CDSDropdownButtonTest;
