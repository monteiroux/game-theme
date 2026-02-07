$(document).ready(function(){

// Ajustes gerais

$('#cabecalho .conteudo-topo .inferior .span8.busca-mobile').after(`
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

// Variáveis editáveis para as informações do atendimento
var atendimentoTitulo = "Atendimento";
var horariosAtendimento = [
    "Segunda a sexta: 11:30 ás 22:00h",
    "Sabado: 10:00h ás 18:00h",
    "Domingo e Feriado: Fechado"
];
var whatsapp = {
    icon: "https://cdn.awsli.com.br/2923/2923109/arquivos/whatsapp-branco.svg",
    alt: "Whatsapp",
    number: "(11) 98765-4321"
};
var email = {
    icon: "https://cdn.awsli.com.br/2923/2923109/arquivos/email-branco.svg",
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
$('#listagemProdutos').before(`
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

if ($(window).width() > 768) {
//Desktop
    $('.conteudo-topo .inferior').prepend($('.menu.superior'));

    $('.produto')
    .children()
    .not('.row-fluid:first')
    .appendTo('.conteiner-imagem');
//Fim desktop
} else {
//Mobile    

//Fim mobile
}

});