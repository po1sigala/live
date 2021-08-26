const { connect, connection } = require('mongoose');

connect('mongodb://localhost/fullnameVirtual', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = connection;
