var btnnao = document.getElementById('btnnao');
var btnsim = document.getElementById('btnsim');

btnao.addEventListener('mouseenter', () => {
    console.log("mouse entrando");
    var pos = coordenadas();
    btnao.style.top = `${pos.posy}px`;
    btnao.style.left = `${pos.posx}px`;
})

var coordenadas = () => {
    var ancho = screen.width - 100;
    var alto = screen.height - 200;
    var posx = Math.random() * (ancho - 0) + 0;
    var posy = Math.random() * (alto - 0) + 0;
    return { posx, posy }
}

btnsim.addEventListener('click', () => {
    alert('Sabia que você queria ser minha bi');
});
