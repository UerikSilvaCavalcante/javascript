function carregar() {
    var msg= window.document.getElementById('imsg')
    var img = window.document.getElementById('iimg')
    var data = new Date()
    var hora = 20
    msg.innerHTML = `Agora são ${data.getHours()} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'imgs/manha.png'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imgs/tarde (2).png'
    } else {
        img.src = 'imgs/noite.png'
    }

}