/**
 * Test and assert that selected element is in the DOM and Visible
 * @param selector A selector used to filter matching DOM elements
 * Check docs for more info: https://docs.cypress.io/api/commands/get#Arguments
 */
const elementShouldBeVisible = (selector: string) => {
  cy.get(selector).should('be.visible');
};

/**
 * Test and assert that selected element does not exist in DOM
 * @param selector
 */
const elementShouldNotExist = (selector: string) => {
  cy.get(selector).should('not.exist');
};

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('UI rendering', () => {
    it('Should show Nav Bar', () => {
      // navigation header
      elementShouldBeVisible('#header');
    });
    it('Should show Banner', () => {
      // Best practice
      // using data-test-id for test
      // data-test-id could follow => Where?-What?-Why?
      elementShouldBeVisible('[data-test-id="banner-container"]');
    });
    it('Should load posts', () => {
      /**
       * ATTENTION!!!
       * This throw error is you have no post in your blog
       * you can disable it by adding <it.skip()>
       * check docs: https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Excluding-and-Including-Tests
       */
      cy.get('[data-test-id="post-card-container"]')
        .should('have.length.greaterThan', 0)
        .first()
        .should('be.visible');
    });
  });

  context('Scroll to top button', () => {
    it('Should show button when scrolling', () => {
      elementShouldNotExist('[data-test-id="button-scrollToTop"]');
      cy.scrollTo(0, 290);
      elementShouldNotExist('[data-test-id="button-scrollToTop"]');

      // show only when scroll Y > 300
      cy.scrollTo(0, 310);
      elementShouldBeVisible('[data-test-id="button-scrollToTop"]');
    });

    it('Should scroll back to top when click button', () => {
      cy.scrollTo(0, 310);
      cy.get('[data-test-id="button-scrollToTop"]').click();

      elementShouldNotExist('[data-test-id="button-scrollToTop"]');
      cy.window().its('scrollY').should('equal', 0);
    });
  });
});
