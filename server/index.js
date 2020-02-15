require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const {SERVER_PORT} = process.env

//middelwares
app.use(express.json());


app.listen(SERVER_PORT, () => console.log(`Servin' up some 🔥 🔥 🔥 on port ${SERVER_PORT}`));