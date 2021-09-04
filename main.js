import ConcludeButton from "./components/concludeButton.js"
import DeleteButton from "./components/deleteButton.js"

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

const newItem = document.querySelector('[data-button]')
newItem.addEventListener('click', createTask)

const switchToGreen = () => {
    const backgroundSticky = document.querySelector('[data-stickyNotes]')

    backgroundSticky.classList.toggle('background-green')
}

const colorGreen = document.querySelector('[data-green]')
colorGreen.addEventListener('click', switchToGreen)
