import router from "./routes";
import cors from 'cors';
const express = require('express');


const app = express();
app.use(express.json());
app.use(cors());

app.use(router);
app.listen('4000', () => 'App rodando na porta 4000');

