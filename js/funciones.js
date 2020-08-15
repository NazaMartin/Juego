document.getElementById("player").addEventListener("mouseover",sumarPuntos)

puntos = 0
tiempo = 30
nesesarios = 30

function sumarPuntos () {
    puntos++
    document.getElementById("puntos").innerHTML = "Puntos: " + puntos + "/" + nesesarios
    randNum = Math.round(Math.random()*490)
    randNum2 = Math.round(Math.random()*490)
    document.getElementById("player").style.marginTop = randNum + "px"
    document.getElementById("player").style.marginLeft = randNum2 + "px"
    if (puntos == 30){
        alert("Ganaste!")
        puntos = 0
    }
}

function restarTiempo(){
    tiempo --
    document.getElementById("tiempo").innerHTML = "&nbsp; Tiempo: " + tiempo
    if (tiempo == 0){
        alert("Perdiste :(")
        tiempo = 30
        puntos = 0
        
    }
}

setInterval(restarTiempo,1000)