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

            li.style.opacity = "0";
            li.style.transform = "translateX(-10px)";

            taskList.appendChild(li);
            taskInput.value = "";

            li.getBoundingClientRect();

            li.style.transition = "opacity 0.3s ease, transform 0.3s ease";
            li.style.opacity = "1";
            li.style.transform = "translateX(0)";

            const deleteButton = li.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                li.style.transition = "opacity 0.3s ease, transform 0.3s ease";
                li.style.opacity = "0";
                li.style.transform = "translateX(-10px)";
                
                li.addEventListener("transitionend", function () {
                    taskList.removeChild(li);
                });
            });
        }
    });

    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTaskButton.click();
        }
    });
});
