class veiculo {
    constructor(marca) {
        this.marca = marca;
    }
    buzinar() {
        console.log ("bibii!");
    }
}

//Criando a relação de herança
class porsh extends veiculo {
    constructor (marca, qPostas) {
        super(marca); //SUPER chama o constructor da classe pai(Veiculo) 
        this.qPortas = qPortas;
    }
};

const meuVeiculo = new Veiculo("Ford");
console.log ("Marca do veiculo: ",meuVeiculo.marca);
meuVeiculo.buzinar();

const meuCarro =n new veiculo("Fiat, 4")
console.log("--- Testando o carro ---")
console.log("Marca do carro: ", meuVeiculo.marca);
console.log("Quantidade de portas: ", meuCarro.quantidadedePortas);
meuCarro.buzinar();