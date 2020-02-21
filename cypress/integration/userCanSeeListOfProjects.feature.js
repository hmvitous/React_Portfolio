describe('User can see list of projects', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get('#projects-tab').click()
    })

    it('displays first project', () => {
        cy.get('#project-1').within(() => {
            cy.get(('.image')).should('exist')
            cy.get('.ui.header').should('contain', 'Fizz Buzz')
            cy.get('.description').should('contain', 'The classic FizzBuzz challenge done in Ruby')
        })
    })

    it('displays second project', () => {
        cy.get('#project-2').within(() => {
            cy.get(('.image')).should('exist')
            cy.get('.ui.header').should('contain', 'BMI Calculator')
            cy.get('.description').should('contain', 'A calculator I built that tells you your BMI just by typing in your height and weight')
        })
    })

    it('displays third project', () => {
        cy.get('#project-3').within(() => {
            cy.get(('.image')).should('exist')
            cy.get('.ui.header').should('contain', 'ATM Challenge')
            cy.get('description').should('contain', "A virtual ATM built in Ruby")
        })
    })
})