import utils from '../../support/test-utils'

describe('Authorization page', () => {
    const customBeforeAll = beforeEach(() => {
        cy.visit(`${Cypress.env('URL')}`)
        cy.log(`The auth page has to be opened`)
    })



    it('Authorization by non-registered user', () => {

    })


})
