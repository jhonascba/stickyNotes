import createTask from "../main.js"

export default class StickyNotes {
    constructor() {
      this.stickyNotes = document.querySelector('[data-stickyNotes]')
      this.yellowButton = document.querySelector('[data-yellow]')
      this.greenButton = document.querySelector('[data-green]')
      this.blueButton = document.querySelector('[data-blue]')
      this.pinkButton = document.querySelector('[data-pink]')
      this.orangeButton = document.querySelector('[data-orange]')
      this.purpleButton = document.querySelector('[data-purple]')
      this.newItem = document.querySelector('[data-button]')
      this.createEventListener()
    }
  
    createEventListener = () => {
      this.newItem.addEventListener('click', createTask)
      this.yellowButton.addEventListener('click', () => this.switchColor('yellow'))
      this.greenButton.addEventListener('click', () => this.switchColor('green'))
      this.blueButton.addEventListener('click', () => this.switchColor('blue'))
      this.pinkButton.addEventListener('click', () => this.switchColor('pink'))
      this.orangeButton.addEventListener('click', () => this.switchColor('orange'))
      this.purpleButton.addEventListener('click', () => this.switchColor('purple'))
    }
  
    switchColor = (color) => {
      const className = classColors[color]
  
      this.removeClass()
      this.stickyNotes.classList.add(className)
    }
  
    removeClass = () => {
      const values = Object.values(classColors)
      values.forEach((className) => this.stickyNotes.classList.remove(className))
    }
  }

  const classColors = {
    yellow: 'background-yellow',
    green: 'background-green',
    blue: 'background-blue',
    pink: 'background-pink',
    orange: 'background-orange',
    purple: 'background-purple',
  }
