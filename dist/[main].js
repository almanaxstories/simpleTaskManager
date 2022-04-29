/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW21haW5dLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsV0FBVztBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGNBQWMsZ0JBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdCQUF3QixpQ0FBaUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qiw4QkFBOEI7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx3QkFBd0IsOEJBQThCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1wbGV0YXNrbWFuYWdlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tNYW5hZ2VyTWFpbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGl2KGRpdlN0eWxlKSB7XG4gICAgICAgIGNvbnN0IHRoaXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBpZiAoZGl2U3R5bGUpIHtcbiAgICAgICAgICAgIHRoaXNEaXYuc3R5bGUgPSBkaXZTdHlsZVxuICAgICAgICB9XG4gICAgICAgIHRhc2tNYW5hZ2VyTWFpbkRpdi5hcHBlbmRDaGlsZCh0aGlzRGl2KVxuICAgICAgICByZXR1cm4gdGhpc0RpdlxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhFbGVtZW50KGhUeXBlLCBtZXNzYWdlVG9TaG93LCBoRWxTdHlsZSwgbmFtZU9mRGl2VG9BcHBlbmQpIHtcbiAgICAgICAgY29uc3QgdGhpc0hFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChoVHlwZSlcbiAgICAgICAgdGhpc0hFbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZVRvU2hvd1xuICAgICAgICB0aGlzSEVsZW1lbnQuc3R5bGUgPSBoRWxTdHlsZVxuICAgICAgICBuYW1lT2ZEaXZUb0FwcGVuZC5hcHBlbmRDaGlsZCh0aGlzSEVsZW1lbnQpXG4gICAgICAgIHJldHVybiB0aGlzSEVsZW1lbnRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVJbnB1dEVsZW1lbnQoXG4gICAgICAgIHR5cGVPZklucHV0RWwsXG4gICAgICAgIHN0eWxlT2ZJbnB1dEVsLFxuICAgICAgICBuYW1lT2ZEaXZUb0FwcGVuZCxcbiAgICAgICAgdmFsdWVGb3JCdXR0b25cbiAgICApIHtcbiAgICAgICAgY29uc3QgdGhpc0lucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgdGhpc0lucHV0RWxlbWVudC50eXBlID0gdHlwZU9mSW5wdXRFbFxuICAgICAgICB0aGlzSW5wdXRFbGVtZW50LnN0eWxlID0gc3R5bGVPZklucHV0RWxcbiAgICAgICAgaWYgKHR5cGVPZklucHV0RWwgPT09ICdidXR0b24nKSB7XG4gICAgICAgICAgICB0aGlzSW5wdXRFbGVtZW50LnZhbHVlID0gdmFsdWVGb3JCdXR0b25cbiAgICAgICAgfVxuICAgICAgICBuYW1lT2ZEaXZUb0FwcGVuZC5hcHBlbmRDaGlsZCh0aGlzSW5wdXRFbGVtZW50KVxuICAgICAgICByZXR1cm4gdGhpc0lucHV0RWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IGRpdkZvclN0YXJ0TWVzc2FnZSA9IGNyZWF0ZURpdigpXG5cbiAgICBjb25zdCBkaXZGb3JJbnB1dEFuZEJ1dHRvbiA9IGNyZWF0ZURpdignbWFyZ2luOjElOycpXG5cbiAgICBjb25zdCBzdGFydE1lc3NhZ2VGaXJzdEJsb2NrID0gY3JlYXRlSEVsZW1lbnQoXG4gICAgICAgICdoMicsXG4gICAgICAgICdVc2VyLCB0aGlzIGlzIHlvdXIgcGVyc29uYWwgdGFzayBtYW5hZ2VyJyxcbiAgICAgICAgJ3RleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IHZpb2xldDsnLFxuICAgICAgICBkaXZGb3JTdGFydE1lc3NhZ2VcbiAgICApXG5cbiAgICBjb25zdCBzdGFydE1lc3NhZ2VTZWNvbmRCbG9jayA9IGNyZWF0ZUhFbGVtZW50KFxuICAgICAgICAnaDMnLFxuICAgICAgICAnUHJpbnQgeW91ciB0YXNrcyBpbiB0aGUgZmllbGQgYmVsb3cgb25lIGJ5IG9uZSBhbmQgcHVzaCBhZGQgYnV0dG9uJyxcbiAgICAgICAgJ3RleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IG9yYW5nZTsnLFxuICAgICAgICBkaXZGb3JTdGFydE1lc3NhZ2VcbiAgICApXG5cbiAgICBjb25zdCBzdGFydE1lc3NhZ2VUaGlyZEJsb2NrID0gY3JlYXRlSEVsZW1lbnQoXG4gICAgICAgICdoNCcsXG4gICAgICAgICdQdXNoaW5nIGFkZCBidXR0b24gd2l0aCBlbXB0eSBzdHJpbmcgZG9lcyBub3RoaW5nJyxcbiAgICAgICAgJ3RleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IHJlZDsnLFxuICAgICAgICBkaXZGb3JTdGFydE1lc3NhZ2VcbiAgICApXG5cbiAgICBjb25zdCB0YXNrSW5wdXRGaWVsZCA9IGNyZWF0ZUlucHV0RWxlbWVudChcbiAgICAgICAgJ3RleHQnLFxuICAgICAgICAnd2lkdGg6IDMwMHB4OycsXG4gICAgICAgIGRpdkZvcklucHV0QW5kQnV0dG9uXG4gICAgKVxuICAgIHRhc2tJbnB1dEZpZWxkLnRleHRDb250ZW50ID0gJydcbiAgICB0YXNrSW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBhZGRUYXNrQnV0dG9uLmNsaWNrKClcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gY3JlYXRlSW5wdXRFbGVtZW50KFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgJ3dpZHRoOiAxMDBweDsgaGVpZ2h0OiAyM3B4OyBtYXJnaW4tbGVmdDogMSUnLFxuICAgICAgICBkaXZGb3JJbnB1dEFuZEJ1dHRvbixcbiAgICAgICAgJ0FkZCBOZXcgVGFzaydcbiAgICApXG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE5ld1Rhc2spXG5cbiAgICBjb25zdCBhZGRDTGVhckJ1dHRvbiA9IGNyZWF0ZUlucHV0RWxlbWVudChcbiAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICd3aWR0aDogODBweDsgaGVpZ2h0OiAyM3B4OyBtYXJnaW4tbGVmdDogMSU7JyxcbiAgICAgICAgZGl2Rm9ySW5wdXRBbmRCdXR0b24sXG4gICAgICAgICdDbGVhciBUYXNrcydcbiAgICApXG4gICAgYWRkQ0xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhclRhc2tNYW5hZ2VyU3BhY2UpXG5cbiAgICBjb25zdCBkaXZGb3JVbCA9IGNyZWF0ZURpdignbWFyZ2luLXRvcDogMyUnKVxuXG4gICAgY29uc3QgbWFpblVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIGRpdkZvclVsLmFwcGVuZENoaWxkKG1haW5VbClcblxuICAgIGxldCBhcnJheU9mTGlFbGVtZW50cyA9IFtdXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVBbmRBZGROZXdMaShsaUVsZW1lbnRUZXh0Q29udGVudCkge1xuICAgICAgICBjb25zdCBuZXdMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgbmV3TGkudGV4dENvbnRlbnQgPSBsaUVsZW1lbnRUZXh0Q29udGVudFxuICAgICAgICBtYWluVWwuYXBwZW5kQ2hpbGQobmV3TGkpXG4gICAgICAgIHRhc2tJbnB1dEZpZWxkLnZhbHVlID0gJydcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGROZXdUYXNrKCkge1xuICAgICAgICBpZiAodGFza0lucHV0RmllbGQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW5wdXRDb250YWluc09ubHlXaGl0ZXNwYWNlcyA9IHRydWVcblxuICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IHRhc2tJbnB1dEZpZWxkLnZhbHVlLmxlbmd0aDsgYSArPSAxKSB7XG4gICAgICAgICAgICBpZiAodGFza0lucHV0RmllbGQudmFsdWUuY2hhckNvZGVBdChhKSAhPT0gMzIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5zT25seVdoaXRlc3BhY2VzID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dENvbnRhaW5zT25seVdoaXRlc3BhY2VzKSB7XG4gICAgICAgICAgICB0YXNrSW5wdXRGaWVsZC52YWx1ZSA9ICcnXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIH1cblxuICAgICAgICBhcnJheU9mTGlFbGVtZW50cy5wdXNoKHRhc2tJbnB1dEZpZWxkLnZhbHVlKVxuICAgICAgICBhcnJheU9mTGlFbGVtZW50cy5zb3J0KClcbiAgICAgICAgbWFpblVsLmlubmVySFRNTCA9ICcnXG5cbiAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBhcnJheU9mTGlFbGVtZW50cy5sZW5ndGg7IGEgKz0gMSkge1xuICAgICAgICAgICAgY3JlYXRlQW5kQWRkTmV3TGkoYXJyYXlPZkxpRWxlbWVudHNbYV0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdHJpbmdpZmllZEFycmF5Rm9yTG9jYWxTdG9yYWdlID1cbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGFycmF5T2ZMaUVsZW1lbnRzKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBzdHJpbmdpZmllZEFycmF5Rm9yTG9jYWxTdG9yYWdlKVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUxpRWxlbWVudHNGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIH1cblxuICAgICAgICBhcnJheU9mTGlFbGVtZW50cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpXG5cbiAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBhcnJheU9mTGlFbGVtZW50cy5sZW5ndGg7IGEgKz0gMSkge1xuICAgICAgICAgICAgY3JlYXRlQW5kQWRkTmV3TGkoYXJyYXlPZkxpRWxlbWVudHNbYV0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyVGFza01hbmFnZXJTcGFjZSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgICAgICAgbWFpblVsLmlubmVySFRNTCA9ICcnXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVMaUVsZW1lbnRzRnJvbUxvY2FsU3RvcmFnZSgpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=