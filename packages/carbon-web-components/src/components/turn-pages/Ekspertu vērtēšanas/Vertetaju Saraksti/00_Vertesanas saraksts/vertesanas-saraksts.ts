import { LitElement, html } from 'lit';
import { prefix } from '../../../../../globals/settings';
import { carbonElement as customElement } from '../../../../../globals/decorators/carbon-element';
import Add16 from '@carbon/icons/lib/add/16';
import Export16 from '@carbon/icons/lib/export/16';

@customElement(`${prefix}-vertesanas-saraksts`)
class CDSPVertesanasSaraksts extends LitElement {
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
            value="tab1"
            type="contained"
            class="cds-theme-zone-g10">
            <cds-tab id="tab1" target="panel1" value="tab1">Vertēšanu saraksts</cds-tab>
            <cds-tab id="tab2" target="panel2" value="tab2" disabled>Ekspertu saraksts</cds-tab>
            <cds-tab id="tab3" target="panel3" value="tab3" disabled>Projektu iesniegumi</cds-tab>
            <cds-tab id="tab4" target="panel4" value="tab4" disabled>Termiņi</cds-tab>
          </cds-tabs>
        </div>

        <cds-divider></cds-divider>

        <!-- Filter -->

        <div class="cds--css-grid-column cds--col-span-100"
          id="panel1"
          role="tabpanel"
          aria-labelledby="tab1"
          >

          
          <cds-table size="sm" expandable>
            <cds-table-toolbar slot="toolbar">
              <cds-table-toolbar-content>
                <cds-table-toolbar-search
                  placeholder="Filter table"></cds-table-toolbar-search>
                <cds-button kind="ghost">${Export16({slot:"icon", fill:"black" })}</cds-button>
                <cds-button>Pievienot vērtējumu ${Add16({slot:"icon"})}</cds-button>
                
              </cds-table-toolbar-content>
            </cds-table-toolbar>

            <cds-table-head>
              <cds-table-header-row>
                <cds-table-header-cell>Vērtēšanas ID</cds-table-header-cell>
                <cds-table-header-cell>Projekta cikls</cds-table-header-cell>
                <cds-table-header-cell>Vērtējuma statuss</cds-table-header-cell>
                <cds-table-header-cell>Statusa datums</cds-table-header-cell>
                <cds-table-header-cell>Eksperta veids</cds-table-header-cell>
                <cds-table-header-cell>Vērtēšanas termiņš</cds-table-header-cell>
              </cds-table-header-row>
            </cds-table-head>

            <cds-table-body>
              <cds-table-row>
                <cds-table-cell>3.1.1.5/19/A/043 S1</cds-table-cell>
                <cds-table-cell>Sākumposma</cds-table-cell>
                <cds-table-cell>Sagatavošanā</cds-table-cell>
                <cds-table-cell>12.01.2024</cds-table-cell>
                <cds-table-cell>LZP ekspertu vērtējums</cds-table-cell>
                <cds-table-cell>12.01.2024</cds-table-cell>
              </cds-table-row>
              <cds-table-expanded-row>
                <cds-divider size="7"></cds-divider>

                <cds-table size="sm">
                  <cds-table-header-title slot="title">Gala vērtējums</cds-table-header-title>
                  <cds-table-head>
                    <cds-table-header-row>
                      <cds-table-header-cell>Nosaukums</cds-table-header-cell>
                      <cds-table-header-cell>Pievienošanas datums</cds-table-header-cell>
                      <cds-table-header-cell>Pievienotājs</cds-table-header-cell>
                    </cds-table-header-row>
                  </cds-table-head>
                  <cds-table-body>
                    <cds-table-row>
                      <cds-table-cell
                        ><cds-link href="#">Gala_vertejums.docx</cds-link>
                      </cds-table-cell>
                      <cds-table-cell>22.03.2023 10:15</cds-table-cell>
                      <cds-table-cell>LZP sekretārs: Ieva Kļaviņa</cds-table-cell>
                    </cds-table-row>
                  </cds-table-body>
                </cds-table>
                <cds-divider size="5"></cds-divider>
              </cds-table-expanded-row>
              <cds-table-row>
                <cds-table-cell>3.1.1.5/19/A/040 V1</cds-table-cell>
                <cds-table-cell>Vidusposma</cds-table-cell>
                <cds-table-cell>Vērtējums atgriezts</cds-table-cell>
                <cds-table-cell>12.01.2024</cds-table-cell>
                <cds-table-cell>CFLA darbinieks bez</cds-table-cell>
                <cds-table-cell>12.01.2024</cds-table-cell>
              </cds-table-row>
              <cds-table-expanded-row>
                <div class="cds--css-grid-column cds--col-span-100 cds--grid-column-hang">
                  <cds-divider size="7"></cds-divider>
                  <cds-label-value
                    label="Atbildīgais par vērtēšanu"
                    value="CFLA atbildīgais: Jānis Bērziņš">
                  </cds-label-value>
                  <cds-divider></cds-divider>
                </div>
                <cds-table size="sm">

                  <cds-table-header-title slot="title">Vērtēšanas veidlapas</cds-table-header-title>
                  <cds-table-head>
                    <cds-table-header-row>
                      <cds-table-header-cell>Eksperta Veidlapas ID</cds-table-header-cell>
                      <cds-table-header-cell>Vērtētājs</cds-table-header-cell>
                      <cds-table-header-cell>Veidlapas statuss</cds-table-header-cell>
                      <cds-table-header-cell>Statusa datums</cds-table-header-cell>
                      <cds-table-header-cell>Vērtēšanas termiņš</cds-table-header-cell>
                    </cds-table-header-row>
                  </cds-table-head>
                  <cds-table-body>
                    <cds-table-row>
                      <cds-table-cell>3.1.1.5/19/A/040 V1 E1</cds-table-cell>
                      <cds-table-cell>Pēteris Jurčenko</cds-table-cell>
                      <cds-table-cell>Konflikts nav zināms</cds-table-cell>
                      <cds-table-cell>12.01.2024</cds-table-cell>
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

export default CDSPVertesanasSaraksts;
