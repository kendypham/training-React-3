import Todo from './todo.js';
const inputElement = document.getElementById("inputTodo");
let todo = new Todo();
todo.renderList(todo);
inputElement.addEventListener("keyup", function (e) {
    let list = todo.getList();
    if (e.key === "Enter") {
        let obj = {
            id: list.length,
            value: inputElement.value,
            isComplete: false
        }
        list.push(obj);
        todo.setListValue(list);
        clean();
        todo.renderList(todo);
    }
})

function clean() {
    inputElement.value = "";
}

document.getElementById('btnAll').addEventListener('click', function () {
    todo.showAll()
})
document.getElementById('btnComplete').addEventListener('click', function () {
    todo.showCompleted()
})



