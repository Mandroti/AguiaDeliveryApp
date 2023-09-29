const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})


function exibeSenha() //precisa clicar duas vezes para alterar
{
    var eyeIcon = document.querySelector('.toggle-password');
    var passwordInput = document.getElementById('password');
    eyeIcon.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeIcon.querySelector('i').classList.remove('bi-eye-slash');
            eyeIcon.querySelector('i').classList.add('bi-eye');
        } else {
            passwordInput.type = 'password';
            eyeIcon.querySelector('i').classList.remove('bi-eye');
            eyeIcon.querySelector('i').classList.add('bi-eye-slash');
        }
    });
}

function confirmar() //precisa clicar duas vezes para alterar
{
    var eyeIcon = document.querySelector('.toggle-password');
    var passwordInput = document.getElementById('inputConfirmar');

    
    eyeIcon.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            alert(passwordInput.value)
            eyeIcon.querySelector('i').classList.remove('bi-eye-slash');
            eyeIcon.querySelector('i').classList.add('bi-eye');
        } else {
            passwordInput.type = 'password';
            eyeIcon.querySelector('i').classList.remove('bi-eye');
            eyeIcon.querySelector('i').classList.add('bi-eye-slash');
        }
    });
}

function meuLogin()
{
    const contato = document.getElementById('username').value;
    const senha = document.getElementById('password').value;
    
    const url = `https://localhost:7221/api/Usuario/Login?contato=${contato}&senha=${senha}`;
    const dados = {
        contato: contato,
        senha: senha
    };

    fetch(url, { 
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },        
    })
    .then(response => {
        if (!response.ok) {
          window.location.href = "registraCliente.html"
        }
        else
            window.location.href = "dashboard.html"
        return response.json();})
    .then(data =>{
     })
    .catch(error => console.error('Erro:', error));
    event.preventDefault();
}    


function registraCliente()
{
    alert("AAAAAAAAAA")
    var nome = document.getElementById('inputNome').value;
        var senha = document.getElementById('password').value;
        var confirmaSenha = document.getElementById('inputConfirmar').value;
        var contato = document.getElementById('inputContato').value;
        var cep = document.getElementById('inputCep').value;
        var logradouro = document.getElementById('inputLog').value;
        var bairro = document.getElementById('inputBairro').value;
        var numero = document.getElementById('inputNum').value;
        numero = parseInt(numero);
        var cidade = document.getElementById('inputCit').value;  

        const dados = {
            Nome: nome, Senha: senha, ConfirmaSenha: confirmaSenha,
            Contato: contato, CEP: cep, Logradouro: logradouro,
            Bairro: bairro, Numero: numero, Cidade: cidade
        };       

        if(senha == confirmaSenha)
        {
            fetch('https://localhost:7221/api/Usuario/Gravar', {             
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',               
                },
                body: JSON.stringify(dados)           
            })
            .then(response => response.json())
            .then(data =>{
                if (!response.ok) {
                    window.location.href = "registraCliente.html"
                  }
                  else
                      window.location.href = "login.html"
                  return response.json();})
            .catch(error => console.error('Erro:', error));        
            event.preventDefault();
        }
        else{            
            document.getElementById('divS').style.backgroundColor = 'red';
            document.getElementById('divC').style.backgroundColor = 'red';
        }        
}



function pedidosPendentes()
{
    var card = document.createElement('div');
    card.classList.add('card');
     
    var cardTitulo = document.createElement('h2');
    cardTitulo.textContent = "12";
    cardTitulo.classList.add('titulo-card');

    // Criar o conteúdo do card
    var cardConteudo = document.createElement('p');
    cardConteudo.textContent = "Conteudo do Pedido do Cliente";
    cardConteudo.classList.add('conteudo-card');

    var button = document.createElement('button')
    button.innerHTML = '<i class="fas fa-check"></i> teste'; // Adicionar ícone check
    button.classList.add('botao-card');
    // Adicionar o título e conteúdo ao card
    card.appendChild(button)
    card.appendChild(cardTitulo);
    card.appendChild(cardConteudo);

    document.getElementById('pendentes').appendChild(card);
}