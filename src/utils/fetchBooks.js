import { nytKey, gBooksKey } from '../../config.js';

const checkResponse = response => {
  if (response.status !== 200) {
    console.log('There was an error with the request');
    return;
  }
  return response.json();
};
//Promise.all?
export const getBooks = listName => {
  const nytUrl = 'http://api.nytimes.com/svc/books/v3/lists.json';
  const gBooksUrl = 'https://www.googleapis.com/books/v1/volumes';
  return fetch(`${nytUrl}?list-name=${listName}&api-key=${nytKey}`)
    .then(checkResponse)
    .then(res => {
      console.log(res);
      const isbns = res.results
        .map(book => {
          if (book.isbns.length > 0 && book.isbns[0].hasOwnProperty('isbn10')) {
            return book.isbns[0].isbn10;
          } else {
            return '';
          }
        })
        .filter(isbn => isbn !== '');
      let imageRequests = [];
      isbns.forEach(isbn => {
        imageRequests.push(
          fetch(`${gBooksUrl}?q=${isbn}&maxResults=1&key=${gBooksKey}`).then(
            checkResponse
          )
        );
      });
      return Promise.all(imageRequests).then(imageResponses => {
        res.images = imageResponses.map(
          item => item.items[0].volumeInfo.imageLinks.smallThumbnail
        );
        return res;
      });
    })
    .catch(() => console.log('error retrieving book data'));
};
