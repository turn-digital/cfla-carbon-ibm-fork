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
import storyDocs from './eksperta-story.mdx';

export const Default = () => {
  return html` <cds-eksperta-1></cds-eksperta-1> `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Views/Eksperta/Eksperta-1',
};
