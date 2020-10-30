import faker from 'faker'


const category='div.field:nth-child(1) > select:nth-child(2)'
const number='div.field:nth-child(2) > input:nth-child(2)'
const floor='div.field:nth-child(3) > input:nth-child(2)'
const availableButton='.checkbox'
const price='div.field:nth-child(5) > input:nth-child(2)'
const features='div.field:nth-child(6) > select:nth-child(2)'
const saveButton='a.btn:nth-child(2)'

// function
function createRoom(cy,contentToConfirm){
    cy.get(category).select('Double')
    let roomNumber=faker.random.number(1000)
    cy.get(number).type(roomNumber)
    cy.get(floor).type(faker.random.number(4))
    cy.get(availableButton).click()
    cy.get(price).type(faker.random.number({min:25 ,max:50}))
    cy.get(features).select('Balcony')
    cy.get(saveButton).click()
    cy.contains(roomNumber)
}

//export
module.exports={
    createRoom
}