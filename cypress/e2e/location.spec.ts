it('stubs the location.assign method', { baseUrl: 'http://localhost:3000' }, () => {
  cy.visit('index.html')
  cy.window()
    .its('Location')
    .then((Location) => {
      // @ts-ignore
      cy.stub(Location, 'assign').as('assign')
    })
  cy.getByCy('login-button').click()
  cy.get('@assign').should('have.been.calledOnceWith', 'https://cypress.tips')
})
