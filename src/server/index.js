const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) =>
  res.send({ username: os.userInfo().username })
);

const port = process.env.port || 8080;
app.listen(port, () => console.log('listening on http://localhost:8080'));
