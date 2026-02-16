$(document).ready(function(){

// Ajustes gerais

$('#cabecalho .conteudo-topo .inferior').after(`
    <div class="h-actions">
        <a href="/conta/login" class="h-user">
            <img src="https://cdn.awsli.com.br/2923/2923109/arquivos/user.svg" alt="Minha conta">
            <span>Entrar</span>
        </a>

        <div class="h-search visible-phone">
            <img src="https://cdn.awsli.com.br/2923/2923109/arquivos/search.svg" alt="Buscar">
        </div>

        <div class="h-menu visible-phone">
            <img src="https://cdn.awsli.com.br/2923/2923109/arquivos/menu.svg" alt="Menu">
        </div>
    </div>
`);

$('.banner.cheio .flex-direction-nav').prepend($('.banner.cheio .flex-control-nav'));

$('.selos li:first-child img').attr('src','https://cdn.awsli.com.br/2830/2830294/arquivos/site-protegido.svg');
$('#rodape>div:last-child .conteiner .row-fluid div:not(.span12)').before(`<div class="feito-pixelset"><a href="https://www.pixelset.com.br/" class="pixel-logo" target="_blank"><img src="https://pages.greatpages.com.br/www.pixelset.com.br/1768577291/imagens/desktop/3485744_1_176857398507036064.svg" alt="Pixelset"></a></div>`)
$('#rodape>div:last-child .row-fluid > div:last-child').attr('style','')


    // Defina os números do WhatsApp como variáveis, agora com títulos
var whatsappNumbers = [
    { title: "Vendas", phone: "5511999999999", display: "(11) 99999-9999" },
    { title: "Suporte", phone: "5511988888888", display: "(11) 98888-8888" },
    { title: "Financeiro", phone: "5511977777777", display: "(11) 97777-7777" }
];

var whatsappDropdownHtml = `
<div class="whatsapp-dropdown">
    <button class="whatsapp-btn" type="button">
        Fale conosco pelo WhatsApp
    </button>
    <ul class="whatsapp-dropdown-menu" style="display: none;">
        ${whatsappNumbers.map(function(num) {
            return `<li>
                        <strong>${num.title}:</strong> <a href="https://wa.me/${num.phone}" target="_blank">${num.display}</a>
                    </li>`;
        }).join('')}
    </ul>
</div>
`;

$('#rodape .institucional .lista-redes').after(whatsappDropdownHtml);

// Quando clicar no botão troca a classe do dropdown para abrir/fechar
$(document).on('click', '.whatsapp-btn', function() {
    var $dropdown = $(this).closest('.whatsapp-dropdown');
    $dropdown.toggleClass('open');
    var $menu = $dropdown.find('.whatsapp-dropdown-menu');
    if ($dropdown.hasClass('open')) {
        $menu.slideDown(150);
    } else {
        $menu.slideUp(150);
    }
});

// Variáveis editáveis para as informações do atendimento
var atendimentoTitulo = "Atendimento";
var horariosAtendimento = [
    "Segunda a sexta: 11:30 ás 22:00h",
    "Sabado: 10:00h ás 18:00h",
    "Domingo e Feriado: Fechado"
];
var whatsapp = {
    icon: "https://cdn.awsli.com.br/2923/2923109/arquivos/whatsapp.svg",
    alt: "Whatsapp",
    number: "(11) 98765-4321"
};
var email = {
    icon: "https://cdn.awsli.com.br/2923/2923109/arquivos/email.svg",
    alt: "Email",
    address: "contato@themegames.com.br"
};

var atendimentoHtml = `
    <div class="span4 atendimento-rodape">
        <span class="titulo">${atendimentoTitulo}</span>
        <ul>
            <li>${horariosAtendimento[0]}</li>
            <li>${horariosAtendimento[1]}</li>
            <li>${horariosAtendimento[2]}</li>
            <li style="margin-top:10px;">
                <img src="${whatsapp.icon}" alt="${whatsapp.alt}" style="vertical-align:middle; width:20px; margin-right:8px;">
                ${whatsapp.number}
            </li>
            <li style="margin-top:5px;">
                <img src="${email.icon}" alt="${email.alt}" style="vertical-align:middle; width:20px; margin-right:8px;">
                <a href="mailto:${email.address}" style="color:inherit; text-decoration:none;">${email.address}</a>
            </li>
        </ul>
    </div>
`;

$('#rodape .sobre-loja-rodape').replaceWith(atendimentoHtml);

// Defina as variáveis das categorias (imagem, link e alt)
var categorias = [
    {
        img: "https://cdn.awsli.com.br/2923/2923109/arquivos/cat-01.png",
        link: "#",
        alt: "Categoria 01"
    },
    {
        img: "https://cdn.awsli.com.br/2923/2923109/arquivos/cat-02.png",
        link: "#",
        alt: "Categoria 02"
    },
    {
        img: "https://cdn.awsli.com.br/2923/2923109/arquivos/cat-03.png",
        link: "#",
        alt: "Categoria 03"
    },
    {
        img: "https://cdn.awsli.com.br/2923/2923109/arquivos/cat-04.png",
        link: "#",
        alt: "Categoria 04"
    },
    {
        img: "https://cdn.awsli.com.br/2923/2923109/arquivos/cat-05.png",
        link: "#",
        alt: "Categoria 05"
    },
    {
        img: "https://cdn.awsli.com.br/2923/2923109/arquivos/cat-06.png",
        link: "#",
        alt: "Categoria 06"
    },
    {
        img: "https://cdn.awsli.com.br/2923/2923109/arquivos/cat-07.png",
        link: "#",
        alt: "Categoria 07"
    }
];

// Montar os <li> dinamicamente usando as variáveis
var categoriaLis = categorias.map(function(c){
    return `<li class="c-item">
        <a href="${c.link}">
            <img src="${c.img}" alt="${c.alt}">
        </a>
    </li>`;
}).join('');

// Adiciona o bloco antes de #listagemProdutos
$('.pagina-inicial #listagemProdutos').before(`
<div class="c-slide-section">
    <div class="c-slide-header">
        <h2 class="c-slide-title">
            Navegue por categoria
        </h2>
        <p class="c-slide-subtitle">
            Escolha abaixo uma categoria para explorar nossos jogos
        </p>
    </div>
    <ul class="c-slide">
        ${categoriaLis}
    </ul>
</div>    
`);

// Ativa o Slick Slider na lista de categorias
$('.c-slide').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }
    ]
});

