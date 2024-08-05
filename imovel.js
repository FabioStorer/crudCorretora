const prompt = require('prompt-sync')();
const imoveis = [];

const cadastroImovel = () => {

    const numeroImovel = parseInt(prompt('Digite o número do imóvel: '));
    const ruaImovel = prompt('Digite o nome da rua do imóvel: ');
    const bairroImovel = prompt('Digite o nome do bairro do imóvel: ');

    if (ruaImovel != '' && bairroImovel != '') {
        
    }
};

module.exports = {
    cadastroImovel
};