const prompt = require('prompt-sync')();
const corretores = [];

const cadastroCorretor = () => {

    const nomeCorretor = prompt('Digite o nome do corretor: ');
    if (nomeCorretor != '') {
        corretores.push(nomeCorretor);
        console.log('Corretor cadastrado com sucesso!');
    }
};

module.exports = {
    cadastroCorretor
};