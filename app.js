
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
const cardBody=document.querySelector(".card-body")


//event listenerlar

todoButton.addEventListener("click", addTodo)
todoList.addEventListener('click',deleteCheck)
document.addEventListener("DOMContentLoaded", getTodos);


function addTodo(event) {
    
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
   
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;

    if(todoInput.value === "") {
      showAlert("danger","Lütfen bir todo giriniz")
    }
    
    
   
    saveLocalStorage(todoInput.value);
    
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";
    
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
   
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
  
    todoList.appendChild(todoDiv);
    event.preventDefault();
  }

function deleteCheck(e) {
    const item = e.target;

    //delete
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement.remove();
    }

    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement.classList.toggle("completed");
    }
}

function showAlert(type,message) {
  const alert=document.createElement("div")
  alert.className="alert alert-danger"
  alert.textContent="Lütfen bir todo giriniz"
  cardBody.appendChild(alert)

  setTimeout(function(){
      alert.remove()
  },500)
}


function saveLocalStorage(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }



  function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo) {
      
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");
      
      const newTodo = document.createElement("li");
      newTodo.innerText = todo;
      newTodo.classList.add("todo-item");
      todoDiv.appendChild(newTodo);
      todoInput.value = "";
      
      const completedButton = document.createElement("button");
      completedButton.innerHTML = `<i class="fas fa-check"></i>`;
      completedButton.classList.add("complete-btn");
      todoDiv.appendChild(completedButton);
     
      const trashButton = document.createElement("button");
      trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
      trashButton.classList.add("trash-btn");
      todoDiv.appendChild(trashButton);
      
      todoList.appendChild(todoDiv);
    });
  }



  
//Bildirimler eklenmedi







// function showAlert(type,message) {
//     const alert=document.createElement("div")
//     alert.className="alert alert-danger"
//     alert.textContent="Lütfen bir todo giriniz"
//     cardBody.appendChild(alert)

//     setTimeout(function(){
//         alert.remove()
//     },500)
// }