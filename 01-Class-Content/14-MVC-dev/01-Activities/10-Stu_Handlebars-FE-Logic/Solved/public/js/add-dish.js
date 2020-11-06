async function newFormHandler(event) {
  event.preventDefault();

  console.log('add form handler');

  const dish_name = document.querySelector('#dish_name').value;
  const description = document.querySelector('#description').value;
  const guest_name = document.querySelector('#guest_name').value;
  const has_nuts = document.querySelector('#has_nuts:checked') ? true : false;

  const response = await fetch(`/`, {
    method: 'POST',
    body: JSON.stringify({
      dish_name,
      description,
      guest_name,
      has_nuts,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add dish');
  }
}

document.querySelector('.new-dish-form').addEventListener('submit', newFormHandler);
