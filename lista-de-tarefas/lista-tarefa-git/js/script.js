let contador = 0;
let input = document.getElementById('inputTarefa');
let addbtn = document.getElementById('addbtn');
let main = document.getElementById('arealista');





function addTarefa() {

    //pegar o valor digiado no input
    let valorinput = input.value;



    //se não for vazio, nem nulo, nem indefinido
    if (valorinput !== "" && valorinput !== null && valorinput !== undefined) {

        ++contador;

        let = novoitem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i  id="icone_${contador}" class="mdi mdi-circle-outline"></i>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorinput}
            </div>
            <div class="item-botao">
                <button  onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>delete</button>
            </div>`;

        //adicionar novo item no main
        main.innerHTML += novoitem;

        //zerar os campos 
        input.value = "";
        input.focus();
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}
function marcarTarefa(id) {
    var item = document.getElementById(id)
    var classe = item.getAttribute("class");
    console.log(classe);


    if (classe == "item") {
        item.classList.add("clicado");

        var icone = document.getElementById("icone_" + id);

        icone.classList.remove("mdi-circle-outline")
        icone.classList.add("mdi-check-circle");

        item.parentNode.appendChild(item);

    } else {
        item.classList.remove("clicado");

        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");
    }
};


input.addEventListener("keyup", function (event) {
    //se teclou enter
    if (event.keyCode === 13) {
        event.preventDefault();
        addbtn.click();
    }

});


