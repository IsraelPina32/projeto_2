function mudar() {
    
    var select = document.getElementById("selecao");
    var value = select.options[select.selectedIndex].value;

    if(value == "F"){
        location.href = "escolhas do usuario/facil.html";
    } else if(value == "N"){
        location.href = "escolhas do usuario/normal.html";
    } else if(value == "D"){
        location.href = "escolhas do usuario/dificil.html";
    } else{
        alert("selecione algo válido")
    }
}