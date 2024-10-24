/**
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Sets the correct path (Masthead search open onload)
 *
 * @type {string}
 * @private
 */
const _pathSearchOpenOnload =
  '/iframe.html?id=components-masthead--search-open-onload&knob-use%20mock%20nav%20data%20(use-mock)=true';

describe('cds-masthead | search open onload (desktop)', () => {
  beforeEach(() => {
    // TODO: fix the uncaught exception in Firefox only
    cy.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('Request aborted')) {
        return false;
      }
    });

    cy.visit(`/${_pathSearchOpenOnload}`);
    cy.injectAxe();
    cy.viewport(1280, 780);

    cy.waitUntil(() => cy.get('[data-autoid="cds--masthead-default__l0-nav0"]').should('not.be.empty'));
  });

  it('should check a11y', () => {
    cy.checkAxeA11y();
  });

  it('should load search field open by default', () => {
    cy.get('cds-search-with-typeahead')
      .shadow()
      .find('input[type="text"]')
      .should('be.visible');

    cy.takeSnapshots();
  });

  it('should have typable search field', () => {
    cy.get('cds-search-with-typeahead')
      .shadow()
      .find('input[type="text"]')
      .type('test')
      .should('have.value', 'test');
  });

  it('should display 10 auto suggest results', () => {
    cy.get('cds-search-with-typeahead')
      .shadow()
      .find('input[type="text"]')
      .type('test');

    cy.get('c4d-search-with-typeahead-item').should('have.length', 10);

    cy.takeSnapshots();
  });

  it('should not display menu options while search field is open', () => {
    cy.get('cds-top-nav').should('have.attr', 'hidenav');
  });
});
