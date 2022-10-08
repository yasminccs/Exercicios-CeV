const arr = []

function addNumber(){
    const nmr = document.querySelector("#nmr")
    const input = Number(nmr.value)
    arr.push(input)
    let indc = arr.includes(input)
    if(indc){
        alert('Valor inválido ou já encontrado na lista.')
    } 
    else {
        const res = document.querySelector('#res')
        const options = document.createElement('option')
        options.innerHTML += `Valor ${input} adicionado.`
        res.appendChild(options)
    }

    console.log(arr)
    console.log(indc)
}

function final(){

}