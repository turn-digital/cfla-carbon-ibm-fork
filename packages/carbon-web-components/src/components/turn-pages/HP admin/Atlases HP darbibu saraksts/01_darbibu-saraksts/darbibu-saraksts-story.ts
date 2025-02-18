import { html } from 'lit-html';
import storyDocs from './darbibu-saraksts-story.mdx';
import './darbibu-saraksts';
import styles from '../../../../../assets/css/themes.css';
import OverflowMenuVertical16 from '@carbon/icons/lib/overflow-menu--vertical/16';
import Add16 from '@carbon/icons/lib/add/16';

const statusArray = [
  { text: 'Status 1', value: 'Status 1' },
  { text: 'Status 2', value: 'Status 2' },
  { text: 'Status 3', value: 'Status 3' },
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
    status: 'Atgriezta precizēšanai 2',
    author: 'Test author',
    pamatojums: 'Pamatojums 2',
    id: '3',
  },
];

export const Propsed = () => {
  return html` <cds-doc-page>
    <span slot="header">
      <cds-contextual-header title="Atlase: 1.1.1.1">
        <cds-label-value-horizontal label="Atlases nosaukums:">
          <cds-link href="#"
            >Zinātnes politikas ieviešana, vadība un kapacitātes stiprināšana
          </cds-link>
        </cds-label-value-horizontal>
        <cds-divider size="3"></cds-divider>
        <cds-label-value-horizontal label="Atlases status">
          <cds-tag type="blue">Noslēgusies</cds-tag> 25.10.2019 10:34
        </cds-label-value-horizontal>
        <cds-divider size="3"></cds-divider>
        <cds-label-value-horizontal label="Politikas programma">
          <cds-link href="#">1.1 </cds-link>
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
          <cds-main-content-item size="0" isStatusChangePanel>
            <cds-dropdown-button
              buttonLabel="Mainīt statusu"
              .statusArray="${statusArray}"></cds-dropdown-button>
          </cds-main-content-item>

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
        <span slot="tab-content">
          <cds-inline-notification
            style="min-width: 100%;"
            low-contrast
            kind="error"
            title="Nav izvēlēts minimāli nepieciešamais darbību skaits"
            subtitle="Lūdzu, izvēlieties trūkstošās darbības!">
          </cds-inline-notification>
          <cds-divider size="6"></cds-divider>
          <cds-table size="sm" expandable>
            <cds-table-header-title slot="title"
              >Atlases HP darbību saraksts</cds-table-header-title
            >
            <cds-table-head>
              <cds-table-header-row>
                <cds-table-header-cell>HP darbību grupa</cds-table-header-cell>
                <cds-table-header-cell>Ietekmes veids</cds-table-header-cell>
                <cds-table-header-cell>Min. HP rad. sk.</cds-table-header-cell>
                <cds-table-header-cell>HP rad. sk.</cds-table-header-cell>
                <cds-table-header-cell>Min. HP darb. sk.</cds-table-header-cell>
                <cds-table-header-cell>HP darb. sk.</cds-table-header-cell>
                <cds-table-header-cell></cds-table-header-cell>
              </cds-table-header-row>
            </cds-table-head>
            <cds-table-body>
              <cds-table-row>
                <cds-table-cell
                  >Energoefektivitāte pirmajā vietā</cds-table-cell
                >
                <cds-table-cell>Netieša pozitīva ietekmē</cds-table-cell>
                <cds-table-cell>n/a</cds-table-cell>
                <cds-table-cell>n/a</cds-table-cell>
                <cds-table-cell>2</cds-table-cell>
                <cds-table-cell>2</cds-table-cell>
                <cds-table-cell>
                  <cds-overflow-menu>
                    ${OverflowMenuVertical16({
                      class: `cds--overflow-menu__icon`,
                      slot: 'icon',
                    })}
                    <span slot="tooltip-content"> Opcijas </span>
                    <cds-overflow-menu-body flipped>
                      <cds-overflow-menu-item>Labot</cds-overflow-menu-item>
                      <cds-overflow-menu-item divider danger
                        >Dzēst</cds-overflow-menu-item
                      >
                    </cds-overflow-menu-body>
                  </cds-overflow-menu></cds-table-cell
                >
              </cds-table-row>
              <cds-table-expanded-row>
                <cds-table-expanded-row-wrapper>
                  <cds-table size="sm">
                    <cds-table-header-title slot="title"
                      >VINPI vispārīgās</cds-table-header-title
                    >
                    <cds-table-head>
                      <cds-table-header-row>
                        <cds-table-header-cell>ID</cds-table-header-cell>
                        <cds-table-header-cell
                          >HP darbības nosaukums</cds-table-header-cell
                        >
                        <cds-table-header-cell
                          >Projekti, kuros izvēlēts</cds-table-header-cell
                        >
                      </cds-table-header-row>
                    </cds-table-head>
                    <cds-table-body>
                      <cds-table-row>
                        <cds-table-cell>VP01 </cds-table-cell>
                        <cds-table-cell
                          >Diskrimināciju un stereotipus mazinoša
                          komunikācija</cds-table-cell
                        >
                        <cds-table-cell>2</cds-table-cell>
                      </cds-table-row>
                      <cds-table-row>
                        <cds-table-cell>VP02 </cds-table-cell>
                        <cds-table-cell
                          >Informācijas piekļūstamība cilvēkiem ar
                          funkcionālajiem traucējumiem</cds-table-cell
                        >
                        <cds-table-cell>1</cds-table-cell>
                      </cds-table-row>
                      <cds-table-row>
                        <cds-table-cell>VP04 </cds-table-cell>
                        <cds-table-cell
                          >Norāde tīmekļa vietnē par projekta īstenošanas vietas
                          piekļūstamību</cds-table-cell
                        >
                        <cds-table-cell>3</cds-table-cell>
                      </cds-table-row>
                      <cds-table-row>
                        <cds-table-cell>VP05 </cds-table-cell>
                        <cds-table-cell
                          >Naida runas izskaušana digitālajā
                          vidē</cds-table-cell
                        >
                        <cds-table-cell>1</cds-table-cell>
                      </cds-table-row>
                    </cds-table-body>
                  </cds-table>
                  <cds-divider size="6"></cds-divider>
                  <cds-table size="sm">
                    <cds-table-header-title slot="title"
                      >VINPI specifiskās - Pētījumi, izvērtējumi,
                      aptaujas</cds-table-header-title
                    >
                    <cds-table-head>
                      <cds-table-header-row>
                        <cds-table-header-cell>ID</cds-table-header-cell>
                        <cds-table-header-cell
                          >HP darbības nosaukums</cds-table-header-cell
                        >
                        <cds-table-header-cell
                          >Projekti, kuros izvēlēts</cds-table-header-cell
                        >
                      </cds-table-header-row>
                    </cds-table-head>
                    <cds-table-body>
                      <cds-table-row>
                        <cds-table-cell>P01 </cds-table-cell>
                        <cds-table-cell
                          >Konsultācijas ar ekspertiem nediskriminācijas
                          jomā</cds-table-cell
                        >
                        <cds-table-cell>2</cds-table-cell>
                      </cds-table-row>
                      <cds-table-row>
                        <cds-table-cell>P02 </cds-table-cell>
                        <cds-table-cell
                          >Pētījumi par sabiedrības novecošanos</cds-table-cell
                        >
                        <cds-table-cell>1</cds-table-cell>
                      </cds-table-row>
                      <cds-table-row>
                        <cds-table-cell>P03 </cds-table-cell>
                        <cds-table-cell
                          >Pētījumos integrēti dzimumu līdztiesības
                          jautājumi</cds-table-cell
                        >
                        <cds-table-cell>3</cds-table-cell>
                      </cds-table-row>
                      <cds-table-row>
                        <cds-table-cell>P04 </cds-table-cell>
                        <cds-table-cell
                          >Sabiedriskās aptaujas vairākās
                          valodās</cds-table-cell
                        >
                        <cds-table-cell>1</cds-table-cell>
                      </cds-table-row>
                    </cds-table-body>
                  </cds-table>
                </cds-table-expanded-row-wrapper>
              </cds-table-expanded-row>
              <cds-table-row>
                <cds-table-cell>VINPI</cds-table-cell>
                <cds-table-cell>Nav</cds-table-cell>
                <cds-table-cell>2</cds-table-cell>
                <cds-table-cell>2</cds-table-cell>
                <cds-table-cell>2</cds-table-cell>
                <cds-table-cell>2</cds-table-cell>
                <cds-table-cell>
                  <cds-overflow-menu>
                    ${OverflowMenuVertical16({
                      class: `cds--overflow-menu__icon`,
                      slot: 'icon',
                    })}
                    <span slot="tooltip-content"> Opcijas </span>
                    <cds-overflow-menu-body flipped>
                      <cds-overflow-menu-item>Labot</cds-overflow-menu-item>
                      <cds-overflow-menu-item divider danger
                        >Dzēst</cds-overflow-menu-item
                      >
                    </cds-overflow-menu-body>
                  </cds-overflow-menu></cds-table-cell
                >
              </cds-table-row>
              <cds-table-expanded-row>
                <cds-table-expanded-row-wrapper>
                  <cds-table size="sm">
                    <cds-table-header-title slot="title"
                      >VINPI vispārīgās</cds-table-header-title
                    >
                    <cds-table-head>
                      <cds-table-header-row>
                        <cds-table-header-cell>ID</cds-table-header-cell>
                        <cds-table-header-cell
                          >HP darbības nosaukums</cds-table-header-cell
                        >
                        <cds-table-header-cell
                          >Projekti, kuros izvēlēts</cds-table-header-cell
                        >
                      </cds-table-header-row>
                    </cds-table-head>
                    <cds-table-body>
                      <cds-table-row>
                        <cds-table-cell>VP01 </cds-table-cell>
                        <cds-table-cell
                          >Diskrimināciju un stereotipus mazinoša
                          komunikācija</cds-table-cell
                        >
                        <cds-table-cell>2</cds-table-cell>
                      </cds-table-row>
                      <cds-table-row>
                        <cds-table-cell>VP02 </cds-table-cell>
                        <cds-table-cell
                          >Informācijas piekļūstamība cilvēkiem ar
                          funkcionālajiem traucējumiem</cds-table-cell
                        >
                        <cds-table-cell>1</cds-table-cell>
                      </cds-table-row>
                      <cds-table-row>
                        <cds-table-cell>VP04 </cds-table-cell>
                        <cds-table-cell
                          >Norāde tīmekļa vietnē par projekta īstenošanas vietas
                          piekļūstamību</cds-table-cell
                        >
                        <cds-table-cell>3</cds-table-cell>
                      </cds-table-row>
                      <cds-table-row>
                        <cds-table-cell>VP05 </cds-table-cell>
                        <cds-table-cell
                          >Naida runas izskaušana digitālajā
                          vidē</cds-table-cell
                        >
                        <cds-table-cell>1</cds-table-cell>
                      </cds-table-row>
                    </cds-table-body>
                  </cds-table>
                  <cds-divider size="6"></cds-divider>
                  <cds-table size="sm">
                    <cds-table-header-title slot="title"
                      >VINPI specifiskās - Pētījumi, izvērtējumi,
                      aptaujas</cds-table-header-title
                    >
                    <cds-table-head>
                      <cds-table-header-row>
                        <cds-table-header-cell>ID</cds-table-header-cell>
                        <cds-table-header-cell
                          >HP darbības nosaukums</cds-table-header-cell
                        >
                        <cds-table-header-cell
                          >Projekti, kuros izvēlēts</cds-table-header-cell
                        >
                      </cds-table-header-row>
                    </cds-table-head>
                    <cds-table-body>
                      <cds-table-row>
                        <cds-table-cell>P01 </cds-table-cell>
                        <cds-table-cell
                          >Konsultācijas ar ekspertiem nediskriminācijas
                          jomā</cds-table-cell
                        >
                        <cds-table-cell>2</cds-table-cell>
                      </cds-table-row>
                      <cds-table-row>
                        <cds-table-cell>P02 </cds-table-cell>
                        <cds-table-cell
                          >Pētījumi par sabiedrības novecošanos</cds-table-cell
                        >
                        <cds-table-cell>1</cds-table-cell>
                      </cds-table-row>
                      <cds-table-row>
                        <cds-table-cell>P03 </cds-table-cell>
                        <cds-table-cell
                          >Pētījumos integrēti dzimumu līdztiesības
                          jautājumi</cds-table-cell
                        >
                        <cds-table-cell>3</cds-table-cell>
                      </cds-table-row>
                      <cds-table-row>
                        <cds-table-cell>P04 </cds-table-cell>
                        <cds-table-cell
                          >Sabiedriskās aptaujas vairākās
                          valodās</cds-table-cell
                        >
                        <cds-table-cell>1</cds-table-cell>
                      </cds-table-row>
                    </cds-table-body>
                  </cds-table>
                </cds-table-expanded-row-wrapper>
              </cds-table-expanded-row>
            </cds-table-body>
          </cds-table>
          <cds-pagination page-size="100" total-items="100">
            <cds-select-item value="10">10</cds-select-item>
            <cds-select-item value="20">20</cds-select-item>
            <cds-select-item value="30">30</cds-select-item>
            <cds-select-item value="40">40</cds-select-item>
            <cds-select-item value="50">50</cds-select-item>
            <cds-select-item value="100">100</cds-select-item>
          </cds-pagination></span
        >
      </cds-doc-page-tab-content>
    </span>
  </cds-doc-page>`;
};

export const Modal = () => {
  return html`
    <cds-modal id="hp-admin-change-status-modal" open>
      <cds-modal-header>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-label>Horizontālo principu konfigurēšana</cds-modal-label>
        <cds-modal-heading>Statusa maiņa</cds-modal-heading>
        <cds-divider></cds-divider>
      </cds-modal-header>
      <cds-modal-body>
        <cds-text-editor
          editorId="editor_example_storybook_default_cl_ro_set"
          toolbarType="simple"
          editorConfig='{
            "editorTitle": "Komentārs",
            "max_char_length": 1000,
            "onServerLastEditor": {
              "name": "Ieva Bērziņa",
              "date": " 10.10.2022 10:22"
              }
            }'>
        </cds-text-editor>
      </cds-modal-body>

      <cds-modal-footer>
        <cds-modal-footer-button kind="secondary" data-modal-close
          >Atcelt</cds-modal-footer-button
        >
        <cds-modal-footer-button kind="primary"
          >Nodot virskontrolei</cds-modal-footer-button
        >
      </cds-modal-footer>
    </cds-modal>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Views/HP admin/Atlases HP darbību saraksts/Aizpildīts',
};
