const form = document.getElementById('comparar-numeros');
const numberA = document.getElementById('number-a');
const numberB = document.getElementById('number-b');
const menssagem = document.getElementById('mensagem-aviso');

function validacao() {
  if (numberB.value > numberA.value) {
    console.log('Validação valida');
    document.querySelector('#mensagem-aviso').style.display = 'block';
    document.querySelector('#mensagem-aviso').style.backgroundColor = 'green';
    menssagem.innerHTML = 'COMPARAÇÃO VÁLIDA!';
  } else {
    console.log('Validação falsa');
    document.querySelector('#mensagem-aviso').style.display = 'block';
    document.querySelector('#mensagem-aviso').style.backgroundColor = 'red';
    menssagem.innerHTML = 'COMPARAÇÃO INVÁLIDA!';
  }

  numberA.value = ' ';
  numberB.value = ' ';
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  validacao()
})