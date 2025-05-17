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
import storyDocs from './doc-page-header-story.mdx';

export const Propsed = () => {
  return html`
    <cds-doc-page-header title="Darbības">
    <span slot=title-helper-icon>helper icon</span>
      <span slot="breadcrumb">
        <cds-breadcrumb>
          <cds-breadcrumb-item>
            <cds-breadcrumb-link href="/#">Breadcrumb 1</cds-breadcrumb-link>
          </cds-breadcrumb-item>
          <cds-breadcrumb-item>
            <cds-breadcrumb-link href="#">Breadcrumb 2</cds-breadcrumb-link>
          </cds-breadcrumb-item>
        </cds-breadcrumb>
      </span>
      <span slot="button">
        <cds-button kind="secondary" size="sm">Pārbaudīt sadaļu</cds-button>
      </span>
    </cds-doc-page-header>
  `;
};

export const Propsed1 = () => {
  return html`
    <cds-doc-page-header
      type="subtitle"
      title="Darbība - Esošo meliorācijas sistēmu un lietusūdens savākšanas sistēmu atjaunošana un vides pielāgošana klimata pārmaiņām">
      <span slot="breadcrumb">
        <cds-breadcrumb>
          <cds-breadcrumb-item>
            <cds-breadcrumb-link href="/#">Breadcrumb 1</cds-breadcrumb-link>
          </cds-breadcrumb-item>
          <cds-breadcrumb-item>
            <cds-breadcrumb-link href="#">Breadcrumb 2</cds-breadcrumb-link>
          </cds-breadcrumb-item>
        </cds-breadcrumb>
      </span>
      <span slot="button">
        <cds-button kind="secondary" size="sm">Pārbaudīt sadaļu</cds-button>
      </span>
    </cds-doc-page-header>
  `;
};

export const Propsed2 = () => {
  return html`
    <cds-doc-page-header
      type="subtitle"
      title="Darbība - Esošo meliorācijas sistēmu un lietusūdens savākšanas sistēmu atjaunošana un vides pielāgošana klimata pārmaiņām">
      <span slot="breadcrumb">
        <cds-link href="/#">< Atpakaļ uz sarakstu</cds-link>
      </span>
      <span slot="button">
        <cds-button kind="secondary" size="sm">Pārbaudīt sadaļu</cds-button>
      </span>
    </cds-doc-page-header>
  `;
};

export const Propsed3 = () => {
  return html`
    <cds-doc-page-header
      type="subtitle"
      title="Darbība - Esošo meliorācijas sistēmu un lietusūdens savākšanas sistēmu atjaunošana un vides pielāgošana klimata pārmaiņām"
      timerTitle="Atlikušais laiks iesniegšanai"
      timerLanguage="lv"
      timerDeadline="2025-07-08T00:00:00">
      <span slot="breadcrumb">
        <cds-breadcrumb>
          <cds-breadcrumb-item>
            <cds-breadcrumb-link href="/#">Breadcrumb 1</cds-breadcrumb-link>
          </cds-breadcrumb-item>
          <cds-breadcrumb-item>
            <cds-breadcrumb-link href="#">Breadcrumb 2</cds-breadcrumb-link>
          </cds-breadcrumb-item>
        </cds-breadcrumb>
      </span>
      <span slot="button">
        <cds-button kind="secondary" size="sm">Pārbaudīt sadaļu</cds-button>
      </span>
    </cds-doc-page-header>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Doc page header',
};
