function calcular(){
    let txtI = document.querySelector('#txtI')
    let txtF = document.querySelector('#txtF')
    let txtP = document.querySelector('#txtP')
    let res = document.querySelector('#res')
    if(txtI.value.length == 0 || txtF.value.length == 0 || txtP.value.length == 0){
        res.innerHTML = `Impossível contar.`
    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(txtI.value)
        let f = Number(txtF.value)
        let p = Number(txtP.value)
        if(p <= 0){
            alert('Passo inválido. Considerando PASSO 1.')
            p = 1
        }
        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
} 
