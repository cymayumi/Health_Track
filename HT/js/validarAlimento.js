
function validar_alimento(){

    var descricao = document.getElementById("descricao-ref");
    var calorias = document.getElementById("calRefInput");

    if(descricao.value == "" || calorias.value == "") {
        alert("Digite as informações da sua refeição!");
    } else {
        window.open('./alimentos_home.html');
    }
}

window.onload = function(){

    var botao = document.getElementById("btn_alimentos");

    botao.onclick = function(){

        validar_alimento();
    }
}