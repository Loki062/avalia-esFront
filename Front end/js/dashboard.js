window.onload = function() {
    // Supõe que o nome de usuário esteja armazenado em sessionStorage após o login
    const username = sessionStorage.getItem('user');
    if (!username) {
        window.location.href = 'index.html'; // Redireciona para a página de login se não estiver logado
    }
    document.getElementById('usernameDisplay').textContent = username;

    // Supõe que o número de avaliações esteja armazenado ou seja recuperado do servidor
    const reviewCount = parseInt(sessionStorage.getItem('reviewCount') || '0');
    document.getElementById('reviewCount').textContent = reviewCount;
    
    // Atualiza a barra de progresso com base no número de avaliações
    updateProgressBar(reviewCount, 10); // 10 é o número total de avaliações necessárias para o prêmio

    // Listener para o botão que mostra/esconde os formulários disponíveis
    document.getElementById('toggleFormsBtn').addEventListener('click', function() {
        const formsContainer = document.getElementById('formsContainer');
        formsContainer.style.display = formsContainer.style.display === 'none' ? 'block' : 'none';
    });

    // Adicionar lógica para carregar formulários disponíveis ou mostrar que não há mais formulários
    loadAvailableForms(reviewCount);
};

function updateProgressBar(currentCount, totalCount) {
    const progressPercentage = (currentCount / totalCount) * 100;
    const progressBar = document.getElementById('progress');
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.textContent = `${Math.round(progressPercentage)}%`; // Mostra a porcentagem na barra
}

function loadAvailableForms(reviewCount) {
    const formsContainer = document.getElementById('formsContainer');
    if (reviewCount < 10) {
        // Simula a adição de um novo formulário de avaliação
        formsContainer.innerHTML = '<p><strong>Novo Formulário de Avaliação:</strong> Por favor, preencha abaixo.</p>';
        formsContainer.innerHTML += '<form><input type="text" placeholder="Sua opinião"/><button type="submit">Enviar</button></form>';
    } else {
        formsContainer.innerHTML = '<p>Você completou todas as avaliações necessárias para o prêmio!</p>';
    }
}
