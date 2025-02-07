import { html } from 'lit-html';
import storyDocs from './vinpi-story.mdx';
import './vinpi';
import styles from '../../../../../../assets/css/themes.css';

export const Modal = () => {
  return html`
    <cds-modal id="hp-admin-create-modal" open>
      <cds-modal-header>
        <cds-modal-close-button></cds-modal-close-button>
        <cds-modal-label>Atlases HP darbību saraksts</cds-modal-label>
        <cds-modal-heading>VINPI labošana</cds-modal-heading>
        <cds-divider size="5"></cds-divider>
      </cds-modal-header>
      <cds-modal-body>
        <cds-tabs value="ietekme">
          <cds-tab id="tab-ietekme" target="panel-ietekme" value="ietekme"
            >Ietekme un grupas</cds-tab
          >
          <cds-tab id="tab-darbibas" target="panel-darbibas" value="darbibas">
            HP darbības
          </cds-tab>
        </cds-tabs>
        <cds-divider size="6"></cds-divider>
        <div
          id="panel-ietekme"
          role="tabpanel"
          aria-labelledby="tab-ietekme"
          hidden="">
          <cds-checkbox-group legend-text="VINPI vispārīgās darbības">
            <cds-checkbox checked disabled
              >VINPI vispārīgās darbības</cds-checkbox
            >
          </cds-checkbox-group>
          <cds-divider size="6"></cds-divider>
          <cds-checkbox-group legend-text="VINPI specifiskās darbības">
            <cds-checkbox
              >HP integrēšana izglītojošo un informatīvo materiālu un pasākumu
              saturā</cds-checkbox
            >
            <cds-checkbox
              >Projekta pasākumu satura un norises vietas
              piekļūstamība</cds-checkbox
            >
            <cds-checkbox
              >Atbalsta pasākumi zinātniskā darba veicējiem un
              studējošiem</cds-checkbox
            >
            <cds-checkbox checked>Pētījumi, izvērtējumi, aptaujas</cds-checkbox>
            <cds-checkbox>Veselību veicinoši pasākumi</cds-checkbox>
          </cds-checkbox-group>
          <cds-divider size="6"></cds-divider>
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
              <cds-divider size="6"></cds-divider>
              <cds-number-input
                value="1"
                min="0"
                max="100"
                hide-steppers
                label="Minimāli nepieciešams VINPI specifisko HP darbību skaits"
                helper-text="Definēts kritēriju piemērošanas metodikā">
              </cds-number-input>
              <cds-divider size="6"></cds-divider>
              <cds-number-input
                value="1"
                min="0"
                max="100"
                hide-steppers
                label="Minimāli nepieciešamais VINPI HP rādītāju skaits"
                helper-text="Definēts kritēriju piemērošanas metodikā">
              </cds-number-input>
            </div>
          </div>
        </div>
        <div
          id="panel-darbibas"
          role="tabpanel"
          aria-labelledby="tab-darbibas"
          hidden="">
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
                <cds-table-cell>P01</cds-table-cell>
                <cds-table-cell
                  >Konsultācijas ar ekspertiem nediskriminācijas
                  jomā</cds-table-cell
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
                <cds-table-cell>P02</cds-table-cell>
                <cds-table-cell
                  >Pētījumi par sabiedrības novecošanos</cds-table-cell
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
              <cds-table-row expanded>
                <cds-table-cell>P03</cds-table-cell>
                <cds-table-cell
                  >Pētījumos integrēti dzimumu līdztiesības
                  jautājumi</cds-table-cell
                >
                <cds-table-cell>0</cds-table-cell>
                <cds-table-cell
                  ><cds-toggle
                    size="sm"
                    label-a="Izvēlēts"
                    label-b="Nav izvēlēts"></cds-toggle
                ></cds-table-cell>
              </cds-table-row>
              <cds-table-expanded-row>
                <cds-divider size="5"></cds-divider>
                <cds-table size="sm">
                  <cds-table-header-title slot="title">
                    <cds-label-value
                      label="HP darbība"
                      value="Veicot pētījumus un izvērtējumus, kur vien tas ir iespējams, visi dati tiks apkopoti un analizēti  dalījumā pēc dzimuma, vecuma, etniskās piederības u.c. pazīmēm"></cds-label-value
                  ></cds-table-header-title>
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
                        >Pasākumu un izstrādāto materiālu, kuru saturā integrēti
                        nediskriminācijas jautājumi, tostarp par tiesiskajiem un
                        praktiskajiem aspektiem, skaits</cds-table-cell
                      >
                    </cds-table-row>
                  </cds-table-body>
                </cds-table>
                <cds-divider size="5"></cds-divider>
              </cds-table-expanded-row>
            </cds-table-body>
          </cds-table>
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
  title: 'Views/HP admin/HP darbības labošana/VINPI',
};
