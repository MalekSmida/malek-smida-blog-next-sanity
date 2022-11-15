import hyperlinks from '../../utils/hyperlinks';

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
      // using data-testid for test
      // data-testid could follow => Where?-What?-Why?
      elementShouldBeVisible('[data-testid="banner-container"]');
    });
    it('Should load posts', () => {
      /**
       * ATTENTION!!!
       * This throw error is you have no post in your blog
       * you can disable it by adding <it.skip()>
       * check docs: https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Excluding-and-Including-Tests
       */
      cy.get('[data-testid="post-card-container"]')
        .should('have.length.greaterThan', 0)
        .first()
        .should('be.visible');
    });
    it('Should show Footer', () => {
      // scroll to footer
      cy.get('#footer')
        .scrollIntoView()
        .should('be.visible')
        .find('a')
        .should('have.attr', 'href', hyperlinks.GithubRepo);
    });
  });

  context('Scroll to top button', () => {
    it('Should show button when scrolling', () => {
      elementShouldNotExist('[data-testid="button-scrollToTop"]');
      cy.scrollTo(0, 290);
      elementShouldNotExist('[data-testid="button-scrollToTop"]');

      // show only when scroll Y > 300
      cy.scrollTo(0, 310);
      elementShouldBeVisible('[data-testid="button-scrollToTop"]');
    });

    it('Should scroll back to top when click button', () => {
      cy.scrollTo(0, 310);
      cy.get('[data-testid="button-scrollToTop"]').click();

      elementShouldNotExist('[data-testid="button-scrollToTop"]');
      cy.window().its('scrollY').should('equal', 0);
    });
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
