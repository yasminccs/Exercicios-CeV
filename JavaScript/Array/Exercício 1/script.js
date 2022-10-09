const arr = []

function addNumber(){
    const nmr = document.querySelector("#nmr")
    const input = Number(nmr.value)
    const indc = arr.includes(input)
    if(input === 0 || input < 0 || input > 100 || indc){
        alert('Valor inválido ou já encontrado na lista.')
    } 
    else {
        arr.push(input)
        const res = document.querySelector('#res')
        const options = document.createElement('option')
        options.innerHTML += `Valor ${input} adicionado.`
        res.appendChild(options)
    }
    let result = document.querySelector('#result').innerHTML = ''
    nmr.value = ''
    nmr.focus()
}

function final(){
    let op = document.querySelector('option')
    if(arr.length === 0){
        alert('Adicione um número antes de finalizar!')
    } else {
        const result = document.querySelector('#result')
        result.innerHTML += `Ao todo, temos ${arr.length} número(s) cadastrado(s).<br>`
        result.innerHTML += `O maior valor digitado foi ${Math.max(...arr)}.<br>`
        result.innerHTML += `O menor valor digitado foi ${Math.min(...arr)}.<br>`
        let sum = arr.reduce((acc, element) => {
            return acc + element
        }, 0)
        result.innerHTML += `Somando todos os valores temos: ${sum}.<br>`
        let media = sum / arr.length
        result.innerHTML += `A média dos valores digitados é ${Math.round(media)}.<br>`
    }
}