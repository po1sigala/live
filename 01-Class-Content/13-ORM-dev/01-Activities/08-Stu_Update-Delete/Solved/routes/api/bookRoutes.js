const router = require('express').Router();
const Book = require('../../models/Book');

// Updates book based on its book_id
router.put('/:book_id', (req, res) => {
  //Calls the update method on the Book model
  Book.update(
    {
      // All the fields you can update and the data attached to the req.body.
      title: req.body.title,
      author: req.body.author,
      isbn: req.body.isbn,
      pages: req.body.pages,
      edition: req.body.edition,
      is_paperback: req.body.is_paperback,
    },
    {
      // Gets the books based book_id given in the req.params
      where: {
        book_id: req.params.book_id,
      },
    }
  )
    .then((dbPostData) => {
      // If the book doesn't exist throw an error status with a message attached
      if (!dbPostData) {
        res.status(400).json({ message: 'A book with this ID was not found' });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


// Delete route for a book with a matching book_id
router.delete('/:book_id', (req, res) => {
  // Looks the the books based book_id given in the req.params
  const bookData = Book.destroy({
    where: {
      book_id: req.params.book_id,
    },
  })
    .then((dbPostData) => {
      // If the book doesn't exist throw an error status with a message attached
      if (!dbPostData) {
        res.status(404).json({ message: 'A book with this ID was not found' });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => res.status(500).json(err));

  res.status(200).json(bookData);
});

router.post('/seed', (req, res) => {
  Book.bulkCreate([
    {
      title: 'Make It Stick: The Science of Successful Learning',
      author: 'Peter Brown',
      isbn: '9780674729018',
      pages: 336,
      edition: 1,
      is_paperback: false,
    },
    {
      title:
        'Essential Scrum: A Practical Guide to the Most Popular Agile Process',
      author: 'Kenneth Rubin',
      isbn: '9780137043293',
      pages: 500,
      edition: 1,
      is_paperback: true,
    },
    {
      title:
        "White Fragility: Why It's So Hard for White People to Talk About Racism",
      author: 'Robin DiAngelo',
      isbn: '9780807047415',
      pages: 192,
      edition: 2,
      is_paperback: true,
    },
    {
      title: 'The Pragmatic Programmer: Your Journey To Mastery',
      author: 'David Thomas',
      isbn: '9780135957059',
      pages: 352,
      edition: 2,
      is_paperback: false,
    },
    {
      title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms',
      author: 'Donald Knuth',
      isbn: '9780201896831',
      pages: 672,
      edition: 3,
      is_paperback: false,
    },
    {
      title: 'Algorithms of Oppression: How Search Engines Reinforce Racism',
      author: 'Safiya Umoja Noble',
      isbn: '9781479837243',
      pages: 256,
      edition: 1,
      is_paperback: true,
    },
  ]).then(() => {
    res.send('Seeding Success!')
  });
});

module.exports = router;
