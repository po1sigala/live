const express = require('express');
const path = require('path');
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET request for reviews
app.get('/api/reviews', (req, res) => {
  // Send a message to the client
  res.json(`${req.method} request received to get reviews`);

  // Log our request to the terminal
  console.info(`${req.method} request received to get reviews`);
});

// GET request for a single review
app.get('/api/reviews/:review_id', (req, res) => {
  if (req.body && req.params.review_id) {
    console.info(`${req.method} request received to get a single a review`);
    const reviewId = req.params.review_id;
    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];
      if (currentReview.review_id === reviewId) {
        res.json(currentReview);
        return;
      }
    }
    res.json('Review ID not found');
  }
});

// POST request to add a review
app.post('/api/reviews', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  // TODO: Add a comment describing the functionality of following line of code:
  const { product, review, username } = req.body;

  // TODO: Add a comment describing why we would check to see if the following properties exist before entering the code block
  if (product && review && username) {
    // Variable for the object we will save
    const newReview = {
      product,
      review,
      username,
      upvotes: Math.floor(Math.random() * 201) - 100,
      review_id: uuid(),
    };

    const response = {
      status: 'success',
      body: newReview,
    };

    console.log(response);

    // TODO: Add a comment explaining the functionality of res.json()

    res.json(response);
  } else {
    // TODO: Add a comment describing the purpose of the else statement in this POST request.
    res.json('Error in posting review');
  }
});

// GET request for upvotes
app.get('/api/upvotes/:review_id', (req, res) => {
  fs.readFile(path.join(__dirname, '/public/reviews.json'), (err, data) => {
    if (err) {
      res.json(err);
    } else {
      const reviews = JSON.parse(data);
      for (let i = 0; i < reviews.length; i++) {
        const currentReview = reviews[i];
        if (currentReview.review_id === req.params.review_id) {
          res.json({
            message: `The review with ID ${currentReview.review_id} has ${currentReview.upvotes}`,
            upvotes: currentReview.upvotes,
          });
          return;
        }
      }
      res.json('Review ID not found');
    }
  });
});

// POST request to upvote a review
app.post('/api/upvotes/:review_id', (req, res) => {
  if (req.body && req.params.review_id) {
    console.info(`${req.method} request received to upvote a review`);
    const reviewId = req.params.review_id;
    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];
      if (currentReview.review_id === reviewId) {
        currentReview.upvotes += 1;
<<<<<<< HEAD
        res.json(`New upvote count is: ${currentReview.upvotes}!`);
=======
        res.json(`Review for ${currentReview.product} has been upvoted!`);
>>>>>>> aa9a59869f39ef8e08434e7cb0365c627c2abffb
        return;
      }
    }
    res.json('Review ID not found');
  }
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
