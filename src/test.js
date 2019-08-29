import Todo from './todo.js';
var inputElement = document.getElementById("inputTodo");
const test = new Todo();
test.renderList();
//add item to list
inputElement.addEventListener("keyup", function (e) {
   
    
    let list = test.getList();
    console.log("list",list);
    if (e.key === "Enter") {
        let obj = {
            id: list.length,
            value: inputElement.value,
            isComplete : false
        }
        list.push(obj);
        test.setListValue(list);
        clean();
        test.renderList();
    }
})

function clean() {
    inputElement.value = "";
}
