/// <reference types="Cypress" />


describe('pesquisa valida',()=>{
    

    it('deve efetuar a busca do produto', ()=>{
        cy.visit('https://olx.com.br')
        
    })

    it('busca válida digitando e clicando na lupa', () => {
        cy.get('#searchtext').type('cadeira gamer')
        cy.get('.searchSubmitBtn').click()
        cy.get('.sc-1mi5vq6-2').should('have.text', '"cadeira gamer" em São Paulo')


        
           
    })      
})