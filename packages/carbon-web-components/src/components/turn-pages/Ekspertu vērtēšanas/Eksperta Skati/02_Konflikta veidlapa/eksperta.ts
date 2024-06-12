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
 * konflikta-veidlapa
 *
 */

@customElement(`${prefix}-konflikta-veidlapa`)
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

    const versionHistoryArray = [
      {
        versionLink: 'google',
        version: '1.0',
        date: '29.03.2022',
        tagType: 'green',
        tagText: 'good',
      },
      {
        versionLink: 'google',
        version: '2.0',
        date: '29.03.2023',
        tagType: 'green',
        tagText: 'good',
      },
      {
        versionLink: 'google',
        version: '3.0',
        date: '29.03.2024',
        tagType: 'red',
        tagText: 'conflict',
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
          <cds-contextual-header-api .contextualHeaderApiData=${contextualHeaderApiData}>
          </cds-contextual-header-api>
          <div class="cds--css-grid cds--css-grid--narrow">
            <div
              class="cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-10 cds--css-grid-column">
              <cds-main-content-item size="07">
                <cds-header-title
                  title=" Atlases konflikta neesamības veidlapa"></cds-header-title>
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
                  <cds-divider size="3"></cds-divider>
                  <cds-version-history
      version="3.0"
      date="01.04.2022"
      .versionHistoryArray=${versionHistoryArray}></cds-version-history>
      <cds-divider size="7"></cds-divider>
      <cds-related-documents title="Saistītie dokumenti">
                  <cds-related-documents-item
                    linkTitle="Konflikta definīcijas apraksts"
                    linkUrl="https://google.com">
                  </cds-related-documents-item>
                </cds-related-documents>
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
          <cds-inline-notification
            style="min-width: 100%; margin-bottom: .5rem"
            kind="warning"
            low-contrast
            title="Jums nav piekļuves vērtēšanai"
            subtitle="Lai uzsāktu vērtēšanu, jāaizpilda šī konflikta neesamības veidlapa">
          </cds-inline-notification>
          <cds-divider size="6"></cds-divider>
          <cds-header-title
            class="cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-10 cds--css-grid-column"
            title="Projekta iesniegumi"></cds-header-title>
          <cds-divider></cds-divider>
          <cds-accordion>
            <cds-accordion-item
              title="Katlu mājas efektivitātes paaugstināšana Mālpilī">
              <cds-divider> </cds-divider>
              <cds-label-value
                label="Īstenošana"
                value="Latvijas Universitāte, LV4047126371"></cds-label-value>
              <cds-divider></cds-divider>
              <cds-label-value label="Sadarbības partneri"></cds-label-value>
               Ekonomikas ministrija, LV4047126371
SIA Turn Digital,LV4047126371 
Latvijas Dzelzceļš, LV4047126371
              </cds-label-value>
              <cds-divider> </cds-divider>
              <cds-radio-button-group legend-text="Konflikta neesamības apliecinājums">
                <cds-radio-button value="1">Konflikta nav</cds-radio-button>
                <cds-radio-button value="2">Konflikts</cds-radio-button>
              </cds-radio-button-group>
              <cds-divider> </cds-divider>
            </cds-accordion-item>
          </cds-accordion>
        </div>
      </cds-main-content-block-open>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default CDSPValuationOpen;
