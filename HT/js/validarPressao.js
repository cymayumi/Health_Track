
function validar_pressao(){

    var sistolica = document.getElementById("sistInput");
    var diastolica = document.getElementById("diastInput");
    var data = document.getElementById("dataInput");

    if(sistolica.value == "" || diastolica.value == "" || data.value == "") {
        alert("Digite suas informações!");
    } else {
        window.open('./pressao_home.html');
    }
}

window.onload = function(){

    var botao = document.getElementById("btn_pressao");

    botao.onclick = function(){

        validar_pressao();
    }
}