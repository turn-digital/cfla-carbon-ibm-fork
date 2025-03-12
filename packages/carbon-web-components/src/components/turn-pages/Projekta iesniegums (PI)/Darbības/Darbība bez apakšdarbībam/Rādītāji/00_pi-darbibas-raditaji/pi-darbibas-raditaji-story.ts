import { html } from 'lit-html';
import storyDocs from './pi-darbibas-raditaji-story.mdx';
import './pi-darbibas-raditaji';
import styles from '../../../../../../../../assets/css/themes.css';
import OverflowMenuVertical16 from '@carbon/icons/lib/overflow-menu--vertical/16';

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
            title="1.Darbība - Esošo meliorācijas sistēmu un lietusūdens savākšanas sistēmu atjaunošana un vides pielāgošana klimata pārmaiņām">
            <span slot="breadcrumb">
              <cds-breadcrumb no-trailing-slash>
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
                value="Nē, nav apakšdarbību"></cds-label-value>
              <cds-divider size="6"></cds-divider>
            </div>
          </div>
          <cds-tabs value="first" type="contained">
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
            id="panel-first"
            role="tabpanel"
            aria-labelledby="tab-first"
            hidden="">
            <cds-divider size="6"></cds-divider>
            <cds-table size="sm" expandable>
              <cds-table-header-title slot="title"
                >Uzraudzības rādītāji</cds-table-header-title
              >
              <cds-table-header-description slot="description">
                Globāli visā projektā definēti atlases līmenī, jāsasniedz
                projekta beigās. Vienu un to pašu rādītāju var sasniegt ar
                vairākām darbībām. Rādītāja vērtība kopīga visā projektā nav
                jādala pa darbībām. Vērtību jāievada rādītāju sadaļā.
              </cds-table-header-description>
              <cds-table-toolbar slot="toolbar">
                <cds-table-toolbar-content>
                  <cds-table-toolbar-search
                    placeholder="Filter table"></cds-table-toolbar-search>
                  <cds-button
                    kind="secondary"
                    tooltip-alignment=""
                    tooltip-position="top"
                    type="button"
                    id="modal-example-button"
                    has-main-content="">
                    Pārvaldīt uzraudzības rādītājus
                  </cds-button>
                </cds-table-toolbar-content>
              </cds-table-toolbar>
              <cds-table-head>
                <cds-table-header-row>
                  <cds-table-header-cell>ID</cds-table-header-cell>
                  <cds-table-header-cell
                    >Radītāja nosaukums</cds-table-header-cell
                  >
                  <cds-table-header-cell>Mērvienība</cds-table-header-cell>
                  <cds-table-header-cell>Vērtība</cds-table-header-cell>
                  <cds-table-header-cell></cds-table-header-cell>
                </cds-table-header-row>
              </cds-table-head>
              <cds-table-body>
                <cds-table-row>
                  <cds-table-cell>N.1.1.1.5.d</cds-table-cell>
                  <cds-table-cell
                    >ERAF atbalstīti un virs kvalitātes sliekšņa novērtēti
                    programmas "Apvārsnis Eiropa" un programmas 10. IP projektu
                    pieteikumi</cds-table-cell
                  >
                  <cds-table-cell>Skaits</cds-table-cell>
                  <cds-table-cell
                    ><cds-link href="https://www.ibm.com">
                      Ievadīt vērtību
                    </cds-link>
                  </cds-table-cell>
                  <cds-table-cell>
                    <cds-overflow-menu>
                      ${OverflowMenuVertical16({
                        class: `cds--overflow-menu__icon`,
                        slot: 'icon',
                      })}
                      <span slot="tooltip-content"> Opcijas </span>
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
                <cds-table-expanded-row>
                  <cds-table-expanded-row-wrapper>
                    <cds-label-value label="Rādītāja veids" value="Iznākuma">
                    </cds-label-value>
                    <cds-divider size="5"></cds-divider>
                    <cds-label-value
                      label="Sākuma vērtība"
                      value="⚠️ Nav ievadīts">
                    </cds-label-value>
                    <cds-divider size="5"></cds-divider>
                    <cds-label-value
                      label="Beigu vērtība"
                      value="⚠️ Nav ievadīts">
                    </cds-label-value>
                    <cds-divider size="5"></cds-divider>
                    <cds-label-value
                      label="Saistītās darbības"
                      value="<ul><li><cds-link href='https://www.ibm.com'>4 vētru postijumu mazinošas infrastruktūras (t.sk. “zaļās” infrastruktūras) un aprīkojuma iegāde un izveide</cds-link></li></ul>">
                    </cds-label-value>
                  </cds-table-expanded-row-wrapper>
                </cds-table-expanded-row>
              </cds-table-body>
            </cds-table>
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
    'Views/Projekta iesniegums (PI)/Darbības/Darbība bez apakšdarbībam/Rādītāji/Aizpildīts',
};
