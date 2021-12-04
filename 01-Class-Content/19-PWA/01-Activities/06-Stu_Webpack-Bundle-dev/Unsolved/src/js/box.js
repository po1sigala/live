// TODO import images as Blue and Yellow

export function boxClick(){
  const box = document.getElementById("box");
  if (box.src === Yellow) {
    box.src = Blue;
  } else {
    box.src = Yellow;
  }
}