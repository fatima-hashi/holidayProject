const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    const paragraph = document.createElement('p')
    paragraph.innerText = inputField.value;
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    inputField.value = null;
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
})

// line 10 paragraph.addEventListener('click', function(){
   //    alert("Great, Item Added!") 