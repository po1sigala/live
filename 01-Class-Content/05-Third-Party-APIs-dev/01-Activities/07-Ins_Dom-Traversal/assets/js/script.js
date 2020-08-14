// Select elements in the document programatically
  // Starting from the `<div id="top">` element, place a blue border around the title of the website, Develop Community Center
  $("#top").siblings().first().css("border", "blue solid 2px");

  // Starting from the `<div id="bottom">` element, change the text on the last item on the list to say Meetups, not GitHub
  $("#bottom").siblings().eq(4).children().last().text("Meetups");

  // Starting from `<div id="top">` append an `<li>` to add "Classmates" to bottom of the list as a new resource.
  $("#top").siblings().eq(3).append($("<li>Classmates</li>"));

  // Starting from the `<li id="inside">` element, add the fancy class to the `<li>`
  $("#inside").closest("ul").children().addClass("fancy");
  