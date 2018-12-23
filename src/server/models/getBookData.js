require('env2')('.env');
const { Book } = require('./sequelize.js');

const fetch = require('node-fetch');

const checkResponse = response => {
  if (response.status !== 200) {
    console.log('There was an error with the request');
    return;
  }
  return response.json();
};

const getBestSellers = listName => {
  const nytUrl = 'http://api.nytimes.com/svc/books/v3/lists.json';

  return fetch(`${nytUrl}?list-name=${listName}&api-key=${process.env.NYT_KEY}`)
    .then(checkResponse)
    .then(res => res.results);
};

const filterBookResponse = async (books, genreId) => {
  const dbBooksInGenre = await Book.findAll({
    where: {
      genreId: genreId
    }
  });
  return books.filter(book => {
    for (let i = 0; i < dbBooksInGenre.length; i++) {
      if (
        dbBooksInGenre[i].title === book.book_details.title &&
        dbBooksInGenre[i].author === book.book_details.author
      ) {
        return false;
      }
    }
    return true;
  });
};

const getBookInfo = (title, author) => {
  const gBooksUrl = 'https://www.googleapis.com/books/v1/volumes';
  const query = encodeURIComponent(`intitle:${title}+inauthor:${author}`);

  return fetch(
    `${gBooksUrl}?q=${query}&maxResults=1&key=${process.env.GOOGLE_BOOKS_KEY}`
  )
    .then(checkResponse)
    .then(book =>
      book.totalItems === 0
        ? undefined
        : {
            title: book.items[0].volumeInfo.title,
            author: book.items[0].volumeInfo.authors.join(' & '),
            description: book.items[0].volumeInfo.description,
            pageCount: book.items[0].volumeInfo.pageCount,
            thumbnail: book.items[0].volumeInfo.imageLinks
              ? book.items[0].volumeInfo.imageLinks.smallThumbnail
              : 'http://books.google.com/books/content?id=-uQoDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
          }
    )
    .catch(e => console.log('error retrieving book data', e));
};

module.exports = { getBestSellers, filterBookResponse, getBookInfo };
