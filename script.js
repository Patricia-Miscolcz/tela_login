document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'usuario' && password === '123456') {
        alert('Parabens, você já está logado!');
    } else {
        alert('Usuário ou senha incorretos!');
    }
});
