import { LoginBtn } from './Login'
import { Location } from './Location'

describe('Login button', { viewportWidth: 300, viewportHeight: 300 }, () => {
  it('tries to click the button', () => {
    cy.mount(<LoginBtn />)
    cy.getByCy('login-button').click()
    // cannot really access the new domain from the component test 😢
  })

  it('tries to stub location.assign', () => {
    cy.mount(<LoginBtn />)
    cy.stub(location, 'assign').as('assign')
    cy.getByCy('login-button').click()
    // cannot really access the new domain from the component test 😢
  })

  it.only('stubs location.assign via its proxy object', () => {
    cy.stub(Location, 'assign').as('assign')
    cy.mount(<LoginBtn />)
    cy.getByCy('login-button').click()
    cy.get('@assign').should('have.been.calledOnceWith', 'https://cypress.tips')
  })
})
