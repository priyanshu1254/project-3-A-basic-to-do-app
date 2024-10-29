document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const task = {
        text: taskText,
        completed: false,
        dateAdded: new Date().toLocaleString()
    };

    renderTask(task);
    taskInput.value = '';
}

function renderTask(task) {
    const pendingTasksUl = document.getElementById('pendingTasks');
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${task.text} (Added: ${task.dateAdded})</span>
        <div>
            <button class="complete" onclick="completeTask(this)">Complete</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    pendingTasksUl.appendChild(li);
}

function completeTask(button) {
    const taskLi = button.parentElement.parentElement;
    const taskText = taskLi.querySelector('span').innerText.split(' (Added:')[0];

    const completedTasksUl = document.getElementById('completedTasks');
    
    const completedLi = document.createElement('li');
    completedLi.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    
    completedTasksUl.appendChild(completedLi);
    taskLi.remove();
}

function deleteTask(button) {
    const taskLi = button.parentElement.parentElement;
    taskLi.remove();
}
