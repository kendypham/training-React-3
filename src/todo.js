class Todo {
    constructor(arrayList = []) {
        this.arrayList = arrayList;
    }
    setListValue(value) {
        this.arrayList = value;
        this.storeData(value);
    }

    getList = () => {
        let list = [];
        let arrObj = JSON.parse(localStorage.getItem("items"));
        if (arrObj != null) {
            list = [...arrObj];
            list.sort(function (a, b) {
                return a.id - b.id;
            });
            this.setListValue(list)
        }
        return list;
    }
    //render list completed
    renderCompleted() {
        let list = this.getList();
        let str = "";
        let test = [];
        test = list.map((item, index) => {
            if (item.isComplete) {
                return `<li class="list-group-item" 
                        id="${item.id}">${item.value} 
                        <button class="float-right fas fa-undo btn btn-info" 
                        onclick="this.undo(${item.id})">
                        </button></li>`
            }
        })
        test.forEach(item => {
            str += item
        })
        document.getElementById("list-item").innerHTML = str
    }
    //render list task to do
    renderList() {
        let list = this.getList();
        let str = "";
        let test = [];
        console.log();
        test = list.map((item, index) => {
            if (!item.isComplete) {
                return `<li class="list-group-item" 
                        id="${item.id}">${item.value} 
                        <button class="float-right fas fa-trash btn btn-danger ml-2" 
                        onclick="this.removeItem(${item.id})">
                        </button>
                        <button class="float-right fas fa-pencil-alt btn btn-warning" 
                        onclick="${this}.editItem(item.id)">
                        </button></li>`
            }
        })
        test.forEach(item => {
            str += item
        })
        document.getElementById("list-item").innerHTML = str
    }


    //remove item from list
    removeItem(id) {
        let list = this.getList();
        let item = list.find(item => {
            if (item.id === id) {
                item.isComplete = !item.isComplete
                return item
            }
        });
        let pos = list.indexOf(item);
        list.splice(pos, 1);
        this.setListValue(list);
        this.storeData(list);
        this.renderList();
    }

    //edit item
    editItem = (id) => {
        
        
        let list = this.getList();
        let item = list.find(item => {
            if (item.id === id)
                return item
        })
        console.log(item);

        // document.getElementById(item.id).innerHTML = `<input id="input${item.id}" value="${item.value}"/>
        //                                                 <button class="float-right btn btn-success ml-2" 
        //                                                 onclick="saveEdit(${item.id})">Save
        //                                                 </button>
        //                                                 <button class="float-right  btn btn-primary" 
        //                                                 onclick="cancelSave(${item.id})">Cancel
        //                                                 </button>`
    }

    //cancel save button when edit
    cancelSave(id) {
        let list = this.getList();
        let item = list.find(item => {
            if (item.id === id)
                return item
        })
        document.getElementById(item.id).innerHTML = `${item.value} 
                                                    <button class="float-right fas fa-trash btn btn-danger ml-2" 
                                                    onclick="removeItem(${item.id})">
                                                    </button>
                                                    <button class="float-right fas fa-pencil-alt btn btn-warning" 
                                                    onclick="editItem(${item.id})">
                                                    </button>`
    }

    //button save when edit
    saveEdit(id) {
        let list = this.getList();
        let item = list.find(item => {
            if (item.id === id)
                return item
        })
        let pos = list.indexOf(item)
        item.value = document.getElementById(`input${item.id}`).value;
        list.splice(pos, 1, item);
        this.setListValue(list);
        this.storeData(list);
        document.getElementById(item.id).innerHTML = `${item.value} 
                                                    <button class="float-right fas fa-trash btn btn-danger ml-2" 
                                                    onclick="removeItem(${item.id})">
                                                    </button>
                                                    <button class="float-right fas fa-pencil-alt btn btn-warning" 
                                                    onclick="editItem(${item.id})">
                                                    </button>`
    }



    undo(id) {
        let list = this.getList();
        list.forEach(item => {
            if (item.id === id) {
                item.isComplete = !item.isComplete

            }
        })
        storeData(list);
        this.renderCompleted();
    }

    showCompleted = () => {
        this.renderCompleted();
    }

    showAll = () => {
        this.renderList();
    }

    storeData(list) {
        list.sort(function (a, b) {
            return a.id - b.id;
        });
        localStorage.setItem("items", JSON.stringify(list))
    }
}

var inputElement = document.getElementById("inputTodo");
let test = new Todo();
test.renderList();
inputElement.addEventListener("keyup", function (e) {
    let list = test.getList();
    if (e.key === "Enter") {
        let obj = {
            id: list.length,
            value: inputElement.value,
            isComplete: false
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