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
import storyDocs from './diff-checker-btn-story.mdx';


export const Propsed = () => {
  return html`
    <cds-diff-checker-btn
      type="added"
      date="2021-02-02">
    </cds-diff-checker-btn>
    <cds-diff-checker-btn
      type="edited"
      date="2021-02-02">
    </cds-diff-checker-btn>
    <cds-diff-checker-btn
      type="deleted"
      date="2021-02-02">
    </cds-diff-checker-btn>
  `;
};


export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Diff Checker Button',
};
