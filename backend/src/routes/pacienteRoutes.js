const express = require('express');
const mongoose = require('mongoose');

const pacientes = require('./../controllers/pacienteController');

const routes = express.Router();

routes.route('/buscaQuantidades').get(pacientes.buscaQuantidade);

routes.route('/buscaAniversarios').get(pacientes.buscaAniversariantes);

routes.route('/:nome?').post(pacientes.checkEmail, pacientes.checkTelefone, pacientes.cadastroPaciente).get(pacientes.buscarPacientes);

routes.route('/:pacienteId').get(pacientes.getPaciente).patch(pacientes.updatePaciente);

module.exports = routes;
