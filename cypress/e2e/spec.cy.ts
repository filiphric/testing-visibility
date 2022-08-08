it('test', () => {

  cy.visit('/')

  cy.get('button')
    .click()

  cy.get('p')
    .should('contain.text', 'Button clicked!')

});
