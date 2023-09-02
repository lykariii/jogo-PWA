window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

localStorage.setItem("jogador", "X")
localStorage.setItem("jogo", "")

function marcar(id){
    var jogador = localStorage.getItem("jogador")
    var jogo = localStorage.getItem("jogo")
    var botao = document.getElementById(id);
    if (!botao.innerHTML){
        botao.innerHTML = jogador;

    if (jogador == "X") localStorage.setItem("jogador", "O");
    else localStorage.setItem("jogador", "X");
    jogo = jogo.substring(0, Number(id) - 1) + jogador + jogo .substring(Number(id));
    localStorage.setItem("jogo", jogo);
    }
    
}