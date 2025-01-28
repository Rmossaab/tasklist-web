
const taskInput = document.querySelector("#newtask input");
const taskSection = document.querySelector(".tasks");
const addButton = document.querySelector("#push");


taskInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        createTask();
    }
});


addButton.onclick = function () {
    createTask();
};


function createTask() {
    if (taskInput.value.trim().length === 0) {
        alert("Please enter a valid task.");
        return;
    }

    taskSection.innerHTML += `
        <div class="task">
            <label id="taskname">
                <input onclick="updateTask(this)" type="checkbox" id="check-task">
                <p>${taskInput.value.trim()}</p>
            </label>
            <div class="delete">
                <i class="uil uil-trash"></i>
            </div>
        </div>`;

    
    const currentTasks = taskSection.querySelectorAll(".delete");
    currentTasks.forEach((task) => {
        task.onclick = function () {
            this.parentNode.remove();
        };
    });

    
    taskSection.offsetHeight >= 300
        ? taskSection.classList.add("overflow")
        : taskSection.classList.remove("overflow");


    taskInput.value = "";
}


function updateTask(task) {
    const taskItem = task.parentElement.querySelector("p");
    if (task.checked) {
        taskItem.classList.add("checked");
    } else {
        taskItem.classList.remove("checked");
    }
}
