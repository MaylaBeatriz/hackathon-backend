import telegramIntegracao from '../integracao/telegram.integracao';
import Hackathon from '../models/hackathon.model';
import HackathonRepository from '../repositories/hackathon.repository';
import { Validador } from '../utils/validator.util';

export default class HackathonController {
  async incluir(hackathon) {
    const { nome, nota, isAprovado } = hackathon;

    Validador.validarParametro([{ nome }, { nota }]);

    const aluno = new Hackathon(nome, nota, isAprovado);
    HackathonRepository.inserir(aluno);
    const mensagem = 'Aluno inserido com sucesso';
    telegramIntegracao.sendMessage(`${mensagem} ${aluno.nome}`);
    return { mensagem, id: aluno.id };
  }

  async alterar(id, hackathon) {
    return HackathonRepository.alterar(id, hackathon);
  }

  async excluir(id) {
    return HackathonRepository.excluir(id);
  }

  obter() {}

  async listar() {
    return HackathonRepository.listar();
  }
}
