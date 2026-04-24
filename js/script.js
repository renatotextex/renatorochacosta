
document.addEventListener('DOMContentLoaded', function() {

    // Botão do Tema
    const toggleSwitch = document.querySelector('#checkbox');
    const themeText = document.querySelector('#theme-text');

    // Mudança
    toggleSwitch.addEventListener('change', function(e) {
        if (e.target.checked) {
            document.body.classList.add('dark-mode');
            themeText.textContent = "Escuro";
            localStorage.setItem('tema', 'dark'); // Salva preferência
        } else {
            document.body.classList.remove('dark-mode');
            themeText.textContent = "Claro";
            localStorage.setItem('tema', 'light');
        }
    });

    // Verifica a preferência salva ao carregar a página
    if (localStorage.getItem('tema') === 'dark') {
        toggleSwitch.checked = true;
        document.body.classList.add('dark-mode');
        themeText.textContent = "Escuro";
    }
    
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

        alert("Mensagem enviada com sucesso! Agradecemos o seu contato e retornaremos o mais breve possível.");
        
        // Limpa o form
        form.reset();
    });

    });
