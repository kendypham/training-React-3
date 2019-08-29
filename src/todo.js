class Todo {
    constructor(arrayList = [], eleHtml = []) {
        this.arrayList = arrayList;
        this.eleHtml = eleHtml;
    }
    setListValue = (value) => {
        this.arrayList = value;
        this.storeData(value);
    }


    setEleValue = (value) => {
        this.eleHtml = value
    }

    getEleHtml = () => {
        let list = [];
        let edit = document.getElementsByClassName("btn-edit");
        let save = document.getElementsByClassName("btn-save");
        let cancel = document.getElementsByClassName("btn-cancel");
        let remove = document.getElementsByClassName("btn-remove");
        let undoLet = document.getElementsByClassName("btn-undo");
        list = [edit,save,cancel,remove,undoLet];
        this.setEleValue(list);
      
        for (let key of list[0]) {
            console.log("key edit",key);
            let that = this;
            key.addEventListener('click', function () {
                let id = (this.getAttribute('idbutton'));
                console.log("that",that);
                
                that.editItem(id);              
            })
        }
            
        for (let key of list[1]) {
            console.log("key save",key)
            let that = this;
            key.addEventListener('click', function () {
                let id = (this.getAttribute('idbutton'));
                that.saveEdit(id);      
            })
        }
            
        for (let key of list[2]) {
            console.log("key cancel",key)
            let that = this;
            key.addEventListener('click', function () {
                let id = (this.getAttribute('idbutton'));
                that.cancelSave(id);         
            })
        }
        
        for (let key of list[3]) {
            let that = this;
            key.addEventListener('click', function () {
                let id = (this.getAttribute('idbutton'));
               that.removeItem(id);
              
            }) 
        }
        
        for (let key of list[4]) { 
            let that = this; 
            key.addEventListener('click', function () {  
                let id = (this.getAttribute('idbutton')); 
                that.undo(id); 
            })     
        }
    }

    getList = () => {
        let list = [];
        let arrObj = JSON.parse(localStorage.getItem("items"));
        if (arrObj != null) {
            list = [...arrObj];
            list.sort(function (a, b) {
                return a.id - b.id;
            });
            this.setListValue(list);
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
                        <button class="float-right fas fa-undo btn btn-info btn-undo" 
                        idbutton="${item.id}">
                        </button></li>`
            }
        })
        test.forEach(item => {
            if(item !== undefined)
                str += item
        })
        document.getElementById("list-item").innerHTML = str;
        this.getEleHtml();
    }
    //render list task to do
    renderList = () => {
        let list = this.getList();
        let str = "";
        let test = [];
        test = list.map((item, index) => {
            if (!item.isComplete) {
                return `<li class="list-group-item" 
                        id="${item.id}">${item.value} 
                        <button class="float-right fas fa-trash btn btn-danger ml-2 btn-remove" 
                        idbutton="${item.id}">
                        </button>
                        <button class="float-right fas fa-pencil-alt btn btn-warning btn-edit" 
                         idbutton="${item.id}">
                        </button></li>`
            }
        })
        test.forEach(item => {
            if(item !== undefined)
                str += item
        })     
        document.getElementById("list-item").innerHTML = str;
        this.getEleHtml();
    }


    //remove item from list
    removeItem = (id) => {
        let list = this.getList();
        list.find(item => {
            if (item.id === parseInt(id)) {
                item.isComplete = !item.isComplete
            }
        });
        this.setListValue(list);
        this.storeData(list);
        this.renderList();
    }

    //edit item
    editItem = (id) => {
        let list = this.getList();
        let item = list.find(item => {
            if (item.id === parseInt(id))
                return item
        })
        document.getElementById(item.id).innerHTML = `<input id="input${item.id}" value="${item.value}"/>
                                                        <button class="float-right btn btn-success ml-2 btn-save" 
                                                        idbutton="${item.id}">Save
                                                        </button>
                                                        <button class="float-right  btn btn-primary btn-cancel" 
                                                        idbutton="${item.id}">Cancel
                                                        </button>`
        this.getEleHtml();
    }

    //cancel save button when edit
    cancelSave = (id) => {
        let list = this.getList();
        let item = list.find(item => {
            if (item.id === parseInt(id))
                return item
        })
        document.getElementById(item.id).innerHTML = `${item.value} 
                                                    <button class="float-right fas fa-trash btn btn-danger ml-2 btn-remove" 
                                                    idbutton="${item.id}">
                                                    </button>
                                                    <button class="float-right fas fa-pencil-alt btn btn-warning btn-edit" 
                                                    idbutton="${item.id}">
                                                    </button>`
        this.getEleHtml();
    }

    //button save when edit
    saveEdit = (id) => {
        let list = this.getList();
        let item = list.find(item => {
            if (item.id === parseInt(id))
                return item
        })
        let pos = list.indexOf(item)
        item.value = document.getElementById(`input${item.id}`).value;
        list.splice(pos, 1, item);
        this.setListValue(list);
        this.storeData(list);
        document.getElementById(item.id).innerHTML = `${item.value} 
                                                    <button class="float-right fas fa-trash btn btn-danger ml-2 btn-remove" 
                                                    idbutton="${item.id}">
                                                    </button>
                                                    <button class="float-right fas fa-pencil-alt btn btn-warning btn-edit" 
                                                    idbutton="${item.id}">
                                                    </button>`
        this.getEleHtml();
    }



    undo = (id) => {
        console.log("undo id",id);
        
        let list = this.getList();
        list.forEach(item => {
            if (item.id === parseInt(id)) {
                item.isComplete = !item.isComplete

            }
        })
        this.storeData(list);
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

export default Todo;