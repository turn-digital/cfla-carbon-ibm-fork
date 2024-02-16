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

// those objects should be passed from story, here should be defined and used for texteditor
const translations1 = {
  title: 'Pārskatīšanas būtība',
  statusSave: 'Saved',
  statusSaving: 'Saving',
  statusBad: 'Error saving data',
  statusLoad: 'Loading',
  textLimit: "Text is over the limit!",
  bold: 'Bold Translation',
  italic: 'Italic Translation',
  underline: "Underlined",
  alignLeft: "from left",
  alignCenter : "from center",
  alignRight : "from Right",
  alignJustify : "style justify",
  unorderedList: "list with points",
  orderedList: "list with numbers",
  indent: "indent",
  outdent: "outdent",
  textLink: "Insert the link",
  superscript: "superscript",
  subscript:"subscript",
  clearFormatting: "Clear format style",
  fullScreen: "Show in fullscreen",
  redo: "Redo action",
  undo: "Undo action",
  paragraph: "Paragrāfs",
  heading1: "Virsraksts 1",
  heading2: "Virsraksts 2",
  heading3: "Virsraksts 3",
  heading4: "Virsraksts 4",
  heading5: "Virsraksts 5",
  heading6: "Virsraksts 6",
};
const translations2 = {
  title: 'Pārskatīšnas / Apstrīdēšanas gaitas piezīmes',
  statusSave: 'Saved',
  statusSaving: 'Saving',
  statusBad: 'Error saving data',
  statusLoad: 'Loading',
  textLimit: "Text is over the limit!",
  bold: 'Bold Translation',
  italic: 'Italic Translation',
  underline: "Underlined",
  alignLeft: "from left",
  alignCenter : "from center",
  alignRight : "from Right",
  alignJustify : "style justify",
  unorderedList: "list with points",
  orderedList: "list with numbers",
  indent: "indent",
  outdent: "outdent",
  textLink: "Insert the link",
  superscript: "superscript",
  subscript:"subscript",
  clearFormatting: "Clear format style",
  fullScreen: "Show in fullscreen",
  redo: "Redo action",
  undo: "Undo action",
  paragraph: "Paragrāfs",
  heading1: "Virsraksts 1",
  heading2: "Virsraksts 2",
  heading3: "Virsraksts 3",
  heading4: "Virsraksts 4",
  heading5: "Virsraksts 5",
  heading6: "Virsraksts 6",
};

const userMeta = {
  name: "FS: Jānis Bērziņš",
  date: "01.01.2001 20:01"
}

const handleTextChangedOutsideEditor = () => {
  console.log('Text has been changed and clicked outside editor! Can execute some save function!');
};

const editor1 = "<h2>Here is existing</h2><p>content</p><p>content</p><p>content</p>";
const editor2 = "";


