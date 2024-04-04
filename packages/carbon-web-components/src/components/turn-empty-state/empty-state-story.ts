/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';

// Below path will be there when an application installs `@carbon/web-components` package.
// In our dev env, we auto-generate the file and re-map below path to to point to the generated file.
// @ts-ignore
import { prefix } from '../../globals/settings';

import './index';
import storyDocs from './empty-state-story.mdx';

export const Default = () => {
  return html`
    <cds-table>
      <cds-table-header-title slot="title"
        >Dokumenti</cds-table-header-title
      >
      <cds-table-toolbar slot="toolbar">
        <cds-table-toolbar-content>
          <cds-button
            size="lg"
            kind="secondary"
            tooltip-alignment=""
            tooltip-position="top"
            type="button"
            id="modal-example-button"

            has-main-content="">
            Pievienot 
          </cds-button>
        </cds-table-toolbar-content>
      </cds-table-toolbar>
      <cds-table-head>
        <cds-table-header-row>
          <cds-table-header-cell>Nosaukums</cds-table-header-cell>
          <cds-table-header-cell
            >Pievienošanas datums</cds-table-header-cell
          >
          <cds-table-header-cell>Pievienotājs</cds-table-header-cell>
        </cds-table-header-row>
      </cds-table-head>
      <cds-table-body>
      </cds-table-body>
    </cds-table>

    <cds-empty-state></cds-empty-state>
  `;
};
Default.storyName = 'Default';


export const Disabled = () => {
  return html`
    <cds-table>
      <cds-table-header-title slot="title"
        >Dokumenti</cds-table-header-title
      >
      <cds-table-toolbar slot="toolbar">
        <cds-table-toolbar-content>
          <cds-button
            size="lg"
            kind="secondary"
            tooltip-alignment=""
            tooltip-position="top"
            type="button"
            id="modal-example-button"

            has-main-content="">
            Pievienot 
          </cds-button>
        </cds-table-toolbar-content>
      </cds-table-toolbar>
      <cds-table-head>
        <cds-table-header-row>
          <cds-table-header-cell>Nosaukums</cds-table-header-cell>
          <cds-table-header-cell
            >Pievienošanas datums</cds-table-header-cell
          >
          <cds-table-header-cell>Pievienotājs</cds-table-header-cell>
        </cds-table-header-row>
      </cds-table-head>
      <cds-table-body>
        <cds-table-row>
          <cds-table-cell>
            <a
              href="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              download
              style="text-decoration: none;">
              vērtējums1.pdf
            </a>
          </cds-table-cell>
          <cds-table-cell>22.03.2023 10:15</cds-table-cell>
          <cds-table-cell>Anna Bērziņa</cds-table-cell>
        </cds-table-row>
        <cds-table-row>
          <cds-table-cell>
            <a
              href="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              download
              style="text-decoration: none;">
              vērtējums2.pdf
            </a>
          </cds-table-cell>
          <cds-table-cell>22.03.2023 10:20</cds-table-cell>
          <cds-table-cell>Pēteris Jurčenko</cds-table-cell>
        </cds-table-row>
      </cds-table-body>
    </cds-table>

    <cds-empty-state disabled >
    </cds-empty-state>
  `;
};
Disabled.storyName = 'Disabled';


export default {
  title: 'Custom-components/Empty State',
  parameters: {
    ...storyDocs.parameters,
  },
};
