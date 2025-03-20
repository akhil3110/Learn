/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contain    
// s a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('visit app.100xdevs', () => {  
  beforeEach(() => {
    cy.visit('https://app.100xdevs.com')
  })


  it('Login', () => {
    
    cy.contains('Login').should('exist')
    cy.contains('Login').click()

    cy.contains('Log in to access paid content!').should('exist', { timeout: 10000 })
    cy.get("#email").type('akhil1659@gmail.com')
    cy.get('#password').type('AKhil@3110')
    cy.get('button').eq(4).click()

    cy.contains('View Content').should('exist', {timeout: 1000}).eq(1).click()
  })
})
