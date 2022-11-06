describe('About page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should render About page', () => {
    cy.location('pathname').should('include', 'about');
  });
});
