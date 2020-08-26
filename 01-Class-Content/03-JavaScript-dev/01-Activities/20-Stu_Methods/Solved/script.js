
var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "SaTurn", "Mars", "Jupiter", "Uranus", "Venus"];

// The unshift method adds an element to the beginning of the array and returns the length
console.log(constellations.unshift("Canis Major"));

// The pop method removes the last element from an array and returns the element 
console.log(planets.pop());
// The original array is changed
console.log(planets);

//The concat method joins constellations and planets array and returns new array
var galaxy = constellations.concat(planets);
//The galaxy and planet arrays are unchanged
console.log(planets);
console.log(constellations);

// Replace string method searches a string for a value "T" and replaces first instance of it with "t"
galaxy[7] = galaxy[7].replace("T","t");
console.log(galaxy);
