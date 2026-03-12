const btnAdicionar = document.getElementById("btnAdicionar");
const input = document.getElementById("inputTarefa");
const lista = document.getElementById("listaTarefas");

btnAdicionar.addEventListener("click", function(){

    const texto = input.value.trim();

    if(texto === ""){
        return;
    }

    // criar li
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    // inserir texto
    li.textContent = texto;

    // criar botão remover
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.classList.add("btn","btn-danger","btn-sm","ms-3");

    // evento para remover tarefa
    btnRemover.addEventListener("click", function(){
        li.remove();
    });

    // adicionar botão dentro do li
    li.appendChild(btnRemover);

    // adicionar li na lista
    lista.appendChild(li);

    // limpar input
    input.value = "";

});