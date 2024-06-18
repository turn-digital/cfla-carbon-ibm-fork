import { LitElement, html } from 'lit';
import { prefix } from '../../../../../globals/settings';
import { carbonElement as customElement } from '../../../../../globals/decorators/carbon-element';
import Export16 from '@carbon/icons/lib/export/16';

@customElement(`${prefix}-projektu-iesniegumi`)
class CDSPProjektuIesniegumi extends LitElement {
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
            value="tab3"
            type="contained"
            class="cds-theme-zone-g10">
            <cds-tab id="tab1" target="panel1" value="tab1" disabled>Vertēšanu saraksts</cds-tab>
            <cds-tab id="tab2" target="panel2" value="tab2" disabled>Ekspertu saraksts</cds-tab>
            <cds-tab id="tab3" target="panel3" value="tab3">Projektu iesniegumi</cds-tab>
            <cds-tab id="tab4" target="panel4" value="tab4" disabled>Termiņi</cds-tab>
          </cds-tabs>
        </div>

        <cds-divider></cds-divider>

        <div class="cds--css-grid-column cds--col-span-100"
          id="panel3"
          role="tabpanel"
          aria-labelledby="tab3"
          >

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
                <cds-table-header-cell>PI ID</cds-table-header-cell>
                <cds-table-header-cell>Projekta nosaukums</cds-table-header-cell>
                <cds-table-header-cell>Vērtēšanu skaits</cds-table-header-cell>
                <cds-table-header-cell>Nepabeigto  vērtējumu skaits</cds-table-header-cell>
              </cds-table-header-row>
            </cds-table-head>

            <cds-table-body>
              <cds-table-row>
                <cds-table-cell>1.1.1.1</cds-table-cell>
                <cds-table-cell>Bērza mizas pārstrāde ekoloģiskos..</cds-table-cell>
                <cds-table-cell>1</cds-table-cell>
                <cds-table-cell>1</cds-table-cell>
              </cds-table-row>
              <cds-table-expanded-row>
                <cds-divider size="7"></cds-divider>

                <cds-table size="sm">
                  <cds-table-header-title slot="title">Piesaistītie vērtējumi  </cds-table-header-title>
                  <cds-table-head>
                    <cds-table-header-row>
                      <cds-table-header-cell>Vērtēšanas ID</cds-table-header-cell>
                      <cds-table-header-cell>Vērtēšanas cikls</cds-table-header-cell>
                      <cds-table-header-cell>Eksperta veids</cds-table-header-cell>
                      <cds-table-header-cell>Vērtējuma statuss</cds-table-header-cell>
                      <cds-table-header-cell>Statusa dat.</cds-table-header-cell>
                      <cds-table-header-cell>Vērtēšanas term.</cds-table-header-cell>
                      <cds-table-header-cell>Iesniegtie vērtējumi</cds-table-header-cell>
                    </cds-table-header-row>
                  </cds-table-head>
                  <cds-table-body>
                    <cds-table-row>
                      <cds-table-cell>1.1.1.1 S2</cds-table-cell>
                      <cds-table-cell>Sākumposma</cds-table-cell>
                      <cds-table-cell>CFLA ekspertu vērtēju..</cds-table-cell>
                      <cds-table-cell>Vērtējums nodots vērt..</cds-table-cell>
                      <cds-table-cell>01.01.2024</cds-table-cell>
                      <cds-table-cell>01.01.2024</cds-table-cell>
                      <cds-table-cell>1/2</cds-table-cell>
                    </cds-table-row>
                  </cds-table-body>
                </cds-table>
                <cds-divider size="5"></cds-divider>
              </cds-table-expanded-row>
            </cds-table-body>
          </cds-table>
          <cds-pagination page-size="10" total-items="100">
              <cds-select-item value="10">10</cds-select-item>
              <cds-select-item value="20">20</cds-select-item>
              <cds-select-item value="30">30</cds-select-item>
              <cds-select-item value="40">40</cds-select-item>
              <cds-select-item value="50">50</cds-select-item>
            </cds-pagination>
        </div>
      </cds-main-content-block>
    `;
  }
}

export default CDSPProjektuIesniegumi;
