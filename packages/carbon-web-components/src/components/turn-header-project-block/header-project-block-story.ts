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
import storyDocs from './header-project-block-story.mdx';

export const Default = () => {
  return html` <cds-header-project-block></cds-header-project-block> `;
};
export const Propsed = () => {
  return html`
    <cds-header-project-block title="Header Project Block">
      Some content
    </cds-header-project-block>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Header project block',
};
