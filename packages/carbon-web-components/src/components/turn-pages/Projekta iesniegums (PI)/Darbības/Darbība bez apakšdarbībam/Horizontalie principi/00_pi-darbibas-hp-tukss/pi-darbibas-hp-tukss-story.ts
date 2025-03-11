import { html } from 'lit-html';
import storyDocs from './pi-darbibas-hp-tukss-story.mdx';
import './pi-darbibas-hp-tukss';
import styles from '../../../../../../../../assets/css/themes.css';
import Add16 from '@carbon/icons/lib/add/16';
import Download16 from '@carbon/icons/lib/download/16';

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

          <cds-doc-page-header
            type="subtitle"
            title="8.1 Apakšdarbība - Informatīvās plāksnes izvietošana">
            <span slot="breadcrumb">
              <cds-breadcrumb>
                <cds-breadcrumb-item>
                  <cds-breadcrumb-link href="/#"
                    >Projekta iesniegums</cds-breadcrumb-link
                  >
                </cds-breadcrumb-item>
                <cds-breadcrumb-item>
                  <cds-breadcrumb-link href="#">Darbības</cds-breadcrumb-link>
                </cds-breadcrumb-item>
                <cds-breadcrumb-item> 1.darbība </cds-breadcrumb-item>
              </cds-breadcrumb>
            </span>
            <span slot="button">
              <cds-button kind="secondary" size="sm"
                >Pārbaudīt sadaļu</cds-button
              >
            </span>
          </cds-doc-page-header>
          <cds-divider size="10"></cds-divider>
          <div class="cds--subgrid cds--subgrid--condensed">
            <div
              class="cds--css-grid-column cds--col-span-100 cds--grid-column-hang">
              <cds-label-value label="Darbības apraksts" value="Nav pievienots">
              </cds-label-value>
              <cds-divider size="6"></cds-divider>
              <cds-label-value
                label="Vai darbībai pardzētas apakšdarbības?"
                value="Nē, nav apakšdarbību">
              </cds-label-value>
              <cds-divider size="6"></cds-divider>
            </div>
          </div>
          <cds-tabs value="sixth" type="contained">
            <cds-tab id="tab-first" target="panel-first" value="first">
              Rādītāji
            </cds-tab>
            <cds-tab id="tab-second" target="panel-second" value="second">
              Rezultāti
            </cds-tab>
            <cds-tab id="tab-third" target="panel-third" value="third">
              Īstenošanas grafiks
            </cds-tab>
            <cds-tab id="tab-fourth" target="panel-fourth" value="fourth">
              Budžeta pozīcijas
            </cds-tab>
            <cds-tab id="tab-fifth" target="panel-fifth" value="fifth">
              Sadarbības partneri
            </cds-tab>
            <cds-tab id="tab-sixth" target="panel-sixth" value="sixth">
              Horizontālie principi
            </cds-tab>
          </cds-tabs>

          <div
            id="panel-sixth"
            role="tabpanel"
            aria-labelledby="tab-sixth"
            hidden="">
            <cds-divider size="8"></cds-divider>
            <cds-accordion>
              <cds-accordion-item title="HP nosacījumi atlasē">
                <cds-divider size="3"></cds-divider>
                <div class="cds--subgrid cds--subgrid--condensed">
                  <div
                    class="turn-body-01 cds--css-grid-column cds--col-span-100 cds--grid-column-hang">
                    <p>Apraksts par nosacījumiem.</p>
                  </div>
                </div>
                <cds-divider size="7"></cds-divider>
                <cds-table size="sm">
                  <cds-table-header-title slot="title"
                    >HP darbības</cds-table-header-title
                  >
                  <cds-table-head>
                    <cds-table-header-row>
                      <cds-table-header-cell
                        >HP darbību grupas nosaukums</cds-table-header-cell
                      >
                      <cds-table-header-cell
                        >Min. nepiec. projektā</cds-table-header-cell
                      >
                      <cds-table-header-cell
                        >Projektā kopā ievadīts</cds-table-header-cell
                      >
                      <cds-table-header-cell
                        >Pie šīs darbības ievadīts</cds-table-header-cell
                      >
                    </cds-table-header-row>
                  </cds-table-head>
                  <cds-table-body>
                    <cds-table-row>
                      <cds-table-cell>Klimatdrošināšana</cds-table-cell>
                      <cds-table-cell>1</cds-table-cell>
                      <cds-table-cell>1</cds-table-cell>
                      <cds-table-cell>0</cds-table-cell>
                    </cds-table-row>
                    <cds-table-row>
                      <cds-table-cell
                        >VINPI - Vispārīgās darbības</cds-table-cell
                      >
                      <cds-table-cell>1</cds-table-cell>
                      <cds-table-cell>1</cds-table-cell>
                      <cds-table-cell>0</cds-table-cell>
                    </cds-table-row>
                    <cds-table-row>
                      <cds-table-cell
                        >VINPI - Specifiskās darbības</cds-table-cell
                      >
                      <cds-table-cell>2</cds-table-cell>
                      <cds-table-cell>1</cds-table-cell>
                      <cds-table-cell>0</cds-table-cell>
                    </cds-table-row>
                  </cds-table-body>
                </cds-table>
                <cds-divider size="6"></cds-divider>
                <cds-table size="sm">
                  <cds-table-header-title slot="title"
                    >HP darbības</cds-table-header-title
                  >

                  <cds-table-head>
                    <cds-table-header-row>
                      <cds-table-header-cell
                        >HP darbību grupas nosaukums</cds-table-header-cell
                      >
                      <cds-table-header-cell
                        >Min. nepiec. projektā</cds-table-header-cell
                      >
                      <cds-table-header-cell
                        >Projektā kopā ievadīts</cds-table-header-cell
                      >
                      <cds-table-header-cell
                        >Pie šīs darbības ievadīts</cds-table-header-cell
                      >
                    </cds-table-header-row>
                  </cds-table-head>
                  <cds-table-body>
                    <cds-table-row>
                      <cds-table-cell>Klimatdrošināšana</cds-table-cell>
                      <cds-table-cell>1</cds-table-cell>
                      <cds-table-cell>1</cds-table-cell>
                      <cds-table-cell>0</cds-table-cell>
                    </cds-table-row>
                    <cds-table-row>
                      <cds-table-cell
                        >VINPI - Vispārīgās darbības</cds-table-cell
                      >
                      <cds-table-cell>1</cds-table-cell>
                      <cds-table-cell>1</cds-table-cell>
                      <cds-table-cell>0</cds-table-cell>
                    </cds-table-row>
                    <cds-table-row>
                      <cds-table-cell
                        >VINPI - Specifiskās darbības</cds-table-cell
                      >
                      <cds-table-cell>2</cds-table-cell>
                      <cds-table-cell>1</cds-table-cell>
                      <cds-table-cell>0</cds-table-cell>
                    </cds-table-row>
                  </cds-table-body>
                </cds-table>
              </cds-accordion-item>
            </cds-accordion>
            <cds-divider size="8"></cds-divider>
            <cds-table size="sm">
              <cds-table-header-title slot="title"
                >HP darbības un rādītāji</cds-table-header-title
              >
              <cds-table-header-description slot="description"
                >Apraksts, kas paskaidro, kā strādā HP
                darbības.</cds-table-header-description
              >
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
                    Pārvaldīt HP darbības ${Add16({ slot: 'icon' })}
                  </cds-button>
                </cds-table-toolbar-content>
              </cds-table-toolbar>
              <cds-table-body> </cds-table-body>
            </cds-table>
            <cds-empty-state
              text="Šobrīd nav izvēlēta neviena HP darbība"
              linkUrl="#"
              linkText="Pārvaldīt"></cds-empty-state>
          </div>
        </div>
      </div>
    </div>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title:
    'Views/Projekta iesniegums (PI)/Darbības/Darbība bez apakšdarbībam/Horizontālie principi/Tukšs',
};
