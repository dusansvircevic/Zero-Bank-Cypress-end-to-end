class BasePage {
    pause(milliseconds){
        cy.wait(milliseconds)
    }

    goBack(){
        cy.go('back')
    }
}

export default BasePage