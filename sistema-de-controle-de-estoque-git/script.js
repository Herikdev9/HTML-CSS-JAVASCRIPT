let contador = 1;
const main = document.getElementById("main");
const form = document.getElementById("form");
const cadastrarBtn = document.getElementById("cadastrar");
const listaProdutos = document.getElementById("lista-produtos");
const nomeInput = document.getElementById("nome");
const quantidadeInput = document.getElementById("quantidade");
const precoInput = document.getElementById("preco");


let tabelaProdutos = [];
//renderizar tabela
function AddTabela() {

    listaProdutos.innerHTML = "";
    tabelaProdutos.forEach(produto => {
        const exibirTabela =
            `<tr data-id="${produto.id}">
                <td class="cabecalho2" >Id: ${produto.id}</td>
                <td class="cabecalho2">${produto.nome}</td>
                <td class="cabecalho2"> Qt: ${produto.quantidade}</td>
                <td class="cabecalho2">${produto.preco2.toFixed(2)} R$</td>
                <td class="cabecalho2">
                    <button onclick="prepararEdicao(${produto.id})" class="editar-btn">Editar</button>
                    <button onclick="Excluir(${produto.id})"class="excluir-btn">Excluir</button>
                    <button onclick="ExibirInfo(${produto.id})"class="excluir-btn">Exibir informação</button>
                </td>
            </tr>
        `;
        listaProdutos.innerHTML += exibirTabela;
    });

};

//variavel para armazena o ID do produto em edição
let idEmEdicao = null;

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = nomeInput.value;
    const quantidade = quantidadeInput.value;
    const preco = precoInput.value;
    const preco2 = parseFloat(preco);

    // Verificação para garantir que os valores não estão vazios ou inválidos
    if (!nome || !quantidade || isNaN(preco2)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    if (idEmEdicao !== null) {
        //modo de edição: atualiza o produto existente
        const index = tabelaProdutos.findIndex(produto => produto.id === idEmEdicao);
        if (index !== -1) {
            tabelaProdutos[index].nome = nome;
            tabelaProdutos[index].quantidade = quantidade;
            tabelaProdutos[index].preco2 = preco2;
        }
        //reseta o estado de edição
        idEmEdicao = null;
        cadastrarBtn.textContent = "cadastrar";
    } else {
        //modo de adição adiciona um novo produto
        const id = contador++;
        tabelaProdutos.push({ id, nome, quantidade, preco2 });
    }

    //renderizar a tabela e limpa o formulario
    AddTabela();
    limparFormulario();
});

//listener para os botões de ação na tabela (delegação de eventos)
main.addEventListener("click", function (e) {
    const linha = e.target.closest("tr");
    if (!linha) {
        return; //sai se o clique não foi em uma linha da tabela

        //aqui esta o id obdtido do atributo data-id
        const id = parseInt(linha.dataset.id);
        const acao = e.target.textContent.trim();
        

        if (acao === "Editar") {
            prepararEdicao(id);
        } else if (acao === "Excluir") {
            Excluir(id);
        } else if (acao === "Exibir informações") {
            ExibirInfo(id);
        }
    }
});

//preenche o formulario com os dados do item selecionado para edição
function prepararEdicao(id) {
    const produto = tabelaProdutos.find(p => p.id === id);
    if (produto) {
        nomeInput.value = produto.nome;
        quantidadeInput.value = produto.quantidade;
        precoInput.value = produto.preco2;
        idEmEdicao = id;
        cadastrarBtn.textContent = "salvar"
    }
};


function Excluir(id) {
    //enconta o indice do produto com id correspondente
    const index = tabelaProdutos.findIndex(produto => produto.id === id);
    if (index > -1) {
        //remover o produto do array
        tabelaProdutos.splice(index, 1);
        //renderizar a tabelanovamente
        AddTabela();
    }

}

// Exibe informações de um item
function ExibirInfo(id) {
    const produto = tabelaProdutos.find(p => p.id === id);
    if (produto) {
        alert(`
            Detalhes do Produto:
            ID: ${produto.id}
            Nome: ${produto.nome}
            Quantidade: ${produto.quantidade}
            Preço: R$ ${produto.preco2.toFixed(2)}
        `);
    }
}

function limparFormulario() {
    nomeInput.value = "";
    quantidadeInput.value = "";
    precoInput.value = "";

}








