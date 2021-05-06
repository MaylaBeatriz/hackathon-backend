import { v4 } from 'uuid';

export default class Hackathon {
  constructor(nome, nota = 0, isAprovado = false) {
    this.id = v4();
    this.nome = nome;
    this.nota = nota;
    this.isAprovado = isAprovado;
  }
}
