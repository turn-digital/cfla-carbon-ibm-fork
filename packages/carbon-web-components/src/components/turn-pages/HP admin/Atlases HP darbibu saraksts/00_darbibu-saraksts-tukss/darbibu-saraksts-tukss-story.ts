import { html } from 'lit-html';
import storyDocs from './darbibu-saraksts-tukss-story.mdx';
import './darbibu-saraksts-tukss';
// import styles from '../../../../../../assets/css/themes.css';
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
  return html`
    <cds-doc-page>
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
          <span slot="tab-content"
            ><cds-table size="sm">
              <cds-table-header-title slot="title"
                >Atlases HP darbību saraksts</cds-table-header-title
              >
              <cds-table-toolbar slot="toolbar">
                <cds-table-toolbar-content>
                  <cds-button
                    kind="secondary"
                    tooltip-alignment=""
                    tooltip-position="top"
                    type="button"
                    id="modal-example-button"
                    has-main-content="">
                    Pievienot ${Add16({ slot: 'icon' })}
                  </cds-button>
                </cds-table-toolbar-content>
              </cds-table-toolbar>
              <cds-table-head>
                <cds-table-header-row>
                  <cds-table-header-cell
                    >HP darbību grupa</cds-table-header-cell
                  >
                  <cds-table-header-cell>Ietekmes veids</cds-table-header-cell>
                  <cds-table-header-cell
                    >Min. HP rad. sk.</cds-table-header-cell
                  >
                  <cds-table-header-cell>HP rad. sk.</cds-table-header-cell>
                  <cds-table-header-cell
                    >Min. HP darb. sk.</cds-table-header-cell
                  >
                  <cds-table-header-cell>HP darb. sk.</cds-table-header-cell>
                </cds-table-header-row>
              </cds-table-head>
              <cds-table-body> </cds-table-body>
            </cds-table>
            <cds-empty-state
              text="Šobrīd atlases HP darbības nav pievienotas"
              linkUrl="#"
              linkText="Pievienot">
            </cds-empty-state>
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
    </cds-doc-page>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Views/HP admin/Atlases HP darbību saraksts/Tukšs',
};
