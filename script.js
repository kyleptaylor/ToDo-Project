const newTodoInput = document.querySelector('#add-new');
const todoList = document.querySelector('#todo-list');
const form = document.querySelector('#form');
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

for (let i = 0; i < savedTodos.length; i++) {
    let newTodo = document.createElement('li');
    newTodo.innerText = savedTodos[i].task;
    newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
    if (newTodo.isCompleted) {
        newTodo.classList.add('done');
    }
    todoList.appendChild(newTodo);
    newTodo.classList.add('todo');
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('removeBtn');
    removeBtn.innerText = 'x';
    newTodo.prepend(removeBtn);
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newItem = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'x';

    newItem.innerText = newTodoInput.value;
    todoList.appendChild(newItem);
    newItem.prepend(removeBtn);
    newItem.classList.add('todo');
    removeBtn.classList.add('removeBtn');
    newTodoInput.value = '';
    newTodoInput.isCompleted = false;

    // save to localStorage
    savedTodos.push({ task: newItem.innerText, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(savedTodos));

    removeBtn.addEventListener('click', function () {
        newItem.remove();
    });

    newItem.addEventListener('click', function () {
        newItem.classList.toggle('done');
    });
});
