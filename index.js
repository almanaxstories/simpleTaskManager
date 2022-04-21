window.onload = () => {


    let taskManagerMainDiv = document.getElementById('container');
    
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
    addTaskButton.style = 'width: 140px; height: 23px; margin-left: 5%';
    addTaskButton.value = 'Add New Task';
    addTaskButton.addEventListener('click', addNewTask);
    divForInputAndButton.appendChild(addTaskButton);
    
    let divForUl = document.createElement('div');
    divForUl.style = 'margin-top: 3%';
    taskManagerMainDiv.appendChild(divForUl);

    let mainUl = document.createElement('ul');
    divForUl.appendChild(mainUl);

    let arrLiKeeper = [];

    function addNewTask(){
        if(taskInputField.value === ''){
            return undefined;
        }

            arrLiKeeper.push(taskInputField.value);
            arrLiKeeper.sort();
            mainUl.innerHTML = '';
            for(let a in arrLiKeeper){
                createAndAddNewLi(arrLiKeeper[a]);
            }
        
        
        function createAndAddNewLi(liElementTextContent){
        let newLi = document.createElement('li');
        newLi.textContent = liElementTextContent;
        mainUl.appendChild(newLi);
        taskInputField.value = '';
        }
    }






}