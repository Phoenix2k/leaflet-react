/// <reference types="../../cypress/support"/>

import config from '../../../src/config';

const pageKeys = Object.keys(config.pages);

describe('Generic tests for all pages\n', () => {
  pageKeys.forEach((pageKey) => {
    const { slug: pageSlug, title: pageTitle, url: pageUrl } = config.pages[pageKey];

    describe(pageTitle, () => {
      before(() => {
        cy.visit(pageUrl);
      });

      describe('Head', () => {
        it('has a meta description', () => {
          cy.get('head meta[name="description"]')
            .should('have.length', 1)
            .and('have.attr', 'content')
            .and('not.be.empty');
        });

        it('has a meta title', () => {
          cy.get('head title').and('have.length', 1).and('not.be.empty');
        });
      });

      describe('Body', () => {
        describe('Header', () => {
          it('has a header', () => {
            cy.get('header').should('be.visible').and('not.be.empty');
          });
        });

        describe('Main container', () => {
          it('has a main container', () => {
            cy.get('main').should('be.visible');
            if (Cypress.config('video')) {
              cy.screenshot(pageSlug);
            }
          });

          it('has a main title', () => {
            cy.itemProp('title').should('exist');
          });

          it('has the correct main title', () => {
            cy.itemProp('title').contains(pageTitle);
          });
        });
      });
    });
  });
});
