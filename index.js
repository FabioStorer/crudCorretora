const prompt = require('prompt-sync')();
const corretora = require('./corretora.js');
const cliente = require('./cliente.js');
const corretor = require('./corretor.js');
const imovel = require('./imovel.js');


const menuPrincipal = () => {

    console.log(`Gerenciamento de Corretora de Imóveis`);

    while (true) {

        console.log(`
    Escolha pelo índice o que deseja gerenciar:
    1. Corretora
    2. Cliente
    3. Corretor
    4. Imóvel
    5. Finalizar`)

        const opcaoModulo = parseInt(prompt(''));

        switch (opcaoModulo) {

            case 1:

                menuCorretora();

                break;

            case 2:

                menuCliente();

                break;

            case 3:

                menuCorretor();

                break;

            case 4:

                menuImovel();

                break;

            case 5:

                process.exit();

                break;

            default:

                console.log('Opção inválida.');

                break;
        }
    };
};

const menuCorretora = () => {

    console.log('Gerenciamento de Corretora');

    while (true) {

        console.log(`
            1. Cadastrar Corretora
            2. Listar Corretora
            3. Atualizar Corretora
            4. Remover Corretora
            5. Voltar`);

        const opcaoServico = parseInt(prompt(''));

        switch (opcaoServico) {

            case 1:

                corretora.store();

                break;

            case 2:

                corretora.index();

                break;

            case 3:

                corretora.update();

                break;

            case 4:

                corretora.destroy();

                break;

            case 5:

                return;

            default:

                console.log('Opção inválida.');

                break;
        };
    }
};

const menuCliente = () => {

    console.log('Gerenciamento de Clientes');

    while (true) {

        console.log(`
            1. Cadastrar Cliente
            2. Listar Cliente
            3. Atualizar Cliente
            4. Remover Cliente
            5. Voltar`);

        const opcaoServico = parseInt(prompt(''));

        switch (opcaoServico) {

            case 1:

                cliente.store();

                break;

            case 2:

                cliente.index();

                break;

            case 3:

                cliente.update();

                break;

            case 4:

                cliente.destroy();

                break;

            case 5:

                return;

            default:

                console.log('Opção inválida.');

                break;
        };
    }
};

const menuCorretor = () => {

    console.log('Gerenciamento de Corretor');

    while (true) {

        console.log(`
            1. Cadastrar Corretor
            2. Listar Corretor
            3. Atualizar Corretor
            4. Remover Corretor
            5. Voltar`);

        const opcaoServico = parseInt(prompt(''));

        switch (opcaoServico) {

            case 1:

                corretor.store();

                break;

            case 2:

                corretor.index();

                break;

            case 3:

                corretor.update();

                break;

            case 4:

                corretor.destroy();

                break;

            case 5:

                return;

            default:

                console.log('Opção inválida.');

                break;
        };
    }
};

const menuImovel = () => {

    console.log('Gerenciamento de Imóveis');

    while (true) {

        console.log(`
            1. Cadastrar Imóvel
            2. Listar Imóvel
            3. Atualizar Imóvel
            4. Remover Imóvel
            5. Voltar`);

        const opcaoServico = parseInt(prompt(''));

        switch (opcaoServico) {

            case 1:

                imovel.store();

                break;

            case 2:

                imovel.index();

                break;

            case 3:

                imovel.update();

                break;

            case 4:

                imovel.destroy();

                break;

            case 5:

                return;

            default:

                console.log('Opção inválida.');

                break;
        };
    }
};

menuPrincipal();