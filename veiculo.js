class veiculo {
    constructor(marca) {
        this.marca = marca;
    }
    buzinar(){
        console.log("Bibiiiii!");
    }
}

//criando a relação de herança
class Civic extends veiculo {
    constructor(marca, qportas) {
        super(marca); //SUPER chama o constructor da classe pai (veiculo)
        this.qportas = qportas;
    }
};

const meuVeiculo = new Veiculo("Ford");
console.log("Marca do veiculo:", meuVeiculo.marca);
meuVeiculo.buzinar();

console.log("---Testando o carro---");
console.log("Marca de carro: ", meuVeiculo.marca);
console.log("quantidades de portas: ", meuCarro.quantidadePortas);
meuCarro.buzinar();