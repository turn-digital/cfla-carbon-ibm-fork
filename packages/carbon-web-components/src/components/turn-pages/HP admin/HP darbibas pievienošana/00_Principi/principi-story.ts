import { html } from 'lit-html';
import storyDocs from './principi-story.mdx';
import './principi';
import styles from '../../../../../../assets/css/themes.css';

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
    status: 'Atgriezta precizēšanai 2',
    author: 'Test author',
    pamatojums: 'Pamatojums 2',
    id: '3',
  },
];

export const Propsed = () => {
  return html`
    <cds-doc-page>
      <span slot="header">
        <cds-contextual-header title="Projekta iesniegums: 3.1.1.5/19/A/043">
          <cds-label-value-horizontal label="Projekta nosaukums">
            <cds-link href="#"
              >MVU inovatīvas uzņēmējdarbības attīstība
            </cds-link>
          </cds-label-value-horizontal>
          <cds-divider size="3"></cds-divider>
          <cds-label-value-horizontal label="Iesniedzējs">
            Latvijas Universitāte
          </cds-label-value-horizontal>
          <cds-divider size="3"></cds-divider>
          <cds-label-value-horizontal label="Projekta iensieguma statuss">
            <cds-tag type="blue">Sagatavošanā</cds-tag> 25.10.2019 10:34
          </cds-label-value-horizontal>
        </cds-contextual-header>
        <cds-divider size="5"></cds-divider>
        <div class="cds--subgrid cds--subgrid--condensed">
          <div
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-10 cds--grid-column-hang">
            <cds-header-title title="Horizontālo principu konfigurēšana v1">
            </cds-header-title>
            <cds-divider size="5"></cds-divider>
            <cds-status-history
              .statusHistoryItems="${statusHistoryItemsArr}"
              statusHistoryTitle="Statusu vēsture"
              currenStatusColor="grey"
              currenStatusTitle="Sagatavošanā"
              currenStatusDate="25.10.2019 10:34">
            </cds-status-history>
            <cds-divider size="5"></cds-divider>
          </div>
          <div
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-6">
            <cds-divider size="5"></cds-divider>
          </div>
        </div>
      </span>
      <span slot="content">
        <cds-doc-page-tab-content withPrintDownload>
          <span slot="tab-print-download">
            <cds-print-download
              downloadLink="https://example.com/download"
              printLink="https://example.com/print">
            </cds-print-download
          ></span>
          <span slot="tab-content"
            ><cds-page-title title="Horizontālo principu pievienošana">
            </cds-page-title>

            <cds-progress-indicator space-equally>
              <cds-progress-step
                label="Principi"
                state="current"></cds-progress-step>
              <cds-progress-step
                label="Ietekme un minimālais skaits"
                state="incomplete"></cds-progress-step>
              <cds-progress-step
                label="HP darbību pievienošana"
                state="incomplete"></cds-progress-step>
              <cds-progress-step
                label="Priekšskatījums"
                state="incomplete"></cds-progress-step>
            </cds-progress-indicator>

            <cds-divider size="6"></cds-divider>
            <cds-header-title title="Principu izvēle"> </cds-header-title>
            <cds-divider size="6"></cds-divider>
            <cds-checkbox-group legend-text="Horizontālo principu saraksts">
              <cds-checkbox>Nenodarīt būtisku kaitējumu</cds-checkbox>
              <cds-checkbox>Klimatdrošināšana</cds-checkbox>
              <cds-checkbox checked
                >Energoefektivitāte pirmajā vietā</cds-checkbox
              >
              <cds-checkbox>VINPI</cds-checkbox>
              <cds-subselection>
                <cds-checkbox-group legend-text="VINPI vispārīgās darbības">
                  <cds-checkbox>VINPI vispārīgās darbības</cds-checkbox>
                </cds-checkbox-group>
                <cds-divider size="3"></cds-divider>
                <cds-checkbox-group legend-text="VINPI specifiskās darbības">
                  <cds-checkbox
                    >HP integrēšana izglītojošo un informatīvo materiālu un
                    pasākumu saturā</cds-checkbox
                  >
                  <cds-checkbox
                    >Projekta pasākumu satura un norises vietas
                    piekļūstamība</cds-checkbox
                  >
                  <cds-checkbox
                    >Atbalsta pasākumi zinātniskā darba veicējiem un
                    studējošiem</cds-checkbox
                  >
                  <cds-checkbox checked
                    >Pētījumi, izvērtējumi, aptaujas</cds-checkbox
                  >
                  <cds-checkbox>Veselību veicinoši pasākumi</cds-checkbox>
                </cds-checkbox-group>
              </cds-subselection>
            </cds-checkbox-group>
            <cds-divider size="6"></cds-divider>
            <cds-button-set>
              <cds-button href="https://www.ibm.com">Atpakaļ</cds-button>
              <cds-button href="https://www.ibm.com">Turpināt</cds-button>
            </cds-button-set>
          </span>
        </cds-doc-page-tab-content>
      </span>
    </cds-doc-page>
  `;
};
export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Views/HP admin/HP darbības pievienošana/Principi',
};
