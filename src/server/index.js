const express = require('express');
const path = require('path');

const { getBooks } = require('./utils/fetchBooks');
const { User } = require('../server/models/sequelize.js');

const app = express();

app.use(express.static('dist'));
app.use('/public', express.static('public'));
app.get('/api/getBooks', (req, res) =>
  getBooks(req.query.genre).then(books => res.send(books))
);
app.get('/api/users', (req, res) => {
  User.create({
    username: 'JohnHancock',
    password: 'JHancock123',
    email_address: 'jhancock@gmail.com',
    name: 'John'
  })
    // expect error to be thrown for now due to entering the same data each time and having a unique constraint
    .catch(err => {})
    .then(() => User.findAll().then(users => res.json(users)))
    .catch(err => console.log(err));
});

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'))
);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('listening on http://localhost:8080'));
