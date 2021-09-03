const createTask = (event) => {
    event.preventDefault()

    const list = document.querySelector('[data-ul]')
    const input = document.querySelector('[data-input]')
    const value = input.value

    if (validateForm(value)) {
        return alert('Ivalid Value!')
    }

    const task = document.createElement('li')
    task.classList.add('stickyNotes-task')
    const template = `<p>${value}</p>`
    task.innerHTML = template

    list.appendChild(task)
    task.appendChild(ConcludeButton())
    task.appendChild(DeleteButton())

    input.value = ""

}

const validateForm = (value) => {
    if (value == "") {
        return true
    }
}


const ConcludeButton = () => {
    const concludeButton = document.createElement('button')
    concludeButton.classList.add('stickyNotes-task-button')

    concludeButton.innerText = 'Conclude'
    concludeButton.addEventListener('click', concludeTask)

    return concludeButton
}

const concludeTask = (event) => {
    const concludeTask = event.target

    const parent = concludeTask.parentElement

    parent.classList.toggle('done')
}

const DeleteButton = () => {
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('stickyNotes-task-button')

    deleteButton.innerText = 'Delete'
    deleteButton.addEventListener('click', deleteTask)

    return deleteButton

}

const deleteTask = (event) => {
    const deleteTask = event.target

    const parent = deleteTask.parentElement

    parent.remove()
}


const newItem = document.querySelector('[data-button]')
newItem.addEventListener('click', createTask)
