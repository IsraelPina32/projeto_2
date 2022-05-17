var seg = 0

function cronometrar(params) {
    setInterval(contador,10)
}
function contador(params) {
    seg++
    if (seg < 999) {
        document.getElementById("res").innerText = seg
    } else {
        document.getElementById("res").innerText = "999"
    }
}