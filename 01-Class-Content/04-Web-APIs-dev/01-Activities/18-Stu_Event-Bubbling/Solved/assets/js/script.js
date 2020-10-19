// Select carousel HTML element
var carousel = document.querySelector(".carouselbox");
// Select next and prev buttons
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");

// Set index to 0
var index = 0;

// Array of image URLs saved as strings
var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

// Declare undefined variable currentImage
var currentImage;

// Set carousel image to first image
carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

// Function that determines index
function navigate(direction) {
  // Sets index value to be the sum of index and direction
  index = index + direction;
  // If the index is less than zero, set index length to be the length of index array - 1
  if (index < 0) {
    index = images.length - 1;
  // If the index is greater than than the array length -1, then index is reset to 0. 
  } else if (index > images.length - 1) {
    index = 0;
  }
  // Sets value of current image based on index
  currentImage = images[index];
  // Sets the carousel's image using value of current image
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}
// Listen for click event on carousel 
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// Listen for click event on next button
next.addEventListener("click", function(event) {
  // Stop event propogation 
  event.stopPropagation();
  // Set direction to a value of 1, execute navigate function
  navigate(1);
});

// Listen for click event on prev button
prev.addEventListener("click", function(event) {
  // Stop event propogation
  event.stopPropagation();
  // Set direction to a value of 1, execute navigate function
  navigate(-1);
});

// Call navigate function with direction set to 0 on page load. 
navigate(0);
