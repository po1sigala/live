// TODO: Import the parent class

// TODO: Create a `Car` class that extends the `Vehicle` class
// including the properties of the `Vehicle` class, as well as
// a `color` property, `passengers` property, `useHorn()` method, `checkPassengers()` method

const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
