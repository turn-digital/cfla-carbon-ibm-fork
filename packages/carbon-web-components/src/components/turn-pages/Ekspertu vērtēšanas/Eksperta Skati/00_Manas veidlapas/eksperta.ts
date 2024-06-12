/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { prefix } from '../../../../../globals/settings';
import styles from './eksperta.scss';
import { carbonElement as customElement } from '../../../../../globals/decorators/carbon-element';
import OverflowMenuVertical16 from '@carbon/icons/lib/overflow-menu--vertical/16';
import Download16 from '@carbon/icons/lib/download/16';

@customElement(`${prefix}-eksperta-manas-veidlapas`)
class CDSPValuationList extends LitElement {
  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://demo.turn.lv/cfla_dist/assets/css/turn-carbon-grid.css" />

      <cds-main-content-block storybook>
        <cds-main-content-title
          class="cds--css-grid-column cds--col-span-100 cds--grid-column-hang"
          title="Manas vērtēšanas veidlapas"></cds-main-content-title>
        <div
          class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-16">
          <cds-table size="xs">
            <cds-table-toolbar slot="toolbar">
              <cds-table-toolbar-content ?has-batch-actions="true">
                <cds-table-toolbar-search
                  placeholder="Filter table"></cds-table-toolbar-search>
                </cds-overflow-menu>
                <cds-button kind="ghost">${Download16({
                  slot: 'icon',
                  fill: 'black',
                })}
                </cds-button>
              </cds-table-toolbar-content>
            </cds-table-toolbar>
            <cds-table-head>
              <cds-table-header-row>
                <cds-table-header-cell>PI ID</cds-table-header-cell>
                <cds-table-header-cell>Veidlapas statuss</cds-table-header-cell>
                <cds-table-header-cell>Statusa datums</cds-table-header-cell>
                <cds-table-header-cell
                  >Vērtēšanas termiņš</cds-table-header-cell
                >
                <cds-table-header-cell>Vērtējuma veids</cds-table-header-cell>
                <cds-table-header-cell></cds-table-header-cell>
              </cds-table-header-row>
            </cds-table-head>
            <cds-table-body size="sm">
              <cds-table-row>
                <cds-table-cell>3.1.1.5/19/A/043c</cds-table-cell>
                <cds-table-cell>Konflikts nav zināms</cds-table-cell>
                <cds-table-cell>12.01.2024</cds-table-cell>
                <cds-table-cell>12.01.2024</cds-table-cell>
                <cds-table-cell>Vide</cds-table-cell>
                <cds-table-cell>
                  <cds-overflow-menu>
                    ${OverflowMenuVertical16({
                      class: `${prefix}--overflow-menu__icon`,
                      slot: 'icon',
                    })}
                    <span slot="tooltip-content"> Options </span>
                    <cds-overflow-menu-body>
                      <cds-overflow-menu-item>Atvērt</cds-overflow-menu-item>
                      <cds-overflow-menu-item
                        >Mainit ekspertu</cds-overflow-menu-item
                      >
                    </cds-overflow-menu-body>
                  </cds-overflow-menu>
                </cds-table-cell>
              </cds-table-row>
              <cds-table-row>
                <cds-table-cell>3.1.1.5/19/A/043x</cds-table-cell>
                <cds-table-cell>Konflikts nav zināms</cds-table-cell>
                <cds-table-cell>12.01.2024</cds-table-cell>
                <cds-table-cell>12.01.2024</cds-table-cell>
                <cds-table-cell>Vide</cds-table-cell>
                <cds-table-cell>
                  <cds-overflow-menu>
                    ${OverflowMenuVertical16({
                      class: `${prefix}--overflow-menu__icon`,
                      slot: 'icon',
                    })}
                    <span slot="tooltip-content"> Options </span>
                    <cds-overflow-menu-body>
                      <cds-overflow-menu-item>Atvērt</cds-overflow-menu-item>
                      <cds-overflow-menu-item
                        >Mainit ekspertu</cds-overflow-menu-item
                      >
                    </cds-overflow-menu-body>
                  </cds-overflow-menu>
                </cds-table-cell>
              </cds-table-row>
              <cds-table-row>
                <cds-table-cell>3.1.1.5/19/A/043b</cds-table-cell>
                <cds-table-cell>Konflikts nav zināms</cds-table-cell>
                <cds-table-cell>12.01.2024</cds-table-cell>
                <cds-table-cell>12.01.2024</cds-table-cell>
                <cds-table-cell>Vide</cds-table-cell>
                <cds-table-cell>
                  <cds-overflow-menu>
                    ${OverflowMenuVertical16({
                      class: `${prefix}--overflow-menu__icon`,
                      slot: 'icon',
                    })}
                    <span slot="tooltip-content"> Options </span>
                    <cds-overflow-menu-body>
                      <cds-overflow-menu-item>Atvērt</cds-overflow-menu-item>
                      <cds-overflow-menu-item
                        >Mainit ekspertu</cds-overflow-menu-item
                      >
                    </cds-overflow-menu-body>
                  </cds-overflow-menu>
                </cds-table-cell>
              </cds-table-row>
              <cds-table-row>
                <cds-table-cell>3.1.1.5/19/A/043n</cds-table-cell>
                <cds-table-cell>Konflikts nav zināms</cds-table-cell>
                <cds-table-cell>12.01.2024</cds-table-cell>
                <cds-table-cell>12.01.2024</cds-table-cell>
                <cds-table-cell>Vide</cds-table-cell>
                <cds-table-cell>
                  <cds-overflow-menu>
                    ${OverflowMenuVertical16({
                      class: `${prefix}--overflow-menu__icon`,
                      slot: 'icon',
                    })}
                    <span slot="tooltip-content"> Options </span>
                    <cds-overflow-menu-body>
                      <cds-overflow-menu-item>Atvērt</cds-overflow-menu-item>
                      <cds-overflow-menu-item
                        >Mainit ekspertu</cds-overflow-menu-item
                      >
                    </cds-overflow-menu-body>
                  </cds-overflow-menu>
                </cds-table-cell>
              </cds-table-row>
            </cds-table-body>
          </cds-table>
        </div>
      </cds-main-content-block>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default CDSPValuationList;
