let tasks = [];
function addTask(event) {
  event.preventDefault();

  const titleInput = document.getElementById("title");
  const descInput = document.getElementById("description");

  const title = titleInput.value.trim();
  const description = descInput.value.trim();

  if (!title || !description) {
    alert("Please fill out all fields!");
    return;
  }

  tasks.push({ title, description });

  titleInput.value = '';
  descInput.value = '';

  renderTasks();
}

function renderTasks() {
  const taskContainer = document.getElementById("taskContainer");
  taskContainer.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    taskCard.innerHTML = `
      <div class="task-title">${task.title}</div>
      <div class="task-desc">${task.description}</div>
      <button class="delete-btn" onclick="deleteTask(${index})">X</button>
    `;

    taskContainer.appendChild(taskCard);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
