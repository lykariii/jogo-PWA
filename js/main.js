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

    vencedor();

}
}

function zerar() {
    localStorage.setItem("jogador", "X");
    localStorage.setItem("jogo", "");

    for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).innerHTML = "";
    }
}

function vencedor() {
    var jogador = localStorage.getItem("jogador");
    var jogo = localStorage.getItem("jogo");


    var possibilidades = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 5, 9], [3, 5, 7]
    ];

    for (var i = 0; i < possibilidades.length; i++) {
        var [a, b, c] = possibilidades[i];
        if (jogo[a - 1] && jogo[a - 1] === jogo[b - 1] && jogo[a - 1] === jogo[c - 1]) {
            alert("Jogador " + jogador + " venceu!");
            return;
        }
    }
}