var dados = [
    {
        nome: "Karolaine Mandroti",
        horario: "03 out 10:42 (há poucos segundos)",
        endereco: "Rua Minas Gerais, 64",
        iconeEndereco: "fas fa-utensils",
        tipoEntrega: "Delivery",
        iconeEntrega: "fas fa-hourglass-half",
        identificador: "card1",
        tipoPagamento: "Cartão de Crédito"
    },
    {
        nome: "Isabela Mandroti",
        horario: "03 out 10:42 (há poucos segundos)",
        endereco: "Rua Minas Gerais, 64",
        iconeEndereco: "fas fa-utensils",
        tipoEntrega: "Delivery",
        iconeEntrega: "fas fa-hourglass-half",
        identificador: "card2",
        tipoPagamento: "Cartão de Débito",
    },
    {
        nome: "Miguel Mandroti",
        horario: "03 out 10:42 (há poucos segundos)",
        endereco: "Rua Minas Gerais, 64",
        iconeEndereco: "fas fa-utensils",
        tipoEntrega: "Delivery",
        iconeEntrega: "fas fa-hourglass-half",
        identificador: "card3",
        tipoPagamento: "Cartão de Débito",
    },
];

var pendentesContainer = document.getElementById('pendentes');

for (var i = 0; i < dados.length; i++) {
    var card = criarCard(dados[i]);
    pendentesContainer.innerHTML += card;
}

function criarCard(dado) {

    // var produtosHTML='';

    // dado.produtos.forEach(function(produtos){
    //     produtosHTML += `
    //     <li>
    //         <div style="display:flex">
    //             <p>${produtos.qtde}X</p>    
    //             <p>${produtos.nome}</p>  
    //         </div>
    //         <div>
    //             <p>${produtos.complemento || ''}</p>
    //         </div>
    //     </li>
    // `;
    // });

    var cardHTML = `
        <div class="card" style="margin-right: -15px; margin-left: -15px">
        <div style="padding: 5px">
            <div style="display: flex;justify-content: space-between; "> 
                <h4 style="margin: 10px 0px 0px 0px;">${dado.nome}</h4>   
            
                <div class="dropdown">
                    <button class="mainmenubtn">
                    <i class="${dado.iconeEndereco}" style="margin-top: 16px;margin-left: auto; font-size: 24px;"></i> 
                    </button>
                    <div class="dropdown-child">
                        <a href="http://wwww.yourdomain.com/page1.html">Pronto</a>     
                        <a href="http://wwww.yourdomain.com/page1.html">Cancelar</a>                        
                    </div>
                </div>
                            
            </div>            
            <p style="color: lightgray;">${dado.horario}</p>
            <div style="display: flex;">
                <i class="${dado.iconeEndereco}" style="margin-top: 5px;"></i>
                <p style="color: gray; margin-left: 10px;">${dado.endereco}</p>
            </div>
            <div style="display: flex; align-items: center;">
                <i class="${dado.iconeEntrega}" style="margin-bottom: 14px;"></i>
                <p style="color: gray; margin-left: 10px;">${dado.tipoEntrega}</p>
            </div>
            <div style="display: flex; align-items: center;">
                <i class="${dado.iconeEntrega}" style="margin-bottom: 14px;"></i>
                <p style="color: gray; margin-left: 10px;">${dado.tipoPagamento}</p>
            </div>
            <div style="display: flex; flex-direction: column;">
            <div style="color: gray; margin-left: 10px; text-decoration: underline; cursor: pointer;" onclick="toggleCard('${dado.identificador}')">Ver detalhes do pedido</div>
                <div style="display:none;padding:10px; margin-top: 13px" id="${dado.identificador}">
                    <div class="categoria">
                    <div class="coluna">
                        <h6 style="color: #ffbe33;">Itens do Pedido</h6>
                        <ul class="listaPedidos">
                            <li>
                                <div style="display:flex; margin-bottom: -15px">
                                    <p>1X &emsp;</p>
                                    <p>Hamburguer de Frango</p>
                                </div>
                                <div >
                                    <p style="display: inline; font-size: 12px;">1x&ensp; Bacon&ensp;</p>
                                    <p style="display: inline; font-size: 12px;">1x&ensp; Milho&ensp;</p>
                                    <p style="display: inline; font-size: 12px;">1x&ensp; Calabresa&ensp;</p>
                                    <p style="display: inline; font-size: 12px;">1x&ensp; Bacon&ensp;</p>
                                    <p style="display: inline; font-size: 12px;">1x&ensp; Milho&ensp;</p>
                                    <p style="display: inline; font-size: 12px;">1x&ensp; Calabresa&ensp;</p>
                                    <p style="display: inline; font-size: 12px;">1x&ensp; Bacon&ensp;</p>
                                    <p style="display: inline; font-size: 12px;">1x&ensp; Milho&ensp;</p>
                                    <p style="display: inline; font-size: 12px;">1x&ensp; Calabresa&ensp;</p>
                                </div>                            
                            </li>    
                            <li>
                                <div style="display:flex;">
                                    <p>1X &emsp;</p>
                                    <p>Pizza Brócolis</p>
                                </div>
                            </li>        
                            <li>
                                <div style="display:flex">
                                    <p>3X &emsp;</p>
                                    <p>Pastel de Queijo</p>
                                </div>
                            </li>      
                            <li>
                                <div style="display:flex;">
                                    <p>1X &emsp;</p>
                                    <p>Pizza Brócolis</p>
                                </div>
                            </li>        
                            <li>
                                <div style="display:flex">
                                    <p>3X &emsp;</p>
                                    <p>Pastel de Queijo</p>
                                </div>
                            </li>      
                        </ul>
                    </div>                   
                </div>
                </div>
            </div>
        </div>           
        </div>
    `;

    return cardHTML;
}

function toggleCard(cardId) {
    var cardBody = document.getElementById(cardId);
    if (cardBody.style.display === 'none') {
        cardBody.style.display = 'block';
    } else {
        cardBody.style.display = 'none';
    }
}

// var producaoContainer = document.getElementById('producao');

// for (var i = 0; i < dados.length; i++) {
//     var card = criarCard(dados[i]);
//     producaoContainer.innerHTML += card;
// }

// var disponivelContainer = document.getElementById('disponivel');

// for (var i = 0; i < dados.length; i++) {
//     var card = criarCard(dados[i]);
//     disponivelContainer.innerHTML += card;
// }


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