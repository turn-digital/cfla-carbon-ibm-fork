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
import storyDocs from './status-control-panel-story.mdx';

export const Default = () => {
  return html` <cds-status-control-panel></cds-status-control-panel> `;
};
export const Propsed = () => {
  return html`
    <cds-status-control-panel
    
    </cds-status-control-panel>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Project card',
};
