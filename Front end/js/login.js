document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Chamada para o endpoint de login do back-end
    fetch('https://avaliacoes-back.vercel.app/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Falha na autenticação'); // Caso o status não seja um sucesso (ex: 200)
        }
        return response.json(); // Converte a resposta em JSON
    })
    .then(data => {
        // Assumindo que o back-end responde com dados úteis após login bem-sucedido
        sessionStorage.setItem('user', data.user.username);
        sessionStorage.setItem('reviewCount', data.user.reviewCount); // Ajuste de acordo com o que o back-end retorna
        window.location.href = 'dashboard.html'; // Redireciona para a área do cliente
    })
    .catch(error => {
        console.error('Erro de login:', error);
        alert('Usuário ou senha incorretos!');
    });
});
