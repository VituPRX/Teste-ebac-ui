/// <reference types="cypress" />

describe('funcionalidade Pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('deve selecinar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Arcadio Gym Short')
            .click()

    });

    it('Deve adc um produto ao carrinho', () => {
        var qnt = 2

        cy.get('[class="product-block grid"]')
            .contains('Arcadio Gym Short').click()
        cy.get('.button-variable-item-32').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear().type(qnt)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qnt)
        cy.get('.woocommerce-message').should('contain', qnt + ' × “Arcadio Gym Short” foram adicionados no seu carrinho.')

    });
    
    it('Deve adicinar produtos usando comandos customizados', () => {
        cy.addProdutos('Argus All-Weather Tank', 'M', 'Gray', 2)
    });

    it('Deve adicinar produtos usando comandos customizados', () => {
        cy.addProdutos('Arcadio Gym Short', '32', 'Black', 3)
    });
    

});