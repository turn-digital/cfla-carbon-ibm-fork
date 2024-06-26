import { LitElement, html } from 'lit';
import { prefix } from '../../../../../globals/settings';
import { carbonElement as customElement } from '../../../../../globals/decorators/carbon-element';

import Add16 from '@carbon/icons/lib/add/16';

@customElement(`${prefix}-sekretara-parbaudes-lapa`)
class CDSPSekretaraParbaudesLapa extends LitElement {
  itemSelectedHandler = (event) => {
    //@ts-ignore
    this.selectedStatus = event.detail.item.__value;
    //@ts-ignore
    this.shadowRoot.getElementById('status-change-modal').open = true;
    //@ts-ignore
    console.log('selectedStatus', this.selectedStatus);
  };
  render() {

    const statusArray = [
      { text: 'Status 1', value: 'Status 1' },
      { text: 'Status 2', value: 'Status 2' },
      { text: 'Status 3', value: 'Status 3' },
    ];
    const statusRelatedPersonsArr = [
      {
        shortRole: 'LZP sekretārs',
        personName: 'Ieva Kļaviņa',
        iconType: '2',
      },
    ];
    const statusHistoryItemsArr = [
      {
        date: '25.10.2019 10:34',
        status: 'Sagatavošanā',
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
      <cds-main-content-block-open>
        <div slot="header" class="cds--css-grid-column cds--col-span-100">
          <cds-contextual-header-api .contextualHeaderApiData=${contextualHeaderApiData}>
          </cds-contextual-header-api>

          <div class="cds--css-grid cds--css-grid--narrow">
            <div
              class="cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-10 cds--css-grid-column">
              <cds-main-content-item size="05">
                <cds-header-title
                  title="LZP sekretāra pārbaudes lapa"></cds-header-title>
              </cds-main-content-item>
              <cds-main-content-item size="05">
                <cds-related-persons
                  .statusRelatedPersons=${statusRelatedPersonsArr}></cds-related-persons>
              </cds-main-content-item>
              <cds-main-content-item size="05">
                <cds-status-history
                  .statusHistoryItems=${statusHistoryItemsArr} currenStatusColor="blue"
                  currenStatusTitle="Sagatavošanā"
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
          <cds-print-download
            downloadLink="https://example.com/download"
            printLink="https://example.com/print">
          </cds-print-download>
          <div>
            <cds-divider size="5"></cds-divider>
            <cds-inline-notification
              style="min-width: 100%; margin-bottom: .5rem"
              title="Jauns ieraksts tika"
              kind="info"
              low-contrast>
            </cds-inline-notification>
          </div>

          <cds-divider size="3"></cds-divider>

          <cds-table>
            <cds-table-header-title slot="title"
              >Pārbaudes lapa</cds-table-header-title
            >
            <cds-table-header-description slot="title"
              >Lejupielādējiet sagatavi, aizpildiet un pievienojiet tabulā zemāk <cds-link href="#">Lejupielādēt sagatavi</cds-link></cds-link></cds-table-header-description>
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
                  ${Add16({ slot: 'icon' })}
                </cds-button>
              </cds-table-toolbar-content>
            </cds-table-toolbar>
            <cds-table-body>
            </cds-table-body>
          </cds-table>
    
          <cds-empty-state text="Šobrīd pārbaudes lapa nav pievienota" link="#" linkText="Pievienot"></cds-empty-state>
        </div>
      </cds-main-content-block-open>
    `;
  }
}

export default CDSPSekretaraParbaudesLapa;
