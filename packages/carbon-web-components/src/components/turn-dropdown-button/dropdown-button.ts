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

/**
 * Related documents.
 *
 * @element cds-dropdown-button
 */

@customElement(`${prefix}-dropdown-button`)
class CDSDropdownButtonTest extends LitElement {
  @property({ type: Array }) statusArray = [{ value: String, text: String }];
  @property({ type: Function }) dropdownHandler = () => {};
  @property({ type: String }) selectedStatus = '';

  static styles = styles;

  //update cds-dropdown-item styles
  firstUpdated() {
    const dropdownItems = this.renderRoot.querySelectorAll(
      '.cds-theme-zone-turn-dropdown-button-test'
    );

    dropdownItems.forEach((dropdownItem) => {
      const shadowRoot = dropdownItem.shadowRoot;

      if (shadowRoot) {
        setTimeout(() => {
          const menuItemOption = shadowRoot.querySelector(
            '.cds--list-box__menu-item__option'
          );

          if (menuItemOption) {
            (menuItemOption as HTMLElement).style.paddingInlineEnd = '0px';
          }
        }, 0);
      }
    });
  }

  render() {
    return html`
      <div class="dropdown-container">
        <cds-dropdown
          class="cds-theme-zone-turn-dropdown-button"
          label="Mainīt statusu"
          @cds-dropdown-selected="${this.dropdownHandler}">
          ${this.statusArray?.map(
            (item) => html`
              <cds-dropdown-item
                class="cds-theme-zone-turn-dropdown-button-test"
                value="${item.value}"
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
