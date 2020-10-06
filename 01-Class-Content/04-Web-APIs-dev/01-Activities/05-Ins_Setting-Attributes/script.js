
 var pTags = document.querySelectorAll("p");
 var divTags = document.querySelectorAll("div");
 var aTags = document.querySelectorAll("a");
 var imgEl = document.querySelectorAll("img");
 var changeP = document.querySelector("#change2");

 console.log(pTags);

 pTags[0].setAttribute("style", "font-size: 40px;");
 changeP.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration:underline; ");
 aTags[0].setAttribute("href", "https://github.com");
 imgEl[0].setAttribute("src", "images/image_1.jpg");
 imgEl[0].setAttribute("style", "width:500px; height:200px;");

for (var i = 0; i < divTags.length; i++) {
  divTags[i].setAttribute("style", "color:blue; font-size: 30px");
 }

 