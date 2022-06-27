var enviar = document.querySelector('.botao4');
//faz uma validação do formulário
function validaForm(event) {
    var nome = document.getElementById('nome');
    console.log(nome.value.length);
    var email = document.getElementById('email');
    var assunto = document.getElementById('assunto');
    var mensagem = document.getElementById('mensagem');
    
    //verifica se o campo nome está vazio
    if(nome.value.length == 0) {
        alert('Porfavor preencha o campo nome');
        event.preventDefault(); //evita que o formulário seja enviado
        nome.focus(); //da um foco no campo
        return
    }
    //verifica se o campo nome tem menos de 50 caracteres
    if(nome.value.length > 50) {
        alert('O campo de nome deve conter no máximo 50 caracteres, por favor tente novamente!');
        event.preventDefault();
        nome.value = ""; //apaga os caracteres digitados
        nome.focus();
        return
    }
    //verifica se o campo de e-mail está vazio
    if(email.value.length == 0) {
        alert('Porfavor preencha o campo de email');
        event.preventDefault();
        email.focus();
        return
    }
    //verifica se o e-mail digitado é válido
    if(email.value.indexOf('@') == -1 || email.value.indexOf(".") == -1) {
        alert('Por favor digite um email válido');
        event.preventDefault();
        email.value = "";
        email.focus();
        return
    }
    //verifica se o campo assunto está vazio
    if(assunto.value.length == 0) {
        alert('Porfavor preencha o campo assunto');
        event.preventDefault();
        assunto.focus();
        return
    }
    //verifica se o campo assunto tem menos de 50 caracteres
    if(assunto.value.length > 50) {
        alert('O campo assunto deve conter no máximo 50 caracteres, por favor tente novamente!');
        event.preventDefault();
        assunto.value = "";
        assunto.focus();
        return
    }
    //verifica se o campo mensagem está vazio
    if(mensagem.value.length == 0) {
        alert('Porfavor preencha o campo mensagem');
        event.preventDefault();
        mensagem.focus();
        return
    }
    //verifica se o campo mensagem tem menos de 300 caracteres
    if(mensagem.value.length > 300) {
        alert('O campo mensagem deve conter no máximo 300 caracteres, por favor tente novamente!');
        event.preventDefault();
        mensagem.value = "";
        mensagem.focus();
        return
    }
}

//desativa por padrão o botão enviar até que os campos sejam preenchidos
var elementos = document.querySelectorAll("#nome, #email, #assunto, #mensagem");
console.log(elementos);
//faz uma verificação nos inputs
for(var i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener("change", function() { //executa o for sempre que houver alguma alteração nos campos
        if(document.getElementById('nome').value == "" && document.getElementById("email").value == "" && document.getElementById("assunto").value == "" && document.getElementById("mensagem").value == "") {
        enviar.disabled = true;
        enviar.style.background = "#A2A2A2"; 
        enviar.classList.remove("enviar");
        } else {
        enviar.disabled = false;
        enviar.style.background = "#2A7AE4"; //muda a cor do botão seguindo a verificação
        enviar.classList.add("enviar"); //adiciona uma classe para uma animação hover no botão
        }
    });
}