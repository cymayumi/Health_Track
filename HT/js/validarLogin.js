
function validar_login(){
    var senha = document.getElementById("senha_acesso");

    if(senha.value.length < 8){
        alert("Sua senha deve conter OITO digitos!");
    }
    else{
        window.open('./dashboard.html');
    }
}

window.onload = function(){

    var botao = document.getElementById("btn_login");

    botao.onclick = function(){

        validar_login();
}
}