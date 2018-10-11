const Sequelize = require('sequelize');
require('env2')('.env');

const url = require('url');
const params = url.parse(process.env.DB_URL);
const [username, password] = params.auth.split(':');
const databaseName = params.pathname.split('/')[1];

const sequelize = new Sequelize(databaseName, username, password, {
  dialect: 'postgres',
  port: params.port
});

sequelize.authenticate().then(
  function(err) {
    console.log('Connection has been established successfully.');
  },
  function(err) {
    console.log('Unable to connect to the database:', err);
  }
);

let User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email_address: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

let Book = sequelize.define('book', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING(1234),
    allowNull: false
  },
  page_count: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  thumbnail_url: Sequelize.STRING
});

User.sync();
Book.sync();

module.exports = { User, Book };
