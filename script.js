document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                ${taskText} <button class="delete">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";

            const deleteButton = li.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(li);
            });
        }
    });

    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTaskButton.click();
        }
    });
});
