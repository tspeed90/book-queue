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
      const queries = res.results.map(book => {
        return encodeURIComponent(
          `intitle:${book.book_details[0].title}+inauthor:${
            book.book_details[0].author
          }`
        );
      });
      let imageRequests = [];
      queries.forEach(query => {
        imageRequests.push(
          fetch(`${gBooksUrl}?q=${query}&maxResults=1&key=${gBooksKey}`).then(
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
