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
import storyDocs from './back-to-story.mdx';

export const Default = () => {
  return html` <cds-back-to></cds-back-to> `;
};
export const Propsed = () => {
  return html`
    <cds-back-to
      title="Custom title"
      link="http://localhost:9000/?path=/story/custom-compnents-back-to--default">
    </cds-back-to>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Back-to',
};
