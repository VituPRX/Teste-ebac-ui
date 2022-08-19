/// <reference types="cypress" />

import enderecoPage from '../support/page-objects/endereco.page'
const perfil = require('../fixtures/perfil.json')
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
        
    });
    
    it('Deve fazer cadastro de faturamento com sucesso', () => {  
        enderecoPage.editarEnderecoFaturamento('Valesca', 'Fagundes', 'Bolos de pote', 'Brasil', 'Av Manoel Vitginio De Jesus', '1047', 'Suzano', 'São paulo', '08696-165', '(11)95410-3943', 'valesca@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {  
       
        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenhome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].telefone,
            dadosEndereco[0].email
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        
    });
});