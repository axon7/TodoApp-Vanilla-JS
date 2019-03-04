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
        for(let i=0; i< this.todos.length; i++){
            if(this.todos[i].completed === true){
                completedTodos++
            }
        }
        
        if(completedTodos === this.todos.length){
            for(let i=0; i < this.todos.length; i++){
                this.todos[i].completed = false;                
            }
        } else {
            for(let i=0; i < this.todos.length; i++){
                this.todos[i].completed = true;                
            }
        }

        
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
    deleteTodo:()=>{
        let deleteSelect = document.getElementById("deleteSelect");
        todoList.deleteTodo(deleteSelect.value)
        view.displayTodos();

    },
    toggleTodo: ()=>{
        let toggleSelect = document.getElementById("toggleSelect");
        todoList.toggleCompleted(toggleSelect.value);
        view.displayTodos();
    }

}


let view = {
    displayTodos: ()=>{
        let todoUl = document.querySelector("ul");
        //adds only one element not twice as many
        todoUl.innerHTML = ""
        for(let i=0; i < todoList.todos.length; i++){
            let todoLi = document.createElement("li");

            if(todoList.todos[i].completed === true){
                todoLi.textContent = "(x) " + todoList.todos[i].todoText;
            } else {
                todoLi.textContent = "( ) " + todoList.todos[i].todoText;
            }
            
        todoUl.appendChild(todoLi);
        }
    }

}

