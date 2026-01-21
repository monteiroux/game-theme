$(document).ready(function(){

$('#cabecalho .conteudo-topo .inferior .span8.busca-mobile').after(`
    <div class="h-actions">
        <div class="h-user">
            <img src="https://cdn.awsli.com.br/2923/2923109/arquivos/user.svg" alt="Minha conta">
            <span>Entrar</span>
        </div>

        <div class="h-search visible-phone">
            <img src="https://cdn.awsli.com.br/2923/2923109/arquivos/search.svg" alt="Buscar">
        </div>

        <div class="h-menu visible-phone">
            <img src="https://cdn.awsli.com.br/2923/2923109/arquivos/menu.svg" alt="Menu">
        </div>
    </div>
`);


if ($(window).width() > 768) {
//Desktop
    $('.conteudo-topo .inferior').prepend($('.menu.superior'));
//Fim desktop
} else {
//Mobile    

//Fim mobile
}

});