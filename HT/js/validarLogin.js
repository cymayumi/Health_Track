
function validar_login(){
    
    //var email = document.form_login.email.value;
    //var senha = document.form_login.senha.value;

    var email = document.getElementById("email_acesso");
    var senha = document.getElementById("senha_acesso");

    if(email.value == "" || senha.value == "") {
        alert("Digite o seu login!");
    } else {
        window.open('./dashboard.html');
    }
}

window.onload = function(){

    var botao = document.getElementById("btn_login");

    botao.onclick = function(){

        validar_login();
    }
}