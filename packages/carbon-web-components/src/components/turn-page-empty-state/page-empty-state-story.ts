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
import storyDocs from './page-empty-state-story.mdx';

export const Propsed = () => {
  return html`
    <cds-page-empty-state
      title="Mani projekti
"
      subtitle="Project subTitleŠajā sadaļā tiek atspoguļoti projekti, kuros ir noslēgts līgums.
 Šobrīd Jums vēl nav neviens noslēgts līgums par projekta īstenošanu.
 Atlases procesā esošie projektu iesniegumi ir pieejami sadaļā Projektu iesniegumi">
    </cds-page-empty-state>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Page Empty State',
};
