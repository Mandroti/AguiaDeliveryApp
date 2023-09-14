document.querySelector('form').addEventListener('submit', fazerLogin)

function fazerLogin(event)
{
    event.preventDefault();
    const email = document.getElementById('username').value;
    const senha = document.getElementById('password').value;

    alert(email)
    const dados = {
        email: email,
        senha: senha
    };

    fetch('', { //coloca a rota do c#
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data =>{
        if (data.autenticado) {
            exibirResultado('Login bem-sucedido!');
        } else {
            exibirResultado('Credenciais inválidas. Tente novamente.');
        }
    })
    .catch(error => console.error('Erro:', error));
}

function exibirResultado(mensagem)
{
    //alert(mensagem);
}