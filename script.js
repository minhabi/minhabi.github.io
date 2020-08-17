var btnnao = document.getElementById('btnnao');
var btnsim = document.getElementById('btnsim');

btnnao.addEventListener('mouseenter', () => {
    console.log("mouse entrando");
    var pos = coordenadas();
    btnnao.style.top = `${pos.posy}px`;
    btnnao.style.left = `${pos.posx}px`;
})

var coordenadas = () => {
    var ancho = screen.width - 100;
    var alto = screen.height - 200;
    var posx = Math.random() * (ancho - 0) + 0;
    var posy = Math.random() * (alto - 0) + 0;
    return { posx, posy }
}

btnsim.addEventListener(function redirect() {
            window.location.replace(https://youtu.be/mrHjDdTE2H8?t=84)
        })
});
