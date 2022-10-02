//usando select + options da aula
function gerar(){
    let txt = document.querySelector('#txtn')
    let res = document.querySelector('#res')
    if(txt.value.length == 0){
        alert('Campo vazio. Por favor, digite um número.')
    } else {
        let n = Number(txt.value)
        res.innerHTML = ``
        for(let i = 1; i <= 10; i++){
            let option = document.createElement('option')
            option.text = `${n} x ${i} = ${n*i}`
            option.value = `op${i}` //útil para outras linguagens
            res.appendChild(option)
        }
    }
}

//usando textarea

// function gerar(){
//     let txt = document.querySelector('#txtn')
//     let res = document.querySelector('#res')
//     if(txt.value.length == 0){
//         alert('Campo vazio. Por favor digite um número.')
//     } else {
//         let n = Number(txt.value)
//         res.innerHTML = `Tabuada do ${n}:     `
//         for(let i = 1; i <= 10; i++){
//             res.innerHTML += `${n} x ${i} = ${n*i}
//                     `
//         }
//     }
// }


//usando div

// function gerar(){
//     let txt = document.querySelector('#txtn')
//     let res = document.querySelector('#res')
//     if(txt.value.length == 0){
//         alert('Campo vazio. Por favor, digite um número')
//     } else {
//         let n = Number(txt.value)
//         res.innerHTML = `<strong>Tabuada do ${n}:</strong> <br>`
//         for(let i = 0; i <= 10; i++){
//             res.innerHTML += `${n} x ${i} = ${n*i} <br>`
//         }
//     }
// }