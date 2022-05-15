function  campo(colunas_count,linhas_count,minas){
    let linhas =  [];

    for(let i = 0; i < linhas_count; i++){
        linhas[i] = [];
        for(let c = 0; c < colunas_count;c++){
            if(minas.map(x => JSON.stringify(x)).includes("["+i+","+c+"]")) {
                linhas[i][c] = "*";
            } else{
                linhas[i][c] = 0;
            }
        }
    }
}




//Pegando os Elementos do html e add no JS
function table(linhas){
    let tabela = document.getElementById("campo");
    for(let linha of linhas){
        let tr = document.createElement("tr");
        for(let colunas of linha ){
            let td = document.getElementById("td")
            let span = document.createElement("span");
            span.textContent = colunas; //Colocando elementos dentro do spam
            span.setAttribute('class', "visivel"); // Definindo uma classe visivel ao span
            td.appendChild(span); //informando que a td pai da span
            tr.appendChild(td); // mesma coisa
        }
       tabela.appendChild(tr); // tabela e pai da tr
    }
}

let minas = [[2,5],[6,9]];
table(campo(8,8,minas))