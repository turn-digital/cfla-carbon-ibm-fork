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
import styles from './eksperta.scss';
import { carbonElement as customElement } from '../../../../globals/decorators/carbon-element';
import Launch16 from '@carbon/icons/lib/launch/16';
import OverflowMenuVertical16 from '@carbon/icons/lib/overflow-menu--vertical/16';
import Add16 from '@carbon/icons/lib/add/16';

/**
 *
 * eksperta-veidlapa
 *
 */

@customElement(`${prefix}-eksperta-veidlapa`)
class CDSPValuationOpen extends LitElement {
  openModal = (modalName) => {
    //@ts-ignore
    this.shadowRoot.getElementById(modalName).open = true;
  };

  itemSelectedHandler = (event) => {
    //@ts-ignore
    this.selectedStatus = event.detail.item.__value;
    //@ts-ignore
    this.shadowRoot.getElementById('status-change-modal').open = true;
    //@ts-ignore
    console.log('selectedStatus', this.selectedStatus);
  };

  saveButtonHandler = () => {
    console.log('test func');
  };
  render() {
    const statusArray = [
      { text: 'Status 1', value: 'Status 1' },
      { text: 'Status 2', value: 'Status 2' },
      { text: 'Status 3', value: 'Status 3' },
    ];
    const statusRelatedPersonsArr = [
      {
        shortRole: 'CFLA atbildīgai',
        personName: 'Anna Bērziņa',
        iconType: '1',
      },
    ];
    const statusHistoryItemsArr = [
      {
        date: '25.10.2019 10:34',
        status: 'Atgriezta precizēšanai 1',
        author: 'Elīne Millere',
        pamatojums: 'Pamatojums 1',
        id: '1',
      },
      {
        date: '25.09.2019 16:13',
        status: 'Atgriezta precizēšanai 2',
        author: 'Test author',
        pamatojums: 'Pamatojums 2',
        id: '2',
      },
      {
        date: '25.09.2019 16:13',
        status: 'Atgriezta precizēšanai 2adas',
        author: 'Test author',
        pamatojums: 'Pamatojums 2',
        id: '3',
      },
    ];

    return html`
      <link
        rel="stylesheet"
        href="https://demo.turn.lv/cfla_dist/assets/css/turn-carbon-grid.css" />

      <link
        rel="stylesheet"
        href="https://demo.turn.lv/kase/dist/assets/css/themes.css" />

      <cds-main-content-block-open>
        <div slot="header" class="cds--css-grid-column cds--col-span-100">
          <cds-contextual-header title="Projekta iesniegums: 3.1.1.5/19">
            <cds-label-value-horizontal label="Atlases nosaukums">
              <cds-link href="#"
                >Zinātnes politikas ieviešana, vadība un kapacitātes
                stiprināšana
              </cds-link>
            </cds-label-value-horizontal>
            <cds-label-value-horizontal label="Atlases nosaukums">
              <cds-tag type="blue">Noslēgusies</cds-tag> 25.10.2019 10:34
            </cds-label-value-horizontal>
            <cds-divider size="3"></cds-divider>
            <cds-label-value-horizontal label="Atlases nosaukums">
              <cds-link href="#">1.1 </cds-link>
            </cds-label-value-horizontal>
          </cds-contextual-header>
          <div>
            <cds-divider size="3"></cds-divider>
            <cds-inline-notification
              style="min-width: 100%; margin-bottom: .5rem"
              title="Notification title"
              subtitle="Subtitle text goes here."
              low-contrast>
            </cds-inline-notification>
          </div>

          <div class="cds--css-grid cds--css-grid--narrow">
            <div
              class="cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-10 cds--css-grid-column">
              <cds-main-content-item size="07">
                <cds-header-title
                  title="Projekta iesnieguma vērtēšanas veidlapa"></cds-header-title>
              </cds-main-content-item>
              <cds-main-content-item size="07">
                <cds-related-persons
                  .statusRelatedPersons=${statusRelatedPersonsArr}></cds-related-persons>
              </cds-main-content-item>
              <cds-main-content-item size="07">
                <cds-status-history
                  .statusHistoryItems=${statusHistoryItemsArr} currenStatusColor="green"
                  currenStatusTitle="CFLA pārdomas"
                  currenStatusDate="25.10.2019 10:34"></cds-status-history>
              </cds-main-content-item>
            </div>
            <div
              class="cds--sm:col-span-4 cds--md:col-span-3 cds--lg:col-span-6 cds--css-grid-column">
              <div>
                <cds-main-content-item size="07" isStatusChangePanel>
                  <cds-dropdown-button
                    label="Mainīt statusu"
                    .dropdownHandler="${this.itemSelectedHandler}"
                    .statusArray="${statusArray}"></cds-dropdown-button>
                </cds-main-content-item>
              </div>
            </div>
          </div>
        </div>

        <div slot="content" class="cds--css-grid-column cds--col-span-100">
        <cds-main-content-item
            size="08"
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--grid-column-hang">
          <cds-label-value
            label="Uzdevums ekspertam"
            value="Aprakstīts, kas tiek sagaidīts no eksperta">
          </cds-label-value>
          <cds-label-value label="Saistītais PI">
            <cds-link href="google.com"> 3.1.1.5/19/A/042 </cds-link>
            ${Launch16({ fill: 'black' })}
          </cds-label-value>
          </cds-main-content-item>
          <cds-table>
          <cds-table-header-title slot="title"
            >Veidlapas sagatave</cds-table-header-title
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
                @click="${() => {
                  this.openModal('modal-example');
                }}"
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
              <cds-table-header-cell
                >Pievienotājs</cds-table-header-cell
              >
              <cds-table-header-cell></cds-table-header-cell>
            </cds-table-header-row>
          </cds-table-head>
          <cds-table-body>
            <cds-table-row>
              <cds-table-cell>
                <a
                  href="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                  download
                  style="text-decoration: none;">
                  projekta iesniegums.pdf
                </a>
              </cds-table-cell>
              <cds-table-cell>22.03.2023 10:15</cds-table-cell>
              <cds-table-cell>Anna Bērziņa</cds-table-cell>
              <cds-table-cell>
                <cds-overflow-menu>
                  ${OverflowMenuVertical16({
                    class: `${prefix}--overflow-menu__icon`,
                    slot: 'icon',
                  })}
                  <span slot="tooltip-content"> Options </span>
                  <cds-overflow-menu-body>
                    <cds-overflow-menu-item
                      >Lejupielādēt</cds-overflow-menu-item
                    >
                    <cds-overflow-menu-item divider danger
                      >Dzēst</cds-overflow-menu-item
                    >
                  </cds-overflow-menu-body>
                </cds-overflow-menu>
              </cds-table-cell>
            </cds-table-row>
          </cds-table-body>
        </cds-table>
      </cds-main-content-item>
          <div>
            <cds-divider size="8"></cds-divider>
            <cds-inline-notification
              style="min-width: 100%; margin-bottom: .5rem"
              title="Jauns ieraksts tika"
              kind="info"
              subtitle="Subtitle text goes here."
              low-contrast>
            </cds-inline-notification>
          </div>

          <cds-divider size="3"></cds-divider>

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
                @click="${() => {
                  this.openModal('add-expert-modal');
                }}"
                has-main-content="">
                Pievienot 
                ${Add16({ slot: 'icon' })}
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
        </div>
      </cds-main-content-block-open>

      <cds-modal id="modal-example">
        <cds-modal-header>
          <cds-modal-close-button></cds-modal-close-button>
          <cds-modal-label>Dokumenti</cds-modal-label>
          <cds-modal-heading>Dokumenta pievienošana</cds-modal-heading>
        </cds-modal-header>
        <cds-modal-body
          ><cds-file-uploader
            label-description="Faila izmērs nedrīkst būt lielāks par 2MB. Atbalstāmie failu tipi .jpg, .png, .doc, .docx, .xls, .txt"
            label-title="Augšupielādēt failus">
            <cds-file-uploader-drop-container
              accept="image/jpeg image/png"
              name=""
              slot="drop-container">
              Pievienot failu
            </cds-file-uploader-drop-container>
          </cds-file-uploader>
          <cds-text-editor
            editorId="editor1"
            editorConfig='{
"editorTitle": "Pārskatīšanas / Apstrīdēšanas gaitas piezīmes",
"max_char_length": 200,
"fetch_obj": {
"urlToFetch": "https://jsonplaceholder.typicode.com/posts",
"fetchMethod": "POST",
"errorAlertMessages": "Error occurred while fetching data",
"savedAlertMessages": "All data saved successfully"
}
}'></cds-text-editor>
        </cds-modal-body>
        <cds-modal-footer>
          <cds-modal-footer-button kind="secondary" data-modal-close
            >Cancel</cds-modal-footer-button
          >
          <cds-modal-footer-button kind="primary">Save</cds-modal-footer-button>
        </cds-modal-footer>
      </cds-modal>

      <cds-modal id="status-change-modal">
        <cds-modal-header>
          <cds-modal-close-button></cds-modal-close-button>
          <cds-modal-label>Dokumenti</cds-modal-label>
          <cds-modal-heading>Dokumenta pievienošana</cds-modal-heading>
        </cds-modal-header>
        <cds-modal-body>
          <p>
            Spiežot “atgriezt nodaļas vadītājam” Jūs... paskaidrot, kādas sekas.
          </p>
          <cds-text-editor
            editorId="editor_status_modal"
            editorConfig='{
        "editorTitle": "Pārskatīšanas / Apstrīdēšanas gaitas piezīmes"
        }'></cds-text-editor>
        </cds-modal-body>
        <cds-modal-footer>
          <cds-modal-footer-button kind="secondary" data-modal-close
            >Cancel</cds-modal-footer-button
          >
          <cds-modal-footer-button kind="primary">Save</cds-modal-footer-button>
        </cds-modal-footer>
      </cds-modal>



      <cds-modal id="add-expert-modal">
        <cds-modal-header>
          <cds-modal-close-button></cds-modal-close-button>
          <cds-modal-label>3.1.1.5/19/A/043 Sākumposma vērtēšana</cds-modal-label>
          <cds-modal-heading>Vērtēšanai nododamo dokumentu pievienošana</cds-modal-heading>
        </cds-modal-header>
        <cds-modal-body>
      <cds-tabs value="tab1">
      <cds-tab id="tab1" target="tab1" value="tab1">No sistēmas</cds-tab>
      <cds-tab
        id="tab2"
        target="tab2"
        value="tab2" disabled>
        Augšupielādēt
      </cds-tab>
    </cds-tabs>

    <div id="tab1" role="tabpanel" aria-labelledby="tab1">
    <cds-divider size="3"></cds-divider>
    <cds-table size="sm">
        <cds-table-toolbar slot="toolbar">
        <cds-table-toolbar-content ?has-batch-actions="true">
          <cds-table-toolbar-search
            placeholder="Filter table"></cds-table-toolbar-search>
        </cds-table-toolbar-content>
      </cds-table-toolbar>
  
        <cds-table-head>
          <cds-table-header-row selection-name="header">
            <cds-table-header-cell>Nosaukums</cds-table-header-cell>
            <cds-table-header-cell>Pievienošanas datums</cds-table-header-cell>
            <cds-table-header-cell>Pievienotājs</cds-table-header-cell>
            <cds-table-header-cell>Sadaļa</cds-table-header-cell>
          </cds-table-header-row>
        </cds-table-head>
        <cds-table-body>
        
          <cds-table-row selection-name="0">
            <cds-table-cell>Dokuments 1</cds-table-cell>
            <cds-table-cell>23.01.2023</cds-table-cell>
            <cds-table-cell>Jānis Bērziņš</cds-table-cell>
            <cds-table-cell>PI / Apraksts</cds-table-cell>
          </cds-table-row>
          <cds-table-row selection-name="1">
            <cds-table-cell>Dokuments 2</cds-table-cell>
            <cds-table-cell>23.01.2023</cds-table-cell>
            <cds-table-cell>Jānis Bērziņš</cds-table-cell>
            <cds-table-cell>PI / Apraksts</cds-table-cell>
          </cds-table-row>
          <cds-table-row selection-name="2">
            <cds-table-cell>Dokuments 3</cds-table-cell>
            <cds-table-cell>23.01.2023</cds-table-cell>
            <cds-table-cell>Jānis Bērziņš</cds-table-cell>
            <cds-table-cell>PI / Apraksts</cds-table-cell>
          </cds-table-row>
          <cds-table-row selection-name="3">
            <cds-table-cell>Dokuments 4</cds-table-cell>
            <cds-table-cell>23.01.2023</cds-table-cell>
            <cds-table-cell>Jānis Bērziņš</cds-table-cell>
            <cds-table-cell>PI / Apraksts</cds-table-cell>
          </cds-table-row>
          <cds-table-row selection-name="4">
            <cds-table-cell>Dokuments 5</cds-table-cell>
            <cds-table-cell>23.01.2023</cds-table-cell>
            <cds-table-cell>Jānis Bērziņš</cds-table-cell>
            <cds-table-cell>PI / Apraksts</cds-table-cell>
          </cds-table-row>
          <cds-table-row selection-name="5">
            <cds-table-cell>Dokuments 6</cds-table-cell>
            <cds-table-cell>23.01.2023</cds-table-cell>
            <cds-table-cell>Jānis Bērziņš</cds-table-cell>
            <cds-table-cell>PI / Apraksts</cds-table-cell>
          </cds-table-row>
          <cds-table-row selection-name="6">
            <cds-table-cell>Dokuments 7</cds-table-cell>
            <cds-table-cell>23.01.2023</cds-table-cell>
            <cds-table-cell>Jānis Bērziņš</cds-table-cell>
            <cds-table-cell>PI / Apraksts</cds-table-cell>
          </cds-table-row>
          <cds-table-row selection-name="7">
            <cds-table-cell>Dokuments 8</cds-table-cell>
            <cds-table-cell>23.01.2023</cds-table-cell>
            <cds-table-cell>Jānis Bērziņš</cds-table-cell>
            <cds-table-cell>PI / Apraksts</cds-table-cell>
          </cds-table-row>
          <cds-table-row selection-name="8">
            <cds-table-cell>Dokuments 9</cds-table-cell>
            <cds-table-cell>23.01.2023</cds-table-cell>
            <cds-table-cell>Jānis Bērziņš</cds-table-cell>
            <cds-table-cell>PI / Apraksts</cds-table-cell>
          </cds-table-row>
          <cds-table-row selection-name="9">
            <cds-table-cell>Dokuments 10</cds-table-cell>
            <cds-table-cell>23.01.2023</cds-table-cell>
            <cds-table-cell>Jānis Bērziņš</cds-table-cell>
            <cds-table-cell>PI / Apraksts</cds-table-cell>
          </cds-table-row>
        
      </cds-table>
    </div>
        </cds-modal-body>
        <cds-modal-footer>
          <cds-modal-footer-button kind="secondary" data-modal-close
            >Cancel</cds-modal-footer-button
          >
          <cds-modal-footer-button kind="primary">Save</cds-modal-footer-button>
        </cds-modal-footer>
      </cds-modal>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default CDSPValuationOpen;
