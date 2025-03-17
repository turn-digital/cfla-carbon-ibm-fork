import { html } from 'lit-html';
import storyDocs from './pi-darbibas-rezultati-story.mdx';
import './pi-darbibas-rezultati';
import styles from '../../../../../../../../assets/css/themes.css';
import OverflowMenuVertical16 from '@carbon/icons/lib/overflow-menu--vertical/16';
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
          <cds-tabs value="second" type="contained">
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
            id="panel-second"
            role="tabpanel"
            aria-labelledby="tab-second"
            hidden="">
            <cds-divider size="6"></cds-divider>
            <cds-table size="sm" expandable>
              <cds-table-header-title slot="title"
                >Darbības rezultāti</cds-table-header-title
              >
              <cds-table-header-description slot="description">
                Nav obligāti, ja darbībai ir piesaistīts vismaz viens rādītājs.
                Ja no darbības tieši neizriet rādītāja sasniegšana, tad var
                pievienot savu izmērāmu rezultātu, konkrētai darbībai
              </cds-table-header-description>
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
                    Pievienot darbības rezultātus
                  </cds-button>
                </cds-table-toolbar-content>
              </cds-table-toolbar>
              <cds-table-head>
                <cds-table-header-row>
                  <cds-table-header-cell>ID</cds-table-header-cell>
                  <cds-table-header-cell
                    >Darbības rezultāta nosaukums</cds-table-header-cell
                  >
                  <cds-table-header-cell>Mērvienība</cds-table-header-cell>
                  <cds-table-header-cell>Vērtība</cds-table-header-cell>
                  <cds-table-header-cell></cds-table-header-cell>
                </cds-table-header-row>
              </cds-table-head>
              <cds-table-body>
                <cds-table-row>
                  <cds-table-cell>R1</cds-table-cell>
                  <cds-table-cell
                    >Melorācijas sistēmu atjaunošana</cds-table-cell
                  >
                  <cds-table-cell>Skaits</cds-table-cell>
                  <cds-table-cell>45 </cds-table-cell>
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
                  </cds-table-expanded-row-wrapper>
                </cds-table-expanded-row>
                <cds-table-row>
                  <cds-table-cell>R2</cds-table-cell>
                  <cds-table-cell
                    >Savākšanas sistēmu atjaunošana</cds-table-cell
                  >
                  <cds-table-cell>Skaits</cds-table-cell>
                  <cds-table-cell>2</cds-table-cell>
                  <cds-table-cell> </cds-table-cell>
                </cds-table-row>
                <cds-table-expanded-row>
                  <cds-table-expanded-row-wrapper>
                    <cds-label-value
                      label="Piezīme"
                      value="⚠️ Nav ievadīts"></cds-label-value>
                  </cds-table-expanded-row-wrapper>
                </cds-table-expanded-row>
                <cds-table-row>
                  <cds-table-cell>R3(V)</cds-table-cell>
                  <cds-table-cell>Pielāgošana klimata pārmaiņām</cds-table-cell>
                  <cds-table-cell>Skaits</cds-table-cell>
                  <cds-table-cell>1 </cds-table-cell>
                  <cds-table-cell> </cds-table-cell>
                </cds-table-row>
                <cds-table-expanded-row>
                  <cds-table-expanded-row-wrapper>
                    <cds-label-value label="Piezīme" value="⚠️ Nav ievadīts">
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

