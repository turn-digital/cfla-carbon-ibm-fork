/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import './index';
import storyDocs from './vertejamie-projekti-story.mdx';

import Add16 from '@carbon/icons/lib/add/16';

export const Default = () => {
  return html` <cds-vertejamie-projekti></cds-vertejamie-projekti> `;
};

export const Modal = () => {
  return html`      
  <cds-modal id="secretary-edit-modal" open>
    <cds-modal-header>
      <cds-modal-close-button></cds-modal-close-button>
      <cds-modal-label>3.1.1.5/19/A/042 Vidusposma vērtēšana</cds-modal-label>
      <cds-modal-heading>LZP sekretāra piesaiste</cds-modal-heading>
      <cds-divider size="5"></cds-divider>
    </cds-modal-header>
    <cds-modal-body>

      <cds-table size="sm" radio>
        <cds-table-toolbar slot="toolbar">
          <cds-table-toolbar-content>
            <cds-table-toolbar-search
              placeholder="Filter table"></cds-table-toolbar-search>
            <cds-button>Pievienot jaunu ${Add16({slot:"icon"})}</cds-button>
            
          </cds-table-toolbar-content>
        </cds-table-toolbar>

        <cds-table-head>
          <cds-table-header-row hide-checkbox>
            <cds-table-header-cell>Vārds Uzvārds</cds-table-header-cell>
            <cds-table-header-cell>E-pasts</cds-table-header-cell>
            <cds-table-header-cell>Telefons</cds-table-header-cell>
            <cds-table-header-cell>Aktīvās dalīb.</cds-table-header-cell>
            <cds-table-header-cell>Vēstur. dalīb.</cds-table-header-cell>
          </cds-table-header-row>
        </cds-table-head>

        <cds-table-body>
          <cds-table-row selection-name="1">
            <cds-table-cell>Jānis Bērziņš</cds-table-cell>
            <cds-table-cell>janis.berzins@company.lv</cds-table-cell>
            <cds-table-cell>+371212345678</cds-table-cell>
            <cds-table-cell>1</cds-table-cell>
            <cds-table-cell>10</cds-table-cell>
          </cds-table-row>
          <cds-table-row selection-name="2">
            <cds-table-cell>Jānis Bērziņš</cds-table-cell>
            <cds-table-cell>janis.berzins@company.lv</cds-table-cell>
            <cds-table-cell>+371212345678</cds-table-cell>
            <cds-table-cell>1</cds-table-cell>
            <cds-table-cell>10</cds-table-cell>
          </cds-table-row>
        </cds-table-body>
      </cds-table>

      <cds-pagination page-size="10" total-items="100">
        <cds-select-item value="10">10</cds-select-item>
        <cds-select-item value="20">20</cds-select-item>
        <cds-select-item value="30">30</cds-select-item>
        <cds-select-item value="40">40</cds-select-item>
        <cds-select-item value="50">50</cds-select-item>
      </cds-pagination>

      <div></div>

    </cds-modal-body>
    
    <cds-modal-footer>
      <cds-modal-footer-button kind="secondary" data-modal-close
        >Atcelt</cds-modal-footer-button
      >
      <cds-modal-footer-button kind="primary">Izvēlēties</cds-modal-footer-button>
    </cds-modal-footer>
  </cds-modal>
`;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Views/Ekspertu vērtēšanas/Vērtētāju skati/LZP vērtējamie projekti',
};
