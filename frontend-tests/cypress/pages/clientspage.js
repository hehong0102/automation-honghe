//elements

const titleOfClientspage='Tester Hotel'
const backButton='a.btn:nth-child(1)'

// function

function checckIitleOfClientspage(cy){
    cy.title().should('eq', titleOfClientspage)
}

function returnDashboardPage(cy,contentToConfirm){
    cy.get(backButton).click()
    cy.contains(contentToConfirm)
}

// export
module.exports={
    checckIitleOfClientspage,
    returnDashboardPage
}