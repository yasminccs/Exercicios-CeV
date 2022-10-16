const arr = []

function addNumber(){
    const nmr = document.querySelector("#nmr")
    const input = Number(nmr.value)
    if(input === 0 || input < 0 || input > 100 || arr.includes(input)){
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
    const result = document.querySelector('#result')
    const ul = document.createElement('ul')
    result.appendChild(ul)
    if(arr.length === 0){
        alert('Adicione um número antes de finalizar!')
    } else {
        result.innerHTML += `<li>Ao todo, temos ${arr.length} número(s) cadastrado(s).</li>`
        result.innerHTML += `<li>O maior valor digitado foi ${Math.max(...arr)}.</li>`
        result.innerHTML += `<li>O menor valor digitado foi ${Math.min(...arr)}.</li>`
        let sum = arr.reduce((acc, element) => {
            return acc + element
        }, 0)
        result.innerHTML += `<li>Somando todos os valores temos: ${sum}.</li>`
        let media = sum / arr.length
        result.innerHTML += `<li>A média dos valores digitados é ${Math.round(media)}.</li>`
    }
}