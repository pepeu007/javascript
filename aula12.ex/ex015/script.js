function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE')
    }else{
        var fsex = document.getElementsByName('radsex')
        var  idade = ano - Number(fano.value)
        res.innerHTML  = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','foto-bb-m.png')
            }else if (idade < 21){
                img.setAttribute('src','foto-jovem-m.png')
            }else if(idade < 50){
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                img.setAttribute('src','foto-idoso-m.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','foto-bb-f.png')
            }else if (idade < 21){
                img.setAttribute('src','foto-jovem-f.png')
            }else if(idade < 50){
                img.setAttribute('src','foto-adulta-f.png')
            }else{
                img.setAttribute('src','foto-idosa-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}