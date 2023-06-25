'use strict'

const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){ //if the text we write inside the box is empty
        alert('You must write something!')
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value; //store the value we input in the text box in li
        // innerHTML is used it to get the internal HTML content of any HTML element as an HTML string.
        listContainer.appendChild(li); //add the written text to the listContainer which is the list of tasks
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'; //code for cross icon
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}
//add the task even on pressing the enter key
inputBox.addEventListener('keypress',function(e){
    if(e.keyCode === 13){
        addTask();
    }
})

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){ //if clicked on list item
        e.target.classList.toggle('checked'); //remove checked if present , add if absent
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){ //clicked on cross icon
        e.target.parentElement.remove(); //parent element is LI
        saveData();
    }
})

function saveData(){ //to save the data upon refreshing the page
    localStorage.setItem('data',listContainer.innerHTML);
    // listContainer.innerHTML => list items
    // save the items with the name 'data' in the browser
    // we have to call this saveData function every time we add a task or check a task or delete a task
}

//now we have to display this data when we open our website
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
    // it will show all the local storage in the browser with the name 'data' and display it under the listcontainer that is the list items
}
showTask();
