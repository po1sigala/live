// simple express server
const express = require('express');

const app = express();
const port = 3000;

// serve static files
app.use(express.static('public'));

// serve index.html and index.js
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
