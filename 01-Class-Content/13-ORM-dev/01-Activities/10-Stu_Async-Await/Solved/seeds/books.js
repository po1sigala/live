const sequelize = require('../config/connection');
const Book = require('../models/Book');
const Library = require('../models/Library');



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

  await Library.bulkCreate([
    {
      
      name: "Phoenix Public Library",
      location: "122 N. Central Ave",
      amount_of_books: 25000,
      book_capacity: 28755,
      year_built: 1989,
      is_accessible: true
    },
    {
      
      name: "Australian National University Library",
      location: "JB Chifley Building, (Building, 15 Joplin Ln, Acton ACT 2601, Australia",
      amount_of_books: 30000,
      book_capacity: 34650,
      year_built: 1948,
      is_accessible: true
    },
    {
      
      name: "Calgary Public Library",
      location: "800 3 St SE, Calgary, AB T2G 2E7, Canada",
      amount_of_books: 1200000,
      book_capacity: 1500000,
      year_built: 1912,
      is_accessible: true
    },
    {
      
      name: "Cory Library for Historical Research",
      location: "Lucas Ave, Grahamstown, 6139, South Africa",
      amount_of_books: 45000,
      book_capacity: 50000,
      year_built: 1933,
      is_accessible: true
    },
    {
      
      name: "Imperial College Central Library",
      location: "Imperial College London, South Kensington Campus, London SW7 2AZ, United Kingdom",
      amount_of_books: 85000,
      book_capacity: 100000,
      year_built: 1969,
      is_accessible: true
    },
  ])

  

  process.exit(0);
};

seedDatabase();
