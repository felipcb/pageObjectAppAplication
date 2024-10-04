const { gerarNome, gerarEmail, gerarTelefone, gerarUltimoNome, gerarPassword } = require('../support/geradorUsers');
const { cadastroPage } = require('../support/pages/cadastro.page');
const cadastrarUser = require("../support/pages/cadastroUser.page");
const profilePage = require('../support/pages/profile.page')
var password = gerarPassword();
var nome = gerarNome();



//Cadastro de usuário
describe('Suite 01: Realizar cadastro com sucesso', () => {
  
  beforeEach(()=>{
    cy.setCookie('ebacStoreVersion', 'v2', {domain: 'lojaebac.ebaconline.art.br'});
    cy.visit('/')
  });
  
  it('deve realizar cadastro com sucesso', () => {
    cadastroPage.openTelaCadastro().click();
    cadastrarUser.userDados(
      nome,
      gerarUltimoNome(),
      gerarTelefone(),
      gerarEmail(),
      password,
      password
    );

    //Critério de aceite: Validar o nome dentro da tela Profile
    profilePage.perfil().should('contain', nome);
    
  })
}) 