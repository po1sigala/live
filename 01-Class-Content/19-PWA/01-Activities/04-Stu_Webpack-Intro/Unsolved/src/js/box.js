export const boxClick = () => {
  const box = document.getElementById("box");
  if (box.style.backgroundColor === "blue") {
    box.style.backgroundColor ="yellow";
  } else {
    box.style.backgroundColor = "blue";
  }
}

// TODO: Add comment explaining the role of export in this JavaScript function