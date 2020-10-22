var container = document.querySelector(".img-container");

container.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches(".box")) {
    var state = element.getAttribute("data-state");

    if (state === "hidden") {
      element.textContent = element.dataset.number;
      element.dataset.state = "visible";
   
    } else {
      element.textContent= "";
      element.dataset.state = "hidden"
     
    }  
  }
  
});
