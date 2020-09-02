// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('dom loaded!');

  const todoContainer = document.querySelector('.todo-container');
  const todoForm = document.getElementById('todo-form');
  const todoItems = document.querySelectorAll('.todo-item');

  // Inital todos array
  let todos = [];

  // Helper function to hide items
  const hide = (el) => {
    el.style.display = 'none';
  };
  const show = (el) => {
    el.style.display = 'inline';
  };

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
    }).then(() => console.log('Delete method called'));
  };

  // Function to handle the editing of a todo when input is clicked
  const editTodo = (e) => {
    const itemChildren = e.target.children;
    // console.log('editTodo -> itemChildren', itemChildren);
    for (let i = 0; i < itemChildren.length; i++) {
      const currentEl = itemChildren[i];

      if (currentEl.tagName === 'INPUT') {
        currentEl.value = currentEl.parentElement.children[0].innerText;
        show(currentEl);
        currentEl.focus();
      }

      if (currentEl.tagName === 'SPAN' || currentEl.tagName === 'BUTTON') {
        hide(currentEl);
      }
    }
  };

  // Function to handle when a user cancels editing
  const cancelEdit = (e) => {
    const itemParent = e.target.parentElement;
    if (itemParent) {
      for (let i = 0; i < itemParent.children.length; i++) {
        const currentChild = itemParent.children[i];

        if (currentChild.tagName === 'INPUT') {
          hide(currentChild);
        } else {
          show(currentChild);
        }
      }
    }
  };

  // Function to call when we are finished editing a todo
  const finishEdit = (e) => {
    if (e.keyCode === 13) {
      const itemParent = e.target.parentElement;
      const updatedTodo = {
        text: e.target.value.trim(),
        completed: false,
      };
      itemParent.childNodes[0].innerText = updatedTodo.text;

      if (itemParent) {
        for (let i = 0; i < itemParent.children.length; i++) {
          const currentChild = itemParent.children[i];

          if (currentChild.tagName === 'INPUT') {
            hide(currentChild);
          } else {
            show(currentChild);
          }
        }
      }
    }
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

    // Add event listener for editing
    newInputRow.addEventListener('click', editTodo);
    rowInput.addEventListener('blur', cancelEdit);
    rowInput.addEventListener('keyup', finishEdit);

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
    if (todo.text) {
      fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      })
        .then((response) => response.json())
        .then(() => getTodos());
    }
  };
  todoForm.addEventListener('submit', insertTodo);
});
