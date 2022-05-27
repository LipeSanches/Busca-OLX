

describe('pesquisa invalida',()=>{
    

    it('deve efetuar a busca', ()=>{
        cy.visit('https://olx.com.br')
        
        
    })

    it('busca invalida digitando e clicando na lupa', () => {
        cy.get('#searchtext').type('***')
        cy.get('.searchSubmitBtn').click()
        cy.get('.sc-145t6x-0').should('have.text', 'Ops!')
        cy.get('.iezWpY > .sc-12rk7z2-0 > .sc-12rk7z2-1 > .sc-12rk7z2-2 > .sc-12rk7z2-3 > .sc-12rk7z2-4 > .sc-12rk7z2-5 > :nth-child(1) > .kgl1mq-0').click()


        
           
        
    })      
})