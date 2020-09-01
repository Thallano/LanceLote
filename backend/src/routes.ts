import express from 'express';

import ServicesController from './controllers/ServicesController';
import LotsController from './controllers/LotsController';

import ServicesListController from './controllers/ServicesListController';
import UserController from './controllers/UserController';

const routes = express.Router();
const servicesControllers = new ServicesController();
const lotsController = new LotsController();
const servicesListController = new ServicesListController();
const userController = new UserController();


routes.get('/listservices', servicesListController.list);
routes.get('/listservicesbyuser', servicesListController.listbyuser);

routes.get('/services', servicesControllers.index);
routes.post('/services', servicesControllers.createService);
routes.delete('/services', servicesControllers.deleteService);

routes.get('/users', userController.login);
routes.post('/users', userController.createUser);

routes.get('/lots', lotsController.index);
routes.post('/lots', lotsController.create);


export default routes;