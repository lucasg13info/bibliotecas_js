//1
let div = document.getElementById("app")
let paragrafo = document.getElementById("parágrafo1")

console.log(div.innerHTML)
console.log(paragrafo.innerHTML)


//2
function alerta(){
    alert("Clicou no botão")
}


//3
let texto1 = "Olá mundo!!"
let texto2 = "Tudo ok com a manipulação da dom?"
let lista = document.getElementById("divLista")
lista.innerHTML = `<p class="editarParagrafo">${texto1}</p>
                   <p class="editarParagrafo">${texto2}</p>`
