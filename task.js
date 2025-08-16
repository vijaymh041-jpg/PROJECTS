const taskList = document.getElementById("task-list");
const taskModal = document.getElementById("task-modal");
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskTime = document.getElementById("task-time");
const taskPriority=document.getElementById("task-priority");
const modalTitle = document.getElementById("modal-title");

let tasks = []; // Each task will be an object { name: string, completed: boolean }
let editTaskIndex = null;

// Show Modal
document.getElementById("add-task-btn").addEventListener("click", () => {
  modalTitle.textContent = "Add Task";
  taskInput.value = "";
  editTaskIndex = null;
  taskModal.style.display = "flex";
});

// Hide Modal
document.getElementById("cancel-task-btn").addEventListener("click", () => {
  taskModal.style.display = "none";
});

// Add/Edit Task
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskName = taskInput.value.trim();
  const deadline = taskTime.value;
  const priority = taskPriority.value;

  if (!taskName || !deadline) {
    alert("Please complete all required fields.");
    return;
  }

  if (editTaskIndex !== null) {
    // Edit Task
    tasks[editTaskIndex].name = {taskName,deadline,priority};
    editTaskIndex = null;
  } else {
    // Add Task
    tasks.push({ taskName, deadline, priority});
  }

  taskInput.value = "";
  taskModal.style.display = "none";
  renderTasks();
});

// Render Tasks
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
     <div class="task-info">
        <div>
          <strong>${task.taskName}</strong>
          <p>Deadline: ${new Date(task.deadline).toLocaleString()}</p>
          <p>Priority: <span style="color: ${
            task.priority === "High"
              ? "red"
              : task.priority === "Medium"
              ? "orange"
              : "green"
          };">${task.priority}</span></p>
        </div>
        <div>
          <button class="edit-btn" onclick="editTask(${index})">Edit</button>
          <button onclick="deleteTask(${index})">Delete</button>
        </div>
      </div>
    `;
    taskList.appendChild(li);
  });
}

// Delete Task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Edit Task
function editTask(index) {
  modalTitle.textContent = "Edit Task";
  taskInput.value = tasks[index].name;
  taskTime.value = task.deadline;
  taskPriority.value = task.priority;
  editTaskIndex = index;
  taskModal.style.display = "flex";
}

// Toggle Task Completion
function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}
