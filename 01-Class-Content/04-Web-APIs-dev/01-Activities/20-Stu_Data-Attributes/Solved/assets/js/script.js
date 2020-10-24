var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches(".box")) {
    var state = element.getAttribute("data-state");

    
    if (state === "hidden") {
      element.textContent = element.dataset.number;
      // Using dataset property
      element.dataset.state = "visible";
   
    } else {
      element.textContent= "";
      // Using .setAttribute() method
      element.setAttribute("data-state", "hidden")
     
    }  
  }
  
});
