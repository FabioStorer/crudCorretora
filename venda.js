const prompt = require('prompt-sync')();
const corretor = require('./corretor.js')
const cliente = require('./cliente.js');
const imovel = require('./imovel.js');
const db = [];
let proxId = 1;

const model = (id = proxId++) => {

    let idCorretor = 0;
    let idCliente = 0;
    let idImovel = 0;

    if (corretor.index()) {
        idCorretor = parseInt(prompt('ID do corretor: '));
    } else {
        console.log('Cadastre um corretor para poder realizar essa ação!');
    }
    const corretorAux = corretor.show(idCorretor);

    if (cliente.index()) {
        idCliente = parseInt(prompt('ID do cliente: '));
    } else {
        console.log('Cadastre um cliente para poder realizar essa ação!');
    }

    if (corretorAux && imovel.index(corretorAux.idCorretora)) {
        idImovel = parseInt(prompt('ID do imóvel: '));
    } else {
        console.log('Cadastre um imóvel para poder realizar essa ação!');
    }
    const imovelAux = imovel.show(idImovel);

    if (corretorAux &&
        cliente.show(idCliente) &&
        imovelAux &&
        corretorAux.idCorretor == imovelAux.idImovel) {
        return {
            idCorretor,
            idCliente,
            idImovel
        };
    }
    console.log('Dados inválidos!');
};

const store = () => {

    const novo = model();

    if (novo) {
        db.push(novo);
        console.log('Registro concluído com sucesso!');
    }
};

const index = () => {

    if (db.length == 0) {
        console.log('Nenhum registro encontrado.');
        return false;
    }

    db.forEach(el => console.log(el));
    return true;
};

const show = id => db.find(el => el.id == id);

const update = () => {

    if (index()) {
        const id = parseInt(prompt('Escolha pelo ID qual registro deseja atualizar: '));
        const indice = db.findIndex(el => el.id == id);

        if (indice != -1 && indice < db.length) {
            const novo = model(id);
            if (novo) {
                db[indice] = novo;
                console.log('Registro atualizado com sucesso!');
            }
        }
    }
};

const destroy = () => {

    if (index()) {
        const id = parseInt(prompt('Escolha pelo ID qual registro deseja remover: '));
        const indice = db.findIndex(el => el.id == id);

        if (indice != -1) {
            db.splice(indice, 1);
            console.log('Registro removido com sucesso!');
        } else {
            console.log('Registro não encontrado.');
        }
    }
};

module.exports = {
    store,
    index,
    show,
    update,
    destroy
};