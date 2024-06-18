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
import storyDocs from './print-download-story.mdx';

export const Default = () => {
  return html`
    <cds-print-download
      downloadLink="https://example.com/download"
      printLink="https://example.com/print"></cds-print-download>
  `;
};
export default {
  title: 'Custom-components/Print download',
  parameters: {
    ...storyDocs.parameters,
  },
};
