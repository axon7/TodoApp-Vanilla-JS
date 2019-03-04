let todoList = {
    todos: [],

    displayTodos(){
        if(this.todos.length ===0){
            console.log("Your list is empty, please add some");
        } else {
            for(let i=0; i < this.todos.length ;i++){

                if(this.todos[i].completed){
                    console.log("(X)  " + this.todos[i].todoText);

                } else {
                    console.log("( )  " + this.todos[i].todoText);
                }

            }
        }
    },
    addTodo(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo(position, todoText){
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo(position){
        this.todos.splice(position,1)
        this.displayTodos();
    },
    toggleCompleted(position){
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
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

        this.displayTodos();
        
    }
}




let handlers = {
    displayTodos: ()=>{
        todoList.displayTodos();
    },
    toggleAll: ()=>{
        todoList.toggleAll();
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
        todoList.changeTodo(positionSelect.value,changeInput.value)
        changeInput.value = "";
    },
    deleteTodo:()=>{
        let deleteSelect = document.getElementById("deleteSelect");
        todoList.deleteTodo(deleteSelect.value)
        todoList.displayTodos();
    },
    toggleTodo: ()=>{
        let toggleSelect = document.getElementById("toggleSelect");
        todoList.toggleCompleted(toggleSelect.value);
    }

}


let view = {
    displayTodos: ()=>{
        let todoUl = document.querySelector("ul");
        //adds only one element not twice as many
        todoUl.innerHTML = ""
        for(let i=0; i < todoList.todos.length; i++){
            let todoLi = document.createElement("li");
            todoLi.textContent = todoList.todos[i].todoText + todoList.todos[i].completed
            todoUl.appendChild(todoLi);
        }
    }

}

