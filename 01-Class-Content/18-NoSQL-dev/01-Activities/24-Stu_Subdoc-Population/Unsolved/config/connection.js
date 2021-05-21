const { connect, connection } = require('mongoose');

connect('mongodb://localhost/postsTags223', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = connection;
