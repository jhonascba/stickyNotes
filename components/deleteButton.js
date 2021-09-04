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

export default DeleteButton