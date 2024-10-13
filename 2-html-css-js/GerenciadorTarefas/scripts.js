let taskList = document.getElementById('task-list')
let taskInput = document.getElementById('task-input')
let addTaskBtn = document.getElementById('add-task-btn')

let filters = document.querySelectorAll('.filter-btn');

addTaskBtn.addEventListener('click', () => {
    let taskText = taskInput.value.trim()

    if(taskText) {
        let li = createTaskElement(taskText)

        taskList.appendChild(li)

        taskInput.value = ''
    }
})

function createTaskElement(text) {
    let li = createEElement('li')

    li.textContext = text

    let removeBtn = document.createElement('span')
    removeBtn.textContent = 'Remover'
    removeBtn.classList.add('remove-btn')

    removeBtn.addEventListener('click', li.remove())

    li.appendChild(removeBtn)

    
}