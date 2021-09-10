import ConcludeButton from './components/concludeButton.js'
import DeleteButton from './components/deleteButton.js'
import StickyNotes from './components/StickyNotes.js'

const createTask = (event) => {
  event.preventDefault()

  const list = document.querySelector('[data-ul]')
  const input = document.querySelector('[data-input]')
  const value = input.value

  if (validateForm(value)) {
    return alert('Ivalid Value!')
  }

  const task = document.createElement('li')
  const taskDiv = document.createElement('div')
  task.classList.add('stickyNotes-task')
  const template = `<p>${value}</p>`
  task.innerHTML = template

  taskDiv.appendChild(ConcludeButton())
  taskDiv.appendChild(DeleteButton())
  
  
  list.appendChild(task);
  task.appendChild(taskDiv)

  input.value = ''
}


const validateForm = (value) => {
  if (value == '') {
    return true
  }
}

export default createTask
new StickyNotes()
