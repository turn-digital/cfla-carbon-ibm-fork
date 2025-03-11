import { html } from 'lit-html';
import storyDocs from './pi-darbibu-saraksts-tukss-story.mdx';
import './pi-darbibu-saraksts-tukss';
import styles from '../../../../../../../assets/css/themes.css';
import Download16 from '@carbon/icons/lib/download/16';
import Launch16 from '@carbon/icons/lib/launch/16';

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
    <div class="cds-theme-zone-white cds-blue-theme">
      <div class="cds--css-grid cds--css-grid--narrow">
        <div class="cds--css-grid-column cds--col-span-100">
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

          <cds-doc-page-header type="subtitle" title="Darbības">
            <span slot="breadcrumb">
              <cds-breadcrumb no-trailing-slash>
                <cds-breadcrumb-item>
                  <cds-breadcrumb-link href="/#"
                    >Projekta iesniegums</cds-breadcrumb-link
                  >
                </cds-breadcrumb-item>
                <cds-breadcrumb-item> Darbības </cds-breadcrumb-item>
              </cds-breadcrumb>
            </span>
            <span slot="button">
              <cds-button kind="secondary" size="sm"
                >Pārbaudīt sadaļu</cds-button
              >
            </span>
          </cds-doc-page-header>

          <cds-divider size="7"></cds-divider>

          <div class="cds--subgrid cds--subgrid--condensed">
            <div
              class="cds--css-grid-column cds--col-span-100 cds--grid-column-hang">
              <cds-link href="https://www.ibm.com">
                Darbību detalizētais skats ${Launch16({ slot: 'icon' })}
              </cds-link>
            </div>
          </div>
          <cds-divider size="3"></cds-divider>
          <cds-table size="sm">
            <cds-table-toolbar slot="toolbar">
              <cds-table-toolbar-content>
                <cds-table-toolbar-search
                  placeholder="Filter table"></cds-table-toolbar-search>
                <cds-button kind="ghost"
                  >${Download16({
                    slot: 'icon',
                    fill: 'black',
                  })}
                </cds-button>
                <cds-button
                  kind="secondary"
                  tooltip-alignment=""
                  tooltip-position="top"
                  type="button"
                  id="modal-example-button"
                  has-main-content="">
                  Pārvaldīt
                </cds-button>
              </cds-table-toolbar-content>
            </cds-table-toolbar>
            <cds-table-body> </cds-table-body>
          </cds-table>
          <cds-empty-state
            text="Šobrīd nav izvēlēta neviena darbība"
            linkUrl="#"
            linkText="Pārvaldīt"></cds-empty-state>
        </div>
      </div>
    </div>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Views/Projekta iesniegums (PI)/Darbības/Darbibu saraksts/Tukšs',
};
