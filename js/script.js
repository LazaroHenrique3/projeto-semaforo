const img = document.querySelector('#img');

//Botões
const btnVermelho = document.querySelector('#vermelho');
const btnAmarelo = document.querySelector('#amarelo');
const btnVerde = document.querySelector('#verde');
const btnAutomatico = document.querySelector('#automatico');

//Eventos
btnVermelho.addEventListener('click', ligarVermelho);
btnAmarelo.addEventListener('click', ligarAmarelo);
btnVerde.addEventListener('click', ligarVerde);
btnAutomatico.addEventListener('click', automatico);

function ligarVermelho(){
    img.setAttribute('src', 'img/vermelho.png')
}

function ligarAmarelo(){
    img.setAttribute('src', 'img/amarelo.png')
}

function ligarVerde(){
    img.setAttribute('src', 'img/verde.png')
}

function automatico(){

    let imagens = ['img/vermelho.png', 'img/amarelo.png', 'img/verde.png'];
    console.log(imagens);
    let contador = 0;
    setInterval(() => {
        console.log(contador) ;
        img.setAttribute('src', imagens[contador]);

        (contador < 2) ? contador++ : contador = 0;
    }, 1000)
}