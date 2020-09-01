// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('dom loaded!');

  const newItemInput = document.querySelector('input.new-item');
  const todoContainer = document.querySelector('.todo-container');

  // Get all the items that we need to add event listeners to
  const deleteBtns = document.querySelectorAll('button.delete');
  const completeBtns = document.querySelectorAll('button.complete');
  const todoItems = document.querySelectorAll('.todo-item');
  const todoForm = document.getElementById('todo-form');

  console.log('completeBtns', completeBtns);
  console.log('todoForm', todoForm);
  console.log('todoItems', todoItems);
  console.log('deleteBtns', deleteBtns);

  // Inital todos array
  let todos = [];

  // Getting todos from the DB when the page loads

  // This function resets the todos displayed with new todos from the database
  const initializeRows = () => {
    todoContainer.innerHTML = '';
    const rowsToAdd = [];
    for (let i = 0; i < todos.length; i++) {
      rowsToAdd.push(createNewRow(todos[i]));
    }

    rowsToAdd.forEach((row) => todoContainer.prepend(row));
  };

  // Helper function to grab todos
  const getTodos = () => {
    fetch('/api/todos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success in getting todos:', data);
        todos = data;
        initializeRows();
      });
  };

  getTodos();

  // Helper function to delete a todo
  const deleteTodo = (e) => {
    e.stopPropagation();
    const { id } = e.target.dataset;

    fetch(`/api/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => getTodos());
  };

  // Helper function for editing a todo
  const editToDo = (e) => {
    console.log(e.target);
  };

  // Construct a todo-item row
  const createNewRow = (todo) => {
    // Containing row
    const newInputRow = document.createElement('li');
    newInputRow.classList.add('list-group-item', 'todo-item');

    // Span
    const rowSpan = document.createElement('span');
    rowSpan.innerText = todo.text;

    // Input field
    const rowInput = document.createElement('input');
    rowInput.setAttribute('type', 'text');
    rowInput.classList.add('edit');
    rowInput.style.display = 'none';

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.classList.add('delete', 'btn', 'btn-danger');
    delBtn.setAttribute('data-id', todo.id);
    delBtn.innerText = 'x';
    delBtn.addEventListener('click', deleteTodo);

    // Complete button
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete', 'btn', 'btn-primary');
    completeBtn.innerText = '✓';
    completeBtn.addEventListener('click', toggleComplete);

    // Append all items to the row
    newInputRow.appendChild(rowSpan);
    newInputRow.appendChild(rowInput);
    newInputRow.appendChild(delBtn);
    newInputRow.appendChild(completeBtn);

    // newInputRow.find('button.delete').data('id', todo.id);
    // newInputRow.find('input.edit').style.display = 'none';
    // newInputRow.data('todo', todo);

    if (todo.complete) {
      rowSpan.style.textDecoration = 'line-through';
    }

    console.log('createNewRow -> newInputRow', newInputRow);
    return newInputRow;
  };
});
