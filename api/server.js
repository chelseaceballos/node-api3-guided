const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');
const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

server.use(express.json()); // req.body {}
server.use(helmet({}))
server.use('/api/hubs', hubsRouter);

server.get('/', (req, res, next) => {
  res.send(`
    <h2>web 44 is da best!!!</h2>
    <p>Welcome to the web 44 is da best!!!</p>
  `);
});

server.use('*', (req, res, next) => {
  // catch all, 404 error middleware
  // calling 'next' with an argument sends the argument
  // to the error-handling middleware below
  console.log(`hitting ${req.method} ${req.baseUrl}`);
  next({ status: 404, message: 'not found' }); // this object becomes the "err" in the midd below
});

server.use((err, req, res, next) => { // error handling middleware
  // when someone else before calls next pasing an arg,
  // this thing shoots back a response to the client if anything goes wrong
  // in ANY of the middlewares that preceed this one
  res.status(err.status || 500).json({ message: `HORROR: ${err.message}` });
});

module.exports = server;
