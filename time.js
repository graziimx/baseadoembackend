class Time {
    constructor(jogador, tecnica, cartoes, gol) {
        this.jogador = jogador;
        this.tecnica = tecnica;
        this.cartoes = cartoes;
        this.gol = gol;
    }

    apresentar() {
        console.log(`O ${this.jogador} fez ${this.gol} gols.`);
    }
}

class TimeFutebol extends Time {
    constructor(jogador, tecnica, cartoes, gol, nomeTime, tecnico) {
        super(jogador, tecnica, cartoes, gol);
        this.nomeTime = nomeTime;
        this.tecnico = tecnico;
    }

    mostrarTime() {
        console.log("Time:", this.nomeTime);
        console.log("Técnico:", this.tecnico);
        console.log("Técnica:", this.tecnica);
        console.log("Cartões:", this.cartoes);
    }
}

let time = new TimeFutebol(
    "Neymar",
    "Drible",
    2,
    3,
    "Santos",
    "Renato Gaúcho"
);

time.apresentar();
time.mostrarTime();