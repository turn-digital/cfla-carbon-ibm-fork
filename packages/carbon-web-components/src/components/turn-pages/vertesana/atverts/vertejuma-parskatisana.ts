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
import Add16 from '@carbon/icons/lib/add/16';

/**
 *
 * VĒRTĒJUMA PĀRSKATĪŠANA
 *
 */

@customElement(`${prefix}-page-valuation-open`)
class CDSPValuationOpen extends LitElement {
  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://demo.turn.lv/cfla_dist/assets/css/turn-carbon-grid.css" />
      <cds-main-content-block storybook>
        <cds-main-content-title
          class="cds--css-grid-column cds--col-span-100"
          title="Vērtējuma pārskatīšanas izveidosāna">
        </cds-main-content-title>

        <cds-main-content-item
          size="08"
          class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-10">
          <cds-label-value
            label="Apstrīdēšanas iesnieguma saņemšanas datums"
            value="23.03.2023">
          </cds-label-value>
          <cds-label-value label="Pārskatīšanas veids" value="Tiesvedība">
          </cds-label-value>
        </cds-main-content-item>

        <cds-main-content-item
          size="08"
          class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-10">
          <cds-radio-button-group
            legend-text="Pārskatīšanas lēmums"
            label-position="right"
            orientation="vertical"
            name="radio-group">
            <cds-radio-button
              label-text="VI Lēmumu atstāj spēkā"
              value="VI Lēmumu atstāj spēkā"></cds-radio-button>
            <cds-radio-button
              label-text="Atcelt lēmumu pilnībā"
              value="Atcelt lēmumu pilnībā"></cds-radio-button>
            <cds-radio-button
              label-text="Atcelt lēmumu kādā daļā"
              value="Atcelt lēmumu kādā daļā"></cds-radio-button>
            <cds-radio-button
              label-text="Lietas izskatīšana izbeigta"
              value="Lietas izskatīšana izbeigta"></cds-radio-button>
            <cds-radio-button
              label-text="Izdot satura ziņā citu lēmumu"
              value="Izdot satura ziņā citu lēmumu"></cds-radio-button>
          </cds-radio-button-group>
        </cds-main-content-item>
        <cds-main-content-item
          size="08"
          class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-10">
          <cds-text-editor
            editorId="editor1"
            editorConfig='{
        "editorTitle": "Pārskatīšanas būtība",
        "branding": false,
        "menubar": false,
        "height": 200,
        "highlight_on_focus": true,
        "promotion": true,
        "max_length": 100,
        "fetch_obj": {
          "urlToFetch": "https://jsonplaceholder.typicode.com/posts",
          "fetchMethod": "POST",
          "errorAlertMessages": "Error occurred while fetching data",
          "savedAlertMessages": "All data saved successfully"
        },
        "external_plugins": {
          "pluginId": "https://demo.turn.lv/cfla_dist/assets/tinymce/plugins/length_validation/plugin.min.js"
        }
      }'></cds-text-editor>
        </cds-main-content-item>
        <cds-main-content-item
          size="08"
          class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-10">
          <cds-text-editor
            editorId="editor2"
            editorConfig='{
        "editorTitle": "Pārskatīšanas / Apstrīdēšanas gaitas piezīmes",
        "branding": false,
        "menubar": false,
        "height": 200,
        "highlight_on_focus": true,
        "promotion": true,
        "max_length": 100,
        "fetch_obj": {
          "urlToFetch": "https://jsonplaceholder.typicode.com/posts",
          "fetchMethod": "POST",
          "errorAlertMessages": "Error occurred while fetching data",
          "savedAlertMessages": "All data saved successfully"
        },
        "external_plugins": {
          "pluginId": "https://demo.turn.lv/cfla_dist/assets/tinymce/plugins/length_validation/plugin.min.js"
        }
      }'></cds-text-editor>
        </cds-main-content-item>
        <cds-main-content-item
          class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-10">
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
                  has-main-content="">
                  Pievienot ${Add16({ slot: 'icon' })}
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
        </cds-main-content-item>
      </cds-main-content-block>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default CDSPValuationOpen;
