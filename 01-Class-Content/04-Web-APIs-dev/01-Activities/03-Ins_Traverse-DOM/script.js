console.log("Document Body: ")
console.log(document.body);

console.log("Children of Document Body: ")
console.log(document.body.children);

console.log("Second child of body: ")
console.log(document.body.children[1]);

console.log("First child of the ul: ")
console.log(document.body.children[1].children[0]);

console.log("Using id to target the li: ")
var childNode1 = document.getElementById("childNode1")
console.log(childNode1);

console.log("Style object of selected element: ")
console.log(childNode1.style);

// Setting style of element
childNode1.style.color = "green";
