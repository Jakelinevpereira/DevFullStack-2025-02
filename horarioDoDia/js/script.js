function carregar() {
    let msg = document.getElementById('msg');
    let imagem = document.querySelector('#imagem img');
    let data = new Date();
    let hora = data.getHours();
    //let hora = 22; //testando as horas
    msg.innerHTML = `Agora são ${hora} horas.`;
    

    if (hora > 0 && hora < 12) {
        imagem.src = '../imagens/horaDoDia/manha.png';
        document.body.style.backgroundColor='#F0E68C';
    } else if (hora >= 12 && hora < 18) {
        imagem.src = '../imagens/horaDoDia/tarde.png';
        document.body.style.backgroundColor='#FF8C00';
    } else {
        imagem.src = '../imagens/horaDoDia/noite.png';
        document.body.style.backgroundColor='#483D8B';
    }
}
