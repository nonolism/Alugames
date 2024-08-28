quantidadeAlugados();

function alterarStatus(item){
    let jogo = document.getElementById(`game-${item}`);
    let imagem = jogo.querySelector('div');
    let botao = jogo.querySelector('a');
    let alugado = imagem.classList.contains('dashboard__item__img--rented');

    if (alugado) {
        if (confirmarDevolucao())
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.innerText = 'Alugar';
    }
    else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.innerText = 'Devolver';
    }
    quantidadeAlugados();
} 

function confirmarDevolucao(){
    let confirmar = confirm('Você tem certeza que deseja devolver o jogo?');
    return confirmar;
}

function quantidadeAlugados(){
    quantidade = document.getElementsByClassName('dashboard__item__img--rented').length;
    if (quantidade > 0){
        texto = quantidade > 1 ? `Existem atualmente ${quantidade} Jogos alugados` : `Existe atualmente ${quantidade} Jogo alugado`;
    } else {
        texto = 'Nenhum jogo foi alugado ainda';
    }
    console.log(texto);
}