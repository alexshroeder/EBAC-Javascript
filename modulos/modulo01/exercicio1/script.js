// Função que calcula a média
function calcular() {

    // Acessando o conteúdo digitado nos input's através do "ID"
    let notaUm = document.getElementById('medUm') 
    let notaDois = document.getElementById('medDois')
    let notaTres = document.getElementById('medTres')
    let res = document.getElementById('res')
    
    // Se os campos das notas não forem preenchidos ou serem "0", é exibida a mensagem "Impossível contar"
    if (notaUm.value.length == 0 || notaDois.value.length == 0 || notaTres.value.length == 0) { 
        res.innerHTML = 'Impossivel contar!'

    // Caso preenchidos, é exibida a mensagem "Contando"
    } else {
        res.innerHTML = 'Contando: '
        
        // Convertendo os valores para número
        let u = Number(notaUm.value)
        let d = Number(notaDois.value)
        let t = Number(notaTres.value)
        
        // A soma dos valores é dividida por "3" e armazenada na variável "med"
        let med = (u + d + t) / 3

        // Se a média for menor que "6", exibe "Reprovado"
        if (med < 6) {
            res.innerHTML = `Reprovado com média: <strong>${med}</strong>.`
        // Se a média for maior/igual "6" e menor/igual 7, exibe "Recuperação"
        } else if (med >= 6 && med <= 7) {
            res.innerHTML = `Recuperação com média: <strong>${med}</strong>`
        // Se a média for maior que "7" e menor/igual "10", exibe "Aprovado"
        } else if (med > 7 && med <= 10) {
            res.innerHTML = `Aprovado com média: <strong>${med}</strong>`
        }
    }
}