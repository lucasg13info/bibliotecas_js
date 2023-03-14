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




//Eventos:



    function newUser(){
        document.getElementById("newUser").value;
        let novoUser = prompt("Insira o nome do novo usuário")

        if (novoUser != ''){
            alert("Inserido o novo usuário: " + novoUser)

        }else{
            let novoUser = alert("Você não inseriu o nome do usuário, tente novamente.")
        }

        
    }




//Array de objetos:
let filmeLista = [
    { 
        id: 0,
        nomeFilme: "VINGADORES: ULTIMATO", 
        genero: "Ação", 
        duracao: "2h 03min",
        sinopse: "Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.",
        lancamento: "11 de abril de 2019",
        capa: "https://br.web.img2.acsta.net/c_310_420/pictures/19/04/26/17/30/2428965.jpg"
    
    }]



for (let filme of filmeLista){
    let caixa = document.getElementById("listaFilmes")
    caixa.innerHTML = `<h3 class='tituloh3'>${filme.nomeFilme}</h3>
                       <img class='imgs' src='${filme.capa}'>
                       <p> Duração: ${filme.duracao}</p>
                       <p> Sinopse: ${filme.sinopse}</p>`
}