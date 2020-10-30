//elements
const createRoomButton='a.btn:nth-child(2)'
const titleOfRoomspage='Tester Hotel'
const backButton='a.btn:nth-child(1)'


// function

function checkTitleOfRoomsPage(cy){
    cy.title().should('eq', titleOfRoomspage)
}
function prepareCreateRoom(cy){
    cy.get(createRoomButton).click()
}

function returnDashboardPage(cy,contentToConfirm){
    cy.get(backButton).click()
    cy.contains(contentToConfirm)
}

// export
module.exports={
    checkTitleOfRoomsPage,
    returnDashboardPage,
    prepareCreateRoom
}