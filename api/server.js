// implement your server here
// require your posts router and connect it here
const express = require('express')

const server = express();

const postsRouter = require('./posts/posts-router')

server.use(express.json()); // ********teaches express to read req.body as JSON*****

server.use('/api/posts', postsRouter)

server.get('*', (req, res) => {
    res.send(`
      <h2>Lambda Posts API</h>
    `);
  });
  
module.exports = server;

