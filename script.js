
let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

// Event Listener
addTaskBtn.addEventListener("click", function () {
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert ("Enter a task")
    return;
  }

  //  new <li> element
  let newTask = document.createElement("li");
  newTask.textContent = taskText;

  // Create remove a button
  let removeBtn = document.createElement("button");
  removeBtn.textContent = "✖"
  removeBtn.addEventListener("click", function () {
    newTask.remove(); // Delete the task
  });

  // Add button to task item and add task to the list
  newTask.appendChild(removeBtn);
  taskList.appendChild(newTask);


  taskInput.value = "";
});
