let contador = 0;

let divareaAgendada = document.getElementById("resultado");
let enter = document.getElementById("agendar");







function addagendamentos() {


    let hora = document.getElementById("horaCliente").value;
    let nomeCliente = document.getElementById("nomeCliente").value;
    let servicoSelecionado = document.getElementById("servicoSelecionado").value;
    ++contador;

    let agendado = `<div id="agendamentoExibido">
    <p>horario agendado</p>
    <p><strong>Hora:</strong>${hora}</p>
    <p>pink Nail</p>
     <a href="https://w.app/jqrcpm">
            <button class="btn-acompanhar">acompanhar</button>
        </a>
    </div>
    `;

    console.log("nome:" + nomeCliente + "horario:" + hora + "serviço:" + servicoSelecionado);



    //var novoAgendado = `${agendado}`




    if (nomeCliente == "" || hora == "" || servicoSelecionado == "",0) {
        alert('preencha os campos')
        divareaAgendada.innerHTML += agendado = "";
    }
    else if (divareaAgendada.innerHTML.includes(hora)) {
        alert('horario indisponivel')
        divareaAgendada.innerHTML += agendado = "";
    }
    else {
        alert('agendamento concluido com sucesso')
        divareaAgendada.innerHTML += agendado;
    };


    //limpar os campos apos o agendamento

    this.hora = document.getElementById("horaCliente").value = "";
    this.nomeCliente = document.getElementById("nomeCliente").value = "";
    this.servicoSelecionado = document.getElementById("servicoSelecionado").value = "";

    divareaAgendada.addEventListener("keyup", function (event) {
    if (event.keycode === 13) {
        event.preventDefault();
        enter.click();
    }
});


};
















