require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller/controller')

//middelwares
app.use(express.json());

massive(CONNECTION_STRING)
.then(db => {
    app.set("db", db)
    console.log('connected to db')
});

// listeners-endpoints
app.get('/api/homes', ctrl.getHomes)

app.listen(SERVER_PORT, () => console.log(`Servin' up some 🔥 🔥 🔥 on port ${SERVER_PORT}`));