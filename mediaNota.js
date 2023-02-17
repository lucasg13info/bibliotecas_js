let nome = prompt("Informe seu nome: ")  
let = notaMatematicaP1 = prompt("Informe com números sua nota em matemática P1: ")
let = notaMatematicaP2 = prompt("Informe com números sua nota em matemática P2: ")
let = notaPortuguesP1 = prompt("Informe com números sua nota em Português P1: ")
let = notaPortuguesP2 = prompt("Informe com números sua nota em Português P2: ")
let = notaFisicaP1 = prompt("Informe com números sua nota em Física P1: ")
let = notaFisicaP2 = prompt("Informe com números sua nota em Física P2: ")




function notaMat(notaMatematicaP1, notaMatematicaP2){
    notaMatematicaP1 = parseInt(notaMatematicaP1)
    notaMatematicaP2 = parseInt(notaMatematicaP2)
    let notaFinalMatematica = (notaMatematicaP1 + notaMatematicaP2) /2
    
    const resultadoMatematica = (notaFinalMatematica )
    console.log("Result mat " + resultadoMatematica)
    return resultadoMatematica

}



function notaPort(notaPortuguesP1, notaPortuguesP2){
    notaPortuguesP1 = parseInt(notaPortuguesP1)
    notaPortuguesP2 = parseInt(notaPortuguesP2)
    let notaFinalPortugues = (notaPortuguesP1 + notaPortuguesP2) /2
    
    const resultadoPortugues = (notaFinalPortugues)
    console.log("Resultado final Portugues: " + resultadoPortugues)

    return resultadoPortugues

}


function notaFisica(notaFisicaP1, notaFisicaP2){
    notaFisicaP1 = parseInt(notaFisicaP1)
    notaFisicaP2 = parseInt(notaFisicaP2)
    let notaFinalFisica = (notaFisicaP1 + notaFisicaP2) /2
    console.log("Resultado fisica" + notaFinalFisica)
    
    //alert("Sua nota P1 em física foi: "+ notaFisicaP1 + "\nSua nota P2 em física foi: " + notaFisicaP2 + "\nSua média em física foi: "+ notaFinalFisica )
    const resultadoFisica = (notaFinalFisica )

    return resultadoFisica
}



const resutadoFinalMatematica = notaMat(notaMatematicaP1, notaMatematicaP2)
const resultadoFinaFisica = notaFisica(notaFisicaP1, notaFisicaP2)
const resultadoFinalPortugues = notaPort(notaPortuguesP1, notaPortuguesP2)

alert("Notas Finais:" + "\n"+ "Resultado final fisica: "+ resultadoFinaFisica + "\n" +"Resultado final Matemática: "+resutadoFinalMatematica + "\n" +"Resultado final Português: "+resultadoFinalPortugues)
