
import * as indexFuncs from '../pages/indexpage'
import * as dashBoardFuncs from '../pages/dashboardpage'
import * as roomFuncs from '../pages/roomspage'
import * as createRoomFunc from '../pages/createroompage'
import * as billFuncs from '../pages/billspage'
import * as clientFuncs from '../pages/clientspage'
import * as reservationFuncs from '../pages/reservationspage'
// test suite
describe('test suite', function(){
    

    //test case
  
    it('perform valid login', function(){
        cy.visit('http://localhost:3000')
        indexFuncs.checkTitleOfIndexPage(cy)
        indexFuncs.performValidLogin(cy,'tester01','GteteqbQQgSr88SwNExUQv2ydb7xuf8c','Tester Hotel Overview')
    })

    it('perform room overview', function(){
        dashBoardFuncs.performRoomsView(cy,'Rooms')
        roomFuncs.returnDashboardPage(cy,'Tester Hotel Overview')
    })

    it ('perform clients overview',function(){
        dashBoardFuncs.performClientsView(cy,'Clients')
        clientFuncs.returnDashboardPage(cy,'Tester Hotel Overview')
    })

    it ('perform bills overview',function(){
        dashBoardFuncs.performBillsView(cy,'Bills')
        billFuncs.returnDashboardPage(cy,'Tester Hotel Overview')
    })
    
    it ('perform reservations overview',function(){
        dashBoardFuncs.performReservationsView(cy,'Reservations')
        reservationFuncs.returnDashboardPage(cy,'Tester Hotel Overview')
    })
    

    it('create a new room', function(){
        dashBoardFuncs.performRoomsView(cy,'Room')
        roomFuncs.prepareCreateRoom(cy)
        createRoomFunc.createRoom(cy,'Rooms')

    })
    it('perform valid logou', function(){
        dashBoardFuncs.performLogout(cy,'Login')
    })
})
