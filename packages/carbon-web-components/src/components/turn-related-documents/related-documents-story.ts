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
  return html`
    <cds-related-documents>
      <cds-related-documents-item>
    </cds-related-documents>`;
};
Default.storyName = 'Default';

export const Propsed = () => {
  const linkIconToolBox = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="16" height="16" fill="white" style="mix-blend-mode:multiply"/>
  <path d="M13.5 4.5H12V3C12 2.73478 11.8946 2.48043 11.7071 2.29289C11.5196 2.10536 11.2652 2 11 2H5C4.73478 2 4.48043 2.10536 4.29289 2.29289C4.10536 2.48043 4 2.73478 4 3V4.5H2.5C2.10218 4.5 1.72064 4.65804 1.43934 4.93934C1.15804 5.22064 1 5.60218 1 6V13C1 13.2652 1.10536 13.5196 1.29289 13.7071C1.48043 13.8946 1.73478 14 2 14H14C14.2652 14 14.5196 13.8946 14.7071 13.7071C14.8946 13.5196 15 13.2652 15 13V6C15 5.60218 14.842 5.22064 14.5607 4.93934C14.2794 4.65804 13.8978 4.5 13.5 4.5ZM5 3H11V4.5H5V3ZM14 13H2V8.5H6V11H10V8.5H14V13ZM7 8.5H9V10H7V8.5ZM2 7.5V6C2 5.86739 2.05268 5.74021 2.14645 5.64645C2.24021 5.55268 2.36739 5.5 2.5 5.5H13.5C13.6326 5.5 13.7598 5.55268 13.8536 5.64645C13.9473 5.74021 14 5.86739 14 6V7.5H2Z" fill="#161616"/>
  </svg>`

  const linkIconCert = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="16" height="16" fill="white" style="mix-blend-mode:multiply"/>
  <path d="M6 8H3V9H6V8Z" fill="#161616"/>
  <path d="M8 6H3V7H8V6Z" fill="#161616"/>
  <path d="M8 4H3V5H8V4Z" fill="#161616"/>
  <path d="M7 13H2V3H14V8H15V3C15 2.73478 14.8946 2.48043 14.7071 2.29289C14.5196 2.10536 14.2652 2 14 2H2C1.73478 2 1.48043 2.10536 1.29289 2.29289C1.10536 2.48043 1 2.73478 1 3V13C1 13.2652 1.10536 13.5196 1.29289 13.7071C1.48043 13.8946 1.73478 14 2 14H7V13Z" fill="#161616"/>
  <path d="M11 12.795L9.705 11.5L9 12.205L11 14.205L15 10.205L14.295 9.5L11 12.795Z" fill="#161616"/>
  </svg>`

  const linkIconLicense = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="16" height="16" fill="white" style="mix-blend-mode:multiply"/>
  <path d="M11 3H5V4H11V3Z" fill="#161616"/>
  <path d="M11 5H5V6H11V5Z" fill="#161616"/>
  <path d="M8 12H5V13H8V12Z" fill="#161616"/>
  <path d="M8 7H5V8H8V7Z" fill="#161616"/>
  <path d="M12 15H4C3.73488 14.9997 3.4807 14.8942 3.29323 14.7068C3.10576 14.5193 3.0003 14.2651 3 14V2C3.0003 1.73488 3.10576 1.4807 3.29323 1.29323C3.4807 1.10576 3.73488 1.0003 4 1H12C12.2651 1.0003 12.5193 1.10576 12.7068 1.29323C12.8942 1.4807 12.9997 1.73488 13 2V14C12.9997 14.2651 12.8942 14.5193 12.7068 14.7068C12.5193 14.8942 12.2651 14.9997 12 15ZM4 2V14H12V2H4Z" fill="#161616"/>
  </svg>`

  return html`
    <cds-related-documents title="Saistītie dokumenti">
      <cds-related-documents-item
        linkTitle="Saistītais PI"
        linkUrl="https://google.com"
        linkIcon=${linkIconToolBox}>
      </cds-related-documents-item>
      <cds-related-documents-item
        linkTitle="Pārbaudes lapa"
        linkUrl="https://google.com"
        linkIcon=${linkIconCert}>
      </cds-related-documents-item>
      <cds-related-documents-item
        linkTitle="Saistītā līguma konsolidētā versija"
        linkUrl="https://google.com"
        linkIcon=${linkIconLicense}>
      </cds-related-documents-item>
      <cds-related-documents-item
        linkTitle="Saistītā PI grozījumu pamatojums"
        linkUrl="https://google.com">
      </cds-related-documents-item>
    </cds-related-documents>
  `;
};
export default {
  title: 'Custom-components/Related documents',
  parameters: {
    ...storyDocs.parameters,
  },
};
