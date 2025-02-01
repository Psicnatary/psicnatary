document.addEventListener('DOMContentLoaded', () => {
    // Seu código JavaScript aqui
    document.querySelectorAll('.poesia').forEach(poesia => {
        poesia.addEventListener('click', function () {
            const fullText = this.querySelector('.full-text');

            // Se a altura máxima do texto for 0, expande; caso contrário, recolhe
            if (fullText.style.maxHeight === '' || fullText.style.maxHeight === '0px') {
                fullText.style.maxHeight = fullText.scrollHeight + 'px'; // Expande para o tamanho real do conteúdo
            } else {
                fullText.style.maxHeight = '0px'; // Recolhe o texto
            }
        });
    });
});
