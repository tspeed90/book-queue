const express = require('express');

const { getBooks } = require('./utils/fetchBooks');

const app = express();

app.use(express.static('dist'));
app.get('/api/getBooks', (req, res) =>
  getBooks(req.query.genre).then(books => res.send(books))
);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('listening on http://localhost:8080'));
