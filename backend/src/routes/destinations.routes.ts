import { Router } from 'express';
import DestinationsController from '../controllers/DestinationsController';

const routes = Router();

routes.post('/destinations', DestinationsController.create);
routes.get('/destinations', DestinationsController.index);
routes.get('/destinations/:id', DestinationsController.show);

export default routes;