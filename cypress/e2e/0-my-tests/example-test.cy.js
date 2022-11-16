/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com.br')
  })

  it('displays two todo items by default', () => {
    // cy.get('.todo-list li').should('have.length', 2)
    // cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    // cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
    cy.get('.gb_2').contains('Fazer login')
    cy.contains('Fazer login')
  })

})