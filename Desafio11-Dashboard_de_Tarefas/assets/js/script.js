document.addEventListener('DOMContentLoaded', function () {
  const taskInput = document.querySelector('.task-name');
  const taskList = document.querySelector('.tasks');
  const addTaskButton = document.querySelector('.block');

  addTaskButton.addEventListener('click', function () {
      const taskName = taskInput.value.trim();
      if (taskName !== '') {
          addTask(taskName);
          taskInput.value = '';
      }
  });

  function addTask(taskName) {
      const taskElement = document.createElement('div');
      taskElement.className = 'task';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'check';
      checkbox.addEventListener("click", ()=>{
        taskNameElement.style.textDecoration = "line-through";
      })

      const label = document.createElement('label');
      label.htmlFor = 'task';

      const taskNameElement = document.createElement('span');
      taskNameElement.textContent = taskName;
      taskNameElement.className = 'name-span';

      const deleteIcon = document.createElement('i');
      deleteIcon.className = 'bx bxs-message-alt-x';

      deleteIcon.addEventListener('click', function () {
          taskElement.remove();
      });

      label.appendChild(taskNameElement);
      taskElement.appendChild(checkbox);
      taskElement.appendChild(label);
      taskElement.appendChild(deleteIcon);

      taskList.appendChild(taskElement);
  }
});
