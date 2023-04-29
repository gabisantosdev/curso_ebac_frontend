$(document).ready(function () {
  //Cancelando o reset da página
  $('form').on('submit', function (e) {
    e.preventDefault();

    const nomeDaTarefa = $('#nome-da-tarefa').val();
    const novaTarefa = $('<li></li>');
    $(`<p>${nomeDaTarefa}</p>`).appendTo(novaTarefa);
    $(novaTarefa).appendTo('ul');

    $('#nome-da-tarefa').val('');

    $('li').click(function () {
      $(this).addClass('item-completado');
    });

  })

})