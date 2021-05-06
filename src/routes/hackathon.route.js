import express from 'express';
import HackathonController from '../controllers/hackathon.controller';

const router = express.Router();

router.get('/hackathons', async (req, res, next) => {
  const listaAlunos = await new HackathonController().listar();
  res.json(listaAlunos);
});

router.post('/hackathons', async (req, res, next) => {
  try {
    const response = await new HackathonController().incluir(req.body);
    res.json(response);
  } catch (err) {
    next(err);
  }
});

router.put('/hackathons/:id', (req, res, next) => {
  new HackathonController().alterar(req.params.id, req.body).then(
    (aluno) => {
      res.json(aluno);
    },
    (err) => {
      next(err);
    },
  );
});

router.delete('/hackathons/:id', (req, res, next) => {
  new HackathonController().excluir(req.params.id).then(
    (aluno) => {
      res.json(aluno);
    },
    (err) => {
      next(err);
    },
  );
});

export default router;
