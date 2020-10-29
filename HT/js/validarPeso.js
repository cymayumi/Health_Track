function validar_peso(){

    var peso = document.getElementById("pesoInput");
    var data = document.getElementById("dataInput");

    if(peso.value == "" || data.value == "") {
        alert("Digite suas informações!");
    } else {
        window.open('./peso_home.html');
    }
}

window.onload = function(){

    var botao = document.getElementById("btn_peso");

    botao.onclick = function(){

        validar_peso();
    }
}