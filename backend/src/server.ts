import express from 'express';
import destinations from './routes/destinations.routes';
import './database/connection'

const app = express();

app.use(express.json())

app.use(destinations)

app.listen(3333);
