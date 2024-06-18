import { LitElement, html } from 'lit';
import { prefix } from '../../../../../globals/settings';
import { carbonElement as customElement } from '../../../../../globals/decorators/carbon-element';
import Export16 from '@carbon/icons/lib/export/16';
import Locked16 from '@carbon/icons/lib/locked/16';
import OverflowMenuVertical16 from '@carbon/icons/lib/overflow-menu--vertical/16';

@customElement(`${prefix}-ekspertu-saraksts`)
class CDSPEkspertuSaraksts extends LitElement {
  render() {
    const contextualHeaderApiData = {
      virsraksts: 'Atlase: 1.1.1',
      saturs: [
        {
          tips: 'status',
          nosaukums: 'Atlases statuss',
          links: {
            nosaukums: null,
            saite: null,
          },
          teksts: null,
          statuss: {
            nosaukums: 'Izsludināta',
            krasa: 'red',
            datums: null,
          },
        },
        {
          tips: 'link',
          nosaukums: 'Nosaukums',
          links: {
            nosaukums:
              'Pētniecības un inovāciju kapacitātes stiprināšana un progresīvu tehnoloģiju ieviešana',
            saite: 'http://localhost:31475/LV/SAMPamatdati/View/4',
          },
          teksts: null,
          statuss: {
            nosaukums: null,
            krasa: null,
            datums: null,
          },
        },
        {
          tips: 'status',
          nosaukums: 'Atlases statuss',
          links: {
            nosaukums: null,
            saite: null,
          },
          teksts: null,
          statuss: {
            nosaukums: 'Izsludināta',
            krasa: 'green',
            datums: '12.12.2012',
          },
        },

        {
          tips: 'divider',
          nosaukums: null,
          links: {
            nosaukums: null,
            saite: null,
          },
          teksts: null,
          statuss: {
            nosaukums: null,
            krasa: null,
            datums: null,
          },
        },
        {
          tips: 'link',
          nosaukums: 'Politikas programma',
          links: {
            nosaukums: '1.1',
            saite:
              'http://localhost:31475/LV/IeguldijumuPrioritatesPamatdati/View/3',
          },
          teksts: null,
          statuss: {
            nosaukums: null,
            krasa: null,
            datums: null,
          },
        },
      ],
    };
    return html`
      <link
        rel="stylesheet"
        href="https://demo.turn.lv/cfla_dist/assets/css/turn-carbon-grid.css" />
      <cds-main-content-block storybook>
        <cds-contextual-header-api
          class="cds--css-grid-column cds--col-span-100"
          .contextualHeaderApiData=${contextualHeaderApiData}>
        </cds-contextual-header-api>
        <cds-header-title class="cds--css-grid-column cds--col-span-100 cds--grid-column-hang" title="Ekspertu vērtēšanas" marginWrapper></cds-header-title>

        <div class="cds--css-grid-column cds--col-span-100">
          <cds-tabs
            trigger-content="Select an item"
            value="tab2"
            type="contained"
            class="cds-theme-zone-g10">
            <cds-tab id="tab1" target="panel1" value="tab1">Vertēšanu saraksts</cds-tab>
            <cds-tab id="tab2" target="panel2" value="tab2">Ekspertu saraksts</cds-tab>
            <cds-tab id="tab3" target="panel3" value="tab3" disabled>Projektu iesniegumi</cds-tab>
            <cds-tab id="tab4" target="panel4" value="tab4" disabled>Termiņi</cds-tab>
          </cds-tabs>
        </div>

        <cds-divider></cds-divider>

        <div class="cds--css-grid-column cds--col-span-100"
          id="panel2"
          role="tabpanel"
          aria-labelledby="tab2"
          >

          <cds-inline-notification
            style="min-width: 100%;"
            kind="success"
            low-contrast
            title="Eksperts ir veiksmīgi pievienots"
            subtitle="Veidojot vērtēšanu ekspertu būs iespējams izvēlēties no saraksta.">
          </cds-inline-notification>

          <cds-divider></cds-divider>
          
          <cds-table size="sm" expandable>
            <cds-table-toolbar slot="toolbar">
              <cds-table-toolbar-content>
                <cds-table-toolbar-search
                  placeholder="Filter table"></cds-table-toolbar-search>
                <cds-button kind="ghost">${Export16({slot:"icon", fill:"black" })}</cds-button>
                
              </cds-table-toolbar-content>
            </cds-table-toolbar>

            <cds-table-head>
              <cds-table-header-row>
                <cds-table-header-cell>Vārds Uzvārds</cds-table-header-cell>
                <cds-table-header-cell>Eksperta tips</cds-table-header-cell>
                <cds-table-header-cell>Kontakti</cds-table-header-cell>
                <cds-table-header-cell>Apstiprinātās k.n.</cds-table-header-cell>
                <cds-table-header-cell>Iesniegts vertējums</cds-table-header-cell>
                <cds-table-header-cell></cds-table-header-cell>
              </cds-table-header-row>
            </cds-table-head>

            <cds-table-body>
              <cds-table-row>
                <cds-table-cell>Jānis Bērziņš</cds-table-cell>
                <cds-table-cell>CFLA eksperts (bez VK)</cds-table-cell>
                <cds-table-cell>
                  <cds-link href="mailto:janis.berzins@cfla.lv">janis.berzins@cfla.lv</cds-link>;
                  +37121234567
                </cds-table-cell>
                <cds-table-cell>
                  ${Locked16()}
                  1/2
                </cds-table-cell>
                <cds-table-cell>1/2</cds-table-cell>
                <cds-table-cell>
                  <cds-overflow-menu>
                    ${OverflowMenuVertical16({
                      class: `${prefix}--overflow-menu__icon`,
                      slot: 'icon',
                    })}
                    <span slot="tooltip-content"> Options </span>
                    <cds-overflow-menu-body>
                      <cds-overflow-menu-item>Atvērt</cds-overflow-menu-item>
                      <cds-overflow-menu-item
                        >Mainit ekspertu</cds-overflow-menu-item
                      >
                    </cds-overflow-menu-body>
                  </cds-overflow-menu>
                </cds-table-cell>
              </cds-table-row>
              <cds-table-expanded-row>
                <cds-divider size="7"></cds-divider>

                <cds-table size="sm">
                  <cds-table-header-title slot="title">Vērtēšanas veidlapas</cds-table-header-title>
                  <cds-table-head>
                    <cds-table-header-row>
                      <cds-table-header-cell>Eksperta Veidlapas ID</cds-table-header-cell>
                      <cds-table-header-cell>Cikla posms</cds-table-header-cell>
                      <cds-table-header-cell>Vērtēšanas statuss</cds-table-header-cell>
                      <cds-table-header-cell>Vērtēšanas term.</cds-table-header-cell>
                      <cds-table-header-cell>Veidlapas statuss</cds-table-header-cell>
                      <cds-table-header-cell>Statusa datums</cds-table-header-cell>
                    </cds-table-header-row>
                  </cds-table-head>
                  <cds-table-body>
                    <cds-table-row>
                      <cds-table-cell>3.1.1.5/19/A/043 S1 E1</cds-table-cell>
                      <cds-table-cell>Sākumposma</cds-table-cell>
                      <cds-table-cell>Vērtējums nodots vērtē..</cds-table-cell>
                      <cds-table-cell>12.01.2024</cds-table-cell>
                      <cds-table-cell>Noslēgusies</cds-table-cell>
                      <cds-table-cell>12.01.2024</cds-table-cell>
                    </cds-table-row>
                    <cds-table-row>
                      <cds-table-cell>3.1.1.5/19/A/043 S1 E1</cds-table-cell>
                      <cds-table-cell>Sākumposma</cds-table-cell>
                      <cds-table-cell>Vērtējums nodots vērtē..</cds-table-cell>
                      <cds-table-cell>12.01.2024</cds-table-cell>
                      <cds-table-cell>Noslēgusies</cds-table-cell>
                      <cds-table-cell>12.01.2024</cds-table-cell>
                    </cds-table-row>
                  </cds-table-body>
                </cds-table>
                <cds-divider size="5"></cds-divider>
              </cds-table-expanded-row>
            </cds-table-body>
          </cds-table>
        </div>
      </cds-main-content-block>
    `;
  }
}

export default CDSPEkspertuSaraksts;
