const ConcludeButton = () => {
    const concludeButton = document.createElement('button')
    concludeButton.classList.add('stickyNotes-task-button')

    concludeButton.innerText = 'Conclude'
    concludeButton.addEventListener('click', concludeTask)

    return concludeButton
}

const concludeTask = (event) => {
    const concludeTask = event.target

    const parent = concludeTask.parentElement.parentElement

    parent.classList.toggle('done')
}

export default ConcludeButton