const express = require('express');
const routes = express.Router();
const ToolController = require('./controllers/ToolsController');

routes.get('/tools', ToolController.index);

module.exports = routes;
