# BookQueue (WIP)

The current, unfinished project can be found [here](https://book-queue.herokuapp.com)

## Description

BookQueue is an application allowing users to find popular books by category and save them to their shelf for future reading. Upon completion of a book, users can mark shelved books as read and they will be moved to a "Finished Reading" shelf.

## Running BookQueue locally

**To run locally, this project requires Node installed on your device**  
This project uses Node 9.5.0

> $ git clone https://github.com/tspeed90/book-queue.git  
> $ npm i  
> $ npm run dev // for development (uses Webpack dev server)  
> $ npm start // for production (runs build script & uses Express server)

## Tech used

Node.js/Express server  
Built in React  
State managed with Redux  
Bundled with Webpack  
Routing with [Reach Router](https://reach.tech/router)  
Styled Components  
APIs: [NYT Books API](https://developer.nytimes.com/books_api.json) & [Google Books API](https://developers.google.com/books/docs/overview)

_Not yet added:_  
Postgres database w/ Sequelize

## Process

**Figma designs:**  
<img src="https://res.cloudinary.com/dp6beg5nw/image/upload/v1535407087/bookQueue_zjp240.png" width="700px">

**Database schema**  
<img src="https://res.cloudinary.com/dp6beg5nw/image/upload/v1537735805/BookQueue_c4tg59.png" width="700px">
