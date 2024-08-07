const prompt = require('prompt-sync')();
const corretora = require('./corretora.js')
const db = [];
let proxId = 1;

const model = (id = proxId++) => {

    const numero = parseInt(prompt('Digite o número do imóvel: '));
    const rua = prompt('Digite o nome da rua do imóvel: ');
    const bairro = prompt('Digite o nome do bairro do imóvel: ');

    let idCorretora = 0;

    if (corretora.index()) {
        idCorretora = parseInt(prompt('ID da corretora: '));
    } else {
        console.log('Cadastre uma corretora para poder realizar essa ação!');
    }

    if (numero != '' &&
        corretora.show(idCorretora)) {
        return {
            id,
            numero,
            rua,
            bairro,
            idCorretora
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

        if (indice != -1) {
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