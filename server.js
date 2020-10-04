const express = require ('express');
const bodyparser = require ('body-parser');
const app = express();

//parse  application /json
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

//server listening 
const Port = process.env.Port || 2000;
app.listen(Port, () => console.log('server running in port 2000'));