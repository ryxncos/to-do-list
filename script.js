function adicionarEventos() {
    // Adiciona evento a todos os botões de tópico
    document.querySelectorAll('.btn-add-topico').forEach(btn => {
        btn.onclick = () => {
            const card = btn.closest('.card-estrutura');
            const listaTopico = card.querySelector('.lista-topico');

            const novoTopico = document.createElement('li');
            novoTopico.classList.add('item-topico');
            novoTopico.innerHTML = `
                <div class="header-topico">
                    <span class="titulo-topico">Novo Tópico</span>
                    <span><img src="icons/add.png" alt="Adicionar subtópico" class="btn-add-subtopico"></span>
                </div>
                <ul class="lista-subtopico"></ul>
            `;
            listaTopico.appendChild(novoTopico);

            // Adiciona evento ao botão de subtópico do novo tópico
            novoTopico.querySelector('.btn-add-subtopico').onclick = () => {
                adicionarSubtopico(novoTopico.querySelector('.lista-subtopico'));
            };
        };
    });

    // Adiciona evento a todos os botões de subtópico
    document.querySelectorAll('.btn-add-subtopico').forEach(btn => {
        btn.onclick = () => {
            const listaSubtopico = btn.closest('.header-topico').nextElementSibling;
            adicionarSubtopico(listaSubtopico);
        };
    });
}

function adicionarSubtopico(listaSubtopico) {
    const novoSubtopico = document.createElement('li');
    novoSubtopico.classList.add('item-subtopico');
    novoSubtopico.innerHTML = `<span class="titulo-subtopico">Novo Subtópico</span>`;
    listaSubtopico.appendChild(novoSubtopico);
}
// Inicializa eventos
adicionarEventos();

function adicionarPastas() {
    // Cria o card principal
    const novoCardEstudo = document.createElement('div');
    novoCardEstudo.classList.add('card-estudo');

    // Cria o conteúdo do card
    const cardEstudo = document.createElement('div');
    cardEstudo.classList.add('card-estrutura');
    cardEstudo.innerHTML = `
        <div class="header-pasta">
            <div class="titulo-pasta">
                Título Pasta
                <img src="icons/add.png" alt="Adicionar tópico" class="btn-add-topico">
            </div>
            <br>
        </div>

        <ul class="lista-topico">
            <li class="item-topico">
                <div class="header-topico">
                    <span class="titulo-topico">Novo Tópico</span>
                    <span><img src="icons/add.png" alt="Adicionar subtópico" class="btn-add-subtopico"></span>
                </div>
                <ul class="lista-subtopico">
                    <li class="item-subtopico">
                        <span class="titulo-subtopico">Subtópico</span>
                    </li>
                </ul>
            </li>
        </ul>
    `;

    // Adiciona o conteúdo dentro do card
    novoCardEstudo.appendChild(cardEstudo);

    // Adiciona o novo card ao container
    const container = document.querySelector('.area-cards-estudos'); 
    container.appendChild(novoCardEstudo);

    // Opcional: adiciona eventos para o botão de tópico do novo card
    const btnTopico = novoCardEstudo.querySelector('.btn-add-topico');
    const btnSubtopico = novoCardEstudo.querySelector('.btn-add-subtopico');

    btnTopico.addEventListener('click', () => {
        const listaTopico = novoCardEstudo.querySelector('.lista-topico');

        const novoTopico = document.createElement('li');
        novoTopico.classList.add('item-topico');
        novoTopico.innerHTML = `
            <div class="header-topico">
                <span class="titulo-topico">Novo Tópico</span>
                <span><img src="icons/add.png" alt="Adicionar subtópico" class="btn-add-subtopico"></span>
            </div>
            <ul class="lista-subtopico"></ul>
        `;
        listaTopico.appendChild(novoTopico);

        // Evento para subtópico do novo tópico
        novoTopico.querySelector('.btn-add-subtopico').addEventListener('click', () => {
            const listaSub = novoTopico.querySelector('.lista-subtopico');
            const novoSub = document.createElement('li');
            novoSub.classList.add('item-subtopico');
            novoSub.innerHTML = `<span class="titulo-subtopico">Novo Subtópico</span>`;
            listaSub.appendChild(novoSub);
        });
    });

    // Evento para subtópico do tópico já existente
    btnSubtopico.addEventListener('click', () => {
        const listaSub = novoCardEstudo.querySelector('.lista-subtopico');
        const novoSub = document.createElement('li');
        novoSub.classList.add('item-subtopico');
        novoSub.innerHTML = `<span class="titulo-subtopico">Novo Subtópico</span>`;
        listaSub.appendChild(novoSub);
    });
}

// Seleciona o botão que cria novas pastas
document.querySelectorAll('.btn-nova-pasta').forEach(btn => {
    btn.addEventListener('click', adicionarPastas);
});
