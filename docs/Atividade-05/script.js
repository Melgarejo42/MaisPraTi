document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    let editingIndex = null;

    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach((task, index) => {
            addTaskToDOM(task, index);
        });
    };

    const addTaskToDOM = (task, index) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item", "text-light");
        li.textContent = task;
        li.style.backgroundColor = "#326333";
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";

        const editBtn = document.createElement("button");
        editBtn.textContent = "Editar";
        editBtn.classList.add("btn", "btn-warning", "ml-2");
        editBtn.style.position = "absolute";
        editBtn.style.right = "90px";
        editBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            editTask(index);
        });

        li.dataset.index = index;
    
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Excluir";
        deleteBtn.classList.add("btn", "btn-danger", "ml-2");
        deleteBtn.style.position = "absolute";
        deleteBtn.style.right = "10px";
        deleteBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            deleteTask(index); 
        });

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    };

    const addOrUpdateTask = () => {
        const task = taskInput.value.trim();
        if (task === "") return alert("Por favor, insira uma tarefa!");

        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        if (editingIndex !== null) {
            tasks[editingIndex] = task;
            editingIndex = null;
            addTaskBtn.textContent = "Adicionar";
        } else {
            tasks.push(task);
        }

        localStorage.setItem("tasks", JSON.stringify(tasks));

        updateTaskList();

        taskInput.value = "";
    };

    const updateTaskList = () => {
        taskList.innerHTML = "";
        loadTasks();
    };

    const editTask = (index) => {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        taskInput.value = tasks[index];
        editingIndex = index;
        addTaskBtn.textContent = "Salvar";
    };

    const deleteTask = (index) => {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        updateTaskList();
    };

    addTaskBtn.addEventListener("click", addOrUpdateTask);

    loadTasks();
});
