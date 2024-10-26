import './../support/commands.js';

describe('Suite 02: Realizar o fluxo de checkout (carrinho de compras)', () => {
    
    it('Deve realizar o fluxo de checkout', () => {
        //usuário loga
        cy.logar();

        //usuário entra na página para escolher produto
        cy.escolherItem();

        //usuário realiza o checkout
        cy.checkOut();

        //critério de aceite: Deve apresentar a mensagem: "Pedido Recebido"
        cy.get('.page-header').should('contain.text', 'Pedido recebido')
    });
});