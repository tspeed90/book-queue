const express = require('express');
const path = require('path');

const { getBooks } = require('./utils/fetchBooks');

const app = express();

app.use(express.static('dist'));
app.use('/public', express.static('public'));
app.get('/api/getBooks', (req, res) =>
  getBooks(req.query.genre).then(books => res.send(books))
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'))
);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('listening on http://localhost:8080'));
