// app.js
import express from 'express';
import cors from 'cors';
import supplierRoute from './controllers/supplier.js';


const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/supplier', supplierRoute);


export default app;
