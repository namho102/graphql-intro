// server.js
import express from 'express';

let app  = express();
let PORT = 3000;

app.post('/graphql', (req, res) => {
  res.send('Hello from the other side!');
});

let server = app.listen(PORT, function () {
  let host = server.address().address;

  let port = server.address().port;

  console.log('GraphQL listening at port %s', port);
});