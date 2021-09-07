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

//green
const switchToGreen = () => {
    const backgroundSticky = document.querySelector('[data-stickyNotes]')
    
    backgroundSticky.classList = 'background-green'
}

const colorGreen = document.querySelector('[data-green]')
colorGreen.addEventListener('click', switchToGreen)

//blue
const switchToBlue = () => {
    const backgroundSticky = document.querySelector('[data-stickyNotes]')
    
    backgroundSticky.classList = 'background-blue'
}

const colorBlue = document.querySelector('[data-blue]')
colorBlue.addEventListener('click', switchToBlue)

//yellow
const switchToYellow = () => {
    const backgroundSticky = document.querySelector('[data-stickyNotes]')
    
    backgroundSticky.classList = 'stickyNotes'
}

const colorYellow = document.querySelector('[data-yellow]')
colorYellow.addEventListener('click', switchToYellow)

//pink
const switchToPink = () => {
    const backgroundSticky = document.querySelector('[data-stickyNotes]')
    
    backgroundSticky.classList = 'background-pink'
}

const colorPink = document.querySelector('[data-pink]')
colorPink.addEventListener('click', switchToPink)

//orange
const switchToOrange = () => {
    const backgroundSticky = document.querySelector('[data-stickyNotes]')
    
    backgroundSticky.classList = 'background-orange'
}

const colorOrange = document.querySelector('[data-orange]')
colorOrange.addEventListener('click', switchToOrange)

//purple
const switchToPurple = () => {
    const backgroundSticky = document.querySelector('[data-stickyNotes]')
    
    backgroundSticky.classList = 'background-purple'
}

const colorPurple = document.querySelector('[data-purple]')
colorPurple.addEventListener('click', switchToPurple)
