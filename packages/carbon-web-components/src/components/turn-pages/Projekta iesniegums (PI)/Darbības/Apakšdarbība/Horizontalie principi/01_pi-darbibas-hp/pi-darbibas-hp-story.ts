import { html } from 'lit-html';
import storyDocs from './pi-darbibas-hp-story.mdx';
import './pi-darbibas-hp';
import styles from '../../../../../../../../assets/css/themes.css';

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
                <cds-breadcrumb-item>
                  <cds-breadcrumb-link href="#">8. darbība</cds-breadcrumb-link>
                </cds-breadcrumb-item>
                <cds-breadcrumb-item> 8.1 apakšdarbība </cds-breadcrumb-item>
              </cds-breadcrumb>
            </span>
            <span slot="button">
              <cds-button kind="secondary" size="sm"
                >Pārbaudīt sadaļu</cds-button
              >
            </span>
          </cds-doc-page-header>
          <cds-divider size="8"></cds-divider>
          <div class="cds--subgrid cds--subgrid--condensed">
            <div
              class="cds--css-grid-column cds--col-span-100 cds--grid-column-hang">
              <cds-label-value
                label="1. līmeņa darbība"
                value="Vētru postījumu mazinošas infrastruktūras (t. sk. “zaļās” infrastruktūras) un aprīkojuma iegāde un izveide">
              </cds-label-value>
              <cds-divider size="6"></cds-divider>
              <cds-label-value
                label="Apakšdarbības apraksts"
                value="Nav pievienots"></cds-label-value>
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
            <cds-table size="sm" expandable>
              <cds-table-header-title slot="title"
                >HP darbības un rādītāji</cds-table-header-title
              >
              <cds-table-header-description slot="description">
                Apraksts, kas paskaidro, kā strādā HP darbības.
                <cds-divider size="6"></cds-divider>
                <cds-inline-notification
                  style="min-width: 100%;"
                  title="Darbība veiksmīgi pievienota"
                  subtitle="Lūdzu, aizpildiet darbības īstenošanas aprakstu, ja darbībai tas ir nepieciešams."
                  kind="info"
                  low-contrast>
                </cds-inline-notification>
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
                    Pārvaldīt HP darbības
                  </cds-button>
                </cds-table-toolbar-content>
              </cds-table-toolbar>
              <cds-table-head>
                <cds-table-header-row>
                  <cds-table-header-cell>Kods</cds-table-header-cell>
                  <cds-table-header-cell
                    >HP darbības nosaukums</cds-table-header-cell
                  >
                </cds-table-header-row>
              </cds-table-head>
              <cds-table-body>
                <cds-table-row>
                  <cds-table-cell>KD95</cds-table-cell>
                  <cds-table-cell>Klimata risku izvērtējums</cds-table-cell>
                </cds-table-row>
                <cds-table-expanded-row> </cds-table-expanded-row>
                <cds-table-row>
                  <cds-table-cell>Izg01</cds-table-cell>
                  <cds-table-cell
                    >HP jautājumu integrēšana projekta pasākumu un izstrādāto
                    materiālu saturā</cds-table-cell
                  >
                </cds-table-row>
                <cds-table-expanded-row>
                  <cds-table-expanded-row-wrapper>
                    <cds-label-value
                      label="HP darbība"
                      value="Projekta pasākumu un izstrādāto materiālu saturā tiks integrēti nediskriminācijas jautājumi (dzimumu līdztiesība, personu ar invaliditāti vienlīdzīgas iespējas, nediskriminācija vecuma, etniskās piederības, reliģiskās pārliecības un seksuālās orientācijas dēļ), tostarp par tiesiskajiem un praktiskajiem aspektiem">
                    </cds-label-value>
                    <cds-divider size="6"></cds-divider>
                    <cds-label-value
                      label="HP darbības īstenošanas apraksts (ja attiecināms)"
                      value="Nav pievienots">
                    </cds-label-value>
                    <cds-label-value
                      label="Apraksts jāievada kontekstā ar konkrēto projekta darbību vai apakšdarbību, kuras ietvaros īstenos HP darbību">
                    </cds-label-value>
                    <cds-divider size="6"></cds-divider>
                    <cds-table size="sm">
                      <cds-table-toolbar slot="toolbar">
                        <cds-table-toolbar-content>
                          <cds-button
                            kind="secondary"
                            tooltip-alignment=""
                            tooltip-position="top"
                            type="button"
                            id="modal-example-button"
                            has-main-content="">
                            Pārvaldīt HP rādītājus
                          </cds-button>
                        </cds-table-toolbar-content>
                      </cds-table-toolbar>
                      <cds-table-head>
                        <cds-table-header-row>
                          <cds-table-header-cell>ID</cds-table-header-cell>
                          <cds-table-header-cell
                            >Saistītais HP rādītājs</cds-table-header-cell
                          >
                        </cds-table-header-row>
                      </cds-table-head>
                      <cds-table-body>
                        <cds-table-row>
                          <cds-table-cell>Vinpi 02.1</cds-table-cell>
                          <cds-table-cell
                            >Pasākumu un izstrādāto materiālu, kuru saturā
                            integrēti nediskriminācijas jautājumi, tostarp par
                            tiesiskajiem un praktiskajiem aspektiem,
                            skaits</cds-table-cell
                          >
                        </cds-table-row>
                      </cds-table-body>
                    </cds-table>
                    <cds-divider size="5"></cds-divider>
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

