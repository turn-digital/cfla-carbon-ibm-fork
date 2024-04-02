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
import styles from './vertejuma-pamatinfo.scss';
import { carbonElement as customElement } from '../../../../globals/decorators/carbon-element';

/**
 *
 * VĒRTĒJUMA PĀRSKATĪŠANA
 *
 */

@customElement(`${prefix}-page-pamatinfo`)
class CDSPValuationReview extends LitElement {
  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://demo.turn.lv/cfla_dist/assets/css/turn-carbon-grid.css" />
      <script src="https://npmcdn.com/flatpickr/dist/l10n/ru.js"></script>
      <cds-main-content-block storybook>
        <cds-back-to
          class="cds--css-grid-column cds--col-span-100 cds--grid-column"
          title="Uz sarakstu"
          link="#"></cds-back-to>
        <cds-main-content-title
          class="cds--css-grid-column cds--col-span-100 cds--grid-column-hang"
          title="Vērtējuma pārskatīšanas izveidosāna">
        </cds-main-content-title>
        <div
          class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-10 cds--grid-column-hang">
          <cds-progress-indicator space-equally>
            <cds-progress-step
              style="max-inline-size: none;"
              label="Pārskatīšanas veids"
              description="Step 1: Register a onChange event"
              state="complete"></cds-progress-step>
            <cds-progress-step
              label="Pamatinfo"
              description="The progress indicator will listen for clicks on the steps"
              state="current"></cds-progress-step>
            <cds-progress-step
              label="Priekšskatījums"
              description="The progress indicator will listen for clicks on the steps"
              state="incomplete"></cds-progress-step>
          </cds-progress-indicator>
        </div>
        <cds-main-content-item
          size="08"
          class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-10 cds--grid-column-hang">
          <cds-date-picker date-format="d.m.Y">
            <cds-date-picker-input
              size="lg"
              style="width: 100%"
              label-text="Pārskatīšanas/Apstrīdējuma iesnieguma saņemšanas datums"
              placeholder="mm.dd.gggg"
              locale="ru">
            </cds-date-picker-input>
          </cds-date-picker>
          <cds-main-content-item
            size="08"
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-10 ">
            <div>
              <cds-file-uploader
                label-description="Max file size is 500kb. Supported file types are .jpg and .png."
                label-title="Augšupielādēt pārskatīšanas/apstrīdējuma iesniegumu">
                <cds-file-uploader-drop-container
                  accept="image/jpeg image/png"
                  name=""
                  slot="drop-container">
                  Ievelciet un nometiet failus šeit vai spiediet, lai
                  augšupielādētu
                </cds-file-uploader-drop-container>
              </cds-file-uploader>
              <cds-file-uploader-item state="edit">
                Filename.png
              </cds-file-uploader-item>
            </div>
          </cds-main-content-item>
          <div
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-10 ">
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
          </div>
        </cds-main-content-item>
        <div
          class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-10">
          <cds-button-set>
            <cds-button href="https://www.ibm.com">Atpakaļ</cds-button>
            <cds-button href="https://www.ibm.com">Izveidot</cds-button>
          </cds-button-set>
        </div>
      </cds-main-content-block>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default CDSPValuationReview;
