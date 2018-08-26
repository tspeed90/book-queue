import { nytKey, gBooksKey } from '../../config.js';

const checkResponse = response => {
  if (response.status !== 200) {
    console.log('There was an error with the request');
    return;
  }
  return response.json();
};

const removeUndefinedBooks = responses => {
  return responses.filter(book => {
    return book.totalItems > 0;
  });
};

export const getBooks = listName => {
  const nytUrl = 'http://api.nytimes.com/svc/books/v3/lists.json';
  const gBooksUrl = 'https://www.googleapis.com/books/v1/volumes';
  return fetch(`${nytUrl}?list-name=${listName}&api-key=${nytKey}`)
    .then(checkResponse)
    .then(res => {
      const bestSellers = res.results;
      const queries = bestSellers.map(book => {
        return encodeURIComponent(
          `intitle:${book.book_details[0].title}+inauthor:${
            book.book_details[0].author
          }`
        );
      });
      let googleBooksRequests = [];
      queries.forEach(query => {
        googleBooksRequests.push(
          fetch(`${gBooksUrl}?q=${query}&maxResults=1&key=${gBooksKey}`).then(
            checkResponse
          )
        );
      });
      return Promise.all(googleBooksRequests)
        .then(googleBooksResponses => {
          googleBooksResponses = removeUndefinedBooks(googleBooksResponses);
          return googleBooksResponses;
        })
        .then(googleBooksResponses => {
          let booksToDisplay = googleBooksResponses.map(book => ({
            title: book.items[0].volumeInfo.title,
            author: book.items[0].volumeInfo.authors.join(' & '),
            description: book.items[0].volumeInfo.description,
            pageCount: book.items[0].volumeInfo.pageCount,
            thumbnail: book.items[0].volumeInfo.imageLinks
              ? book.items[0].volumeInfo.imageLinks.smallThumbnail
              : 'http://books.google.com/books/content?id=-uQoDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
          }));
          return booksToDisplay;
        });
    })
    .catch(e => console.log('error retrieving book data', e));
};
