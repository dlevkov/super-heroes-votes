/// <reference types="cypress" />
it('loads examples', () => {
  const url = 'http://localhost:4200';
  cy.visit(url);
  // cy.contains('Kitchen Sink');
  cy.get('h1').contains('super-heroes-votes');
});
