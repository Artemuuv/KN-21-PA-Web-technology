const todoBody = document.getElementById('todo-body');
const btnRefresh = document.getElementById('btn-refresh');
const addTodoForm = document.getElementById('add-todo-form');
function loadTodos() {
    todoBody.innerHTML = '<tr><td colspan="3" class="loading">Завантаження даних...</td></tr>';
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => {
            if (!response.ok) throw new Error("Помилка мережі");
            return response.json();
        })
        .then(data => {
            todoBody.innerHTML = '';
            data.forEach(todo => {
                addTodoToTable(todo.id, todo.title, todo.completed);
            });
        })
        .catch(error => {
            console.error('Помилка:', error);
            todoBody.innerHTML = '<tr><td colspan="3" class="loading" style="color:red;">Помилка завантаження даних</td></tr>';
        });
}
function addTodoToTable(id, title, completed) {
    const tr = document.createElement('tr');
    const statusText = completed ? '✅ Виконано' : '❌ Не виконано';
    
    tr.innerHTML = `
        <td>${id}</td>
        <td>${title}</td>
        <td>${statusText}</td>
    `;
    todoBody.appendChild(tr);
}
loadTodos();
btnRefresh.addEventListener('click', loadTodos);
addTodoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('todo-title').value;
    const isCompleted = document.getElementById('todo-status').checked;
    const fakeId = Math.floor(Math.random() * 800) + 200; 
    addTodoToTable(fakeId, title, isCompleted);
    addTodoForm.reset();
});