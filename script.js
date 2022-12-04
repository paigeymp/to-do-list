function addTask(event) {
  event.preventDefault();
  let task = document.querySelector("#task-input").value;
  let enterTask = document.querySelector("#entered-task");
  console.log(task);
  enterTask.innerHTML += `<div class="taskRow row" id="task-row">
          <div class="col taskItem">${task}</div>
          <div class="col emoji">🗑</div>
        </div>`;

  clearInput();
}

function clearInput() {
  document.querySelector("#task-input").value = ``;
}

let taskAdder = document.querySelector("#task-master");
taskAdder.addEventListener("submit", addTask);

//need to make it possible to delete items now
