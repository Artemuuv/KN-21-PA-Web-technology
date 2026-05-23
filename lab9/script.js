const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const sortBtn = document.getElementById('sort-btn');
const taskList = document.getElementById('task-list');
let tasks = [];
function loadTasks() {
    const savedTasks = localStorage.getItem('myTasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
    renderTasks(); //
}
function saveTasks() {
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}
function addTask() {
    const text = taskInput.value.trim();
    if (text === '') return;

    const newTask = {
        id: Date.now(),           
        text: text,               
        completed: false,         
        dateAdded: Date.now()     
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();
    taskInput.value = '';
}
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}
function toggleCompleted(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed }; //
        }
        return task;
    });
    saveTasks();
    renderTasks();
}
function sortTasksByDate() {
    tasks.sort((a, b) => b.dateAdded - a.dateAdded);
    saveTasks();
    renderTasks();
}
function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        if (task.completed) {
            li.classList.add('completed');
        }

        li.innerHTML = `
            <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''}>
            <span class="task-text">${task.text}</span>
            <button class="delete-btn">Видалити</button>
        `;
        const checkbox = li.querySelector('.checkbox');
        checkbox.addEventListener('change', () => toggleCompleted(task.id));
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => deleteTask(task.id));

        taskList.appendChild(li);
    });
}
addBtn.addEventListener('click', addTask);
sortBtn.addEventListener('click', sortTasksByDate);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});
loadTasks();