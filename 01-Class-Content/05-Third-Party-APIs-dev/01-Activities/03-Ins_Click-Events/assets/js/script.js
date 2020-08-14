// light theme state
var isDark = true;

// Detects when the DOM is available
$(document).ready(function () {
  // Assemble DOM elements
  var rootEl = $("#root");
  var alertButton = $("<button>");
  var lotteryButton = $("<button>");
  var randomEl = $("<p class=theme>");
  var themeButton = $("<button>");
  var refreshButton = $("<button class='fancy'>Refresh</button>");

  // Apply text, style
  alertButton.text("Alert");
  alertButton.attr("class", "fancy");

  themeButton.text("Theme");
  themeButton.attr("class", "fancy");

  lotteryButton.text("Add");
  lotteryButton.attr("class", "fancy");
  // Attach to page
  rootEl.prepend("<h1>Click Events</h1>");
  rootEl.append("<hr>");
  // alert button markup
  rootEl.append("<p>Click for an alert</p>");
  rootEl.append(alertButton);
  rootEl.append("<hr>");
  // Date button
  rootEl.append("<p>Click to toggle light theme</p>");
  rootEl.append(themeButton);
  // rootEl.append(themeEl);
  rootEl.append("<hr>");

  rootEl.append("<p>Click for the next winning lottery number</p>");
  rootEl.append(lotteryButton);
  rootEl.append(randomEl);
  rootEl.append("<hr>");

  rootEl.append("<p>Click to refresh page</p>");
  rootEl.append(refreshButton);

  // Click event causes alert "Hello World"
  // Vanilla JS equivalent: `addEventListener`
  alertButton.click(function () {
    alert("Hello World");
  });

  // Click event causes alert light theme toggle
  themeButton.on("click", function () {
    if (isDark) {
      $("body").css({ "background-color": "white", color: "black" });
      isDark = !isDark;
    } else {
      $("body").css({ "background-color": "black", color: "#14c1e7" });
      isDark = !isDark;
    }
  });

  // Click event causes random number
  lotteryButton.on("click", function () {
    var random = Math.floor(Math.random() * 100000000) + 10000000;
    randomEl.text(random);
  });

  // Click event causes refresh
  refreshButton.on("click", function () {
    location.reload();
  });
});
