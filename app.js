let todo = [];

while (true) {
    let req = prompt("Please enter your request (add, list, quit): ");

    if (req === "quit") {
        console.log("Quitting app");
        break;
    } else if (req === "list") {
        console.log("____________");
         for(let i =0;i<todo.length;i++){
            console.log(i+1,todo[i]);

         }
        console.log("____________");
    } else if (req === "add") {
        let task = prompt("Please enter the task you want to add: ");
        todo.push(task);
        console.log("Task added");

    
    
    }
    else if(req=="delete") {
        let idx= prompt("plese enter teh task to delete");
        todo.splice(idx,1);
        console.log("task delted");


    }
    else {
        console.log("Invalid command. Please enter 'add', 'list', or 'quit','delete.");
    }
}