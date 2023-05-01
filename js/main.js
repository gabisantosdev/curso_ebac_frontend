$(document).ready(function () {

  $('#telefone').mask('(00) 00000-0000', {
    placeholder: '(00) 00000-0000'
  });

  $('#cpf').mask('000.000.000-00', {
    placeholder: '000.000.000-00'
  });

  $('#cep').mask('00000-000', {
    placeholder: '00000-000'
  });

  $('form').validate({

    rules: {
      nome: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true
      },
      cpf: {
        required: true
      },
      endereco: {
        required: true
      },
      cep: {
        required: true
      }
    },
    messages: {
      nome: '<h3 class="validate">Por favor, insira seu nome</h3>',
      email: '<h3 class="validate">Por favor, insira seu e-mail</h3>',
      telefone: '<h3 class="validate">Por favor, insira seu telefone</h3>',
      cpf: '<h3 class="validate">Por favor, insira seu CPF</h3>',
      endereco: '<h3 class="validate">Por favor, insira seu endereço completo</h3>',
      cep: '<h3 class="validate">Por favor, insira seu CEP</h3>'
    },
    submitHandler: function (form) { // executando função quando o submit é VALIDO
      limpaNome();
    },
    invalidHandler: function (evento, validador) { // executando função quando o submit é INVÁLIDO
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos!`);
      }
    }

  }),

    function limpaNome() {
      $('#nome').val('');
      $('#telefone').val('');
      $('#email').val('');
      $('#cpf').val('');
      $('#endereco').val('');
      $('#cep').val('');
    }


})