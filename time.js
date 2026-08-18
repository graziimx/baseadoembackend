class Time {
constructor(jogador, tecnica, cartoes, gol) {
this.jogador = jogador;
this.tecnica = tecnica;
this.cartoes = cartoes;
this.gol = gol;
}

apresentar() {
console.log(`O ${this.jogador} fez
${this.gol}`);
}
}

class timefutebol extends Time {
constructor(jogador, tecnicas, cartoes, gol) {
super(jogador, tecnicas, cartoes, gol);
}
}

mostrarTime() {
console.log("time:",meutime Santos `${this.nomeTime}`);
console.log("tecnica:",meutecnico Renato Gaucho `${this.tecnicas}`);
}
let time = new timeFutebol(
“Neymar”,
“Renato Gaucho”,
2,
3,
“Santos”,
);

time.apresentar();
time.mostrarTime();