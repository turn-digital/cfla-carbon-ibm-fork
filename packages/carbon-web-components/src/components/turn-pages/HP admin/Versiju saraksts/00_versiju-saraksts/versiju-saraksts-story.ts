import { html } from 'lit-html';
import storyDocs from './versiju-saraksts-story.mdx';
import './versiju-saraksts';
import styles from '../../../../../../assets/css/themes.css';
import OverflowMenuVertical16 from '@carbon/icons/lib/overflow-menu--vertical/16';
import Add16 from '@carbon/icons/lib/add/16';

export const Propsed = () => {
  return html` <div class="">
    <div class="">
      <div class="cds--css-grid cds--css-grid--narrow">
        <div class="cds--css-grid-column cds--col-span-100">
          <cds-contextual-header title="Atlase: 1.1.1.1">
            <cds-label-value-horizontal label="Atlases nosaukums:">
              <cds-link href="#">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
        </div>
        <div
          class="cds--css-grid-column cds--grid-column-hang cds--col-span-100">
          <cds-page-title title="Horizontālie principi (HP)"> </cds-page-title>
        </div>
        <div class="cds--css-grid-column cds--col-span-100">
          <cds-table size="sm">
            <cds-table-header-title slot="title"
              >Atlases HP konfigurāciju versijas</cds-table-header-title
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
                <cds-table-header-cell>Versijas nr.</cds-table-header-cell>
                <cds-table-header-cell
                  >Publicēšanas datums</cds-table-header-cell
                >
                <cds-table-header-cell>Statuss</cds-table-header-cell>
                <cds-table-header-cell></cds-table-header-cell>
              </cds-table-header-row>
            </cds-table-head>
            <cds-table-body>
              <cds-table-row>
                <cds-table-cell>v1</cds-table-cell>
                <cds-table-cell>n/a</cds-table-cell>
                <cds-table-cell
                  ><cds-tag type="blue">Sagatavošanā</cds-tag></cds-table-cell
                >
                <cds-table-cell>
                  <cds-overflow-menu>
                    ${OverflowMenuVertical16({
                      class: `cds--overflow-menu__icon`,
                      slot: 'icon',
                    })}
                    <span slot="tooltip-content"> Opcijas </span>
                    <cds-overflow-menu-body>
                      <cds-overflow-menu-item>Labot</cds-overflow-menu-item>
                      <cds-overflow-menu-item>Kopēt</cds-overflow-menu-item>
                      <cds-overflow-menu-item divider danger
                        >Dzēst</cds-overflow-menu-item
                      >
                    </cds-overflow-menu-body>
                  </cds-overflow-menu>
                </cds-table-cell>
              </cds-table-row>
              <cds-table-row>
                <cds-table-cell>v2</cds-table-cell>
                <cds-table-cell>17.10.2024</cds-table-cell>
                <cds-table-cell
                  ><cds-tag type="green">Publicēta</cds-tag></cds-table-cell
                >
                <cds-table-cell>
                  <cds-overflow-menu>
                    ${OverflowMenuVertical16({
                      class: `cds--overflow-menu__icon`,
                      slot: 'icon',
                    })}
                    <span slot="tooltip-content"> Opcijas </span>
                    <cds-overflow-menu-body>
                      <cds-overflow-menu-item>Labot</cds-overflow-menu-item>
                      <cds-overflow-menu-item>Kopēt</cds-overflow-menu-item>
                      <cds-overflow-menu-item divider danger
                        >Dzēst</cds-overflow-menu-item
                      >
                    </cds-overflow-menu-body>
                  </cds-overflow-menu>
                </cds-table-cell>
              </cds-table-row>
            </cds-table-body>
          </cds-table>
          <cds-pagination page-size="100" total-items="100">
            <cds-select-item value="10">10</cds-select-item>
            <cds-select-item value="20">20</cds-select-item>
            <cds-select-item value="30">30</cds-select-item>
            <cds-select-item value="40">40</cds-select-item>
            <cds-select-item value="50">50</cds-select-item>
            <cds-select-item value="100">100</cds-select-item>
          </cds-pagination>
        </div>
      </div>
    </div>
    <style>
      ${styles}
    </style>
  </div>`;
};

export const Modal = () => {
  return html`
    <cds-modal id="hp-admin-create-modal" open>
      <cds-modal-header>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-label>Atlases HP konfigurāciju versijas</cds-modal-label>
        <cds-modal-heading>Versijas pievienošana</cds-modal-heading>
        <!-- <cds-divider size="5"></cds-divider> -->
      </cds-modal-header>
      <cds-modal-body>
        <div class="turn-body-01 cds--subgrid cds--subgrid--condensed">
          <p class="cds--css-grid-column cds--col-span-75">
            HP nosacījumi, tai skaitā minimālais darbību un rādītāju skaits, ir
            definēti kritēriju piemērošanas metodikā.
          </p>
        </div>
        <cds-divider size="6"></cds-divider>
        <cds-radio-button-group
          legend-text="Kā pievienot versiju?"
          orientation="vertical"
          name="radio-button-group"
          value="radio-1">
          <cds-radio-button
            label-text="Veidot jaunu"
            value="radio-1"
            id="radio-1"></cds-radio-button>
          <cds-radio-button
            label-text="Kopēt no citas atlases  HP konfigurāciju versijas"
            value="radio-2"
            id="radio-2"></cds-radio-button>
          <cds-subselection>
            <cds-divider size="2"></cds-divider>
            <cds-select
              label-text="Izvēlieties atlases versiju, no kurs kopēt"
              placeholder="Izvēlēties versiju">
              <cds-select-item value="option-1">Versija 1</cds-select-item>
              <cds-select-item value="option-2">Versija 2</cds-select-item>
            </cds-select>
            <cds-divider size="5"></cds-divider>
          </cds-subselection>
          <cds-radio-button
            label-text="Kopēt no šīs atlases veidlapas citas versijas"
            value="radio-3"
            id="radio-3"></cds-radio-button>
          <cds-subselection hideSubselection>
            <cds-divider size="2"></cds-divider>
            <cds-select
              label-text="Izvēlieties atlases versiju, no kurs kopēt"
              placeholder="Izvēlēties versiju">
              <cds-select-item value="option-1">Versija 1</cds-select-item>
              <cds-select-item value="option-2">Versija 2</cds-select-item>
            </cds-select>
            <cds-divider size="5"></cds-divider>
          </cds-subselection>
        </cds-radio-button-group>
      </cds-modal-body>

      <cds-modal-footer>
        <cds-modal-footer-button kind="secondary" data-modal-close
          >Atcelt</cds-modal-footer-button
        >
        <cds-modal-footer-button kind="primary"
          >Pievienot</cds-modal-footer-button
        >
      </cds-modal-footer>
    </cds-modal>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Views/HP admin/Versiju saraksts/Saraksts',
};
