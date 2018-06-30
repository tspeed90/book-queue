import { apiKey } from '../../config.js';

const checkResponse = response => {
  if (response.status !== 200) {
    console.log('There was an error with the request');
    return;
  }
  return response.json();
};

export const getBooks = listName => {
  const url = 'http://api.nytimes.com/svc/books/v3/lists.json';
  return fetch(`${url}?list-name=${listName}&api-key=${apiKey}`)
    .then(checkResponse)
    .catch(() => console.log('error retrieving book data'));
};
