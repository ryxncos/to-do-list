document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões que têm a função de expandir/colapsar
    const toggleButtons = document.querySelectorAll('.toggle-button');

    // Itera sobre cada botão para adicionar um event listener
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Encontra o próximo elemento irmão, que será a lista a ser expandida/colapsada
            // No HTML, a lista de tópicos/subtópicos está logo após o seu cabeçalho
            const lista = button.parentElement.nextElementSibling;
            
            // Verifica se a lista existe antes de tentar manipular
            if (lista) {
                // Alterna a classe 'escondido' (display: none)
                lista.classList.toggle('escondido');
                // Alterna a classe 'expanded' no botão para rotacionar a seta
                button.classList.toggle('expanded');
            }
        });
    });
});