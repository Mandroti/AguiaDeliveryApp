const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

    
function applyPhoneMask(event) {
    let input = event.target;
    let value = input.value;
    if (!value) return "";
    value = value.replace(/\D/g,'');
    value = value.replace(/(\d{2})(\d)/,"($1) $2");
    value = value.replace(/(\d)(\d{4})$/,"$1-$2");
    input.value = value;
}

const applyZipCodeMask = (event) => {
    let input = event.target;
    let value = input.value;
    
    if (!value) return "";
    
    value = value.replace(/\D/g,'');
    value = value.replace(/(\d{5})(\d)/,'$1-$2');
    
    input.value = value;
}

function applyCNPJMask(event) {
    let input = event.target;
    let value = input.value;
    value = value.replace(/\D/g,"");                           
    value = value.replace(/^(\d{2})(\d)/,"$1.$2");              
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3"); 
    value = value.replace(/\.(\d{3})(\d)/,".$1/$2");          
    value = value.replace(/(\d{4})(\d)/,"$1-$2");             
    input.value = value;
}

document.addEventListener('DOMContentLoaded', function() {
    const cepInput = document.getElementById("inputCep");

    cepInput.addEventListener('blur', function() {
        const cepValue = cepInput.value.replace(/[^0-9]+/, '');
        if (cepValue.length === 8) {
            fetchCEP(cepValue);
        }
    });
});

function fetchCEP(cepValue) {
    const url = `https://viacep.com.br/ws/${cepValue}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(json => {
            if (json.logradouro) {
                document.getElementById('inputLog').value = json.logradouro;
                document.getElementById('inputBairro').value = json.bairro;
                document.getElementById('inputCit').value = json.localidade;
                //document.querySelector('input[name=estado]').value = json.uf;
            }
        });
}

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})


function exibeSenha(inputId) {
    var eyeIcon = document.querySelector('#' + inputId + ' + .input-group-append .toggle-password');
    var passwordInput = document.getElementById(inputId);

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.querySelector('i').classList.remove('bi-eye-slash');
        eyeIcon.querySelector('i').classList.add('bi-eye');
    } else {
        passwordInput.type = 'password';
        eyeIcon.querySelector('i').classList.remove('bi-eye');
        eyeIcon.querySelector('i').classList.add('bi-eye-slash');
    }
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
            event.preventDefault();   
            document.getElementById('senhaDiferenteAlert').style.display = 'block';
        }        
}
// function verificaSenhas() {
//     event.preventDefault(); 
//     var senha = document.getElementById('password').value;
//     var confirmarSenha = document.getElementById('inputConfirmar').value;

//     if (senha !== confirmarSenha) {
//         document.getElementById('senhaDiferenteAlert').style.display = 'block';
//         return false;
//     } else {
//         document.getElementById('senhaDiferenteAlert').style.display = 'none';
//         return true;
//     }
// }



document.addEventListener('DOMContentLoaded', function() {
    pedidosPendentes();
});


var dados = [
    {
        nome: "Karolaine Mandroti",
        horario: "03 out 10:42 (há poucos segundos)",
        endereco: "Rua Minas Gerais, 64",
        iconeEndereco: "fas fa-utensils",
        tipoEntrega: "Delivery",
        iconeEntrega: "fas fa-hourglass-half"
    },
    // Adicione mais objetos ao array conforme necessário
];

var dados = [
    {
        nome: "Karolaine Mandroti",
        horario: "03 out 10:42 (há poucos segundos)",
        endereco: "Rua Minas Gerais, 64",
        iconeEndereco: "fas fa-utensils",
        tipoEntrega: "Delivery",
        iconeEntrega: "fas fa-hourglass-half"
    },
    {
        nome: "Isabela Mandroti",
        horario: "03 out 10:42 (há poucos segundos)",
        endereco: "Rua Minas Gerais, 64",
        iconeEndereco: "fas fa-utensils",
        tipoEntrega: "Delivery",
        iconeEntrega: "fas fa-hourglass-half"
    },
    // Adicione mais objetos ao array conforme necessário
];

function criarCard(dado) {
    var cardHTML = `
        <div class="card" style="margin-right: -15px; margin-left: -15px" onclick="pedidosCliente()">
        <div style="padding: 5px">
            <div style="display: flex;justify-content: space-between; "> 
                <h4 style="margin: 10px 0px 0px 0px;">${dado.nome}</h4>   
            
                <div class="dropdown">
                    <button class="mainmenubtn">
                    <i class="${dado.iconeEndereco}" style="margin-top: 16px;margin-left: auto; font-size: 24px;"></i> 
                    </button>
                    <div class="dropdown-child">
                        <a href="http://wwww.yourdomain.com/page1.html">Pronto</a>                        
                    </div>
                </div>
                            
            </div>            
            <p style="color: lightgray;">${dado.horario}</p>
            <div style="display: flex;">
                <i class="${dado.iconeEndereco}" style="margin-top: 5px;"></i>
                <p style="color: lightgray; margin-left: 10px;">${dado.endereco}</p>
            </div>
            <div style="display: flex; align-items: center;">
                <i class="${dado.iconeEntrega}" style="margin-bottom: 14px;"></i>
                <p style="color: lightgray; margin-left: 10px;">${dado.tipoEntrega}</p>
            </div>
        </div>           
        </div>
    `;

    return cardHTML;
}

var pendentesContainer = document.getElementById('pendentes');

for (var i = 0; i < dados.length; i++) {
    var card = criarCard(dados[i]);
    pendentesContainer.innerHTML += card;
}

var producaoContainer = document.getElementById('producao');

for (var i = 0; i < dados.length; i++) {
    var card = criarCard(dados[i]);
    producaoContainer.innerHTML += card;
}

var disponivelContainer = document.getElementById('disponivel');

for (var i = 0; i < dados.length; i++) {
    var card = criarCard(dados[i]);
    disponivelContainer.innerHTML += card;
}


// function passarFase(){
//     const modal = document.getElementById('myModal');
//     modal.style.display = 'block';
// }

// function fecharModal() {
//     const modal = document.getElementById('myModal');
//     modal.style.display = 'none';
// }

function pedidosCliente(){
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
}