$(document).ready(function() { // cod. de teste do jQuery, que funciona pelo $ e pelos (), falamos que quando o doc estiver pronto, ele executa esse alert
    $('header button').click(function() {
        $('form').slideDown();
    })
    
    $('#btn-cancel').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-nova-imagem').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoItem); //appendTo pega o primeiro elemento e coloca no li
        $(`
            <div class="overlay-image-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>        
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-nova-imagem').val('');
    })
})