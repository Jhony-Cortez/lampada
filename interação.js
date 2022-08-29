var txt = document.getElementById('txt')
txt.innerText = 'Comande '
function pos1() {
    var img = document.getElementById('imagem')
    var fundo1 = document.getElementById('meio')
    var fim = document.getElementById('final')
    var tit = document.getElementById('titulo')
    img.src = 'imagens/lamp-apagada.png'
    fundo1.style.background = 'rgb(37, 37, 100)'
    document.body.style.background ='rgb(14, 13, 13)'
    fim.style.color = 'white'
    tit.style.background ='rgb(37, 37, 100)'
    tit.style.color = 'white'
    document.getElementById('txt').innerText ='ACENDA!'

}
function pos2() {
    var img = document.getElementById('imagem')
    img.src = 'imagens/lamp-acesa.png'
    var fundo1 = document.getElementById('meio')
    var fim = document.getElementById('final')
    var tit = document.getElementById('titulo')
    fundo1.style.background = 'rgb(241, 224, 178)'
    document.body.style.background ='#ee9843'
    fim.style.color = 'black'
    tit.style.background ='rgb(241, 224, 178)'
    tit.style.color = 'rgb(199, 70, 11)'
    document.getElementById('txt').innerText ='APAGUE!'
}