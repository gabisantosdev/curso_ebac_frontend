function Pessoa(nome) {
  this.nome = nome;
}

function Dev() {
  let _salario = 0;

  this.setInfo = function (nome, cargo, valor) {
    this.cargo = cargo;
    const novoSalario = valor;
    if (typeof novoSalario === "number") {
      _salario = novoSalario;
    }
    Pessoa.call(this, nome);
  };

  this.getInfo = function () {
    console.log(
      `Nome: ${this.nome} | Cargo: ${this.cargo} | Salário: ${_salario}`
    );
  };
}

const dev1 = new Dev();
const dev2 = new Dev();
const dev3 = new Dev();

dev1.setInfo("Tadeu", "Dev Pleno", 8000);
dev1.getInfo();

dev2.setInfo("Gabi", "Dev Jr.", 3000);
dev2.getInfo();

dev3.setInfo("Leiro", "Gerente", 6000);
dev3.getInfo();
