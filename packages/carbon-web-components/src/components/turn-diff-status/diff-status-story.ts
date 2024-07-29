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
import storyDocs from './diff-status-story.mdx';

export const Propsed = () => {
  return html`
    <cds-diff-status type="added" date="2021-02-02"> </cds-diff-status>
    <cds-diff-status type="edited" date="2021-02-02"> </cds-diff-status>
    <cds-diff-status type="deleted" date="2021-02-02"> </cds-diff-status>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Diff Status',
};
