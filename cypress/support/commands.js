import { homePage } from "./pages/cadastro.page"

Cypress.Commands.add('login', (email, password) =>{
    cy.setCookie('ebacStoreVersion', 'v2', {domain: 'lojaebac.ebaconline.art.br'});
    cy.visit('/');

    
})