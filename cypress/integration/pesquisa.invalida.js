

describe('pesquisa invalida',()=>{
    

    it('deve efetuar a busca', ()=>{
        cy.visit('https://olx.com.br')
        
        
    })

    it('busca invalida digitando e clicando na lupa', () => {
        cy.get('#searchtext').type('***')
        cy.get('.searchSubmitBtn').click()
        cy.get('.sc-145t6x-0').should('have.text', 'Ops!')


        
           
        
    })      
})