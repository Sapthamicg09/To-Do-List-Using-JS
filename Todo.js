// Select DOM elements
const taskInput = document.getElementById('new-task'); // Input field
const taskList = document.getElementById('task-list'); // Task list container

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim(); // Get the text entered in the input field

    // Validate input
    if (taskText === '') {
        alert('Please enter a task.'); // Alert if the input is empty
        return;
    }

    // Create a new <li> element
    const listItem = document.createElement('li');

    // Add task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Button container
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('task-button');

    // Complete button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => {
        taskSpan.classList.toggle('completed');
    });

    // Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editTask(taskSpan));

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => taskList.removeChild(listItem));

    // Append buttons to container
    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    // Append task text and buttons to list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(buttonContainer);

    // Add list item to task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
}

// Function to edit an existing task
function editTask(taskSpan) {
    const updatedTask = prompt('Edit your task:', taskSpan.textContent);
    if (updatedTask !== null && updatedTask.trim() !== '') {
        taskSpan.textContent = updatedTask.trim();
    }
}
