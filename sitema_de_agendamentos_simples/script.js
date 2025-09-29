function agendar() {
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    if (!nome || !data || !hora) {
        alert("preencha todos os campos!");
        return;
    }

    const Lista = document.getElementById('listaAgendamentos');
    const item = document.createElement('p')
    item.textContent = `${nome} agendou para ${data} as ${hora}`;
    Lista.appendChild(item);

    document.getElementById('nome').value = '';
    document.getElementById('data').value = '';
    document.getElementById('hora').value = '';

}