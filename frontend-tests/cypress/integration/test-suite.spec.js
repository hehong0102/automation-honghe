//<reference types="cypress" />

describe('regression test suite', function(){
  
    it('perform valid login', function(){
    cy.visit('http://localhost:3000')
    cy.title().should('include','Hotel')
    cy.contains('Login')
    cy.get(':nth-child(1) > input').type('tester01')
    cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
    cy.get('.btn').click()
   // cy.contains('Tester Hotel Overview')
    //cy.get('.user > .btn').click()
     //cy.contains('Login')
    })
     it('perform room overview', function(){
       // cy.visit('http://localhost:3000')
        //cy.contains('Login')
        //cy.get(':nth-child(1) > input').type('tester01')
        //cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        //cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.contains('Rooms')
        cy.get(':nth-child(1) > .btn').contains('View').click()
        cy.get('a.btn:nth-child(1)').contains('Back').click()
        cy.contains('Tester Hotel Overview')
    })
    it('perform clients overview', function(){
        //cy.visit('http://localhost:3000')
        
        //cy.get(':nth-child(1) > input').type('tester01')
        //cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        //cy.get('.btn').click()
        
        cy.contains('Clients')
        cy.get(':nth-child(2) > .btn').contains('View').click()
        cy.get('a.btn:nth-child(1)').contains('Back').click()
        cy.contains('Tester Hotel Overview')
    })
    it('perform Bills overview', function(){
        cy.contains('Bills')
        cy.get(':nth-child(3) > .btn').contains('View').click()
        cy.get('a.btn:nth-child(1)').contains('Back').click()
        cy.contains('Tester Hotel Overview')
    })
    it('perform Reservation overview', function(){
        cy.contains('Reservation')
        cy.get(':nth-child(4) > .btn').contains('View').click()
        cy.get('a.btn:nth-child(1)').contains('Back').click()
        cy.contains('Tester Hotel Overview')
    })
    it('perform valid logou', function(){
        cy.get('.user > .btn').contains('Logout').click()
        cy.contains('Login')
    })
})
  