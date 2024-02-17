const tasksForm = document.getElementById("tasks__form");
const tasksInput = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");

tasksForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskTitle = tasksInput.value.trim();

  if (taskTitle === "") {
    return;
  } else {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task");

    taskItem.innerHTML = `
    <div class="task__title">
      ${taskTitle}
    </div>
    <a href="#" class="task__remove">&times;</a>
    `;

    const removeTaskItem = taskItem.querySelector(".task__remove");
    removeTaskItem.addEventListener("click", function () {
      taskItem.remove();
    });

    tasksList.appendChild(taskItem);

    tasksInput.value = "";
  }
});

// tasksForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const taskTitle = tasksInput.value.trim();

//   if (taskTitle === "") {
//     return;
//   } else {
//     const taskItem = document.createElement("div");
//     taskItem.classList.add("task");

//     const taskTitleItem = document.createElement("div");
//     taskTitleItem.classList.add("task__title");
//     taskTitleItem.textContent = taskTitle;

//     const removeTaskItem = document.createElement("a");
//     removeTaskItem.setAttribute("href", "#");
//     removeTaskItem.classList.add("task__remove");
//     removeTaskItem.textContent = "x";

//     removeTaskItem.addEventListener("click", function () {
//       taskItem.remove();
//     });

//     taskItem.appendChild(taskTitleItem);
//     taskItem.appendChild(removeTaskItem);

//     tasksList.appendChild(taskItem);

//     tasksInput.value = "";
//   }
// });
