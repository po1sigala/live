// Dependencies
// =============================================================
const express = require('express');
const exphbs = require('express-handlebars');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
app.use(require('./controllers/api/dish-routes'));

  

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });