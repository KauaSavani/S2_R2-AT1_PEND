const botao = document.getElementById("botao"); // Seleciona o botão pelo id

botao.addEventListener("click", function(){ // Executa ao clicar no botão

    const texto = document.getElementById("texto"); // Seleciona o parágrafo

    texto.textContent = "Texto alterado com JavaScript!"; // Altera o texto exibido

});