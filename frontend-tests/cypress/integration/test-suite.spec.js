//<reference types="cypress" />
import faker from 'faker'

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
    it('create a new room', function(){
        cy.get(':nth-child(1) > .btn').click()
        cy.get('a.btn:nth-child(2)').click()
        cy.get('div.field:nth-child(1) > select:nth-child(2)').select('Double')
        let roomNumber=faker.random.number(1000)
        cy.get('div.field:nth-child(2) > input:nth-child(2)').type(roomNumber)
        cy.get('div.field:nth-child(3) > input:nth-child(2)').type(faker.random.number(4))
        cy.get('.checkbox').click()
        cy.get('div.field:nth-child(5) > input:nth-child(2)').type(faker.random.number({min:25 ,max:50}))
        cy.get('div.field:nth-child(6) > select:nth-child(2)').select('Balcony')
        cy.get('a.btn:nth-child(2)').click()
        cy.contains(roomNumber)
        

    })

    it('perform valid logout', function(){
        cy.get('.user > .btn').contains('Logout').click()
        cy.contains('Login')
    })
})
  