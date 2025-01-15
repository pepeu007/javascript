function carregar(){
    var msg = window.document.getElementById('msg')
    var fotos = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22


    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //BDIA
        fotos.src = 'fotomanha.png'
        document.body.style.background  = '#749b18'
    } else if (hora >= 12 && hora <= 18){
        //btarde
        fotos.src = 'fototarde.png'
        document.body.style.background = 'orangered'
    }else{
        //bnoite
        fotos.src = 'fotonoite.png'
        document.body.style.background = 'rgb(0, 20, 201)'
    }
}
