var leonardo = window.document.getElementById 
("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var divCards = window.document.getElementById("div-cards")

function RolarParaDireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setaDireita.style ="display:none"
    setaEsquerda.style ="display:flex;  justify-content: space-evenly; align-items: center; margin-left: 0px; padding-left:0px;"
    divCards.style = "display:flex; margin-right: 100px; padding right:100px;"
}

function RolarParaEsquerda() {
    leonardo.style ="display:flex"
    bruna.style ="display:none"
    setaDireita.style ="display:flex"
    setaEsquerda.style ="display:none;"
}
