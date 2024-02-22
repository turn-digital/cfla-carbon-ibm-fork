/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { prefix } from '../../globals/settings';
import styles from './global-hero.scss';
import { property } from 'lit/decorators.js';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import UserAvatar16 from '@carbon/icons/lib/user--avatar/16';
import Avatar16 from '@carbon/icons/lib/user--avatar/16';
import Edit16 from '@carbon/icons/lib/edit/16';
import ChevronDown16 from '@carbon/icons/lib/chevron--down/16';

@customElement(`${prefix}-global-hero-1`)
class GlobalHero1 extends LitElement {
  @property({ type: Object }) data;
  @property({ type: Object }) meta;
  @property({ type: Array }) relatedDocuments;
  @property({ type: Object }) translations;
  @property({ type: Object }) versijasInfo;

  @property({ type: Boolean }) showStatusModal = false;
  @property({ type: Object }) statusModalData = {};

  @property({ type: Boolean }) changeModal = false;
  @property({ type: String }) changeContentModal = '';

  @property({ type: Object }) notifyErr = null;

  extractLastTwoItemsFromURL(url) {
    const parts = url.split('/');
    const lastThreeItems = parts.slice(-2).join('/');
    return lastThreeItems;
  }

  downloadFile = (link, title) => {
    const a = document.createElement('a');
    a.href = link;
    a.setAttribute('download', title);
    a.click();
    a.remove();
  };

  render() {
    const {
      nosaukums,
      detalas,
      autori,
      versijasInfo,
      statuss,
      statusuVesture,
      automatiskieStatusi,
      pogas,
      iesniegsanasTermins,
      // paraksti,
      ikonas,
    } = this.data || {};

    const { kods, apraksts } = detalas || {};
    const { aktivaVersija } = versijasInfo || {}; // versijuVesture

    const { projectId, page, setResp, setDisableBtn, disableBtn } = this.meta
      ? this.meta
      : {};

    const leftSideButtons = pogas?.saraksts.filter(
      (item) => item.pozicija === 1
    );
    const rightSideButtons = pogas?.saraksts.filter(
      (item) => item.pozicija === 2
    );

    const extractLastTwoItemsFromURL = (url) => {
      const parts = url.split('/'); // Split the URL by '/'
      const lastThreeItems = parts.slice(-2).join('/'); // Get the last three items and join them with '/'

      return lastThreeItems;
    };

    return html`
      ${
        kods !== null && kods !== undefined
          ? html`
              <div class="hero__head">
                <cds-accordion style="background-color: #F5F5F5">
                  <cds-accordion-item
                    style="background-color: #F5F5F5"
                    title=${kods}>
                    ${detalas?.apraksts.map(
                      (item, i) =>
                        html`<p key=${i} class="hero__author label-01">
                          ${item}
                        </p>`
                    )}
                  </cds-accordion-item>
                </cds-accordion>
              </div>
            `
          : ''
      }

      <div style="padding-top: 20px;">
            <div
              style="display: flex; justify-content: space-between; align-items: center">
              <div style="display: flex; align-items: center">
                <h3
                  style="font-size: 20px; line-height: 28px; font-weight: 400">
                  ${this.data?.nosaukums}
                </h3>
                <span style="padding-top: 8px">
                  <cds-button kind="ghost"
                    >${Edit16({ slot: 'icon', fill: '#027070' })}</cds-button
                  >
                </span>
              </div>
              <div>
                <cds-button
                  kind="secondary"
                  size="sm"
                  style="padding-right: 13px"
                  >Saglabāt
                </cds-button>
                <cds-button
                  kind="primary"
                  size="sm"
                  style="background-color: green"
                  >Mainīt statusu ${ChevronDown16({ slot: 'icon' })}
                </cds-button>
              </div>
            </div>
        </div>
        <div>
        ${
          autori !== null
            ? html`
                ${autori?.map(
                  (item, i) => html`
                    <span
                      key=${i}
                      style=" display: flex; align-items: center; font-size: 12px">
                      ${item.grupa === 'PV'
                        ? html`
                            <div style="display: flex; align-items: center">
                              ${UserAvatar16({
                                slot: 'icon',
                              })}
                              <p style="padding-left: 5px">
                                ${this.translations?.GLOBAL_PERSON_PV}:
                                ${item.vardsUzvards}
                              </p>
                            </div>
                          `
                        : html`
                            <div style="display: flex; align-items: center">
                              ${Avatar16({
                                slot: 'icon',
                              })}
                              <p style="padding-left: 5px">
                                ${item.vardsUzvards}
                              </p>
                            </div>
                          `}
                    </span>
                  `
                )}
              `
            : ''
        }
        </div>

        <div >
        ${
          statusuVesture !== null
            ? statusuVesture
              ? html`
                  <cds-accordion>
                    <cds-accordion-item
                      style="width: 500px"
                      title=${html`"
                        <div style="display: flex; align-items: center;">
                          <cds-tag type="blue" title=${statuss?.nosaukums}>
                            ${statuss?.nosaukums}
                          </cds-tag>
                          <div style="padding-left: 15px">
                            ${statuss?.datums}
                          </div>
                        </div>
                        "`}>
                      asdasdasdaszczxczxcasdasda
                    </cds-accordion-item>
                  </cds-accordion>
                `
              : html`
                  <div style="display: flex; align-items: center;">
                    <cds-tag type="blue" title=${statuss?.nosaukums}>
                      ${statuss?.nosaukums}
                    </cds-tag>
                    <div style="padding-left: 15px">${statuss?.datums}</div>
                  </div>
                `
            : ''
        }
        </div>
      </div>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default GlobalHero1;
