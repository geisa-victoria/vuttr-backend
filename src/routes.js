const express = require('express');

const routes = express.Router();
const ToolController = require('./controllers/ToolsController');

routes.get('/tools', ToolController.showAll);
routes.get('/tools/:id', ToolController.show);
routes.post('/tools', ToolController.create);
routes.put('/tools/:id', ToolController.update);
routes.delete('/tools/:id', ToolController.remove);

module.exports = routes;
