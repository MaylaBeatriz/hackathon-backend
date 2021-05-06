import { Schema } from 'mongoose';

class AlunoSchema {
  constructor() {
    this.schema = new Schema({
      id: {
        type: String,
        require: true,
      },
      nome: {
        type: String,
        require: true,
      },
      nota: {
        type: Number,
        require: true,
      },
      isAprovado: {
        type: Boolean,
        default: false,
      },
    });
  }
}

export default new AlunoSchema().schema;
