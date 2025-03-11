import { html } from 'lit-html';
import storyDocs from './pi-darbibu-saraksts-story.mdx';
import './pi-darbibu-saraksts';
import styles from '../../../../../../../assets/css/themes.css';
import Download16 from '@carbon/icons/lib/download/16';
import Add16 from '@carbon/icons/lib/add/16';
import Launch16 from '@carbon/icons/lib/launch/16';

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
              <cds-breadcrumb>
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

          <cds-table size="sm" expandable>
            <cds-table-head>
              <cds-table-header-row>
                <cds-table-header-cell>Kods</cds-table-header-cell>
                <cds-table-header-cell>Darbība</cds-table-header-cell>
                <cds-table-header-cell>Apakšdarbību sk.</cds-table-header-cell>
              </cds-table-header-row>
            </cds-table-head>
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
            <cds-table-body>
              <cds-table-row>
                <cds-table-cell>1</cds-table-cell>
                <cds-table-cell
                  >Esošo meliorācijas sistēmu un lietusūdens savākšanas sistēmu
                  atjaunošana un vides pielāgošana klimata
                  pārmaiņām</cds-table-cell
                >
                <cds-table-cell>0</cds-table-cell>
              </cds-table-row>
              <cds-table-expanded-row>
                <cds-table-expanded-row-wrapper>
                  <cds-table>
                    <cds-table-head>
                      <cds-table-header-row>
                        <cds-table-header-cell>ID</cds-table-header-cell>
                        <cds-table-header-cell
                          >Apakšdarbība</cds-table-header-cell
                        >
                      </cds-table-header-row>
                    </cds-table-head>
                    <cds-table-body>
                      <cds-table-row>
                        <cds-table-cell>8.1</cds-table-cell>
                        <cds-table-cell
                          >Informatīvās plāksnes izvietošana</cds-table-cell
                        >
                      </cds-table-row>
                      <cds-table-row>
                        <cds-table-cell>8.2</cds-table-cell>
                        <cds-table-cell
                          >Informācijas publicēšana tīmekļvietnē</cds-table-cell
                        >
                      </cds-table-row>
                    </cds-table-body>
                  </cds-table>
                </cds-table-expanded-row-wrapper>
              </cds-table-expanded-row>
              <cds-table-row>
                <cds-table-cell>8</cds-table-cell>
                <cds-table-cell
                  >Komunikācijas un vizuālās identitātes pasākumi par projekta
                  īstenošanu</cds-table-cell
                >
                <cds-table-cell>2</cds-table-cell>
              </cds-table-row>
              <cds-table-expanded-row>
                <cds-table-expanded-row-wrapper>
                  <cds-table>
                    <cds-table-head>
                      <cds-table-header-row>
                        <cds-table-header-cell>ID</cds-table-header-cell>
                        <cds-table-header-cell
                          >Apakšdarbība</cds-table-header-cell
                        >
                      </cds-table-header-row>
                    </cds-table-head>
                    <cds-table-body>
                      <cds-table-row>
                        <cds-table-cell>8.1</cds-table-cell>
                        <cds-table-cell
                          >Informatīvās plāksnes izvietošana</cds-table-cell
                        >
                      </cds-table-row>
                      <cds-table-row>
                        <cds-table-cell>8.2</cds-table-cell>
                        <cds-table-cell
                          >Informācijas publicēšana tīmekļvietnē</cds-table-cell
                        >
                      </cds-table-row>
                    </cds-table-body>
                  </cds-table>
                </cds-table-expanded-row-wrapper>
              </cds-table-expanded-row>
            </cds-table-body>
          </cds-table>
        </div>
      </div>
    </div>
  `;
};

export const Modal = () => {
  return html`
    <cds-modal
      class="cds-theme-zone-white cds-blue-theme"
      size="lg"
      id="pi-actions-modal-1"
      open>
      <cds-modal-header>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-label>Darbības</cds-modal-label>
        <cds-modal-heading>Darbību pārvaldīšana</cds-modal-heading>
        <cds-divider size="5"></cds-divider>
      </cds-modal-header>
      <cds-modal-body>
        <cds-table size="sm" expandable>
          <cds-table-head>
            <cds-table-header-row>
              <cds-table-header-cell>Kods</cds-table-header-cell>
              <cds-table-header-cell>1. līmeņa darbība</cds-table-header-cell>
              <cds-table-header-cell>Apakšdarbības</cds-table-header-cell>
              <cds-table-header-cell>Īstenošana</cds-table-header-cell>
            </cds-table-header-row>
          </cds-table-head>
          <cds-table-body>
            <cds-table-row>
              <cds-table-cell>KD95</cds-table-cell>
              <cds-table-cell
                >esošo meliorācijas sistēmu un lietusūdens savākšanas sistēmu
                atjaunošana un vides pielāgošana klimata
                pārmaiņām</cds-table-cell
              >
              <cds-table-cell>0</cds-table-cell>
              <cds-table-cell>
                <cds-toggle
                  checked
                  size="sm"
                  label-a="Izvēlēts"
                  label-b="Nav izvēlēts">
                </cds-toggle>
              </cds-table-cell>
            </cds-table-row>
            <cds-table-expanded-row>
              <cds-table-expanded-row-wrapper>
                <cds-table size="sm">
                  <cds-table-head>
                    <cds-table-header-row>
                      <cds-table-header-cell>ID</cds-table-header-cell>
                      <cds-table-header-cell
                        >Apakšdarbības nosaukums</cds-table-header-cell
                      >
                      <cds-table-header-cell>Īstenošana</cds-table-header-cell>
                    </cds-table-header-row>
                  </cds-table-head>
                  <cds-table-toolbar slot="toolbar">
                    <cds-table-toolbar-content>
                      <cds-button
                        kind="secondary"
                        tooltip-alignment=""
                        tooltip-position="top"
                        type="button"
                        id="modal-example-button"
                        has-main-content="">
                        Pievienot jaunu apakšdarbību ${Add16({ slot: 'icon' })}
                      </cds-button>
                    </cds-table-toolbar-content>
                  </cds-table-toolbar>
                  <cds-table-body>
                    <cds-table-row>
                      <cds-table-cell>8.1.</cds-table-cell>
                      <cds-table-cell
                        >Informatīvās plāksnes izvietošana</cds-table-cell
                      >
                      <cds-table-cell>
                        <cds-toggle
                          checked
                          size="sm"
                          label-a="Izvēlēts"
                          label-b="Nav izvēlēts">
                        </cds-toggle>
                      </cds-table-cell>
                    </cds-table-row>
                    <cds-table-row>
                      <cds-table-cell>8.1.</cds-table-cell>
                      <cds-table-cell
                        >Informatīvās plāksnes izvietošana</cds-table-cell
                      >
                      <cds-table-cell>
                        <cds-toggle
                          checked
                          size="sm"
                          label-a="Izvēlēts"
                          label-b="Nav izvēlēts">
                        </cds-toggle>
                      </cds-table-cell>
                    </cds-table-row>
                  </cds-table-body>
                </cds-table>
              </cds-table-expanded-row-wrapper>
            </cds-table-expanded-row>
            <cds-table-row>
              <cds-table-cell>KD96</cds-table-cell>
              <cds-table-cell
                >kompleksi risinājumi, lai veicinātu applūstošo teritoriju,
                erozijai pakļautu ūdenstilpju un ūdensteču krasta un peldvietu
                noturību pret klimata pārmaiņām (iekļaujot pasākumus civilās
                aizsardzības stiprināšanai)</cds-table-cell
              >
              <cds-table-cell>0</cds-table-cell>
              <cds-table-cell>
                <cds-toggle
                  checked
                  size="sm"
                  label-a="Izvēlēts"
                  label-b="Nav izvēlēts">
                </cds-toggle>
              </cds-table-cell>
            </cds-table-row>
            <cds-table-expanded-row>
              <cds-table-expanded-row-wrapper>
                <cds-table size="sm">
                  <cds-table-head>
                    <cds-table-header-row>
                      <cds-table-header-cell>ID</cds-table-header-cell>
                      <cds-table-header-cell
                        >Apakšdarbības nosaukums</cds-table-header-cell
                      >
                      <cds-table-header-cell>Īstenošana</cds-table-header-cell>
                    </cds-table-header-row>
                  </cds-table-head>
                  <cds-table-toolbar slot="toolbar">
                    <cds-table-toolbar-content>
                      <cds-button
                        kind="secondary"
                        tooltip-alignment=""
                        tooltip-position="top"
                        type="button"
                        id="modal-example-button"
                        has-main-content="">
                        Pievienot jaunu apakšdarbību ${Add16({ slot: 'icon' })}
                      </cds-button>
                    </cds-table-toolbar-content>
                  </cds-table-toolbar>
                  <cds-table-body>
                    <cds-table-row>
                      <cds-table-cell>8.1.</cds-table-cell>
                      <cds-table-cell
                        >Informatīvās plāksnes izvietošana</cds-table-cell
                      >
                      <cds-table-cell>
                        <cds-toggle
                          checked
                          size="sm"
                          label-a="Izvēlēts"
                          label-b="Nav izvēlēts">
                        </cds-toggle>
                      </cds-table-cell>
                    </cds-table-row>
                    <cds-table-row>
                      <cds-table-cell>8.1.</cds-table-cell>
                      <cds-table-cell
                        >Informatīvās plāksnes izvietošana</cds-table-cell
                      >
                      <cds-table-cell>
                        <cds-toggle
                          checked
                          size="sm"
                          label-a="Izvēlēts"
                          label-b="Nav izvēlēts">
                        </cds-toggle>
                      </cds-table-cell>
                    </cds-table-row>
                  </cds-table-body>
                </cds-table>
              </cds-table-expanded-row-wrapper>
            </cds-table-expanded-row>
            <cds-table-row>
              <cds-table-cell>KD87</cds-table-cell>
              <cds-table-cell
                >ilgtspējīgi "zaļās" un "zilās" infrastruktūras, tai skaitā dabā
                balstīti, risinājumi, kas sekmē pielāgošanos klimata
                pārmaiņām</cds-table-cell
              >
              <cds-table-cell>0</cds-table-cell>
              <cds-table-cell>
                <cds-toggle
                  checked
                  size="sm"
                  label-a="Izvēlēts"
                  label-b="Nav izvēlēts">
                </cds-toggle>
              </cds-table-cell>
            </cds-table-row>
            <cds-table-expanded-row>
              <cds-table-expanded-row-wrapper>
                <cds-table size="sm">
                  <cds-table-head>
                    <cds-table-header-row>
                      <cds-table-header-cell>ID</cds-table-header-cell>
                      <cds-table-header-cell
                        >Apakšdarbības nosaukums</cds-table-header-cell
                      >
                      <cds-table-header-cell>Īstenošana</cds-table-header-cell>
                    </cds-table-header-row>
                  </cds-table-head>
                  <cds-table-toolbar slot="toolbar">
                    <cds-table-toolbar-content>
                      <cds-button
                        kind="secondary"
                        tooltip-alignment=""
                        tooltip-position="top"
                        type="button"
                        id="modal-example-button"
                        has-main-content="">
                        Pievienot jaunu apakšdarbību ${Add16({ slot: 'icon' })}
                      </cds-button>
                    </cds-table-toolbar-content>
                  </cds-table-toolbar>
                  <cds-table-body>
                    <cds-table-row>
                      <cds-table-cell>8.1.</cds-table-cell>
                      <cds-table-cell
                        >Informatīvās plāksnes izvietošana</cds-table-cell
                      >
                      <cds-table-cell>
                        <cds-toggle
                          checked
                          size="sm"
                          label-a="Izvēlēts"
                          label-b="Nav izvēlēts">
                        </cds-toggle>
                      </cds-table-cell>
                    </cds-table-row>
                    <cds-table-row>
                      <cds-table-cell>8.1.</cds-table-cell>
                      <cds-table-cell
                        >Informatīvās plāksnes izvietošana</cds-table-cell
                      >
                      <cds-table-cell>
                        <cds-toggle
                          checked
                          size="sm"
                          label-a="Izvēlēts"
                          label-b="Nav izvēlēts">
                        </cds-toggle>
                      </cds-table-cell>
                    </cds-table-row>
                  </cds-table-body>
                </cds-table>
              </cds-table-expanded-row-wrapper>
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
  title: 'Views/Projekta iesniegums (PI)/Darbības/Darbibu saraksts/Atvērts',
};
