export const headerClick = () => {
  const header = document.getElementById('header');
  if (header.style.color === 'orange') {
    header.style.color = 'black';
  } else {
    header.style.color = 'orange';
  }
};
