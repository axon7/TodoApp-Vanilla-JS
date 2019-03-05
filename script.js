let todoList = {
    todos: [],
    addTodo(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo(position, todoText){
        this.todos[position].todoText = todoText;
    },
    deleteTodo(position){
        this.todos.splice(position,1)
    },
    toggleCompleted(position){
        let todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll(){
        //if everything is true
        let completedTodos = 0;
        let totalTodos = this.todos.length;
        this.todos.forEach((todo)=>{
            if(todo.completed === true){
                completedTodos++
            }
        });

        this.todos.forEach((todo)=>{
            if(completedTodos === totalTodos){
                todo.completed = false;
            } else{
                todo.completed = true;
            }
        })
    }
}




let handlers = {
    displayTodos: ()=>{
        todoList.displayTodos();
    },
    toggleAll: ()=>{
        todoList.toggleAll();
        view.displayTodos();
    },
    addTodo:()=>{
     let input = document.getElementById("input");
        todoList.addTodo(input.value);
        input.value = "";
        view.displayTodos();
    },
    changeTodo:()=>{
        let changeInput = document.getElementById("changeInput")
        let positionSelect = document.getElementById("positionSelect");
        todoList.changeTodo(positionSelect.value, changeInput.value)
        changeInput.value = "";
        view.displayTodos();
    },
    deleteTodo:(position)=>{
        todoList.deleteTodo(position)
        view.displayTodos();
    },
    toggleTodo: ()=>{
        let toggleSelect = document.getElementById("toggleSelect");
        todoList.toggleCompleted(toggleSelect.value);
        view.displayTodos();
    }
}


let view = {
    displayTodos: function(){
        let todoUl = document.querySelector("ul");
        //adds only one element not twice as many
        todoUl.innerHTML = ""
        todoList.todos.forEach(function(todo, index){
            let todoLi = document.createElement("li");
            if(todo.completed === true){
                todoLi.textContent = "(x)" + todo.todoText;
             } else {
                todoLi.textContent = "( ) " + todo.todoText;
             }

             todoLi.id = index;
            todoLi.appendChild(this.createDeleteButton());
            todoUl.appendChild(todoLi);
        },this);
    },
    createDeleteButton: function(){
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton"
        return deleteButton;
    }
};



let todosUl = document.querySelector("ul");
todosUl.addEventListener("click", function (e){
    console.log(e.target);
    if(e.target.className  === "deleteButton"){
        handlers.deleteTodo(e.target.parentNode.id);
    }
    
});
