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

/**
 *
 * VĒRTĒJUMA PĀRSKATĪŠANA
 *
 */

@customElement(`${prefix}-eksperta-projekts`)
class CDSPValuationOpen extends LitElement {
  openModal = () => {
    //@ts-ignore
    this.shadowRoot.getElementById('modal-example').open = true;
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

    const contextualHeaderApiData = {
      virsraksts: 'Atlase: 1.1.1',
      saturs: [
        {
          tips: 'status',
          nosaukums: 'Atlases statuss',
          links: {
            nosaukums: null,
            saite: null,
          },
          teksts: null,
          statuss: {
            nosaukums: 'Izsludināta',
            krasa: 'red',
            datums: null,
          },
        },
        {
          tips: 'link',
          nosaukums: 'Nosaukums',
          links: {
            nosaukums:
              'Pētniecības un inovāciju kapacitātes stiprināšana un progresīvu tehnoloģiju ieviešana',
            saite: 'http://localhost:31475/LV/SAMPamatdati/View/4',
          },
          teksts: null,
          statuss: {
            nosaukums: null,
            krasa: null,
            datums: null,
          },
        },
        {
          tips: 'status',
          nosaukums: 'Atlases statuss',
          links: {
            nosaukums: null,
            saite: null,
          },
          teksts: null,
          statuss: {
            nosaukums: 'Izsludināta',
            krasa: 'green',
            datums: '12.12.2012',
          },
        },

        {
          tips: 'divider',
          nosaukums: null,
          links: {
            nosaukums: null,
            saite: null,
          },
          teksts: null,
          statuss: {
            nosaukums: null,
            krasa: null,
            datums: null,
          },
        },
        {
          tips: 'link',
          nosaukums: 'Politikas programma',
          links: {
            nosaukums: '1.1',
            saite:
              'http://localhost:31475/LV/IeguldijumuPrioritatesPamatdati/View/3',
          },
          teksts: null,
          statuss: {
            nosaukums: null,
            krasa: null,
            datums: null,
          },
        },
      ],
    };

    return html`
      <link
        rel="stylesheet"
        href="https://demo.turn.lv/cfla_dist/assets/css/turn-carbon-grid.css" />

      <link
        rel="stylesheet"
        href="https://demo.turn.lv/kase/dist/assets/css/themes.css" />

      <cds-main-content-block-open withTabs>
        <div slot="header" class="cds--css-grid-column cds--col-span-100">
          <cds-contextual-header-api
            .contextualHeaderApiData=${contextualHeaderApiData}>
          </cds-contextual-header-api>
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
                  .statusHistoryItems=${statusHistoryItemsArr}
                  currenStatusColor="green"
                  currenStatusTitle="CFLA pārdomas"
                  currenStatusDate="25.10.2019 10:34"></cds-status-history>
              </cds-main-content-item>
            </div>
            <div
              class="cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-6 cds--css-grid-column">
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

        <div slot="tabs" class="cds--css-grid-column cds--col-span-100">
          <cds-tabs
            class="cds-theme-zone-g10 cds--css-grid-column cds--col-span-100 cds--grid-column-hang"
            trigger-content="Select an item"
            value="tab2"
            type="contained">
            <cds-tab id="tab1" target="panel1" value="tab1" disabled
              >Vērtēšana</cds-tab
            >
            <cds-tab id="tab2" target="panel2" value="tab2">Projekts</cds-tab>
          </cds-tabs>
          <cds-tab-content-container
            id="panel2"
            role="tabpanel"
            aria-labelledby="tab2"
            hidden>
            <div
              class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--grid-column-hang">
              <cds-divider size="10"></cds-divider>
              <cds-label-value
                label="Apraksts"
                value="Eiropas Savienības kohēzijas politikas programmas 2021.–2027.gadam 2.2.3. specifiskā atbalsta mērķa “Uzlabot dabas aizsardzību un bioloģisko daudzveidību, “zaļo” infrastruktūru, it īpaši pilsētvidē, un samazināt piesārņojumu” 2.2.3.6. specifiskā atbalsta mērķa pasākuma “Gaisa piesārņojumu mazinošu pasākumu īstenošana, uzlabojot mājsaimniecību siltumapgādes sistēmas” projektu iesniegumu atlases nolikums"></cds-label-value>
            </div>
            <div
              class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10">
              <cds-divider size="10"></cds-divider>
              <cds-table size="xs">
                <cds-table-header-title slot="title"
                  >Atbildīgie</cds-table-header-title
                >
                <cds-table-head>
                  <cds-table-header-row>
                    <cds-table-header-cell>Vārds Uzvārds</cds-table-header-cell>
                    <cds-table-header-cell>Puses</cds-table-header-cell>
                    <cds-table-header-cell>Telefons</cds-table-header-cell>
                    <cds-table-header-cell>E-pasts</cds-table-header-cell>
                  </cds-table-header-row>
                </cds-table-head>
                <cds-table-body>
                  <cds-table-row>
                    <cds-table-cell>Anna Bērziņa</cds-table-cell>
                    <cds-table-cell>FS Projektu vadītājs</cds-table-cell>
                    <cds-table-cell>+37112345678</cds-table-cell>
                    <cds-table-cell>maris@company.lv</cds-table-cell>
                  </cds-table-row>
                  <cds-table-row>
                    <cds-table-cell>Māra Kalniņa</cds-table-cell>
                    <cds-table-cell>CFLA atbildīgais</cds-table-cell>
                    <cds-table-cell>+37112345678</cds-table-cell>
                    <cds-table-cell>anna@cfla.gov.lv</cds-table-cell>
                  </cds-table-row>
                </cds-table-body>
              </cds-table>
            </div>

            <div
              class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10">
              <cds-divider size="10"></cds-divider>
              <cds-table size="xs">
                <cds-table-header-title slot="title"
                  >Sadarbības partneri</cds-table-header-title
                >
                <cds-table-head>
                  <cds-table-header-row>
                    <cds-table-header-cell
                      >Iestādes nosaukums</cds-table-header-cell
                    >
                    <cds-table-header-cell
                      >Reģistrācijas nr.
                    </cds-table-header-cell>
                  </cds-table-header-row>
                </cds-table-head>
                <cds-table-body>
                  <cds-table-row>
                    <cds-table-cell>Turn Digital</cds-table-cell>
                    <cds-table-cell>LV40412345678</cds-table-cell>
                  </cds-table-row>
                  <cds-table-row>
                    <cds-table-cell>BIOR</cds-table-cell>
                    <cds-table-cell>LV40412345678</cds-table-cell>
                  </cds-table-row>
                </cds-table-body>
              </cds-table>
            </div>
          </cds-tab-content-container>
        </div>
      </cds-main-content-block-open>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default CDSPValuationOpen;
