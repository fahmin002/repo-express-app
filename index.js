/* 
import express, filesystem api, dan node http server 
*/
import express from 'express';
import fs from 'fs';
import http from 'http';

/* dotenv untuk environment variable */
import 'dotenv/config';

// Menginisialisasi express
const app = express();

app.get('/', (req, res, next) => {
    res.send('<h1>Hello World from Gendeng</h1>');
})
.listen(process.env.PORT);