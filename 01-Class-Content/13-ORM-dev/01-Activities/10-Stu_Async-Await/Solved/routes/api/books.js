const router = require('express').Router();
const { Book } = require('../../models/Book');



router.get('/:book_id',  (req, res) => {
  const bookData = Book.findByPk(req.params.book_id, {
    where: {
        book_id: req.params.book_id
    }
  }).then(book => {
      book.title = "The Giver",
      book.author = "Lois Lowery",
      book.isPaperBack = true
      return book.save()
  }).catch((err) => res.status(500).json(err));

  res.status(200).json(bookData);
});

router.delete('/:book_id', (req, res) => {
  const bookData = Book.destroy({
    where: {
      book_id: req.params.book_id
    }
  }).catch((err) => res.status(500).json(err));

  res.status(200).json(bookData);
});

module.exports = router;