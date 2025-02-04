import { setCookieVersion } from "./pages/versaoEbac.page";
import { loginPage } from "./pages/login.page";
import { compras } from "./pages/compras.page";
import { homePage } from "./pages/cadastro.page"
import { checkout } from "./pages/checkout.page";
import { logarV2 } from "./pages V2/logar.page";
import { addProductV2 } from "./pages V2/addProduct.page";
import { addItem1 } from "./pages V2/addItemCarrinho.page"
const { usuario, senha, usuarioV2, senhaV2 } = require ("./../fixtures/usuariosCadastrados.json")
const faker = require('faker');


 Cypress.Commands.add('logar', () => { 

    cy.visit("/");

    cy.get(loginPage.signin).click();
    cy.get(loginPage.campoEmail).type(usuario);
    cy.get(loginPage.campoSenha).type(senha);

    cy.get(loginPage.botaoLogin).should('be.visible').click();
 })

 Cypress.Commands.add('logarV2', () => { 
   
   setCookieVersion();
   cy.visit("/");
   cy.get(logarV2.signin).click();
   cy.get(logarV2.campoEmail).type(usuarioV2);
   cy.get(logarV2.campoSenha).type(senhaV2);
   cy.get(logarV2.botaoLogin).click();

})

Cypress.Commands.add('addProductV2', ()=> {
   cy.get(addProductV2.search).click();
   cy.get(addProductV2.add1).click();
})

Cypress.Commands.add('addItemCarrinho', (categoria, item1) => {
   cy.get(addItem1.categoria).eq(categoria).click({ force: true });
   cy.get(addItem1.item).eq(item1).click()
   cy.get(addItem1.addToCart).click()

})

 Cypress.Commands.add('escolherItem', () => {
    cy.get(compras.paginaDoProduto).should('be.visible').click();
    cy.get(compras.escolherItem).click();
    cy.get(compras.escolherTamanho).click();
    cy.get(compras.escolherCor).click();
    cy.get(compras.buttonComprar).click();
    cy.get(compras.verCarrinho).click();
 })

 Cypress.Commands.add('checkOut', () => {
    cy.get(checkout.buttonIrParaCheckout).click();
    cy.get(checkout.endereco).clear().type(faker.address.streetAddress());
    cy.get(checkout.cidade).clear().type(faker.address.city());
    cy.get(checkout.estado).click();
    cy.get(checkout.selecionarEstado).contains('Distrito Federal').click();
    cy.get(checkout.cep).clear().type(faker.address.zipCode('#####-###'));
    cy.get(checkout.telefone).clear().type(faker.phone.phoneNumber('(##)9####-####'));
    cy.get(checkout.iconeTermosAceite).click();
    cy.get(checkout.buttonFinalizarCompra).click();

 })