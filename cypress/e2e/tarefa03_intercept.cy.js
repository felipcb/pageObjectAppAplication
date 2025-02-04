import { setCookieVersion } from '../support/pages/versaoEbac.page.js';
import './../support/commands.js';

describe('Suite 03: Simular retorno com Intercept', () => {

    beforeEach(() => {
      cy.logarV2();
    });
    
    it('Deve simular resposta dada pelo API ', () => {

      cy.intercept('GET', '**/public/getProducts?sortBy=popularity', {statusCode: 200}).as('pegandoCarrinho')
      //usuário loga
      cy.logarV2();

      //adiciona produto
      cy.addProductV2();

      //critério de aceite: Simular resposta
      cy.wait('@pegandoCarrinho').its('response.statusCode').should('eq', 200);



    });

    it('Deve adicionar um item ao carrinho', () => {
      cy.intercept('GET', '**/public/getCart?userId=67905adad151afe7bad3fd6f', {fixtures: 'getCart.json'}).as('adicionaItem') 
      cy.addProductV2();
      cy.addItemCarrinho(6,6);

      //critério de aceite: Simular adicionar item no carrinho
      cy.wait('@adicionaItem').then((interception) =>{
        'name','Bags'
      })

    });
    
});