// --------- SLIDER

  // remove comportamento antigo
  $('#listagemProdutos .listagem-linha .flex-viewport').css({
    overflow: 'visible'
  });

  $('#listagemProdutos .listagem-linha.flexslider').removeClass('flexslider');

  const $carousel = $('#listagemProdutos .produtos-carrossel');

  // evita iniciar duas vezes
  if (!$carousel.hasClass('slick-initialized')) {

    // remove estilos inline do flexslider
    $carousel.removeAttr('style');
    $carousel.find('li').removeAttr('style');

    $carousel.slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      dots: true,
      speed: 400,
      draggable: true,
      adaptiveHeight: false,

      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
				}
      ]
    });

  }


    // -----------------------------
  // BOTÃO
  // -----------------------------
  $('.info-principal-produto').after(
    '<button class="btn-forma-pagamento">Forma de pagamento</button>'
  );

  // -----------------------------
  // MODAL
  // -----------------------------
  $('body').append(`
    <div id="modal-pagamento">
      <div class="modal-conteudo"><div class="modal-header"><h3>Formas de pagamento</h3><button class="fechar-modal">✕</button></div></div>
    </div>
  `);
  
  $('.parcelas-produto').appendTo('#modal-pagamento .modal-conteudo');
  $(document).on('click', '.btn-forma-pagamento', function () {
    $('#modal-overlay, #modal-pagamento').addClass('ativo');
  });
  $(document).on('click', '.fechar-modal, #modal-overlay', function () {
    $('#modal-overlay, #modal-pagamento').removeClass('ativo');
  });

$('.produto .conteiner-imagem #abreZoom').remove();

