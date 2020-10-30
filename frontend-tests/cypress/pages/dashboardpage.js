// elements
const titleDashboardPage='Tester Hotel'
const roomsView=':nth-child(1) > .btn'
//cy.get(':nth-child(1) > .btn')

//const clientsView='.blocks > :nth-child(2) > .btn'
//cy.get('.blocks > :nth-child(2) > .btn')
const clientsView='div.block:nth-child(2) > a:nth-child(3)'


const billsView=':nth-child(3) > .btn'
const reservationView=':nth-child(4) > .btn'

const logoutButton='button.btn'

//fuction
function checkTitleOfBashboardPage(cy){
    cy.title().should('eq', titleDashboardPage)
}
function performRoomsView(cy, contentToConfirm){
    cy.get(roomsView).click()
    cy.contains(contentToConfirm)
    
}

function performClientsView(cy, contentToConfirm){
    cy.get(clientsView).click()
    cy.contains(contentToConfirm)
    
}

function performBillsView(cy, contentToConfirm){
    cy.get(billsView).click()
    cy.contains(contentToConfirm)
   

}

function performReservationsView(cy, contentToConfirm){
    cy.get(reservationView).click()
    cy.contains(contentToConfirm)
   
}

function performLogout(cy,contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
    

}
//exports
module.exports={
    performRoomsView,
    performBillsView,
    performClientsView,
    performReservationsView,
    performLogout
}
    