@customElement(`${prefix}-page-valuation-open`)
class CDSPValuationOpen extends LitElement {
  render() {
    return html`
    <cds-page-title title="Vērtējuma pāsrkatīšana"></cds-page-title>
    <h1
                style="
            font-size: 14px;
            font-weight: 600;
            line-height: 20px;
            margin-bottom: 12px;
          ">
                Saistītie dokumenti
              </h1>
              <cds-link
                href="https://www.ibm.com"
                style="display: flex; align-items: center">
                Saistītais PI
                <svg
                  id="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 32 32">
                  <defs>
                    <style>
                      .cls-1 {
                        fill: none;
                      }
                    </style>
                  </defs>
                  <path
                    d="M26,28H6a2.0027,2.0027,0,0,1-2-2V6A2.0027,2.0027,0,0,1,6,4H16V6H6V26H26V16h2V26A2.0027,2.0027,0,0,1,26,28Z" />
                  <polygon
                    points="20 2 20 4 26.586 4 18 12.586 19.414 14 28 5.414 28 12 30 12 30 2 20 2" />
                  <rect
                    id="_Transparent_Rectangle_"
                    data-name="&lt;Transparent Rectangle&gt;"
                    class="cls-1"
                    width="32"
                    height="32" />
                </svg>
              </cds-link>
              <cds-link
                href="https://www.ibm.com"
                style="display: flex; align-items: center">
                <svg
                  id="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 32 32">
                  <defs>
                    <style>
                      .cls-1 {
                        fill: none;
                      }
                    </style>
                  </defs>
                  <title>certificate--check</title>
                  <rect x="6" y="16" width="6" height="2" />
                  <rect x="6" y="12" width="10" height="2" />
                  <rect x="6" y="8" width="10" height="2" />
                  <path
                    d="M14,26H4V6H28V16h2V6a2,2,0,0,0-2-2H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H14Z" />
                  <polygon
                    points="22 25.59 19.41 23 18 24.41 22 28.41 30 20.41 28.59 19 22 25.59" />
                  <rect
                    id="_Transparent_Rectangle_"
                    data-name="&lt;Transparent Rectangle&gt;"
                    class="cls-1"
                    width="32"
                    height="32" />
                </svg>
                Vērtēšanas veidlapa
                <svg
                  id="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 32 32">
                  <defs>
                    <style>
                      .cls-1 {
                        fill: none;
                      }
                    </style>
                  </defs>
                  <path
                    d="M26,28H6a2.0027,2.0027,0,0,1-2-2V6A2.0027,2.0027,0,0,1,6,4H16V6H6V26H26V16h2V26A2.0027,2.0027,0,0,1,26,28Z" />
                  <polygon
                    points="20 2 20 4 26.586 4 18 12.586 19.414 14 28 5.414 28 12 30 12 30 2 20 2" />
                  <rect
                    id="_Transparent_Rectangle_"
                    data-name="&lt;Transparent Rectangle&gt;"
                    class="cls-1"
                    width="32"
                    height="32" />
                </svg>
              </cds-link>
              <cds-link
                href="https://www.ibm.com"
                style="display: flex; align-items: center">
                Vērtēšanas veidlapa
              </cds-link>
            </div>
           <div style="padding: 20px">
           <h3 style="font-weight: 400; font-size: 20px">Vērtējuma pārskatīšanas būtība</h3>
           <div style="margin-top: 20px;">
           <p style="font-weight: 400; font-size: 12px">
Apstrīdēšanas iesnieguma saņemšanas datums
</p>
<p style="font-weight: 400; font-size: 14px">
23.03.2023
</p>
           </div>
           <div style="margin-top: 20px;">
           <p style="font-weight: 400; font-size: 12px">
           Pārskatīšanas veids
</p>
<p style="font-weight: 400; font-size: 14px">
Tiesvedība
</p>
           </div>
           <div style="margin-top: 20px;">
           <p style="font-weight: 400; font-size: 12px">
           Pārskatīšanas lēmums
</p>
<p style="font-weight: 400; font-size: 14px"></p>
<cds-radio-button-group
  label-position="right"
  orientation="vertical"
  name="radio-group">
  <cds-radio-button label-text="VI Lēmumu atstāj spēkā" value="spēkā"></cds-radio-button>
  <cds-radio-button
    label-text="Atcelt lēmumu pilnībā"
    value="pilnībā"></cds-radio-button>
  <cds-radio-button
    label-text="Atcelt lēmumu kādā daļā"
    value="daļā"></cds-radio-button>
  <cds-radio-button
    label-text="Lietas izskatīšana izbeigta"
    value="izbeigta"></cds-radio-button>
  <cds-radio-button
    label-text="Izdot satura ziņā citu lēmumu"
    value="lēmumu"></cds-radio-button>
</cds-radio-button-group>
           </div>
           <cds-text-editor 
           toolbarType="full"
           value="${editor1}"
           .isReadOnly="${false}"
           .translations="${translations1}" 
           .userMeta="${userMeta}"
           .textLimit="${1000}"
           .props=${{ onTextChangedOutsideEditor: handleTextChangedOutsideEditor }}>
       </cds-text-editor>
       <cds-text-editor 
       toolbarType="full"
       value="${editor2}"
       .isReadOnly="${false}"
       .translations="${translations2}" 
       .userMeta="${userMeta}"
       .textLimit="${1000}"
       .props=${{ onTextChangedOutsideEditor: handleTextChangedOutsideEditor }}>
   </cds-text-editor>
           </div>
           <div>
           <cds-table>
  <cds-table-header-title slot="title">Dokumenti</cds-table-header-title>
  <cds-table-toolbar slot="toolbar">
      <cds-table-toolbar-content>
      <cds-button size="sm" kind="secondary" tooltip-alignment="" tooltip-position="top" type="button" has-main-content="">Pievienot ${Add16(
        { slot: 'icon' }
      )}</cds-button>
    </cds-table-toolbar>
  <cds-table-head>
    <cds-table-header-row>
      <cds-table-header-cell>Nosaukums</cds-table-header-cell>
      <cds-table-header-cell>Pievienošanas datums</cds-table-header-cell>
      <cds-table-header-cell>Pievienotājs</cds-table-header-cell>
    </cds-table-header-row>
  </cds-table-head>
  <cds-table-body>
    <cds-table-row>
      <cds-table-cell><a href="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" download style="text-decoration: none;">vērtējums1.pdf</a></cds-table-cell>
      <cds-table-cell>22.03.2023 10:15</cds-table-cell>
      <cds-table-cell>Anna Bērziņa</cds-table-cell>
    </cds-table-row>
    <cds-table-row>
    <cds-table-cell><a href="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" download style="text-decoration: none;">vērtējums2.pdf</a></cds-table-cell>
    <cds-table-cell>22.03.2023 10:20</cds-table-cell>
    <cds-table-cell>Pēteris Jurčenko</cds-table-cell>
    </cds-table-row>
  </cds-table-body>
</cds-table>
           </div>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default CDSPValuationOpen;
