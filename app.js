// app.js
import express from 'express';
import cors from 'cors';
import supplierRoute from './controllers/supplier.js';
import categoriesRoute from './controllers/categories.js';
import qualitiesRoute from './controllers/qualties.js';


const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/supplier', supplierRoute);
app.use('/api/category', categoriesRoute);
app.use('/api/quality', qualitiesRoute);


export default app;
