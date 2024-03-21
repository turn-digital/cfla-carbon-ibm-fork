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
import storyDocs from './divider-story.mdx';

export const Default = () => {
  return html`
    <h1>Example</h1>
    <h1>Example</h1>
    <cds-divider size=3></cds-divider>
    <h1>Example</h1>
    <h1>Example</h1>
    <cds-divider size=6></cds-divider>
    <h1>Example</h1>
    <h1>Example</h1>
    <cds-divider size=12></cds-divider>
    <h1>Example</h1>
    <h1>Example</h1>
  `;
};
Default.storyName = 'Default';


export default {
  title: 'Custom-components/Divider',
  parameters: {
    ...storyDocs.parameters,
  },
};
