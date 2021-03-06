const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const RateLimiter = require('limiter').RateLimiter;

const {
  getBestSellers,
  getBookInfo,
  filterBookResponse
} = require('./models/getBookData');
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
app.use(bodyParser.json());
app.get('/api/getBooks', (req, res) => {
  const { genre } = req.query;
  Genre.findAll({
    where: { encoded_name: genre },
    include: [
      {
        model: Book
      }
    ]
  })
    .then(genres => res.json(genres[0].books))
    .catch(err => console.log(err));
});

app.post('/api/addToShelf', (req, res) => {
  UserBooks.findAll({
    where: { bookId: req.body.id }
  }).then(res => {
    if (res.length < 1) {
      UserBooks.create({
        shelf_type: 'TO_READ',
        userId: 2,
        bookId: req.body.id
      });
    }
  });
  res.end();
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

app.get('/api/shelf', (req, res) => {
  User.findAll({
    where: { id: 2 },
    include: [
      {
        model: Book
      }
    ]
  }).then(books => res.json(books[0].books));
});

app.get('/api/triggerBookSync', async (req, res) => {
  const limiter = new RateLimiter(5, 'minute');
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
    genres = await Genre.findAll();
  }

  await Promise.all(
    genres.map(genre => {
      limiter.removeTokens(1, () => {
        getBestSellers(genre.encoded_name)
          .then(books => filterBookResponse(books, genre.id))
          .then(books =>
            books.forEach(async bookResult => {
              let book = await getBookInfo(
                bookResult.book_details[0].title,
                bookResult.book_details[0].author
              );
              if (book == undefined) return;
              Book.create({
                title: book.title,
                author: book.author,
                description: book.description,
                page_count: book.pageCount,
                thumbnail_url: book.thumbnail,
                genreId: genre.id
              });
            })
          );
      });
    })
  );

  res.redirect('/');
  res.end();
});

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'))
);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('listening on http://localhost:8080'));
