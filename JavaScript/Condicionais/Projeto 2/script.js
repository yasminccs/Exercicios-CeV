function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('#txtano')
    let nmr = Number(fano.value)
    let res = document.querySelector('#res')
    if(nmr == 0 || nmr > ano){
        alert('[ERROR] Verifique os dados e tente novamente.')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - nmr
        let genero
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/criancaMenino.png')
            } else if(idade < 21){
                img.setAttribute('src', 'img/jovemHomem.png')
            } else if(idade < 65){
                img.setAttribute('src', 'img/adultoHomem.png')
            } else {
                img.setAttribute('src', 'img/idosoHomem.png')
            }
        } else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/criancaMenina.png')
            } else if(idade < 21){
                img.setAttribute('src', 'img/jovemMulher.png')
            } else if(idade < 65){
                img.setAttribute('src', 'img/adultaMulher.png')
            } else {
                img.setAttribute('src', 'img/idosaMulher.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}