function carregar(){
    let body = document.querySelector('body')
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#imagem')
    let data = new Date()
    let hora =  data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora <= 12){
        img.src = "img/manha.png"
        body.style.backgroundColor = 'rgb(243, 226, 73)'
    } else if(hora >=12 && hora < 18){
        img.src = "img/tarde.png"
        body.style.backgroundColor = 'rgb(199, 132, 7)'
    } else {
        img.src = "img/noite.png"
        body.style.backgroundColor = 'rgb(6, 6, 96)'
    }
}