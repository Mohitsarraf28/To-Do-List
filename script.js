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

            // Apply initial styles for fade-in transition
            li.style.opacity = "0";
            li.style.transform = "translateX(-10px)";

            // Add the item to the list
            taskList.appendChild(li);
            taskInput.value = "";

            // Trigger the browser reflow to apply the initial styles
            li.getBoundingClientRect();

            // Apply fade-in animation
            li.style.transition = "opacity 0.3s ease, transform 0.3s ease";
            li.style.opacity = "1";
            li.style.transform = "translateX(0)";

            // Delete button functionality
            const deleteButton = li.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                // Apply fade-out animation
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
