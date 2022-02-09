// Personal Information
let userInfos = document.querySelector(".user-infos");
let submitBtn = document.querySelector(".btn-primary");

submitBtn.addEventListener("click", function () {
  let firstName = document.querySelector(".firstName").value;
  let lastName = document.querySelector(".lastName").value;
  let date = document.querySelector(".date").value;

  if (firstName.length === 0) {
    alert("Please add your firstName");
  } else if (lastName.length === 0) {
    alert("Please add your last name");
  } else if (date.length === 0) {
    alert("Please select the date");
  } else {
    let li = document.createElement("li");
    li.classList = "user-info";
    let li2 = document.createElement("li");
    li2.classList = "user-info";
    let li3 = document.createElement("li");
    li3.classList = "user-info";
    li.appendChild(document.createTextNode(firstName));
    li2.appendChild(document.createTextNode(lastName));
    li3.appendChild(document.createTextNode(date));
    userInfos.appendChild(li);
    userInfos.appendChild(li2);
    userInfos.appendChild(li3);

    li.addEventListener("click", function () {
      li.remove();
    });
    li2.addEventListener("click", function () {
      li2.remove();
    });
    li3.addEventListener("click", function () {
      li3.remove();
    });
  }
});

// Add tasks

const form = document.querySelector(".task-form");
const taskInput = document.querySelector(".task");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector(".filter");
const taskList = document.querySelector(".collection");

// load all event listeners

loadEventListeners();

// Event Listeners
function loadEventListeners() {
  // Add task
  form.addEventListener("submit", addTask);

  // Remove task
  taskList.addEventListener("click", removeTask);

  // Clear all tasks;
  clearBtn.addEventListener("click", clearTasks);

  //Filter
  filter.addEventListener("keyup", filterList);

  // DOM load event listeners
  document.addEventListener("DOMContentLoaded", getTasks);
}

// Store Tasks to Local Storage

//Adding task Function
function addTask(e) {
  // Create li element
  let li = document.createElement("li");
  li.classList = "collection-item";
  li.appendChild(document.createTextNode(taskInput.value));

  // Create link
  let link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = "<i class='fa fa-remove'> </i>";
  li.appendChild(link);
  taskList.appendChild(li);
  // Store tasks in Local Storage
  storeTasks(taskInput.value);

  taskInput.value = " ";
  e.preventDefault();
}
// Function to store tasks in Local Storage
function storeTasks(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure ?")) {
      e.target.parentElement.parentElement.remove();

      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove tasks from Local Storage one by one.
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Clear All tasks
function clearTasks() {
  taskList.innerHTML = "";

  // Clear all tasks from Local Storage
  clearTasks();
}

function clearTasks() {
  localStorage.clear();
}

// Filter function

function filterList(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

// Get tasks from Local Storage
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function (task) {
    let li = document.createElement("li");
    li.classList = "collection-item";
    li.appendChild(document.createTextNode(task));

    let link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = "<i class='fa fa-remove'></i>";
    li.appendChild(link);
    taskList.appendChild(li);
  });
}
