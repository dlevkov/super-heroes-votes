/// <reference types="cypress" />
it('loads examples', () => {
  const url = 'http://localhost:4200';
  cy.visit(url);
  // cy.contains('Kitchen Sink');
  cy.get('img').should('be.visible');
});
it('loads login', () => {
  const url = 'http://localhost:4200/login';
  cy.visit(url);
  // cy.contains('Kitchen Sink');
  cy.get('button').should('be.visible');
});
it('loads login', () => {
  const url = 'http://localhost:4200/select-side';
  cy.visit(url);
  // cy.contains('Kitchen Sink');
  cy.get('p').contains('selects-side works!');
});
