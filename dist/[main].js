/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// import _ from 'lodash';

window.onload = () => {


    const  taskManagerMainDiv = document.getElementById('container');

    function createDiv(divStyle){
        const thisDiv = document.createElement('div');
        if(divStyle){
            thisDiv.style = divStyle;
        }
        taskManagerMainDiv.appendChild(thisDiv);
        return thisDiv;
    }

    function createHElement(hType, messageToShow, hElStyle, nameOfDivToAppend){
        const thisHElement = document.createElement(hType);
        thisHElement.textContent = messageToShow;
        thisHElement.style = hElStyle;
        nameOfDivToAppend.appendChild(thisHElement);
        return thisHElement;
    }

    function createInputElement(typeOfInputEl, styleOfInputEl,
         nameOfDivToAppend, valueForButton){
        const thisInputElement = document.createElement('input');
        thisInputElement.type = typeOfInputEl;
        thisInputElement.style = styleOfInputEl;
        if (typeOfInputEl === 'button'){
            thisInputElement.value = valueForButton;
        }
        nameOfDivToAppend.appendChild(thisInputElement);
        return thisInputElement;
    }

    const divForStartMessage = createDiv();

    const divForInputAndButton = createDiv('margin:1%;');

    const startMessageFirstBlock = createHElement('h2',
    'User, this is your personal task manager', 'text-align: center; color: violet;',
    divForStartMessage);

    const startMessageSecondBlock = createHElement('h3',
    'Print your tasks in the field below one by one and push add button',
    'text-align: center; color: orange;', divForStartMessage);

    const startMessageThirdBlock = createHElement('h4',
    'Pushing add button with empty string does nothing',
    'text-align: center; color: red;', divForStartMessage);

    const taskInputField = createInputElement('text', 'width: 300px;',
    divForInputAndButton);
    taskInputField.textContent = '';
    taskInputField.addEventListener('keyup', (event) => {
        if (event.key === 'Enter'){
            addTaskButton.click();
        }
    });

    const addTaskButton = createInputElement('button',
     'width: 100px; height: 23px; margin-left: 1%', divForInputAndButton,
     'Add New Task');
     addTaskButton.addEventListener('click', addNewTask);

    const addCLearButton = createInputElement('button',
    'width: 80px; height: 23px; margin-left: 1%;', divForInputAndButton,
    'Clear Tasks');
    addCLearButton.addEventListener('click', clearTaskManagerSpace);

    const divForUl = createDiv('margin-top: 3%');
    
    const mainUl = document.createElement('ul');
    divForUl.appendChild(mainUl);

    let arrayOfLiElements = [];

    
    function createAndAddNewLi(liElementTextContent){
        const newLi = document.createElement('li');
        newLi.textContent = liElementTextContent;
        mainUl.appendChild(newLi);
        taskInputField.value = '';
        }

    function addNewTask(){
        if(taskInputField.value === ''){
            return undefined;
        }

        let inputContainsOnlyWhitespaces = true;

        for (let a = 0; a < taskInputField.value.length; a+=1){
            if(taskInputField.value.charCodeAt(a) !== 32){
                inputContainsOnlyWhitespaces = false;
            }
        }

        if(inputContainsOnlyWhitespaces){
            taskInputField.value = '';
            return undefined;
        }

            arrayOfLiElements.push(taskInputField.value);
            arrayOfLiElements.sort();
            mainUl.innerHTML = '';

            for(let a = 0; a < arrayOfLiElements.length; a+=1){
                createAndAddNewLi(arrayOfLiElements[a]);
            }

            
            const stringifiedArrayForLocalStorage = JSON.stringify(arrayOfLiElements);
            localStorage.setItem('tasks', stringifiedArrayForLocalStorage);

        return undefined;
    }

    function generateLiElementsFromLocalStorage(){
        if(!localStorage.getItem('tasks')){
            return undefined;
        }

        arrayOfLiElements = JSON.parse(localStorage.getItem('tasks'));
        
        for(let a = 0; a < arrayOfLiElements.length; a+=1){
            createAndAddNewLi(arrayOfLiElements[a]);
        }
        return undefined;   
    }

    function clearTaskManagerSpace(){
        localStorage.clear();
        mainUl.innerHTML = '';
    }

    generateLiElementsFromLocalStorage();

}



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW21haW5dLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzREFBc0Q7O0FBRXREO0FBQ0EscUVBQXFFLGNBQWM7QUFDbkY7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixjQUFjOztBQUV2QztBQUNBO0FBQ0EseUJBQXlCLFdBQVc7O0FBRXBDLG9FQUFvRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixjQUFjLGdCQUFnQjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdCQUF3QixpQ0FBaUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQiw4QkFBOEI7QUFDekQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLDhCQUE4QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbXBsZXRhc2ttYW5hZ2VyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG5cblxuICAgIGNvbnN0ICB0YXNrTWFuYWdlck1haW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEaXYoZGl2U3R5bGUpe1xuICAgICAgICBjb25zdCB0aGlzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlmKGRpdlN0eWxlKXtcbiAgICAgICAgICAgIHRoaXNEaXYuc3R5bGUgPSBkaXZTdHlsZTtcbiAgICAgICAgfVxuICAgICAgICB0YXNrTWFuYWdlck1haW5EaXYuYXBwZW5kQ2hpbGQodGhpc0Rpdik7XG4gICAgICAgIHJldHVybiB0aGlzRGl2O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhFbGVtZW50KGhUeXBlLCBtZXNzYWdlVG9TaG93LCBoRWxTdHlsZSwgbmFtZU9mRGl2VG9BcHBlbmQpe1xuICAgICAgICBjb25zdCB0aGlzSEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGhUeXBlKTtcbiAgICAgICAgdGhpc0hFbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZVRvU2hvdztcbiAgICAgICAgdGhpc0hFbGVtZW50LnN0eWxlID0gaEVsU3R5bGU7XG4gICAgICAgIG5hbWVPZkRpdlRvQXBwZW5kLmFwcGVuZENoaWxkKHRoaXNIRWxlbWVudCk7XG4gICAgICAgIHJldHVybiB0aGlzSEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlSW5wdXRFbGVtZW50KHR5cGVPZklucHV0RWwsIHN0eWxlT2ZJbnB1dEVsLFxuICAgICAgICAgbmFtZU9mRGl2VG9BcHBlbmQsIHZhbHVlRm9yQnV0dG9uKXtcbiAgICAgICAgY29uc3QgdGhpc0lucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRoaXNJbnB1dEVsZW1lbnQudHlwZSA9IHR5cGVPZklucHV0RWw7XG4gICAgICAgIHRoaXNJbnB1dEVsZW1lbnQuc3R5bGUgPSBzdHlsZU9mSW5wdXRFbDtcbiAgICAgICAgaWYgKHR5cGVPZklucHV0RWwgPT09ICdidXR0b24nKXtcbiAgICAgICAgICAgIHRoaXNJbnB1dEVsZW1lbnQudmFsdWUgPSB2YWx1ZUZvckJ1dHRvbjtcbiAgICAgICAgfVxuICAgICAgICBuYW1lT2ZEaXZUb0FwcGVuZC5hcHBlbmRDaGlsZCh0aGlzSW5wdXRFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHRoaXNJbnB1dEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZGl2Rm9yU3RhcnRNZXNzYWdlID0gY3JlYXRlRGl2KCk7XG5cbiAgICBjb25zdCBkaXZGb3JJbnB1dEFuZEJ1dHRvbiA9IGNyZWF0ZURpdignbWFyZ2luOjElOycpO1xuXG4gICAgY29uc3Qgc3RhcnRNZXNzYWdlRmlyc3RCbG9jayA9IGNyZWF0ZUhFbGVtZW50KCdoMicsXG4gICAgJ1VzZXIsIHRoaXMgaXMgeW91ciBwZXJzb25hbCB0YXNrIG1hbmFnZXInLCAndGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogdmlvbGV0OycsXG4gICAgZGl2Rm9yU3RhcnRNZXNzYWdlKTtcblxuICAgIGNvbnN0IHN0YXJ0TWVzc2FnZVNlY29uZEJsb2NrID0gY3JlYXRlSEVsZW1lbnQoJ2gzJyxcbiAgICAnUHJpbnQgeW91ciB0YXNrcyBpbiB0aGUgZmllbGQgYmVsb3cgb25lIGJ5IG9uZSBhbmQgcHVzaCBhZGQgYnV0dG9uJyxcbiAgICAndGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogb3JhbmdlOycsIGRpdkZvclN0YXJ0TWVzc2FnZSk7XG5cbiAgICBjb25zdCBzdGFydE1lc3NhZ2VUaGlyZEJsb2NrID0gY3JlYXRlSEVsZW1lbnQoJ2g0JyxcbiAgICAnUHVzaGluZyBhZGQgYnV0dG9uIHdpdGggZW1wdHkgc3RyaW5nIGRvZXMgbm90aGluZycsXG4gICAgJ3RleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IHJlZDsnLCBkaXZGb3JTdGFydE1lc3NhZ2UpO1xuXG4gICAgY29uc3QgdGFza0lucHV0RmllbGQgPSBjcmVhdGVJbnB1dEVsZW1lbnQoJ3RleHQnLCAnd2lkdGg6IDMwMHB4OycsXG4gICAgZGl2Rm9ySW5wdXRBbmRCdXR0b24pO1xuICAgIHRhc2tJbnB1dEZpZWxkLnRleHRDb250ZW50ID0gJyc7XG4gICAgdGFza0lucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJyl7XG4gICAgICAgICAgICBhZGRUYXNrQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBjcmVhdGVJbnB1dEVsZW1lbnQoJ2J1dHRvbicsXG4gICAgICd3aWR0aDogMTAwcHg7IGhlaWdodDogMjNweDsgbWFyZ2luLWxlZnQ6IDElJywgZGl2Rm9ySW5wdXRBbmRCdXR0b24sXG4gICAgICdBZGQgTmV3IFRhc2snKTtcbiAgICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE5ld1Rhc2spO1xuXG4gICAgY29uc3QgYWRkQ0xlYXJCdXR0b24gPSBjcmVhdGVJbnB1dEVsZW1lbnQoJ2J1dHRvbicsXG4gICAgJ3dpZHRoOiA4MHB4OyBoZWlnaHQ6IDIzcHg7IG1hcmdpbi1sZWZ0OiAxJTsnLCBkaXZGb3JJbnB1dEFuZEJ1dHRvbixcbiAgICAnQ2xlYXIgVGFza3MnKTtcbiAgICBhZGRDTGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyVGFza01hbmFnZXJTcGFjZSk7XG5cbiAgICBjb25zdCBkaXZGb3JVbCA9IGNyZWF0ZURpdignbWFyZ2luLXRvcDogMyUnKTtcbiAgICBcbiAgICBjb25zdCBtYWluVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGRpdkZvclVsLmFwcGVuZENoaWxkKG1haW5VbCk7XG5cbiAgICBsZXQgYXJyYXlPZkxpRWxlbWVudHMgPSBbXTtcblxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFuZEFkZE5ld0xpKGxpRWxlbWVudFRleHRDb250ZW50KXtcbiAgICAgICAgY29uc3QgbmV3TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBuZXdMaS50ZXh0Q29udGVudCA9IGxpRWxlbWVudFRleHRDb250ZW50O1xuICAgICAgICBtYWluVWwuYXBwZW5kQ2hpbGQobmV3TGkpO1xuICAgICAgICB0YXNrSW5wdXRGaWVsZC52YWx1ZSA9ICcnO1xuICAgICAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGROZXdUYXNrKCl7XG4gICAgICAgIGlmKHRhc2tJbnB1dEZpZWxkLnZhbHVlID09PSAnJyl7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlucHV0Q29udGFpbnNPbmx5V2hpdGVzcGFjZXMgPSB0cnVlO1xuXG4gICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgdGFza0lucHV0RmllbGQudmFsdWUubGVuZ3RoOyBhKz0xKXtcbiAgICAgICAgICAgIGlmKHRhc2tJbnB1dEZpZWxkLnZhbHVlLmNoYXJDb2RlQXQoYSkgIT09IDMyKXtcbiAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5zT25seVdoaXRlc3BhY2VzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZihpbnB1dENvbnRhaW5zT25seVdoaXRlc3BhY2VzKXtcbiAgICAgICAgICAgIHRhc2tJbnB1dEZpZWxkLnZhbHVlID0gJyc7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgICAgIGFycmF5T2ZMaUVsZW1lbnRzLnB1c2godGFza0lucHV0RmllbGQudmFsdWUpO1xuICAgICAgICAgICAgYXJyYXlPZkxpRWxlbWVudHMuc29ydCgpO1xuICAgICAgICAgICAgbWFpblVsLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgICAgICBmb3IobGV0IGEgPSAwOyBhIDwgYXJyYXlPZkxpRWxlbWVudHMubGVuZ3RoOyBhKz0xKXtcbiAgICAgICAgICAgICAgICBjcmVhdGVBbmRBZGROZXdMaShhcnJheU9mTGlFbGVtZW50c1thXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc3RyaW5naWZpZWRBcnJheUZvckxvY2FsU3RvcmFnZSA9IEpTT04uc3RyaW5naWZ5KGFycmF5T2ZMaUVsZW1lbnRzKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIHN0cmluZ2lmaWVkQXJyYXlGb3JMb2NhbFN0b3JhZ2UpO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVMaUVsZW1lbnRzRnJvbUxvY2FsU3RvcmFnZSgpe1xuICAgICAgICBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpe1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFycmF5T2ZMaUVsZW1lbnRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IGEgPSAwOyBhIDwgYXJyYXlPZkxpRWxlbWVudHMubGVuZ3RoOyBhKz0xKXtcbiAgICAgICAgICAgIGNyZWF0ZUFuZEFkZE5ld0xpKGFycmF5T2ZMaUVsZW1lbnRzW2FdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkOyAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyVGFza01hbmFnZXJTcGFjZSgpe1xuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgbWFpblVsLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIGdlbmVyYXRlTGlFbGVtZW50c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcblxufVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==