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
import storyDocs from './label-value-horizontal-story.mdx';

export const Default = () => {
  return html`
    <cds-label-value-horizontal
      label="Atlases nosaukums"
    >
      Latvijas Universitāte
    </cds-label-value-horizontal>
  `;
};
Default.storyName = 'Default';

export const ProposedLink = () => {
  return html`
    <cds-label-value-horizontal
      label="Atlases nosaukums"
    >
      <cds-link
        href="#saite"
      >
        Zinātnes politikas ieviešana, vadība un kapacitātes stiprināšana
      </cds-link>
    </cds-label-value-horizontal>
  `;
};
ProposedLink.storyName = 'Label With Link';

export const ProposedTag = () => {
  return html`
    <cds-label-value-horizontal
      label="Atlases nosaukums"
    >
      <cds-tag
        type="blue"
      >
        Noslēgusies
      </cds-tag> 25.10.2019 10:34
    </cds-label-value-horizontal>
  `;
};
ProposedTag.storyName = 'Label With Tag';

export default {
  title: 'Custom-components/Label value horizontal',
  parameters: {
    ...storyDocs.parameters,
  },
};
