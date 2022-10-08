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
}

function final(){
    const result = document.querySelector('#result')
    result.innerHTML = `Ao todo, temos ${arr.length} números cadastrados.`
}