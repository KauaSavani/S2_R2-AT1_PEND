const btnAdicionar = document.getElementById("btnAdicionar");
const input = document.getElementById("inputTarefa");
const mensagem = document.getElementById("mensagem");
const lista = document.getElementById("listaTarefas");

btnAdicionar.addEventListener("click", function(){

    const texto = input.value.trim();

    // limpar mensagens anteriores
    mensagem.textContent = "";
    mensagem.classList.remove("text-danger","text-success");

    // verificar se está vazio
    if(texto === ""){
        mensagem.textContent = "Tarefa vazia!";
        mensagem.classList.add("text-danger");
        return;
    }

    // criar li
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    // inserir texto da tarefa
    li.textContent = texto;

    // adicionar na lista
    lista.appendChild(li);

    // limpar input
    input.value = "";

    // mensagem de sucesso
    mensagem.textContent = "Tarefa adicionada com sucesso!";
    mensagem.classList.add("text-success");

});