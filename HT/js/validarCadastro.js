function validar_cadastro(){
    var altura = document.getElementById("alturaInput");
    var senha = document.getElementById("senhaInput");
    var confima_senha = document.getElementById("senha_confirma_Input");

    if(altura.value < 100 || altura.value > 250){
        alert("Digite uma altura válida (centímetros).");
    }else if(senha.value == "" || senha.value.length < 8){
        alert("Digite uma senha com OITO digitos!");
    }else if(confima_senha.value != senha.value){
        alert("Sua confirmação de senha está errada!");
    }else{
        window.open('./dashboard.html');
    }
}

window.onload = function(){

    var botao = document.getElementById("btn_cadastrar");

    botao.onclick = function(){

        validar_cadastro();
}
}