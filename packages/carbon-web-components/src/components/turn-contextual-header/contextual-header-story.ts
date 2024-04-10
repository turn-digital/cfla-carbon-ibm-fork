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
import storyDocs from './contextual-header-story.mdx';

export const Default = () => {
  return html` <cds-contextual-header></cds-contextual-header> `;
};
export const Propsed = () => {
  return html`
    <cds-contextual-header title="Contextual header">
      Some content
    </cds-contextual-header>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Contextual header',
};
