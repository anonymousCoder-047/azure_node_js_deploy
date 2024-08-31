
const { NODE_ENV } = require('./config/config');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const http = require('http');
const path = require('path');


// initializing express class
const app = express();

// middlewares
app.use(helmet());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors('*'))


if(NODE_ENV !== 'prod') {
    morgan('tiny')
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./front-end/build/index.html"))
})

app.get('/test', (req, res) => {
    res.json({ "status": "200", "content": "testing REST API" });
})

// explicitly creating a HTTP server from express object
const server = http.createServer(app);

module.exports = server;