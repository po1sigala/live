

async function editFormHandler(event) {
  event.preventDefault();
  const dish_name = document.querySelector('#dish_name').value;
  const description = document.querySelector('#description').value;
  const guest_name = document.querySelector('#guest_name').value;
//   TODO: What will the value of has_nuts be if the box in the form is checked? What do we call this kind of operator?
/* The value of has_nuts will be true of the box is checked. We call this a ternary operator. It begins with a condition followed by a question mark.
If the condition is truthy, the expression before the : will be executed. If it is falsy, the experession following the : will be executed. */
  const has_nuts = document.querySelector('#has_nuts:checked') ? true : false;
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  //TODO: What part of our application will handle this 'put' request?
  //The Controller will handle this 'put' request. 
   
  const response = await fetch(`/${id}`, {
    method: 'PUT',
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

  //TODO: What happens if the response is ok?
  /*If the response is ok, that means that the dish was updated successfully. 
  The browser will reload the page at the endpoint '/${id}' with the updated data for the dish at that id.*/
  if (response.ok) {
    document.location.replace(`/${id}`);
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-dish-form').addEventListener('submit', editFormHandler);
