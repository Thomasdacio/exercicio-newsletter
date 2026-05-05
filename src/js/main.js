const containerForm = document.getElementById("container-form");
const containerConfirmacao = document.getElementById("confirmacao")
const formulario = document.getElementById("form");
const mensagemErro = document.getElementById("mensagem");
const email = document.getElementById("email");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    if (email.value.trim() === "") {
        mensagemErro.classList.remove("desativado");
        email.classList.add("input-erro");
        return;
    }

    if (!email.value.includes("@")) {
        mensagemErro.classList.remove("desativado");
        email.classList.add("input-erro");
        return;
    }

    containerForm.classList.toggle("escondido");
    containerConfirmacao.classList.toggle("confirmado");
});