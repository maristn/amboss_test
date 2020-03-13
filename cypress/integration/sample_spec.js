/// <reference types="Cypress" />

describe('My First Test', function() {
    it('Open Amboss login page', function() {
      cy.visit('https://qa-assignment.us.next.medicuja.de/us')
    })

    it('Enter the credentials', function() {
        cy.get('[id=signin_username]')
          .type('qa+assignment01@medicuja.com')

        cy.get('[id=signin_password]')
          .type('Gottafindthemall!')

        cy.get('[type=submit]').click()
        cy.get('[data-e2e-test-id="DashboardPage"]').should('be.visible')
        
    })

    it('Click on menu', function() {
        cy.get('.iconContainer-3066683859').click()
        cy.get('[data-e2e-test-id="DashboardPage"]').should('be.visible')        
    })

    it('Click on Qbank', function() {
        cy.get('[data-e2e-test-id="L0Chevron-Qbank"]').click()
    })

    it('Click on Previous Sessions', function() {
        cy.get('[data-e2e-test-id="L0-secondlevel-Previous sessions"]').click()
        
        cy.wait(3000)
        
        cy.get('[data-e2e-test-id="Previous sessionsPage"]').should('be.visible')        

        cy.get('.container-3787872981')
          .first()
          .click()
        cy.get('[data-e2e-test-id="rename"]').click()

        cy.get('[data-e2e-test-id="childrenContainer"]').type("TEST")
        cy.get('[data-e2e-test-id="undefined"]').click()
        
        cy.get('.title-2965275244').should('have.value', 'TEST')
    })  
})