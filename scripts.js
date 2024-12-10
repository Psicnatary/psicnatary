/**=============== CARREGAR COMPONENTE ==============================*/

function loadComponent(selector, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;

            // Após carregar o header, inicialize a lógica do botão de troca de tema
            if (selector === "header") {
                setupThemeToggle(); // Chama a função para configurar o botão
            }
        })
        .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "header.html");
    loadComponent("footer", "footer.html");
});

/**=============== FUNCAO PARA CARREGAR CORPO DA PAGINA ==============================*/

function carregarConteudo(url) {
    // Usando o Fetch API para carregar o conteúdo do arquivo
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o conteúdo');
            }
            return response.text();
        })
        .then(html => {
            // Substitui o conteúdo do #conteudo-principal com o novo conteúdo
            document.getElementById('conteudo-principal').innerHTML = html;
        })
        .catch(error => {
            console.error('Erro:', error);
            document.getElementById('conteudo-principal').innerHTML = '<p>Erro ao carregar o conteúdo.</p>';
        });
}

/**=============== FUNCAO TROCAR DE TEMA ==============================*/

function setupThemeToggle() {
    const themeToggleButton = document.querySelector('.theme-toggle');
    const body = document.body;
    const icon = themeToggleButton.querySelector('.material-icons');

    themeToggleButton.addEventListener('click', () => {
        // Alterna a classe light-mode no <body>
        body.classList.toggle('light-mode');

        // Atualiza o ícone conforme o tema
        if (body.classList.contains('light-mode')) {
            icon.textContent = 'light_mode'; // Ícone de sol
        } else {
            icon.textContent = 'dark_mode'; // Ícone de lua
        }
    });
}

