const botao = document.getElementById("botaoAdicionar");

botao.addEventListener("click", function(){

    const input = document.getElementById("item");

    const texto = input.value;

    const li = document.createElement("li");

    li.textContent = texto;

    const lista = document.getElementById("lista");

    lista.appendChild(li);

    input.value = "";

});