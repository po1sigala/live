// TODO: Import the parent class

// TODO: Create a `Boat` class that extends the `Vehicle` class
// including the properties of the `Vehicle` class, as well as
// a `type` property, `crew` property, `useHorn()` method, `crewSoundOff()` method

const boatPassengers = [
  'Blackbeard',
  'Mary Read',
  'Henry Morgan',
  'Madame Cheng',
];

const boat = new Boat(16, 'sailboat', boatPassengers);

console.log('---BOAT---');
boat.printInfo();
boat.useHorn();
boat.crewSoundOff();
