import express from 'express';

import ServicesController from './controllers/ServicesController';
import LotsController from './controllers/LotsController';

const routes = express.Router();
const servicesControllers = new ServicesController();
const lotsController = new LotsController();


routes.get('/services', servicesControllers.index);
routes.post('/services', servicesControllers.create);

/*routes.post('/services', (request, response) =>{
    const data = request.body;
    console.log(data)
    return response.send();
});*/


routes.get('/lots', lotsController.index);
routes.post('/lots', lotsController.create);


export default routes;