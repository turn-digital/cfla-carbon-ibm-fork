/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';

// Below path will be there when an application installs `@carbon/web-components` package.
// In our dev env, we auto-generate the file and re-map below path to to point to the generated file.
// @ts-ignore
import { prefix } from '../../globals/settings';

import './index';
import storyDocs from './subselection-story.mdx';

export const Default = () => {
  return html`
    <cds-subselection hideSubselection>subselection</cds-subselection>
    <cds-subselection>subselection</cds-subselection>
  `;
};
Default.storyName = 'Default';

export default {
  title: 'Custom-components/Subselection',
  parameters: {
    ...storyDocs.parameters,
  },
};
