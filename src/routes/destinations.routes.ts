import { Router } from 'express';
import DestinationsController from '../controllers/DestinationsController';
import upload from '../middlewares/upload-images';

const routes = Router();

routes.post('/destinations', upload.array('images'), DestinationsController.create);
routes.get('/destinations', DestinationsController.index);
routes.get('/destinations/:id', DestinationsController.show);

export default routes;