export const cadastroPage = {
    openTelaCadastro(){
        cy.get('[href="/Tab/Account"]').click();
        return cy.get('[data-testid="signUp"] > .css-146c3p1');
    }
}
