//elements
const titleOfIndexpage='Testers Hotel'
const usernameTextfield=':nth-child(1) > input'
const passwordTextfield=':nth-child(2) > input'
const loginButton='.btn'

//functions
function checkTitleOfIndexPage(cy){
    cy.title().should('eq', titleOfIndexpage)
}

function performValidLogin(cy, username, password,contentToConfirm){
    cy.get(usernameTextfield).type(username)
    cy.get(passwordTextfield).type(password)
    cy.get(loginButton).click()
    cy.contains(contentToConfirm)
}



//exports
module.exports={
    checkTitleOfIndexPage,
    performValidLogin
}