import mongoDatabase from '../database/mongo.database';
import AlunoSchema from '../schemas/aluno.schema';

const alunos = [];

class HackathonRepository {
  inserir(hackathon) {
    mongoDatabase.inserir(hackathon, AlunoSchema, 'aluno');
  }

  alterar(id, hackathon) {
    const index = alunos.findIndex((a) => a.id === id);
    const aluno = alunos[index];
    const { nome, nota } = hackathon;
    aluno.nome = nome;
    aluno.nota = nota;
    alunos[index] = aluno;
    return hackathon;
  }

  excluir(id) {
    const index = alunos.findIndex((a) => a.id === id);
    alunos.splice(index, 1);
  }

  listar() {
    return mongoDatabase.listar(AlunoSchema, 'aluno');
  }
}

export default new HackathonRepository();
