const express = require('express');
const path = require('path');

const { getBooks } = require('./models/getBookData');
const {
  User,
  Book,
  UserBooks,
  Genre
} = require('../server/models/sequelize.js');
const { genreList } = require('./models/genres');

const app = express();

app.use(express.static('dist'));
app.use('/public', express.static('public'));
app.get('/api/getBooks', (req, res) => {
  const { genre } = req.query;
  Genre.findAll({
    where: { encoded_name: genre },
    include: [
      {
        model: Book
      }
    ]
  }).then(genres => res.json(genres[0].books));
});

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

app.get('/api/triggerBookSync', async (req, res) => {
  let genres = await Genre.findAll();
  if (genres.length === 0) {
    await Promise.all(
      genreList.results.map(genre =>
        Genre.create({
          name: genre.list_name,
          encoded_name: genre.list_name_encoded
        })
      )
    );
  }

  let genre = await Genre.find({ where: { encoded_name: req.query.genre } });

  let books = await getBooks(genre.encoded_name);

  await Promise.all(
    books.map(book =>
      Book.create({
        title: book.title,
        author: book.author,
        description: book.description,
        page_count: book.pageCount,
        thumbnail_url: book.thumbnail,
        genreId: genre.id
      })
    )
  );

  res.end();
});

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'))
);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('listening on http://localhost:8080'));
