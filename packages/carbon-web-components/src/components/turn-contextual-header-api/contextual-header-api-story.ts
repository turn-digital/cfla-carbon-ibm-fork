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
import storyDocs from './contextual-header-api-story.mdx';

export const Default = () => {
  return html` <cds-contextual-header-api></cds-contextual-header-api> `;
};
export const Propsed = () => {
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
    <cds-contextual-header-api
      .contextualHeaderApiData=${contextualHeaderApiData}>
    </cds-contextual-header-api>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Contextual header with api',
};
