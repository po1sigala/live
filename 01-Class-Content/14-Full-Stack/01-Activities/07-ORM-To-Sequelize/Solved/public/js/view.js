// Wait until the DOM has fully loaded before running javascript

document.addEventListener('DOMContentLoaded', (e) => {
  // Get reference to the input field where user adds a new todo
  const newItemInput = document.querySelector('input.new-item');
  console.log("newItemInput", newItemInput)
  const todoContainer = document.querySelector('.todo-container');
  console.log("todoContainer", todoContainer)
});
