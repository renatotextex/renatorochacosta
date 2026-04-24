
document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('formContato');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Pega dos valores
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Regex valida e-mail
        const validaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validação de campos
        if (nome === "" || email === "" || mensagem === "") {
            alert("Erro: Todos os campos devem ser preenchidos. Revise os campos 'Nome', 'e-mail' e 'Mensagem'.");
            return;
        }

        // Validação do formato do e-mail
        if (!validaEmail.test(email)) {
            alert("Erro: Por favor, insira um e-mail válido (exemplo: seuusuario@dominio.com).");
            return;
        }

        alert("Mensagem enviada com sucesso!");
        
        // Limpa o form
        form.reset();
    });
});
