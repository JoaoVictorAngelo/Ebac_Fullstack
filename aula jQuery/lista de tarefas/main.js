$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const tarefa = $('#tarefa').val();
        const novaTarefa = $('<li></li>');

        novaTarefa.text(tarefa); // Define o texto do novo item da lista
        $('ul').append(novaTarefa); // Adiciona o novo item à lista
        $('#tarefa').val(''); // Limpa o campo de entrada
    });

    $('button[type="reset"]').on('click', function(){
        $('ul').empty()
        $('#tarefa').val('')
    })

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('risco');
    });
});
