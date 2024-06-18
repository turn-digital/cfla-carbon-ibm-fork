import { LitElement, html } from 'lit';
import { prefix } from '../../../../../globals/settings';
import { carbonElement as customElement } from '../../../../../globals/decorators/carbon-element';

@customElement(`${prefix}-termini`)
class CDSPTermini extends LitElement {
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
            value="tab4"
            type="contained"
            class="cds-theme-zone-g10">
            <cds-tab id="tab1" target="panel1" value="tab1" disabled>Vertēšanu saraksts</cds-tab>
            <cds-tab id="tab2" target="panel2" value="tab2" disabled>Ekspertu saraksts</cds-tab>
            <cds-tab id="tab3" target="panel3" value="tab3" disabled>Projektu iesniegumi</cds-tab>
            <cds-tab id="tab4" target="panel4" value="tab4">Termiņi</cds-tab>
          </cds-tabs>
        </div>

        <cds-divider></cds-divider>

        <div class="cds--css-grid-column cds--col-span-100"
          id="panel4"
          role="tabpanel"
          aria-labelledby="tab4"
          >

          <cds-table size="sm">
            <cds-table-head>
              <cds-table-header-row>
                <cds-table-header-cell>Eksperta Veidlapas ID</cds-table-header-cell>
                <cds-table-header-cell>Vērtēšanas cikls</cds-table-header-cell>
                <cds-table-header-cell>Ekperts</cds-table-header-cell>
                <cds-table-header-cell>Eksperta tips</cds-table-header-cell>
                <cds-table-header-cell>Eksperta vērtējuma termiņš</cds-table-header-cell>
                <cds-table-header-cell>Vērt. veidlapas statuss</cds-table-header-cell>
              </cds-table-header-row>
            </cds-table-head>

            <cds-table-body>
              <cds-table-row>
                <cds-table-cell>1.1.1.1 S2E1</cds-table-cell>
                <cds-table-cell>Sākumposma</cds-table-cell>
                <cds-table-cell>Jānis Bērziņš</cds-table-cell>
                <cds-table-cell>CFLA</cds-table-cell>
                <cds-table-cell>21.03.2022</cds-table-cell>
                <cds-table-cell>Iesniegts vērtējums</cds-table-cell>
              </cds-table-row>
              <cds-table-row>
                <cds-table-cell>1.1.1.1 S2E1</cds-table-cell>
                <cds-table-cell>Vidusposma</cds-table-cell>
                <cds-table-cell>Ārējais eksperts</cds-table-cell>
                <cds-table-cell>CFLA</cds-table-cell>
                <cds-table-cell>21.03.2022</cds-table-cell>
                <cds-table-cell>Apstiprināts KN</cds-table-cell>
              </cds-table-row>
            </cds-table-body>
          </cds-table>
        </div>
      </cds-main-content-block>
    `;
  }
}

export default CDSPTermini;
