// 1. Object
const arya = {
  first: 'Arya',
  last: 'Stark',
  origin: 'Winterfell',
  allegiance: 'House Stark',
};

// TODO: Destructure the object 'arya'

console.log(first); // <= Arya
console.log(last); // <= Stark

// 2. Nested Object
const jon = {
  first: 'Jon',
  last: 'Snow',
  title: 'Prince',
  family: {
    brothers: {
      brother1: 'Rob Stark',
      brother2: 'Rickon Stark',
    },
    sisters: {
      sister1: 'Arya Stark',
      sister2: 'Sansa Stark',
    },
  },
};

// TODO: Destructure the nested object 'jon'

console.log(brother1); // <= Rob Stark
console.log(brother2); // <= Rickon Stark

// 3. Arrays
const characters = ['Ned Stark', 'The Quiet Wolf', 'House Stark'];

// TODO: Destructure the array 'characters'

console.log(name, alias, house); // <= Ned Stark The Quiet Wolf House Stark
console.log(house); // <= House Stark

// 4. Strings
const skills = 'The Usurper, Baratheon, Cersei';

// TODO: Destructure the string 'skills'

console.log(nickname, family, spouse); // <= The Usurper Baratheon Cersei
console.log(family); // <= Baratheon

// Run 'node index.js' after destructuring to confirm the values logged in the console
