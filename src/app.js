import cors from 'cors';
import express from 'express';
import logger from 'morgan';
import mongoDatabase from './database/mongo.database';
import telegramIntegracao from './integracao/telegram.integracao';
import AulaRouter from './routes/aula.route';
import HackhatonRouter from './routes/hackathon.route';

class App {
  constructor() {
    this.app = express();
    this.database();
    this.integracaoTelegram();
    this.initMiddleware();
    this.routes();
    this.endMiddleware();
  }

  integracaoTelegram() {
    telegramIntegracao.on();
  }

  initMiddleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(logger('dev', {}));
  }

  routes() {
    this.app.use('/stefanini', HackhatonRouter);
    this.app.use('/stefanini', AulaRouter);
  }

  endMiddleware() {
    this.app.use((err, req, res, next) => {
      if (err) {
        res.status(400).json({
          mensagem: err.message,
          status: 400,
        });
      }

      next();
    });
  }

  database() {
    mongoDatabase.connect().then((r) => console.log('Conectou com sucesso'));
  }
}

export default new App().app;
