function addTodo(){
    const inputElement = document.getElementById("inp");
    const todoItem = document.createElement("div")
    const textNode = document.createElement("span");
    textNode.innerHTML = inputElement.value;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
     deleteButton.onclick = function() {
        todoItem.remove();
     };
     todoItem.appendChild(textNode)
     todoItem.appendChild(deleteButton);
    const parentElement = document.getElementById("todos");
    parentElement.appendChild(todoItem);

    inputElement.value = "";
    

}

