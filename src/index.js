// import _ from 'lodash';

window.onload = () => {
    const taskManagerMainDiv = document.getElementById('container')

    function createDiv(divStyle) {
        const thisDiv = document.createElement('div')
        if (divStyle) {
            thisDiv.style = divStyle
        }
        taskManagerMainDiv.appendChild(thisDiv)
        return thisDiv
    }

    function createHElement(hType, messageToShow, hElStyle, nameOfDivToAppend) {
        const thisHElement = document.createElement(hType)
        thisHElement.textContent = messageToShow
        thisHElement.style = hElStyle
        nameOfDivToAppend.appendChild(thisHElement)
        return thisHElement
    }

    function createInputElement(
        typeOfInputEl,
        styleOfInputEl,
        nameOfDivToAppend,
        valueForButton
    ) {
        const thisInputElement = document.createElement('input')
        thisInputElement.type = typeOfInputEl
        thisInputElement.style = styleOfInputEl
        if (typeOfInputEl === 'button') {
            thisInputElement.value = valueForButton
        }
        nameOfDivToAppend.appendChild(thisInputElement)
        return thisInputElement
    }

    const divForStartMessage = createDiv()

    const divForInputAndButton = createDiv('margin:1%;')

    const startMessageFirstBlock = createHElement(
        'h2',
        'User, this is your personal task manager',
        'text-align: center; color: violet;',
        divForStartMessage
    )

    const startMessageSecondBlock = createHElement(
        'h3',
        'Print your tasks in the field below one by one and push add button',
        'text-align: center; color: orange;',
        divForStartMessage
    )

    const startMessageThirdBlock = createHElement(
        'h4',
        'Pushing add button with empty string does nothing',
        'text-align: center; color: red;',
        divForStartMessage
    )

    const taskInputField = createInputElement(
        'text',
        'width: 300px;',
        divForInputAndButton
    )
    taskInputField.textContent = ''
    taskInputField.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            addTaskButton.click()
        }
    })

    const addTaskButton = createInputElement(
        'button',
        'width: 100px; height: 23px; margin-left: 1%',
        divForInputAndButton,
        'Add New Task'
    )
    addTaskButton.addEventListener('click', addNewTask)

    const addCLearButton = createInputElement(
        'button',
        'width: 80px; height: 23px; margin-left: 1%;',
        divForInputAndButton,
        'Clear Tasks'
    )
    addCLearButton.addEventListener('click', clearTaskManagerSpace)

    const divForUl = createDiv('margin-top: 3%')

    const mainUl = document.createElement('ul')
    divForUl.appendChild(mainUl)

    let arrayOfLiElements = []

    function createAndAddNewLi(liElementTextContent) {
        const newLi = document.createElement('li')
        newLi.textContent = liElementTextContent
        mainUl.appendChild(newLi)
        taskInputField.value = ''
    }

    function addNewTask() {
        if (taskInputField.value === '') {
            return undefined
        }

        let inputContainsOnlyWhitespaces = true

        for (let a = 0; a < taskInputField.value.length; a += 1) {
            if (taskInputField.value.charCodeAt(a) !== 32) {
                inputContainsOnlyWhitespaces = false
            }
        }

        if (inputContainsOnlyWhitespaces) {
            taskInputField.value = ''
            return undefined
        }

        arrayOfLiElements.push(taskInputField.value)
        arrayOfLiElements.sort()
        mainUl.innerHTML = ''

        for (let a = 0; a < arrayOfLiElements.length; a += 1) {
            createAndAddNewLi(arrayOfLiElements[a])
        }

        const stringifiedArrayForLocalStorage =
            JSON.stringify(arrayOfLiElements)
        localStorage.setItem('tasks', stringifiedArrayForLocalStorage)

        return undefined
    }

    function generateLiElementsFromLocalStorage() {
        if (!localStorage.getItem('tasks')) {
            return undefined
        }

        arrayOfLiElements = JSON.parse(localStorage.getItem('tasks'))

        for (let a = 0; a < arrayOfLiElements.length; a += 1) {
            createAndAddNewLi(arrayOfLiElements[a])
        }
        return undefined
    }

    function clearTaskManagerSpace() {
        localStorage.clear()
        mainUl.innerHTML = ''
    }

    generateLiElementsFromLocalStorage()
}
