import {Router} from 'express';
import SearchController from '../controllers/SearchController';
const routes = Router();

routes.get('/search', SearchController.index);

export default routes