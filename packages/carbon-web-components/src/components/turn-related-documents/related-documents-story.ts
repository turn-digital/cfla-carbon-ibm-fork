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
import storyDocs from './related-documents-story.mdx';

export const Default = () => {
  const relatedDocuments = [
    {
      linkUrl: 'www.example.com/doc1',
      linkTitle: 'Document 1 Title',
      target: '_blank',
      linkIcon: `<svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <defs>
        <style>
          .cls-1 {
            fill: none;
          }
        </style>
      </defs>
      <path d="m24,21v2h1.7483c-2.2363,3.1196-5.8357,5-9.7483,5-6.6169,0-12-5.3833-12-12h-2c0,7.7197,6.2803,14,14,14,4.355,0,8.3743-2.001,11-5.3452v1.3452h2v-5h-5Z"/>
      <path d="m22.5046,11.6367l-5.9883-3.5c-.1594-.0933-.3381-.1387-.5164-.1367-.1699.002-.3394.0474-.4915.1357l-6.0117,3.5c-.3076.1792-.4968.5083-.4968.8643v7c0,.356.1892.6851.4968.8643l6.0117,3.5c.1555.0903.3176.1357.4915.1357.1743,0,.3604-.0454.5164-.1367l5.9883-3.5c.3069-.1792.4954-.5078.4954-.8633v-7c0-.3555-.1885-.6841-.4954-.8633Zm-6.4939-1.479l4.0076,2.3423-4.0076,2.3423-4.0232-2.3423,4.0232-2.3423Zm-5.0107,4.0815l4,2.3291v4.6855l-4-2.3291v-4.6855Zm6,7.0249v-4.6836l4-2.3379v4.6836l-4,2.3379Z"/>
      <path d="m16,2c-4.355,0-8.3743,2.001-11,5.3452v-1.3452h-2v5h5v-2h-1.7483c2.2363-3.1196,5.8357-5,9.7483-5,6.6169,0,12,5.3833,12,12h2c0-7.7197-6.2803-14-14-14Z"/>
      <rect id="_Transparent_Rectangle_" data-name="&amp;lt;Transparent Rectangle&amp;gt;" class="cls-1" width="32" height="32"/>
    </svg>`,
    },
    {
      linkUrl: 'www.example.com/do2',
      linkTitle: 'Document 2 Title',
      linkIcon: `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <defs>
        <style>
          .cls-1 {
            fill: none;
          }
        </style>
      </defs>
      <path d="M16,24a.9967.9967,0,0,1-.4741-.12l-13-7L3.4741,15.12,16,21.8643,28.5259,15.12l.9482,1.7607-13,7A.9967.9967,0,0,1,16,24Z" transform="translate(0 0)"/>
      <path d="M16,30a.9967.9967,0,0,1-.4741-.12l-13-7L3.4741,21.12,16,27.8643,28.5259,21.12l.9482,1.7607-13,7A.9967.9967,0,0,1,16,30Z" transform="translate(0 0)"/>
      <path d="M16,18a.9967.9967,0,0,1-.4741-.12l-13-7a1,1,0,0,1,0-1.7607l13-7a.9982.9982,0,0,1,.9482,0l13,7a1,1,0,0,1,0,1.7607l-13,7A.9967.9967,0,0,1,16,18ZM5.1094,10,16,15.8643,26.8906,10,16,4.1358Z" transform="translate(0 0)"/>
      <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/>
    </svg>
    `,
    },
    {
      linkUrl: 'www.example.com/3',
      linkTitle: 'Document 3 Title',
    },
  ];

  return html` <cds-related-documents
    title="Saistītie dokumenti"
    .documents=${relatedDocuments}></cds-related-documents>`;
};

Default.storyName = 'Default';

export default {
  title: 'Custom-components/Related documents',
  parameters: {
    ...storyDocs.parameters,
  },
};
