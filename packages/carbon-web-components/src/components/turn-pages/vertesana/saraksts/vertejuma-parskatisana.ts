/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { prefix } from '../../../../globals/settings';
import styles from './vertejuma-parskatisana.scss';
import { carbonElement as customElement } from '../../../../globals/decorators/carbon-element';
import OverflowMenuVertical16 from '@carbon/icons/lib/overflow-menu--vertical/16';

/**
 *
 * VĒRTĒJUMA PĀRSKATĪŠANA
 *
 */

@customElement(`${prefix}-page-valuation-list`)
class CDSPValuationList extends LitElement {
  render() {
    const linkIconToolBox = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="16" height="16" fill="white" style="mix-blend-mode:multiply"/>
  <path d="M13.5 4.5H12V3C12 2.73478 11.8946 2.48043 11.7071 2.29289C11.5196 2.10536 11.2652 2 11 2H5C4.73478 2 4.48043 2.10536 4.29289 2.29289C4.10536 2.48043 4 2.73478 4 3V4.5H2.5C2.10218 4.5 1.72064 4.65804 1.43934 4.93934C1.15804 5.22064 1 5.60218 1 6V13C1 13.2652 1.10536 13.5196 1.29289 13.7071C1.48043 13.8946 1.73478 14 2 14H14C14.2652 14 14.5196 13.8946 14.7071 13.7071C14.8946 13.5196 15 13.2652 15 13V6C15 5.60218 14.842 5.22064 14.5607 4.93934C14.2794 4.65804 13.8978 4.5 13.5 4.5ZM5 3H11V4.5H5V3ZM14 13H2V8.5H6V11H10V8.5H14V13ZM7 8.5H9V10H7V8.5ZM2 7.5V6C2 5.86739 2.05268 5.74021 2.14645 5.64645C2.24021 5.55268 2.36739 5.5 2.5 5.5H13.5C13.6326 5.5 13.7598 5.55268 13.8536 5.64645C13.9473 5.74021 14 5.86739 14 6V7.5H2Z" fill="#161616"/>
  </svg>`;

    const linkIconCert = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="16" height="16" fill="white" style="mix-blend-mode:multiply"/>
  <path d="M6 8H3V9H6V8Z" fill="#161616"/>
  <path d="M8 6H3V7H8V6Z" fill="#161616"/>
  <path d="M8 4H3V5H8V4Z" fill="#161616"/>
  <path d="M7 13H2V3H14V8H15V3C15 2.73478 14.8946 2.48043 14.7071 2.29289C14.5196 2.10536 14.2652 2 14 2H2C1.73478 2 1.48043 2.10536 1.29289 2.29289C1.10536 2.48043 1 2.73478 1 3V13C1 13.2652 1.10536 13.5196 1.29289 13.7071C1.48043 13.8946 1.73478 14 2 14H7V13Z" fill="#161616"/>
  <path d="M11 12.795L9.705 11.5L9 12.205L11 14.205L15 10.205L14.295 9.5L11 12.795Z" fill="#161616"/>
  </svg>`;
    return html`
      <cds-main-content-title title="Vērtējuma pārskatīšana">
      </cds-main-content-title>
      <cds-table expandable size="xs">
        <cds-table-toolbar slot="toolbar" role="section" size="xs">
          <cds-table-toolbar-content size="xs" tabindex="">
            <cds-table-toolbar-search
              placeholder="Filter table"
              role="search"
              size="xs"></cds-table-toolbar-search>
          </cds-table-toolbar-content>
        </cds-table-toolbar>
        <cds-table-head>
          <cds-table-header-row>
            <cds-table-header-cell>
              Projekta iesnieguma(PI) NR
            </cds-table-header-cell>
            <cds-table-header-cell>Status</cds-table-header-cell>
            <cds-table-header-cell>Statusa datums</cds-table-header-cell>
            <cds-table-header-cell>Pārskatīšanas iemesls</cds-table-header-cell>
            <cds-table-header-cell>Pārskatīšanas virzība</cds-table-header-cell>
            <cds-table-header-cell></cds-table-header-cell>
          </cds-table-header-row>
        </cds-table-head>
        <cds-table-body>
          <cds-table-row>
            <cds-table-cell
              ><cds-link href="https://www.ibm.com">
                1.1.1.1/1/23/A</cds-link
              ></cds-table-cell
            >
            <cds-table-cell>Sagatavošanā</cds-table-cell>
            <cds-table-cell>01.02.2023</cds-table-cell>
            <cds-table-cell>FS iesniegums</cds-table-cell>
            <cds-table-cell>Nodot VI </cds-table-cell>
            <cds-overflow-menu toolbar-action data-table="true">
              ${OverflowMenuVertical16({
                class: `${prefix}--overflow-menu__icon`,
              })}
              <span slot="tooltip-content"> Options </span>
              <cds-overflow-menu-body>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-row>
          <cds-table-expanded-row>
            <cds-label-value
              label="PI nosaukums"
              value="Pētniecības pakalpojumi"></cds-label-value>
            <cds-label-value
              label="Iesniedzējs"
              value="Latvijas Universitāte"></cds-label-value>
            <cds-related-documents title="Saistītie dokumenti">
              <cds-related-documents-item
                linkTitle="Saistītais PI"
                linkUrl="https://google.com">
                <svg
                  slot="icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    style="mix-blend-mode:multiply" />
                  <path
                    d="M13.5 4.5H12V3C12 2.73478 11.8946 2.48043 11.7071 2.29289C11.5196 2.10536 11.2652 2 11 2H5C4.73478 2 4.48043 2.10536 4.29289 2.29289C4.10536 2.48043 4 2.73478 4 3V4.5H2.5C2.10218 4.5 1.72064 4.65804 1.43934 4.93934C1.15804 5.22064 1 5.60218 1 6V13C1 13.2652 1.10536 13.5196 1.29289 13.7071C1.48043 13.8946 1.73478 14 2 14H14C14.2652 14 14.5196 13.8946 14.7071 13.7071C14.8946 13.5196 15 13.2652 15 13V6C15 5.60218 14.842 5.22064 14.5607 4.93934C14.2794 4.65804 13.8978 4.5 13.5 4.5ZM5 3H11V4.5H5V3ZM14 13H2V8.5H6V11H10V8.5H14V13ZM7 8.5H9V10H7V8.5ZM2 7.5V6C2 5.86739 2.05268 5.74021 2.14645 5.64645C2.24021 5.55268 2.36739 5.5 2.5 5.5H13.5C13.6326 5.5 13.7598 5.55268 13.8536 5.64645C13.9473 5.74021 14 5.86739 14 6V7.5H2Z"
                    fill="#161616" />
                </svg>
              </cds-related-documents-item>
              <cds-related-documents-item
                linkTitle="Vērtēšanas veidlapa"
                linkUrl="https://google.com">
                <svg
                  slot="icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    style="mix-blend-mode:multiply" />
                  <path d="M6 8H3V9H6V8Z" fill="#161616" />
                  <path d="M8 6H3V7H8V6Z" fill="#161616" />
                  <path d="M8 4H3V5H8V4Z" fill="#161616" />
                  <path
                    d="M7 13H2V3H14V8H15V3C15 2.73478 14.8946 2.48043 14.7071 2.29289C14.5196 2.10536 14.2652 2 14 2H2C1.73478 2 1.48043 2.10536 1.29289 2.29289C1.10536 2.48043 1 2.73478 1 3V13C1 13.2652 1.10536 13.5196 1.29289 13.7071C1.48043 13.8946 1.73478 14 2 14H7V13Z"
                    fill="#161616" />
                  <path
                    d="M11 12.795L9.705 11.5L9 12.205L11 14.205L15 10.205L14.295 9.5L11 12.795Z"
                    fill="#161616" />
                </svg>
              </cds-related-documents-item>
              <cds-related-documents-item
                linkTitle="Iesniegums par pārsūdzību"
                target="_self"
                linkUrl="https://google.com">
              </cds-related-documents-item>
            </cds-related-documents>
          </cds-table-expanded-row>
          <cds-table-row>
            <cds-table-cell
              ><cds-link href="https://www.ibm.com">
                1.1.1.1/1/23/A</cds-link
              ></cds-table-cell
            >
            <cds-table-cell
              ><cds-tag type="green">Ir spēkā</cds-tag></cds-table-cell
            >
            <cds-table-cell>01.02.2023</cds-table-cell>
            <cds-table-cell>FS iesniegums</cds-table-cell>
            <cds-table-cell>Nodot VI </cds-table-cell>
            <cds-overflow-menu toolbar-action data-table="true">
              ${OverflowMenuVertical16({
                class: `${prefix}--overflow-menu__icon`,
              })}
              <span slot="tooltip-content"> Options </span>
              <cds-overflow-menu-body>
                <cds-overflow-menu-item> Stop app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Restart app </cds-overflow-menu-item>
                <cds-overflow-menu-item> Rename </cds-overflow-menu-item>
              </cds-overflow-menu-body>
            </cds-overflow-menu>
          </cds-table-row>
          <cds-table-expanded-row>
            <cds-label-value
              label="PI nosaukums"
              value="Pētniecības pakalpojumi"></cds-label-value>
            <cds-label-value
              label="Iesniedzējs"
              value="Latvijas Universitāte"></cds-label-value>
            <cds-related-documents title="Saistītie dokumenti">
              <cds-related-documents-item
                linkTitle="Saistītais PI"
                linkUrl="https://google.com">
                <svg
                  slot="icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    style="mix-blend-mode:multiply" />
                  <path
                    d="M13.5 4.5H12V3C12 2.73478 11.8946 2.48043 11.7071 2.29289C11.5196 2.10536 11.2652 2 11 2H5C4.73478 2 4.48043 2.10536 4.29289 2.29289C4.10536 2.48043 4 2.73478 4 3V4.5H2.5C2.10218 4.5 1.72064 4.65804 1.43934 4.93934C1.15804 5.22064 1 5.60218 1 6V13C1 13.2652 1.10536 13.5196 1.29289 13.7071C1.48043 13.8946 1.73478 14 2 14H14C14.2652 14 14.5196 13.8946 14.7071 13.7071C14.8946 13.5196 15 13.2652 15 13V6C15 5.60218 14.842 5.22064 14.5607 4.93934C14.2794 4.65804 13.8978 4.5 13.5 4.5ZM5 3H11V4.5H5V3ZM14 13H2V8.5H6V11H10V8.5H14V13ZM7 8.5H9V10H7V8.5ZM2 7.5V6C2 5.86739 2.05268 5.74021 2.14645 5.64645C2.24021 5.55268 2.36739 5.5 2.5 5.5H13.5C13.6326 5.5 13.7598 5.55268 13.8536 5.64645C13.9473 5.74021 14 5.86739 14 6V7.5H2Z"
                    fill="#161616" />
                </svg>
              </cds-related-documents-item>
              <cds-related-documents-item
                linkTitle="Vērtēšanas veidlapa"
                linkUrl="https://google.com">
                <svg
                  slot="icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    style="mix-blend-mode:multiply" />
                  <path d="M6 8H3V9H6V8Z" fill="#161616" />
                  <path d="M8 6H3V7H8V6Z" fill="#161616" />
                  <path d="M8 4H3V5H8V4Z" fill="#161616" />
                  <path
                    d="M7 13H2V3H14V8H15V3C15 2.73478 14.8946 2.48043 14.7071 2.29289C14.5196 2.10536 14.2652 2 14 2H2C1.73478 2 1.48043 2.10536 1.29289 2.29289C1.10536 2.48043 1 2.73478 1 3V13C1 13.2652 1.10536 13.5196 1.29289 13.7071C1.48043 13.8946 1.73478 14 2 14H7V13Z"
                    fill="#161616" />
                  <path
                    d="M11 12.795L9.705 11.5L9 12.205L11 14.205L15 10.205L14.295 9.5L11 12.795Z"
                    fill="#161616" />
                </svg>
              </cds-related-documents-item>
              <cds-related-documents-item
                linkTitle="Iesniegums par pārsūdzību"
                target="_self"
                linkUrl="https://google.com">
              </cds-related-documents-item>
            </cds-related-documents>
          </cds-table-expanded-row>
        </cds-table-body>
      </cds-table>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default CDSPValuationList;
