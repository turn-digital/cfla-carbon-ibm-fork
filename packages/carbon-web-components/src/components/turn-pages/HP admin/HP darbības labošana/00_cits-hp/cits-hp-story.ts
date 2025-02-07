import { html } from 'lit-html';
import storyDocs from './cits-hp-story.mdx';
import './cits-hp';
import styles from '../../../../../../assets/css/themes.css';
// import OverflowMenuVertical16 from '@carbon/icons/lib/overflow-menu--vertical/16';
// import Add16 from '@carbon/icons/lib/add/16';

export const Modal = () => {
  return html`
    <cds-modal id="hp-admin-create-modal" size="lg" open>
      <cds-modal-header>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-label>Atlases HP darbību saraksts</cds-modal-label>
        <cds-modal-heading
          >Energoefektivitāte pirmajā vietā labošana</cds-modal-heading
        >
        <cds-divider size="5"></cds-divider>
      </cds-modal-header>
      <cds-modal-body>
        <cds-radio-button-group
          legend-text="HP ietekme"
          orientation="vertical"
          name="radio-button-group"
          value="radio-1">
          <cds-radio-button
            label-text="Nav"
            value="radio-1"
            id="radio-1"></cds-radio-button>
          <cds-radio-button
            label-text="Netieša pozitīva ietekmē"
            value="radio-2"
            id="radio-2"></cds-radio-button>
          <cds-radio-button
            label-text="Tieša pozitīva ietekmē"
            value="radio-2"
            id="radio-2"></cds-radio-button>
        </cds-radio-button-group>
        <cds-divider size="6"></cds-divider>
        <div class="cds--subgrid cds--subgrid--condensed">
          <div
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-7 cds--xlg:col-span-6">
            <cds-number-input
              value="1"
              min="0"
              max="100"
              hide-steppers
              label="Minimāli nepieciešamaiss VINPI vispārīgo HP darbību skaits"
              helper-text="Definēts kritēriju piemērošanas metodikā">
            </cds-number-input>
          </div>
        </div>
        <cds-divider size="6"></cds-divider>
        <cds-table size="sm" expandable>
          <cds-table-header-title slot="title"
            >VINPI vispārīgās</cds-table-header-title
          >
          <cds-table-head>
            <cds-table-header-row>
              <cds-table-header-cell>ID</cds-table-header-cell>
              <cds-table-header-cell
                >HP darbības nosaukums</cds-table-header-cell
              >
              <cds-table-header-cell
                >Projekti, kuros izvēlēts</cds-table-header-cell
              >
              <cds-table-header-cell>Īstenošana</cds-table-header-cell>
            </cds-table-header-row>
          </cds-table-head>
          <cds-table-body>
            <cds-table-row>
              <cds-table-cell>VP01</cds-table-cell>
              <cds-table-cell
                >Diskrimināciju un stereotipus mazinoša
                komunikācija</cds-table-cell
              >
              <cds-table-cell>2</cds-table-cell>
              <cds-table-cell
                ><cds-toggle
                  checked
                  size="sm"
                  label-a="Izvēlēts"
                  label-b="Nav izvēlēts"></cds-toggle
              ></cds-table-cell>
            </cds-table-row>
            <cds-table-expanded-row> </cds-table-expanded-row>
            <cds-table-row>
              <cds-table-cell>VP02</cds-table-cell>
              <cds-table-cell
                >Informācijas pieejamība cilvēkiem ar funkcionālajiem
                traucējumiem</cds-table-cell
              >
              <cds-table-cell>1</cds-table-cell>
              <cds-table-cell
                ><cds-toggle
                  checked
                  size="sm"
                  label-a="Izvēlēts"
                  label-b="Nav izvēlēts"></cds-toggle
              ></cds-table-cell>
            </cds-table-row>
            <cds-table-expanded-row> </cds-table-expanded-row>
            <cds-table-row>
              <cds-table-cell>VP03</cds-table-cell>
              <cds-table-cell>Sadaļas “Viegli lasīt” izveide</cds-table-cell>
              <cds-table-cell>0</cds-table-cell>
              <cds-table-cell
                ><cds-toggle
                  size="sm"
                  label-a="Izvēlēts"
                  label-b="Nav izvēlēts"></cds-toggle
              ></cds-table-cell>
            </cds-table-row>
            <cds-table-expanded-row> </cds-table-expanded-row>
          </cds-table-body>
        </cds-table>
        <cds-divider size="6"></cds-divider>
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
  title: 'Views/HP admin/HP darbības labošana/Cits HP',
};
