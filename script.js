const botao = document.getElementById("botao"); // Seleciona o botão pelo id

botao.addEventListener("click", function(){ // Executa ao clicar no botão

    const nome = document.getElementById("nome").value; // Pega o valor digitado no input

    const mensagem = document.getElementById("mensagem"); // Seleciona o elemento da mensagem

    mensagem.textContent = "Olá " + nome + " Seja bem-vindo!"; // Exibe a mensagem na tela

});