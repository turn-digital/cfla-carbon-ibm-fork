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
import storyDocs from './sekretara-parbaudes-lapa-story.mdx';

export const Default = () => {
  return html` <cds-sekretara-parbaudes-lapa></cds-sekretara-parbaudes-lapa> `;
};


export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Views/Ekspertu vērtēšanas/Vērtētāju skati/LZP sekretāra pārbaudes lapa',
};
