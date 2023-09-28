(function ($) {
    "use strict";
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
      
    
    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });
    
})(jQuery);

function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

/*const produtos = [
    {
        nome: "Mini cheese Burger",
        preco: "$9.00",
        descricao: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
        imagemSrc: "images/menu-burger.jpg"
    },    
];

function carregarProdutos(){
    const container = document.querySelector('.menu-item');

    for (const produto of produtos) {
        const divProduto = document.createElement('div');
        divProduto.classList.add('menu-item');

        divProduto.innerHTML = `
            <div class="menu-img">
                <img src="${produto.imagemSrc}" alt="Image">
            </div>
            <div class="menu-text">
                <h3><span>${produto.nome}</span> <strong>${produto.preco}</strong></h3>
                <p>${produto.descricao}</p>
            </div>
        `;

        container.appendChild(divProduto);
    }
}*/

function decrementQuantity() {
    
    var quantityLabel = document.getElementById("quantityLabel");
    var currentQuantity = parseInt(quantityLabel.innerText);
    
    if (currentQuantity > 1) {
        quantityLabel.innerText = currentQuantity - 1;
    }
}

function incrementQuantity() {
    var quantityLabel = document.getElementById("quantityLabel");
    var currentQuantity = parseInt(quantityLabel.innerText);
    
    quantityLabel.innerText = currentQuantity + 1;
}

function openModalCarrinho() {
    closeModal();
    document.getElementById('myModalCarrinho').style.display = 'block';
}

function closeModalCarrinho() {
    var modal = document.getElementById("myModalCarrinho");
    modal.style.display = "none";
}

function continuarComprando() {
    closeModalCarrinho(); 
}

function irParaCarrinho() {
    closeModalCarrinho(); 
}
