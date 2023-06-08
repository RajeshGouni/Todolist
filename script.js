//Select DOM
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');
const filter=document.querySelector('.filter-todo');
const deleteAllbutton=document.querySelector('.deleteall-button');
const counter=document.querySelector('.counter');
var total=0;

//Eventlisteners

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteTodo);
filter.addEventListener('click',select);
deleteAllbutton.addEventListener('click',clearAll);


//function

document.querySelector('.todo-list').innerHTML="";
function addTodo(e){
    //prevent natural behaviour
    e.preventDefault();

    //show alert
    if(todoInput.value ===""){
        alert('please Enter the task');
       return;
    }
    //Create todo div
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");

    //Create Completed Button
    const completedButton=document.createElement("button");
    completedButton.innerHTML='<i class="fa-solid fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
   //Create list
    const newTodo=document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value="";
    //Create Delete Button
    const deleteButton=document.createElement("button");
    deleteButton.innerHTML='<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    todoList.appendChild(todoDiv);
    total++;
counter.innerHTML="Total-Tasks:" +total;

}


function deleteTodo(e){
    const item=e.target;
    if(item.classList[0]==="delete-btn"){
        const todo=item.parentElement;
        todo.remove();  
        total--;
        counter.innerHTML="Total-Tasks:"+total;
    }
    if(item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        todo.classList.add("completed");
        
    }

}



function select(e){
   const todos= todoList.childNodes;
   
   todos.forEach(function(todo){
    switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
         case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }
   })


}

function clearAll(e){
  document.querySelector('.todo-list').innerHTML="";
  counter.innerHTML="Total-Tasks:0";
  total=0;
}






