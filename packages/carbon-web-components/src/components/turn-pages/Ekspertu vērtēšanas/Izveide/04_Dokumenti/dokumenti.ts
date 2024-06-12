import { LitElement, html } from 'lit';
import { prefix } from '../../../../../globals/settings';
import { carbonElement as customElement } from '../../../../../globals/decorators/carbon-element';

@customElement(`${prefix}-ekspertu-dokumenti`)
class CDSPVertesanasEkspertuDokumenti extends LitElement {
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

    const chosenCategoriesData = [
      { label: 'Projekta dzīves cikla posms', value: 'Sākumposma' },
      {
        label: 'Eksperta tips',
        value: 'CFLA ekspertu vērtējumsar nodaļas vadītāja iesaisti',
      },
      { label: 'Ekspertīzes joma', value: 'Valsts atbalsta ' },
      { label: 'Termiņš', value: '12.03.2024' },
      { label: '*Eksperts', value: 'Jānis Bērziņš' },
      {
        label: 'Projekta iesniegumi',
        value: `3.1.1.5/19/A/043
      3.1.1.5/19/A/043
      3.1.1.5/19/A/043
      3.1.1.5/19/A/043`,
      },
    ];
    return html`
      <link
        rel="stylesheet"
        href="https://demo.turn.lv/cfla_dist/assets/css/turn-carbon-grid.css" />
      <cds-main-content-block storybook>
        <cds-contextual-header-api
          class="cds--css-grid-column cds--col-span-100"
          .contextualHeaderApiData=${contextualHeaderApiData}>
        </cds-contextual-header-api>
        <cds-main-content-title
          class="cds--css-grid-column cds--col-span-100 cds--grid-column-hang"
          title="Ekspertu vērtējuma izveidošana">
        </cds-main-content-title>
        <div
          class="cds--css-grid-column cds--col-span-100 cds--grid-column-hang">
          <cds-progress-indicator space-equally>
            <cds-progress-step
              style="max-inline-size: none;"
              label="Vērtēšanas veids"
              state="complete"></cds-progress-step>
            <cds-progress-step
              label="Termiņš"
              state="complete"></cds-progress-step>
            <cds-progress-step
              label="Ekspertu katalogs"
              state="complete"></cds-progress-step>
            <cds-progress-step
              label="Projektu saraksts "
              state="complete"></cds-progress-step>
            <cds-progress-step
              label="Dokumenti"
              state="current"></cds-progress-step>
            <cds-progress-step
              label="Priekšskatījums"
              state="incomplete"></cds-progress-step>
          </cds-progress-indicator>
        </div>

        <div class="cds--css-grid-column cds--col-span-100 ">
          <cds-divider size="10"></cds-divider>
          <cds-chosen-categories .chosenCategoriesData=${chosenCategoriesData}>
          </cds-chosen-categories>
        </div>

        <cds-divider size="8"></cds-divider>

        <div class="cds--css-grid-column cds--col-span-100">
          <cds-file-uploader
            label-description="Max file size is 500kb. Supported file types are .jpg and .png."
            label-title="Vertēšanas veidlapas sagatave">
          </cds-file-uploader>
          <cds-divider size="5"></cds-divider>
          <cds-button kind="tertiary" size="md">Pievienot</cds-button>
          <cds-divider size="5"></cds-divider>
          <cds-file-uploader-item state="edit">
            Filename.png
          </cds-file-uploader-item>
        </div>

        <cds-divider size="8"></cds-divider>
        <div class="cds--css-grid-column cds--col-span-100">
          <cds-text-editor
            editorId="editor_example_storybook_default_cl"
            onServerLastEditor='{"name": "Vlad", "date": "123123 12312312"}'
            editorConfig='{
      "editorTitle": "Pārskatīšanas / Apstrīdēšanas gaitas piezīmes",
      "length_validation_error_text": "Max char length exceeded! props text",
      "max_char_length": 200,
      "onServerLastEditor": {
        "name": "Vlad",
        "date": "123123 12312312"
    }
      }'></cds-text-editor>
        </div>

        <div
          class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-10">
          <cds-divider size="5"></cds-divider>
          <cds-button-set>
            <cds-button href="https://www.ibm.com">Atpakaļ</cds-button>
            <cds-button href="https://www.ibm.com">Turpināt</cds-button>
          </cds-button-set>
        </div>
      </cds-main-content-block>
    `;
  }
}

export default CDSPVertesanasEkspertuDokumenti;