export const Labot = () => {
  return html`
    <cds-modal
      class="cds-theme-zone-white cds-blue-theme"
      id="pi-subactions-modal-2"
      open>
      <cds-modal-header>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-label>Darbības rezultāti</cds-modal-label>
        <cds-modal-heading>Darbības rezultāta labošana</cds-modal-heading>
        <cds-divider size="5"></cds-divider>
      </cds-modal-header>
      <cds-modal-body>
        <cds-layer>
          <div class="cds--subgrid cds--subgrid--condensed">
            <div
              class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-7 cds--lg:col-span-14">
              <cds-text-input
                label="Darbības rezultāta nosaukums"
                placeholder="Melorācijas sistēmu atjaunošana"
                invalid-text="Error message">
              </cds-text-input>
              <cds-divider size="6"></cds-divider>
              <cds-text-input
                label="Mērvienība"
                placeholder="Skaits"
                invalid-text="Error message">
              </cds-text-input>
              <cds-divider size="6"></cds-divider>
              <cds-text-input
                label="Beigu vērtība"
                placeholder="Ievadiet beigu vērtību"
                helper-text="Attiecas uz konkrēto darbību un nav kumulatīva"
                invalid-text="Error message">
              </cds-text-input>
              <cds-divider size="6"></cds-divider>
              <cds-text-editor
                editorId="editor_example_storybook_simple"
                toolbarType="simple"
                editorConfig='{
          "editorTitle": "Piezīmes",
          "autosave_ask_before_unload": false
          }'>
              </cds-text-editor>
              <cds-divider size="6"></cds-divider>
              <cds-label-value
                label="Saistītās darbības"
                value="<ul><li>1.Darbība - Esošo meliorācijas sistēmu un lietusūdens savākšanas sistēmu atjaunošana un vides pielāgošana klimata pārmaiņām</li></ul>"></cds-label-value>
            </div>
          </div>
        </cds-layer>
      </cds-modal-body>
      <cds-modal-footer>
        <cds-modal-footer-button kind="secondary" data-modal-close
          >Atcelt</cds-modal-footer-button
        >
        <cds-modal-footer-button kind="primary"
          >Saglabāt</cds-modal-footer-button
        >
      </cds-modal-footer>
    </cds-modal>
  `;
};

export const Pievienot = () => {
  return html`
    <cds-modal
      class="cds-theme-zone-white cds-blue-theme"
      id="pi-subactions-modal-2"
      open>
      <cds-modal-header>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-label>Darbības rezultāti</cds-modal-label>
        <cds-modal-heading>Darbības rezultāta pievienošana</cds-modal-heading>
        <cds-divider size="5"></cds-divider>
      </cds-modal-header>
      <cds-modal-body>
        <div class="cds--subgrid cds--subgrid--condensed">
          <div
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-7 cds--lg:col-span-14">
            <cds-text-input
              label="Darbības rezultāta nosaukums"
              placeholder="."
              invalid-text="Error message">
            </cds-text-input>
            <cds-divider size="6"></cds-divider>
            <cds-text-input
              label="Mērvienība"
              placeholder="."
              invalid-text="Error message">
            </cds-text-input>
            <cds-divider size="6"></cds-divider>
            <cds-text-input
              label="Beigu vērtība"
              placeholder="Ievadiet beigu vērtību"
              helper-text="Attiecas uz konkrēto darbību un nav kumulatīva"
              invalid-text="Error message">
            </cds-text-input>
            <cds-divider size="6"></cds-divider>
            <cds-text-editor
              editorId="editor_example_storybook_simple"
              toolbarType="simple"
              editorConfig='{
          "editorTitle": "Piezīmes",
          "autosave_ask_before_unload": false
          }'>
            </cds-text-editor>
            <cds-divider size="6"></cds-divider>
            <cds-label-value
              label="Saistītās darbības"
              value="<ul><li>1.Darbība - Esošo meliorācijas sistēmu un lietusūdens savākšanas sistēmu atjaunošana un vides pielāgošana klimata pārmaiņām</li></ul>"></cds-label-value>
          </div>
        </div>
      </cds-modal-body>
      <cds-modal-footer>
        <cds-modal-footer-button kind="secondary" data-modal-close
          >Atcelt</cds-modal-footer-button
        >
        <cds-modal-footer-button kind="primary"
          >Saglabāt</cds-modal-footer-button
        >
      </cds-modal-footer>
    </cds-modal>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title:
    'Views/Projekta iesniegums (PI)/Darbības/Darbība bez apakšdarbībam/Rezultāti/Aizpildīts',
};
