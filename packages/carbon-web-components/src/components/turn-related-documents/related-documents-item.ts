/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import styles from './related-documents.scss';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

//icons
import Launch16 from '@carbon/icons/lib/launch/16';

//libs for cleaning html
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import DOMPurify from 'dompurify';

/**
 * Related documents item.
 *
 * @element cds-related-documents-item
 */
@customElement(`${prefix}-related-documents-item`)
class CDSRelatedDocumentsItem extends LitElement {
  @property({ type: String }) linkTitle = 'Saistītas PI';
  @property({ type: String }) linkUrl = 'https://www.google.com';
  /**
    * Can be one of: _blank, _self, _parent, _top
  */
  @property({ type: String }) target = '_self';
  @property({ type: String }) linkIcon = '';


  sanitizeIcon(icon) {
    return DOMPurify.sanitize(icon, { ADD_TAGS: ['svg'], ADD_ATTR: ['xmlns'] });
  }

  render() {
    const { linkTitle, linkUrl, linkIcon, target } = this;
    const isLinkIconEmpty = !linkIcon;

    return html`
      <li class="related-documents__links-item">
        <span class="related-documents__link-icon" ?hidden="${isLinkIconEmpty}">
          ${unsafeHTML(this.sanitizeIcon(linkIcon))}  
        </span>
        <cds-link
          href="${linkUrl}"
          target="${target || '_self'}"
        >
          ${linkTitle}
          ${target === '_blank' ? Launch16({ slot: 'icon' }): ''}
        </cds-link>
      </li>
    `;
  }



  static styles = styles;
}

export default CDSRelatedDocumentsItem;
