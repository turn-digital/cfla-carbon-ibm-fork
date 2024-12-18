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
import storyDocs from './project-title-story.mdx';

export const Propsed = () => {
  return html`
    <cds-project-title
      title="Proposed Project Title"
      subtitle="Project subTitle">
    </cds-project-title>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Project Title',
};
