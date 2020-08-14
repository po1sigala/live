// Comments show the vanilla JavaScript equivalent statements

// var rootEl = document.getElementById("root");
var rootEl = $("#root");

// var titleEl = document.createElement("h1");
var titleEl = $("<h1>");

// titleEl.textContent = "Hello friends";  
titleEl.text("Hello friends");

// titleEl.className = 'fancy';
titleEl.attr("class", "fancy");

// rootEl.appendChild(titleEl);
rootEl.append(titleEl);

// titleEl.style.border = "rgb(122, 242, 242) 3px solid"; 
titleEl.css("border", "rgb(122, 242, 242) 5px solid");

// titleEl.append("Welcome to jQuery");
rootEl.append("With jQuery we can:");

var abilities = [
  "Select",
  "Create",
  "Style",
  "Animate",
  "Traverse",
  "Event Listen",
  "much more",
];

for (var i = 0; i < abilities.length; i++) {
  // Create a new `<div>` for each ability and its text content
  var abilityEl = $("<div>");
  abilityEl.text(abilities[i]);

  // Alternatively
  // var abilityEl = $("<div>" + abilities[i] + "</div>");

  // Add this new `<div>` to the abilities `<div>`.
  rootEl.append(abilityEl);
}

console.log($('div'));

// Alternatively use the `$.each` method
// $.each(abilities, function(i, ability) {
//    abilityEl.append("<div>" + ability + "</div>");
// })
