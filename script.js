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
            li.classList.add("fade-in"); // Apply fade-in animation class
            taskList.appendChild(li);
            taskInput.value = "";

            // Delete button functionality
            const deleteButton = li.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                li.classList.add("fade-out"); // Apply fade-out animation class
                setTimeout(function () {
                    taskList.removeChild(li);
                }, 300); // Animation duration in milliseconds
            });
        }
    });

    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTaskButton.click();
        }
    });
});
