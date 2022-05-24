const mongoose = require('mongoose');
var db = require('../database.js');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nome: { type: String },
  descricao: { type: String },
  usuario: { type: String, unique: true},
  senha: { type: String },
  email: {type: String }
}, {
  timestamps: true,
}, { collection : 'Usuarios' });

const Instituicao = mongoose.model('Usuarios', usuarioSchema);

module.exports = Instituicao;