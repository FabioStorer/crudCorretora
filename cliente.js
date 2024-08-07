const prompt = require('prompt-sync')();
const db = [];
let proxId = 1;

const model = (id = proxId++) => {

    const nome = prompt('Digite o nome do cliente: ');

    if (nome != '') {
        return {
            id,
            nome
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