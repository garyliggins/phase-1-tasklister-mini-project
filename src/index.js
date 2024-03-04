document.addEventListener('DOMContentLoaded', function () {
  const taskForm = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  taskForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const taskText = taskInput.value.trim();

    if (taskText !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
      taskList.appendChild(listItem);
      taskInput.value = ''; // Clear input field after adding task
    } else {
      alert('Please enter a task.');
    }
  });
});