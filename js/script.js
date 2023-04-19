let addTaskButton = document.getElementById("add-task");
let newTaskInput = document.getElementById("task-input");
let todoListContainer = document.getElementById("todo-list");
let templateElement = document.getElementById("list-item-template");
let template = templateElement.innerHTML;

var showActiveButton = document.getElementById("show-active") 


function onAddTaskClicked(event) {
    let taskName = newTaskInput.value;
    /* Now clear the text box */
    newTaskInput.value = "";

    let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);

    todoListContainer.insertAdjacentHTML('beforeend', taskHTML);

}

function onTodolistClicked(event) {
    let targetElement = event.target;

    while (!targetElement.classList.contains("task")) {
        targetElement = targetElement.parentElement;
    }
    let checkbox = targetElement.querySelector(".checkbox");
    if (checkbox.checked) {
        targetElement.classList.add("completed");
    } else {
        targetElement.classList.remove("completed");
    }
}

function showActiveTasks() {
    var tasks = document.getElementsByClassName('task')
    console.log(tasks);
}

/* Step 3 make the event trigger our functions
-----------------------------------------------*/ 
addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodolistClicked);