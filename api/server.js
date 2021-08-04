const express = require('express'); // importing a CommonJS module

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

server.use(express.json());

server.use('/api/hubs', hubsRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>web 44 is da best!!!</h2>
    <p>Welcome to the web 44 is da best!!!</p>
  `);
});

server.use('*', (req, res, next) => {

});

module.exports = server;
