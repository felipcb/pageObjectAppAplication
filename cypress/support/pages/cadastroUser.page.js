///<reference types='cypress'/>

class cadastrarUser {
    get #nome() {return cy.get('[data-testid="firstName"]')};
    get #ultimoNome() {return cy.get('[data-testid="lastName"]')};
    get #phone() {return cy.get('[data-testid="phone"]')};
    get #email() {return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]')};
    get #password() {return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]')};
    get #reEnter() {return cy.get('[data-testid="repassword"]')};
    get #btnCreate() {return cy.get('[data-testid="create"]')}

    userDados(nome, ultimoNome, phone, email, password, reEnter){
        this.#nome.type(nome);
        this.#ultimoNome.type(ultimoNome);
        this.#phone.type(phone);
        this.#email.type(email);
        this.#password.type(password);
        this.#reEnter.type(reEnter);
        this.#btnCreate.click();
    }
}

module.exports = new cadastrarUser();