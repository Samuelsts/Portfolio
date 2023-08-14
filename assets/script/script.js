const paragraphs = document.querySelectorAll('.text-wrapper p'); // Seleciona todos os parágrafos
  const moveInterval = 3000; // Intervalo de 3 segundos

function moveClass() {
    for (let i = 0; i < paragraphs.length; i++) {
    if (paragraphs[i].classList.contains('animation')) {
        paragraphs[i].classList.remove('animation'); // Remove a classe do parágrafo atual
        const nextIndex = (i + 1) % paragraphs.length; // Calcula o índice do próximo parágrafo
        paragraphs[nextIndex].classList.add('animation'); // Adiciona a classe ao próximo parágrafo
        break;
    }
    }
}

  setInterval(moveClass, moveInterval); // Chama a função a cada intervalo

