import { html } from 'lit-html';
import storyDocs from './pi-darbiba-ar-apakdarbibam-story.mdx';
import './pi-darbiba-ar-apakdarbibam';
import styles from '../../../../../../../assets/css/themes.css';
import Download16 from '@carbon/icons/lib/download/16';
import Add16 from '@carbon/icons/lib/add/16';
import Edit16 from '@carbon/icons/lib/edit/16';

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
            title="8.darbība - Komunikācijas un vizuālās identitātes pasākumi par projekta īstenošanu">
            <span slot="breadcrumb">
              <cds-breadcrumb no-trailing-slash>
                <cds-breadcrumb-item>
                  <cds-breadcrumb-link href="/#"
                    >Projekta iesniegums</cds-breadcrumb-link
                  >
                </cds-breadcrumb-item>
                <cds-breadcrumb-item>
                  <cds-breadcrumb-link href="/#">Darbības</cds-breadcrumb-link>
                </cds-breadcrumb-item>
                <cds-breadcrumb-item> 8. darbība </cds-breadcrumb-item>
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
              <cds-label-value label="Darbības apraksts">
                <span class="turn-body-compact-01">Nav pievienots</span>
                <cds-button kind="ghost" size="sm">
                  ${Edit16({ slot: 'icon' })}
                </cds-button>
              </cds-label-value>
              <cds-divider size="6"></cds-divider>
              <cds-label-value label="Vai darbībai pardzētas apakšdarbības?">
                <span class="turn-body-compact-01">Jā ir apakšdarbības</span>
                <cds-button kind="ghost" size="sm">
                  ${Edit16({ slot: 'icon' })}
                </cds-button>
              </cds-label-value>
            </div>
          </div>
          <cds-divider size="6"></cds-divider>

          <cds-table size="sm">
            <cds-table-head>
              <cds-table-header-row>
                <cds-table-header-cell>Kods</cds-table-header-cell>
                <cds-table-header-cell>Apakšdarbība</cds-table-header-cell>
                <cds-table-header-cell>Rādītāju sk.</cds-table-header-cell>
                <cds-table-header-cell
                  >Īstenošanas grafiks</cds-table-header-cell
                >
                <cds-table-header-cell
                  >Piesaistīt. budž. pozīc.</cds-table-header-cell
                >
                <cds-table-header-cell>Rādītāju sk.</cds-table-header-cell>
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
                <cds-table-cell>8.1</cds-table-cell>
                <cds-table-cell
                  >Informatīvās plāksnes izvietošana</cds-table-cell
                >
                <cds-table-cell>0</cds-table-cell>
                <cds-table-cell>0</cds-table-cell>
                <cds-table-cell>2</cds-table-cell>
                <cds-table-cell>0</cds-table-cell>
              </cds-table-row>
              <cds-table-row>
                <cds-table-cell>8.2</cds-table-cell>
                <cds-table-cell
                  >Informācijas publicēšana tīmekļvietnē</cds-table-cell
                >
                <cds-table-cell>0</cds-table-cell>
                <cds-table-cell>0</cds-table-cell>
                <cds-table-cell>0</cds-table-cell>
                <cds-table-cell>0</cds-table-cell>
              </cds-table-row>
            </cds-table-body>
          </cds-table>
        </div>
      </div>
    </div>
  `;
};

export const Parvaldit = () => {
  return html`
    <cds-modal
      class="cds-theme-zone-white cds-blue-theme"
      size="lg"
      id="pi-subactions-modal-1"
      open>
      <cds-modal-header>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-label>Darbības</cds-modal-label>
        <cds-modal-heading>Apakšdarbības pievienošana</cds-modal-heading>
        <cds-divider size="5"></cds-divider>
      </cds-modal-header>
      <cds-modal-body>
        <cds-table size="sm">
          <cds-table-head>
            <cds-table-header-row>
              <cds-table-header-cell>Kods</cds-table-header-cell>
              <cds-table-header-cell>Apakšdarbība</cds-table-header-cell>
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
                Pievienot apakšdarbību ${Add16({ slot: 'icon' })}
              </cds-button>
            </cds-table-toolbar-content>
          </cds-table-toolbar>
          <cds-table-body>
            <cds-table-row>
              <cds-table-cell>8.1.</cds-table-cell>
              <cds-table-cell>Informatīvās plāksnes izvietošana</cds-table-cell>
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
              <cds-table-cell>8.2.</cds-table-cell>
              <cds-table-cell
                >Informācijas publicēšana tīmekļvietnē</cds-table-cell
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
      size="lg"
      id="pi-subactions-modal-2"
      open>
      <cds-modal-header>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-label>Darbības</cds-modal-label>
        <cds-modal-heading>Apakšdarbības pievienošana</cds-modal-heading>
        <cds-divider size="5"></cds-divider>
      </cds-modal-header>
      <cds-modal-body>
        <div class="cds--subgrid cds--subgrid--condensed">
          <div
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-10">
            <cds-label-value
              label="1.līmeņa darbība"
              value="8 komunikācijas un vizuālās identitātes pasākumi par projekta īstenošanu">
            </cds-label-value>
          </div>
        </div>
        <cds-divider size="6"></cds-divider>
        <div class="cds--subgrid cds--subgrid--condensed">
          <div
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-7 cds--xlg:col-span-6">
            <cds-form-item>
              <cds-text-input
                label="Apakšdarbības nosaukums"
                placeholder="Ievadiet nosaukumu"
                invalid-text="Error message">
              </cds-text-input>
            </cds-form-item>
          </div>
        </div>
        <cds-divider size="6"></cds-divider>
        <div class="cds--subgrid cds--subgrid--condensed">
          <div
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-7 cds--lg:col-span-14">
            <cds-text-editor
              editorId="editor_example_storybook_simple"
              toolbarType="simple"
              editorConfig='{
          "editorTitle": "Apakšdarbības apraksts",
          "onServerLastEditor": {
            "name": "Ieva Bērziņa",
            "date": "10.10.2022 10:22"
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

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title:
    'Views/Projekta iesniegums (PI)/Darbības/Darbība ar apakšdarbībām/Atvērts',
};
