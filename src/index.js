// import _ from 'lodash';
import './style.css';

// Render of HTML

function createElement(tagName, type, id, value, textContent, parent) {
    const element = document.createElement(tagName);
    element.type = type;
    element.id = id;
    element.value = value;
    element.textContent = textContent;
    parent.appendChild(element);
}

const appContainer = document.getElementById('container');

createElement(
    'h3',
    '',
    '',
    '',
    'Hi user, this is your task manager. Print tasks in the field below one by one',
    appContainer
);

const inputField = createElement(
    'input',
    'text',
    'inputField',
    '',
    '',
    appContainer
);

const addTaskButton = createElement(
    'input',
    'button',
    'addTask',
    'Add Task',
    '',
    appContainer
);

const clearTasksButton = createElement(
    'input',
    'button',
    'clearTasks',
    'Clear Tasks',
    '',
    appContainer
);

const taskList = createElement(
    'ul',
    '',
    'tasksContainer',
    '',
    '',
    appContainer
);

// end of HTML render

window.addEventListener('load', () => {
    let tasksArray = [];

    function parseListFromLS() {
        if (!localStorage.getItem('tasks')) {
            return;
        }

        tasksArray = JSON.parse(localStorage.getItem('tasks'));
    }

    function renderList() {
        for (let a = 0; a < tasksArray.length; a += 1) {
            createElement('li', '', '', '', tasksArray[a], taskList);
        }
    }

    function saveListToLS() {
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
    }

    function clearTaskListAndLS() {
        localStorage.clear();
        taskList.innerHTML = '';
    }

    function isBlanked() {
        if (inputField.value === '') {
            return true;
        }

        for (let a = 0; a < inputField.value; a += 1) {
            if (inputField.value.charCodeAt(a) !== 32) {
                return false;
            }
        }
        return true;
    }

    function addNewTask() {
        if (isBlanked()) {
            return;
        }

        tasksArray.push(inputField.value);
        inputField.value = '';
        tasksArray.sort();
        taskList.innerHTML = '';

        saveListToLS();
        renderList();
    }

    parseListFromLS();

    renderList();

    addTaskButton.addEventListener('click', addNewTask);

    clearTasksButton.addEventListener('click', clearTaskListAndLS);

    inputField.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
