//elements

const titleOfReservationspage='Tester Hotel'
const backButton='a.btn:nth-child(1)'

// function

function checkTitleOfReservationsPage(cy){
    cy.title().should('eq', titleOfReservationspage)
}

function returnDashboardPage(cy,contentToConfirm){
    cy.get(backButton).click()
    cy.contains(contentToConfirm)
}

// export
module.exports={
    checkTitleOfReservationsPage,
    returnDashboardPage
}