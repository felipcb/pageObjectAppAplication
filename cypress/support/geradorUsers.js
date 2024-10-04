const faker = require('faker');

const gerarNome = () => {
    return faker.name.firstName();
};

const gerarUltimoNome = () => {
    return faker.name.lastName();
};

const gerarTelefone = () => {
    return faker.phone.phoneNumberFormat(1);
};

const gerarEmail = () => {
    return faker.internet.email();
}

const gerarPassword = () => {
    return faker.internet.password();
}

module.exports = {
    gerarNome,
    gerarUltimoNome,
    gerarEmail,
    gerarTelefone,
    gerarPassword
};