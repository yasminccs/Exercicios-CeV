function verify(){
  const input = document.querySelector('#num')
  const num = Number(input.value)
  const res = document.querySelector('#res')
  const sex = document.getElementsByName('sex')
  const date = new Date()
  const year = date.getFullYear()
  const img = document.createElement('img')
  if(num === 0 || num > year){
    alert('[ERROR] Verifique os dados e tente novamente.')
  } else {
    let gen;
    const birth = year - num
    if(sex[0].checked){
     gen = 'Homem'
      if(birth <= 10){
        img.src = 'img/criancaMenino.png'
      } else if(birth <=21){
        img.src = 'img/jovemHomem.png'
      } else if (birth >= 65){
        img.src = 'img/idosoHomem.png'
      } else {
        img.src = 'img/adultoHomem.png'
      }
    } else {
      gen = 'Mulher'
      if(birth <= 10){
        img.src = 'img/criancaMenina.png'
      } else if(birth <=21){
        img.src = 'img/jovemMulher.png'
      } else if (birth >= 65){
        img.src = 'img/idosaMulher.png'
      } else {
        img.src = 'img/adultaMulher.png'
      }
    }
    res.innerHTML = `<p>Detectamos <strong>${gen}</strong> de ${birth} anos.</p>`
    res.appendChild(img)
  }
  input.value = ''
  input.focus()
}






















// function verificar(){
//     let data = new Date()
//     let ano = data.getFullYear()
//     let fano = document.querySelector('#txtano')
//     let nmr = Number(fano.value)
//     let res = document.querySelector('#res')
//     if(nmr == 0 || nmr > ano){
//         alert('[ERROR] Verifique os dados e tente novamente.')
//     } else {
//         let fsex = document.getElementsByName('radsex')
//         let idade = ano - nmr
//         let genero
//         let img = document.createElement('img')
//         if(fsex[0].checked){
//             genero = 'Homem'
//             if(idade >= 0 && idade < 10){
//                 img.setAttribute('src', 'img/criancaMenino.png')
//             } else if(idade < 21){
//                 img.setAttribute('src', 'img/jovemHomem.png')
//             } else if(idade < 65){
//                 img.setAttribute('src', 'img/adultoHomem.png')
//             } else {
//                 img.setAttribute('src', 'img/idosoHomem.png')
//             }
//         } else {
//             genero = 'Mulher'
//             if(idade >= 0 && idade < 10){
//                 img.setAttribute('src', 'img/criancaMenina.png')
//             } else if(idade < 21){
//                 img.setAttribute('src', 'img/jovemMulher.png')
//             } else if(idade < 65){
//                 img.setAttribute('src', 'img/adultaMulher.png')
//             } else {
//                 img.setAttribute('src', 'img/idosaMulher.png')
//             }
//         }
//         res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
//         res.appendChild(img)
//     }
// }