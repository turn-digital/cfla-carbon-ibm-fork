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
import storyDocs from './page-title-story.mdx';

export const Propsed = () => {
  return html`
    <cds-page-title title="Proposed Project Title" subtitle="Project subTitle">
    </cds-page-title>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Page Title',
};
