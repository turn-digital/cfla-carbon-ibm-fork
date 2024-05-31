import { LitElement, html } from 'lit';
import { prefix } from '../../../../../globals/settings';
import { carbonElement as customElement } from '../../../../../globals/decorators/carbon-element';

import Add from '@carbon/web-components/es/icons/add/16';
import Upload16 from '@carbon/web-components/es/icons/upload/16';

@customElement(`${prefix}-projektu-saraksts`)
class CDSProjektuSaraksts extends LitElement {
  render() {
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

    const chosenCategoriesData = [
      { label: 'Projekta dzīves cikla posms', value: 'Sākumposma' },
      {
        label: 'Eksperta tips',
        value: 'CFLA ekspertu vērtējumsar nodaļas vadītāja iesaisti',
      },
      { label: 'Ekspertīzes joma', value: 'Valsts atbalsta' },
      { label: 'Termiņš', value: '12.03.2024' },
      { label: '*Eksperts', value: 'Jānis Bērziņš' },
    ];
    return html`
      <link
        rel="stylesheet"
        href="https://demo.turn.lv/cfla_dist/assets/css/turn-carbon-grid.css" />
      <cds-main-content-block storybook>
        <cds-contextual-header-api
          class="cds--css-grid-column cds--col-span-100"
          .contextualHeaderApiData=${contextualHeaderApiData}>
        </cds-contextual-header-api>
        <cds-main-content-title
          class="cds--css-grid-column cds--col-span-100 cds--grid-column-hang"
          title="Ekspertu vērtējuma izveidošana">
        </cds-main-content-title>
        <div
          class="cds--css-grid-column cds--col-span-100 cds--grid-column-hang">
          <cds-progress-indicator space-equally>
            <cds-progress-step
              style="max-inline-size: none;"
              label="Vērtēšanas veids"
              state="complete"></cds-progress-step>
            <cds-progress-step
              label="Termiņš"
              state="complete"></cds-progress-step>
            <cds-progress-step
              label="Ekspertu katalogs"
              state="complete"></cds-progress-step>
            <cds-progress-step
              label="Projektu saraksts "
              state="current"></cds-progress-step>
            <cds-progress-step
              label="Dokumenti"
              state="incomplete"></cds-progress-step>
            <cds-progress-step
              label="Priekšskatījums"
              state="incomplete"></cds-progress-step>
          </cds-progress-indicator>
        </div>

        <div class="cds--css-grid-column cds--col-span-100 ">
          <cds-divider size="10"></cds-divider>
          <cds-chosen-categories .chosenCategoriesData=${chosenCategoriesData}>
          </cds-chosen-categories>
        </div>

        <div class="cds--css-grid-column cds--col-span-100">
          <cds-divider size="8"></cds-divider>
          <cds-table size="sm" expandable>
            <cds-table-head>
              <cds-table-header-row selection-name="header">
                <cds-table-header-cell
                  >Projekta iesniegums</cds-table-header-cell
                >
                <cds-table-header-cell>Iesniedzējs</cds-table-header-cell>
                <cds-table-header-cell>Aktīvie vērtējumi</cds-table-header-cell>
              </cds-table-header-row>
            </cds-table-head>
            <cds-table-body>
              <cds-table-row selection-name="0">
                <cds-table-cell
                  >Bērza mizas pārstrāde ekoloģiskos šķiedru bio-kompozītos un
                  produkto..</cds-table-cell
                >
                <cds-table-cell>SIA Aizbalti</cds-table-cell>
                <cds-table-cell>1</cds-table-cell>
              </cds-table-row>
              <cds-table-expanded-row>
                <cds-divider size="5"></cds-divider>
                some content

                <!-- <cds-table expandable size="sm">
                  <cds-table-toolbar slot="toolbar">
                    <cds-table-toolbar-content>
                      <cds-table-toolbar-search
                        placeholder="Filter table 1"></cds-table-toolbar-search>
                      <cds-button kind="ghost"
                        >${Upload16({
                  slot: 'icon',
                  fill: 'black',
                })}</cds-button
                      >
                      <cds-button
                        >Pievienot vērtējumu
                        ${Add({ slot: 'icon' })}</cds-button
                      >
                    </cds-table-toolbar-content>
                  </cds-table-toolbar>
                  <cds-table-head>
                    <cds-table-header-row>
                      <cds-table-header-cell
                        >Projekta cikls</cds-table-header-cell
                      >
                      <cds-table-header-cell
                        >Vērtējuma statuss</cds-table-header-cell
                      >
                      <cds-table-header-cell
                        >Statusa datums</cds-table-header-cell
                      >
                      <cds-table-header-cell
                        >Eksperta veids</cds-table-header-cell
                      >
                      <cds-table-header-cell
                        >Vērtēšanas termiņš</cds-table-header-cell
                      >
                    </cds-table-header-row>
                  </cds-table-head>
                  <cds-table-body>
                    <cds-table-row>
                      <cds-table-cell>Sākumposma</cds-table-cell>
                      <cds-table-cell>Sagatavošanā</cds-table-cell>
                      <cds-table-cell>12.01.2022</cds-table-cell>
                      <cds-table-cell>CFLA ekspertu vērtēju..</cds-table-cell>
                      <cds-table-cell>12.01.2024</cds-table-cell>
                    </cds-table-row>
                    <cds-table-expanded-row>
                      <h6>Expandable row content</h6>
                      <div>Description here</div>
                    </cds-table-expanded-row>
                    <cds-table-row>
                      <cds-table-cell>Sākumposma</cds-table-cell>
                      <cds-table-cell>Sagatavošanā</cds-table-cell>
                      <cds-table-cell>12.01.2021</cds-table-cell>
                      <cds-table-cell>CFLA ekspertu vērtēju..</cds-table-cell>
                      <cds-table-cell>12.01.2024</cds-table-cell>
                    </cds-table-row>
                    <cds-table-expanded-row>
                      <h6>Expandable row content</h6>
                      <div>Description here</div>
                    </cds-table-expanded-row>
                    <cds-table-row>
                      <cds-table-cell>Sākumposma</cds-table-cell>
                      <cds-table-cell>Sagatavošanā</cds-table-cell>
                      <cds-table-cell>12.01.2025</cds-table-cell>
                      <cds-table-cell>CFLA ekspertu vērtēju..</cds-table-cell>
                      <cds-table-cell>12.01.2024</cds-table-cell>
                    </cds-table-row>
                    <cds-table-expanded-row>
                      <h6>Expandable row content</h6>
                      <div>Description here</div>
                    </cds-table-expanded-row>
                  </cds-table-body>
                </cds-table> -->
              </cds-table-expanded-row>
              <cds-table-row selection-name="1">
                <cds-table-cell
                  >Bērza mizas pārstrāde ekoloģiskos šķiedru bio-kompozītos un
                  produkto..</cds-table-cell
                >
                <cds-table-cell>SIA Aizbalti</cds-table-cell>
                <cds-table-cell>0</cds-table-cell>
              </cds-table-row>
              <cds-table-row selection-name="2">
                <cds-table-cell
                  >Bērza mizas pārstrāde ekoloģiskos šķiedru bio-kompozītos un
                  produkto..</cds-table-cell
                >
                <cds-table-cell>SIA Aizbalti</cds-table-cell>
                <cds-table-cell>0</cds-table-cell>
              </cds-table-row>
              <cds-table-row selection-name="3">
                <cds-table-cell
                  >Bērza mizas pārstrāde ekoloģiskos šķiedru bio-kompozītos un
                  produkto..</cds-table-cell
                >
                <cds-table-cell>SIA Aizbalti</cds-table-cell>
                <cds-table-cell>0</cds-table-cell>
              </cds-table-row>
              <cds-table-row selection-name="4">
                <cds-table-cell
                  >Bērza mizas pārstrāde ekoloģiskos šķiedru bio-kompozītos un
                  produkto..</cds-table-cell
                >
                <cds-table-cell>SIA Aizbalti</cds-table-cell>
                <cds-table-cell>0</cds-table-cell>
              </cds-table-row>
              <cds-table-row selection-name="5">
                <cds-table-cell
                  >Bērza mizas pārstrāde ekoloģiskos šķiedru bio-kompozītos un
                  produkto..</cds-table-cell
                >
                <cds-table-cell>SIA Aizbalti</cds-table-cell>
                <cds-table-cell>0</cds-table-cell>
              </cds-table-row>
            </cds-table-body>
          </cds-table>
        </div>

        <div
          class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-10">
          <cds-divider size="5"></cds-divider>
          <cds-button-set>
            <cds-button href="https://www.ibm.com">Atpakaļ</cds-button>
            <cds-button href="https://www.ibm.com">Turpināt</cds-button>
          </cds-button-set>
        </div>
      </cds-main-content-block>
    `;
  }
}

export default CDSProjektuSaraksts;
