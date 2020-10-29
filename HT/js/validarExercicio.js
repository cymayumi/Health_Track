function validar_exercicio(){

    var descricao = document.getElementById("descricao-atv");
    var calorias = document.getElementById("calAtvInput");
    var data = document.getElementById("dataInput");

    if(descricao.value == "" || calorias.value == "" || data.value == "") {
        alert("Digite suas informações!");
    } else {
        window.open('./dashboard.html');
    }
}

window.onload = function(){

    var botao = document.getElementById("btn_exercicio");

    botao.onclick = function(){

        validar_exercicio();
    }
}