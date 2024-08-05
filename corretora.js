const prompt = require('prompt-sync')();
const coretoras = [];

const cadastroCorretora = () => {

    const nomeCorretora = prompt('Digite o nome da corretora: ');

    if (nomeCorretora != '') {
        coretoras.push(nomeCorretora);
        console.log('Corretora cadastrada com sucesso!');
    }
    console.log('Dados inválidos!');
};

module.exports = {
    cadastroCorretora
};