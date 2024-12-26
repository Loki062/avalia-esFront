document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Definindo um nome de usuário e senha fictícios para teste
    const storedUsername = 'davi';
    const storedPassword = '123';

    if (username === storedUsername && password === storedPassword) {
        // Simulando o armazenamento do nome de usuário em sessionStorage
        sessionStorage.setItem('user', username);
        sessionStorage.setItem('reviewCount', '3'); // Simulando a quantidade de avaliações já feitas
        window.location.href = 'dashboard.html'; // Redireciona para a área do cliente
    } else {
        alert('Usuário ou senha incorretos!');
    }
});

document.getElementById('registerBtn').addEventListener('click', function() {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.register-container').style.display = 'block';
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const cpf = document.getElementById('cpf').value;
    const phone = document.getElementById('phone').value;

    if (cpf.length !== 11) {
        alert('CPF deve ter exatamente 11 dígitos.');
        return;
    }

    if (phone.length !== 11) {
        alert('Número de telefone deve ter exatamente 11 dígitos.');
        return;
    }

    // Simulação de registro bem-sucedido
    console.log('Registrado com sucesso:', cpf, phone);
    // Aqui você pode simular o armazenamento de dados ou direcionar para uma página de sucesso
    alert('Registro concluído! Faça o login para continuar.');
    document.querySelector('.register-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
});

document.getElementById('backToLoginBtn').addEventListener('click', function() {
    document.querySelector('.register-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
});
