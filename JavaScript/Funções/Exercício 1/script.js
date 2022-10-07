function addNumber(){
    const arr = []
    const input = document.querySelector('#nmr').value
    arr.push(input)
    if(input === 0 || input < 1 || input > 100){
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        const res = document.querySelector('#res')
        const options = document.createElement('option')
        // res.innerHTML = ''
        options.innerHTML += `Valor ${input} adicionado.`
        res.appendChild(options)
    }
}

function final(){

}