$('.pagina-categoria .conteudo > .titulo').prepend($('.pagina-categoria .breadcrumbs'));
	$('.ordenar-listagem.topo > .row-fluid').prepend($('.pagina-categoria .conteudo > .titulo'));
	$('.ordenar-listagem .row-fluid > .span6').removeClass('span6');
	
	
	$(document).ready(function () {

    /* ======================================================
       1. CRIA BOTÃO FILTRAR
    ====================================================== */

    $('.ordenar-listagem.topo .row-fluid').append(`
        <button class="btn btn-filtrar" data-toggle="modal" data-target="#modalFiltros">
            Filtrar
        </button>
    `);


    /* ======================================================
       2. CRIA MODAL
    ====================================================== */

    $('body').append(`
        <div id="modalFiltros" class="modal fade" tabindex="-1" style="display: none;">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">

                    <div class="modal-header">
                        <h4 class="modal-title">Filtros</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="modal-body">
                        <div class="modal-ordenar">
                        	<h4>Ordenar por:</h4>
                        </div>
                        <div class="modal-filtros"></div>
                    </div>

                </div>
            </div>
        </div>
    `);


    /* ======================================================
       3. MOVE DROPDOWN ORDENAR PARA O MODAL
    ====================================================== */

    $('.ordenar-listagem.topo .dropdown-menu')
        .appendTo('#modalFiltros .modal-ordenar');


    /* ======================================================
       4. MOVE TODOS OS FILTROS PARA O MODAL
    ====================================================== */

    $('.filtro-coluna').appendTo('#modalFiltros .modal-filtros');

});

if ($(window).width() > 768) {
//Desktop
    $('.conteudo-topo .inferior').prepend($('.menu.superior'));

    $('.produto')
    .children()
    .not('.row-fluid:first')
    .appendTo('.conteiner-imagem');

    // Muda resolução das imagens

    $('.listagem .imagem-produto img').each(function () {
        var $img = $(this);
        var src = $img.attr('src');

        if (!src) return;

        // Troca 300x300 por 512x512
        var newSrc = src.replace('/300x300/', '/512x512/');

        // Só atualiza se realmente mudou
        if (newSrc !== src) {
        $img.attr('src', newSrc);

        // Se existir lazyload com data-src, atualiza também
        if ($img.attr('data-src')) {
            $img.attr('data-src', newSrc);
        }
        }
    });
    
    
    $('.mini-banner img').each(function () {
        var $img = $(this);
        var src = $img.attr('src');

        if (!src) return;

        // Troca 400x400 por 800x800
        var newSrc = src.replace('/400x400/', '/800x800/');

        if (newSrc !== src) {
        $img.attr('src', newSrc);

        // Se houver lazyload com data-src
        if ($img.attr('data-src')) {
            $img.attr('data-src', newSrc);
        }
        }
    });

    $('.pagina-produto .miniaturas img').each(function () {

        var $img = $(this);
        var src = $img.attr('src');
    
        if (!src) return;
    
        // troca SOMENTE 64x50 por 100x100
        var newSrc = src.replace('/64x50/', '/100x100/');
    
        if (newSrc !== src) {
    
            // src principal
            $img.attr('src', newSrc);
    
            // lazy load (se existir)
            if ($img.attr('data-src')) {
                $img.attr('data-src', newSrc);
            }
    
            // atributos usados pela Loja Integrada
            if ($img.attr('data-mediumimg')) {
                $img.attr(
                    'data-mediumimg',
                    $img.attr('data-mediumimg').replace('/64x50/', '/100x100/')
                );
            }
    
            if ($img.attr('data-largeimg')) {
                $img.attr(
                    'data-largeimg',
                    $img.attr('data-largeimg').replace('/64x50/', '/100x100/')
                );
            }
        }
    
    });

    $(window).on('load', function () {

        $('.compre-junto__imagem img').each(function () {
    
            var $img = $(this);
            var src = $img.attr('src');
            if (!src) return;
    
            var newSrc = src.replace('/150x150/', '/300x300/');
    
            if (newSrc !== src) {
                $img.attr('src', newSrc);
    
                if ($img.attr('data-src')) {
                    $img.attr('data-src', newSrc);
                }
            }
        });
    
    });
    

//Fim desktop
} else {
//Mobile    

//Fim mobile
}

});