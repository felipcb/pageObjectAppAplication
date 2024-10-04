
/*
export const profilePage = {
    openProfile(){
        return cy.get('[href="/Tab/Account"]');
    }
};
*/

/// <reference types='cypress'/>

class UserProfile {
    get #openProfile() {return cy.get('[href="/Tab/Account"]')};
    get #user() {return cy.get('[data-testid="CustomerName"]')};

    perfil(){
        this.#openProfile.click();
        return this.#user;
    }

}

module.exports = new UserProfile();

