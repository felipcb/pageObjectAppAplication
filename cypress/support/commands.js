import { setCookieVersion } from "./pages/versaoEbac.page";
import { loginPage } from "./pages/login.page";
import { compras } from "./pages/compras.page";
import { homePage } from "./pages/cadastro.page"
import { checkout } from "./pages/checkout.page";
const { usuario, senha } = require ("./../fixtures/usuariosCadastrados.json")
const faker = require('faker');


 Cypress.Commands.add('logar', () => { 

    cy.visit("/");

    cy.get(loginPage.signin).click();
    cy.get(loginPage.campoEmail).type(usuario);
    cy.get(loginPage.campoSenha).type(senha);

    cy.get(loginPage.botaoLogin).should('be.visible').click();
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