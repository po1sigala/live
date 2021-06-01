const { connect, connection } = require('mongoose');

connect('mongodb://localhost/studentstats', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = connection;
