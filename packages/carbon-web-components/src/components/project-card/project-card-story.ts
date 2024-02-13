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
import storyDocs from './project-card-story.mdx';

export const Default = () => {
  return html` <cds-project-card></cds-project-card> `;
};
export const Propsed = () => {
  return html`
    <cds-project-card title="Propsed page title"></cds-project-card>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom compnents/Project card',
};
