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

export const Default = () => {
  return html`
    <cds-main-content-block-open>
      <span slot="header">Header Block</span>
      <span slot="content">Content Block</span>
    </cds-main-content-block-open>
  `;
};

export default {
  title: 'Custom-components/Main content block open',
};
