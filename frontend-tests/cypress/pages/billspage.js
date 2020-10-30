//elements

const titleOfBillspage='Tester Hotel'
const backButton='a.btn:nth-child(1)'

// function

function checkTitleOfBillsPage(cy){
    cy.title().should('eq', titleOfBillspage)
}

function returnDashboardPage(cy,contentToConfirm){
    cy.get(backButton).click()
    cy.contains(contentToConfirm)
}

// export
module.exports={
    checkTitleOfBillsPage,
    returnDashboardPage
}