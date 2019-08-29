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

let edit = document.getElementsByClassName("btn-edit");
for (let key of edit) {
    key.addEventListener('click', function () {
        let id = (this.getAttribute('idbutton'));
        todo.editItem(id)
    })

}

let remove = document.getElementsByClassName("btn-remove");
for (let key of remove) {
    key.addEventListener('click', function () {
        let id = (this.getAttribute('idbutton'));
        todo.removeItem(id)
    })

}

let undoLet = document.getElementsByClassName("btn-undo");
console.log(undoLet);


for (let key of undoLet) {
    
    key.addEventListener('click', function () {
       
        
        let id = (this.getAttribute('idbutton'));
        console.log("chay vo day");
        
        todo.undo(id)
    })

}

let save = document.getElementsByClassName("btn-save");
for (let key of save) {
    key.addEventListener('click', function () {
        let id = (this.getAttribute('idbutton'));
        todo.saveEdit(id)
    })

}

let cancel = document.getElementsByClassName("btn-cancel");
for (let key of cancel) {
    key.addEventListener('click', function () {
        let id = (this.getAttribute('idbutton'));
        todo.cancelSave(id)
    })

}