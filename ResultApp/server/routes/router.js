const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root Route
 * @method get
 */
route.get('/',services.homeRoutes);

/**
 * @description Add student
 * @method get/add-result
 */
route.get('/add-result',services.add_result);

/**
 * @description Update student
 * @method get/update-result
 */
route.get('/update-result',services.update_result);

//API
route.post('/api/results',controller.create);
route.get('/api/results',controller.find);
route.put('/api/results/:id',controller.update);
route.delete('/api/results/:id',controller.delete);

module.exports = route
