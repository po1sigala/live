const sequelize = require('../config/connection');
const Book = require('../models/Book');



const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    
    await Book.bulkCreate([
      {
        title: 'Make It Stick: The Science of Successful Learning',
        author: 'Peter Brown',
        isbn: "9780674729018",
        pages: 336,
        edition: 1,
        is_paperback: false,
      },
      {
        title:
          'Essential Scrum: A Practical Guide to the Most Popular Agile Process',
        author: 'Kenneth Rubin',
        isbn: "9780137043293",
        pages: 500,
        edition: 1,
        is_paperback: true,
      },
      {
        title:
          "White Fragility: Why It's So Hard for White People to Talk About Racism",
        author: 'Robin DiAngelo',
        isbn: "9780807047415",
        pages: 192,
        edition: 2,
        is_paperback: true,
      },
      {
        title: 'The Pragmatic Programmer: Your Journey To Mastery',
        author: 'David Thomas',
        isbn: "9780135957059",
        pages: 352,
        edition: 2,
        is_paperback: false,
      },
      {
        title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms',
        author: 'Donald Knuth',
        isbn: "9780201896831",
        pages: 672,
        edition: 3,
        is_paperback: false,
      },
      {
        title: 'Algorithms of Oppression: How Search Engines Reinforce Racism',
        author: 'Safiya Umoja Noble',
        isbn: "9781479837243",
        pages: 256,
        edition: 1,
        is_paperback: true,
      },
    ]);
  
};

seedDatabase();
