import express from 'express';
import destinations from './routes/destinations.routes';
import search from './routes/search.routes';
import path from 'path';
import './database/connection'

const app = express();

app.use(express.json())

app.use(destinations)
app.use(search)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.listen(3333);
