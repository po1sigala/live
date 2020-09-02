// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('dom loaded!');

  const todoContainer = document.querySelector('.todo-container');
  const todoForm = document.getElementById('todo-form');

  // Inital todos array
  let todos = [];

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
    console.log('attempting to delete');
    const { id } = e.target.dataset;
    console.log('deleteTodo -> id', id);

    fetch(`/api/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() =>
      console.log('We work on the delete operation in the next activity.')
    );
  };

  // Helper function for editing a todo
  const editToDo = (e) => {
    console.log('We work on editing in the next activity.');
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
    // completeBtn.addEventListener('click', toggleComplete);
    completeBtn.addEventListener('click', () => console.log('toggle complete'));

    // Append all items to the row
    newInputRow.appendChild(rowSpan);
    newInputRow.appendChild(rowInput);
    newInputRow.appendChild(delBtn);
    newInputRow.appendChild(completeBtn);

    if (todo.complete) {
      rowSpan.style.textDecoration = 'line-through';
    }

    return newInputRow;
  };

  // Function to actually put the todo on the page
  const insertTodo = (e) => {
    e.preventDefault();
    const todo = {
      text: document.getElementById('newTodo').value.trim(),
      complete: false,
    };

    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    })
      .then((response) => response.json())
      .then(() => getTodos());
  };
  todoForm.addEventListener('click', insertTodo);
});
