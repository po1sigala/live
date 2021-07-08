// Data for document
const data = [
    // Using a reference to establish a relationship
    // This is similar to primary/foreign keys in MySQL
    {
     department: 'floral',
     promotion_id: 'flowers', // refers to the promotion object below
    },
    {
     promotion_id: "flowers",
     promotion: "25% off red flowers",
    },

    // Using an embedded document to create relationship


    {
    department: 'produce',
    promotion: {
      Monday: 'free banana',
      Tuesday: 'free apple',
      Wednesday: '50% off grapes',
      Thursday: '25% off pears'
      Friday: '50% off all produce',
    },
    // Embedded document
    items: [
      { name: 'apple', type: 'Granny Smith', price: 4 },
      { name: 'apple', type: 'Red Delicious', price: 2 },
      { name: 'apple', type: 'Macintosh', price: 3 },
      { name: 'pear', price: 2 },
      { name: 'banana', price: 1 },
    ],
  };




]