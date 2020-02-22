describe('User can navigate the app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
      cy.get('#about-tab').click()
        
    })
  

    it('displays About Me header', () => {
        cy.get('#about-header').should('contain', 'About Me')
    })
  
    it('displays component name in url', () => {
        cy.url().should("contain", "about")
    })
  
    it('does not display My Projects header ', () => {
        cy.get('#projects-header').should('not.exist')
    })
  
    it('does not display Hunter Vitous', () => {
        cy.get('#hello').should('not.exist')
    })

    it('clicks on the linkedin logo image', () => {
        cy.get('#linkedin-image').click()
    })

})

