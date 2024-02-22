/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import './index';

const data = {
  detalas: {
    kods: '14.3.1.0/1/22/A/011',
    apraksts: ['HP'],
  },
  nosaukums: 'PI līgums',
  autori: [
    {
      grupa: 'PV',
      vardsUzvards: 'Irēna Bistrova',
    },
  ],
  statuss: {
    id: 1,
    nosaukums: 'Sagatavošanā',
    datums: '15.06.2023 08:35:08',
    persona: 'Irēna Bistrova',
    komentars: null,
  },
  versijasInfo: {
    aktivaVersija: {
      versijasId: 131,
      versijasNr: 'v1.0',
      publicesanasPeriods: {
        datumsNo: null,
        datumsLidz: null,
      },
    },
    versijuVesture: [],
  },
  statusuVesture: [
    {
      id: 1,
      nosaukums: 'Sagatavošanā',
      datums: '15.06.2023 08:35:08',
      persona: 'Irēna Bistrova',
      komentars: null,
    },
  ],
  automatiskieStatusi: [],
  pogas: {
    pirmasPozicijasNosaukums: null,
    otrasPozicijasNosaukums: null,
    saraksts: [
      {
        veids: 'primary',
        tips: 'mainitStatusu',
        pozicija: 2,
        pogasNosaukums: 'Darbinieka apstiprināts',
        endpoints:
          'https://5ea5e181-a7fe-4f98-a5cb-ba5676937d64.mock.pstmn.io/ApiHederisStatusaMaina/131?veidaId=2&statusaId=5',
        statusaMaina: {
          statusaId: 5,
          statusaNosaukums: 'Darbinieka apstiprināts',
          raditDatumu: false,
          raditKomentaru: true,
          datumaVirsraksts: null,
        },
        modalaSaturs: {
          modalaVirsraksts: 'Vai tiešām apstiprināt projekta līgumu?',
          modalaApaksvirsraksts: 'Projekta līgums',
          paskaidrojums: null,
          datumaVirsraksts: null,
          komentaraVirsraksts: null,
          primarasPogasNosaukums: 'Apstiprināt',
          sekundarasPogasNosaukums: 'Atcelt',
        },
      },
    ],
  },
  ikonas: [
    {
      tips: 'download',
      pogasNosaukums: 'Lejupielādēt',
      adrese: null,
      varianti: [
        {
          tips: 'html',
          pogasNosaukums: 'Html',
          adrese:
            'http://manta/CflaIntC9/LV/Ligums/Lejupladet?ligumaVersijasId=131&tips=2',
          varianti: null,
        },
        {
          tips: 'docx',
          pogasNosaukums: 'Docx',
          adrese:
            'http://manta/CflaIntC9/LV/Ligums/Lejupladet?ligumaVersijasId=131&tips=3',
          varianti: null,
        },
      ],
    },
  ],
  paraksti: null,
};

const translations = {
  GLOBAL_PERSON_PV: 'PV',
  PEC_SINGLE_CR_DROP_PLACEHOLDER: 'asdasdasd',
  GLOBAL_EXPLANATION: 'asdasdasd',
  GLOBAL_PERSOAUTO_ADDED_STATUSN_PV: 'asdasdasd',
  GLOBAL_EDIT: 'asdasdasd',
  GLOBAL_PUBLIC_PERIOD: 'asdasdasd',
  GLOBAL_AGREEMENT_AMENDMENT_CONSTRUCTOR: 'asdasdasd',
  PROJECT_QUESTION_RELATED_DOCUMENTS: 'asdasdasd',
  GLOBAL_STANDART_CONTRACT: 'asdasdasd',
  AGREEMENT_CHANGEMODAL_HEADING: 'asdasdasd',
  GLOBAL_ERROR: 'asdasdasd',
};

export const Default = () => {
  return html`
    <cds-global-hero-1
      .data="${data}"
      .translations="${translations}"></cds-global-hero-1>
  `;
};

export default {
  parameters: {},
  title: 'Custom-components/global-hero-1',
};
