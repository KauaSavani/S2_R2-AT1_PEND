const botao = document.getElementById("botaoAdicionar"); // Seleciona o botão adicionar

botao.addEventListener("click", function(){ // Executa ao clicar no botão

    const input = document.getElementById("item"); // Seleciona o campo de texto

    const texto = input.value; // Pega o valor digitado

    const li = document.createElement("li"); // Cria um item de lista

    li.textContent = texto; // Define o texto do item

    const lista = document.getElementById("lista"); // Seleciona a lista (ul)

    lista.appendChild(li); // Adiciona o item na lista

    input.value = ""; // Limpa o campo de texto

});