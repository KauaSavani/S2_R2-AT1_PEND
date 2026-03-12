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
    li.classList.add("list-group-item","d-flex","align-items-center","justify-content-between");

    // container esquerda
    const div = document.createElement("div");
    div.classList.add("d-flex","align-items-center");

    // checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("form-check-input","me-2");

    // texto da tarefa
    const span = document.createElement("span");
    span.textContent = texto;

    // marcar como concluído
    checkbox.addEventListener("change", function(){

        if(checkbox.checked){
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
        } else {
            span.style.textDecoration = "none";
            span.style.color = "black";
        }

    });

    // botão remover
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.classList.add("btn","btn-danger","btn-sm");

    btnRemover.addEventListener("click", function(){
        li.remove();
    });

    // montar estrutura
    div.appendChild(checkbox);
    div.appendChild(span);

    li.appendChild(div);
    li.appendChild(btnRemover);

    lista.appendChild(li);

    // limpar input
    input.value = "";

});