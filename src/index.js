import _ from 'lodash';

window.onload = () => {


    let taskManagerMainDiv = document.getElementById('container');

    let divForStartMessage = document.createElement('div');
    taskManagerMainDiv.appendChild(divForStartMessage);

    let startMessageFirstBlock = document.createElement('h2');
    startMessageFirstBlock .textContent = 'Hi User, this is your personal task manager';
    startMessageFirstBlock .style = 'text-align: center; color: violet;';
    divForStartMessage.appendChild(startMessageFirstBlock);

    let startMessageSecondBlock = document.createElement('h3');
    startMessageSecondBlock.textContent = 'Print your tasks in the field below one by one and push adding button';
    startMessageSecondBlock.style = 'text-align: center; color: orange;';
    divForStartMessage.appendChild(startMessageSecondBlock);

    let startMessageThirdBlock = document.createElement('h4');
    startMessageThirdBlock.textContent = 'Pushing adding button with empty string doing nothing';
    startMessageThirdBlock.style = 'text-align: center; color: red;';
    divForStartMessage.appendChild(startMessageThirdBlock);
    
    let divForInputAndButton = document.createElement('div');
    divForInputAndButton.style = 'margin:1%;';
    taskManagerMainDiv.appendChild(divForInputAndButton);

    let taskInputField = document.createElement('input');
    taskInputField.type = 'text';
    taskInputField.style = 'width: 300px;';
    taskInputField.addEventListener('keyup', function(event){
        if (event.key === 'Enter'){
            addTaskButton.click();
        }
    });
    divForInputAndButton.appendChild(taskInputField);

    let addTaskButton = document.createElement('input');
    addTaskButton.type = 'button';
    addTaskButton.style = 'width: 100px; height: 23px; margin-left: 1%';
    addTaskButton.value = 'Add New Task';
    addTaskButton.addEventListener('click', addNewTask);
    divForInputAndButton.appendChild(addTaskButton);

    let addCLearButton = document.createElement('input');
    addCLearButton.type = 'button';
    addCLearButton.style = 'width: 80px; height: 23px; margin-left: 1%;';
    addCLearButton.value = 'Clear Tasks';
    addCLearButton.addEventListener('click', clearTaskManagerSpace);
    divForInputAndButton.appendChild(addCLearButton);
    
    let divForUl = document.createElement('div');
    divForUl.style = 'margin-top: 3%';
    taskManagerMainDiv.appendChild(divForUl);

    let mainUl = document.createElement('ul');
    divForUl.appendChild(mainUl);

    let arrayOfLiElements = [];

    generateLiElementsFromLocalStorage();

    function addNewTask(){
        if(taskInputField.value === ''){
            return undefined;
        }

            arrayOfLiElements.push(taskInputField.value);
            arrayOfLiElements.sort();
            mainUl.innerHTML = '';

            for(let a in arrayOfLiElements){
                createAndAddNewLi(arrayOfLiElements[a]);
            }

            
            let stringifiedArrayForLocalStorage = JSON.stringify(arrayOfLiElements);
            localStorage.setItem('tasks', stringifiedArrayForLocalStorage);

    }

    function createAndAddNewLi(liElementTextContent){
        let newLi = document.createElement('li');
        newLi.textContent = liElementTextContent;
        mainUl.appendChild(newLi);
        taskInputField.value = '';
        }


    function generateLiElementsFromLocalStorage(){
        if(!localStorage.getItem('tasks')){
            return undefined;
        }

        arrayOfLiElements = JSON.parse(localStorage.getItem('tasks'));
        
        for(let a of arrayOfLiElements){
            createAndAddNewLi(a);
        }   
    }

    function clearTaskManagerSpace(){
        localStorage.clear();
        mainUl.innerHTML = '';
    }
}