export const Pievienot = () => {
  return html`
    <cds-modal
      class="cds-theme-zone-white cds-blue-theme"
      id="pi-hp-edit-modal"
      open>
      <cds-modal-header>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-label>HP darbības un rādītāji</cds-modal-label>
        <cds-modal-heading>HP darbibas izveidošana</cds-modal-heading>
        <cds-divider size="5"></cds-divider>
      </cds-modal-header>
      <cds-modal-body>
        <div class="cds--subgrid cds--subgrid--condensed">
          <div
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-7 cds--lg:col-span-14">
            <cds-label-value
              label="HP darbības grupas nosaukums"
              value="Projekta pasākumu un izstrādāto materiālu saturā tiks integrēti nediskriminācijas jautājumi (dzimumu līdztiesība, personu ar invaliditāti vienlīdzīgas iespējas, nediskriminācija vecuma, etniskās piederības, reliģiskās pārliecības un seksuālās orientācijas dēļ), tostarp par tiesiskajiem un praktiskajiem aspektiem">
            </cds-label-value>
            <cds-divider size="6"></cds-divider>
            <cds-text-editor
              editorId="editor_example_storybook_simple"
              toolbarType="simple"
              editorConfig='{
                "editorTitle": "HP darbības īstenošanas apraksts (ja attiecināms)",
                "onServerLastEditor": {
                  "name": "Apraksts jāievada kontekstā ar konkrēto projekta darbību vai apakšdarbību, kuras ietvaros īstenos HP darbību",
                },
                "autosave_ask_before_unload": false
                }'>
            </cds-text-editor>
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

export const Parvaldit = () => {
  return html`
    <cds-modal
      class="cds-theme-zone-white cds-blue-theme"
      id="pi-hp-edit-modal"
      open>
      <cds-modal-header>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-label>HP darbības un rādītāji</cds-modal-label>
        <cds-modal-heading>Saistīto HP rādītāju pārvaldīšana</cds-modal-heading>
        <cds-divider size="5"></cds-divider>
      </cds-modal-header>
      <cds-modal-body>
        <div class="cds--subgrid cds--subgrid--condensed">
          <div
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-7 cds--lg:col-span-14">
            <cds-label-value
              label="HP darbība"
              value="Projekta pasākumu un izstrādāto materiālu saturā tiks integrēti nediskriminācijas jautājumi (dzimumu līdztiesība, personu ar invaliditāti vienlīdzīgas iespējas, nediskriminācija vecuma, etniskās piederības, reliģiskās pārliecības un seksuālās orientācijas dēļ), tostarp par tiesiskajiem un praktiskajiem aspektiem">
            </cds-label-value>
          </div>
        </div>
        <cds-divider size="6"></cds-divider>

        <cds-table size="sm" expandable>
          <cds-table-head>
            <cds-table-header-row>
              <cds-table-header-cell>ID</cds-table-header-cell>
              <cds-table-header-cell
                >HP darbības nosaukums</cds-table-header-cell
              >
              <cds-table-header-cell>Īstenošana</cds-table-header-cell>
            </cds-table-header-row>
          </cds-table-head>
          <cds-table-body>
            <cds-table-row>
              <cds-table-cell>Vinpi 02.1</cds-table-cell>
              <cds-table-cell
                >Pasākumu un izstrādāto materiālu, kuru saturā integrēti
                nediskriminācijas jautājumi, tostarp par tiesiskajiem un
                praktiskajiem aspektiem, skaits</cds-table-cell
              >
              <cds-table-cell
                ><cds-toggle
                  size="sm"
                  label-a="Izvēlēts"
                  label-b="Nav izvēlēts"></cds-toggle
              ></cds-table-cell>
            </cds-table-row>
            <cds-table-expanded-row>
              <cds-table-expanded-row-wrapper></cds-table-expanded-row-wrapper>
            </cds-table-expanded-row>
          </cds-table-body>
        </cds-table>
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
    'Views/Projekta iesniegums (PI)/Darbības/Apakšdarbība/Horizontālie principi/Aizpildīts',
};
