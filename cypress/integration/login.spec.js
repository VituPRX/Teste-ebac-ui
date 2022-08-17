/// <reference types="cypress" />

context('funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('deve fazer login com sucesso', () => {
        
        cy.get('#username').type ('vitor_ebac@teste.com')
        cy.get('#password').type ('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' , 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')

    });
    it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
        
        cy.get('#username').type ('vitor_a@teste.com')
        cy.get('#password').type ('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should ('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });




    it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
       
        cy.get('#username').type ('vitor_ebac@teste.com')
        cy.get('#password').type ('teste.teste')
        cy.get('.woocommerce-form > .button').click()
    
        cy.get('.woocommerce-error > li').should ('contain' , 'Erro: A senha fornecida para o e-mail vitor_ebac@teste.com está incorreta. Perdeu a senha?')

    });
    
});