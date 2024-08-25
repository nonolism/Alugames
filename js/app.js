function alterarStatus(item){
    let jogo = document.getElementById(`game-${item}`);
    let imagem = jogo.querySelector('div');
    let botao = jogo.querySelector('a');
    let alugado = imagem.classList.contains('dashboard__item__img--rented');

    if (alugado) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.innerText = 'Alugar';
    }
    else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.innerText = 'Devolver';
    }
} 