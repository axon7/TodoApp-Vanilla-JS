let todoList = {
    todos: [
        {
            todoText: "hello",
            completed: true
        },
        {
            todoText: "hi",
            completed: true
        }
    ],
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


// let displayButton = document.getElementById("displayButton");
// displayButton.addEventListener("click", ()=>{
//     todoList.displayTodos();
// });

// let toggleButton = document.getElementById("toggleAllButton");
// toggleButton.addEventListener("click", ()=>{
//     todoList.toggleAll();
// })

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
    }
}

