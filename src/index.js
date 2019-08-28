var arrayList = [];
var completed = [];
var test = []
var inputElement = document.getElementById("inputTodo");
renderList(arrayList);
function storeData() {
    localStorage.setItem("items", JSON.stringify(arrayList))
    localStorage.setItem("complete", JSON.stringify(completed))
}
//add item to list
inputElement.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        let obj = {
            id: arrayList.length,
            value: inputElement.value
        }
        arrayList.push(obj);
        storeData()
        clean()
        renderList(arrayList);
    }
})
//remove item from list
removeItem = (id) => {
    let item = arrayList.find(item => {
        if (item.id === id)
            return item
    });
    completed.push(item);
    arrayList.splice(id, 1);
    storeData()
    renderList(arrayList)
}

//edit item
editItem = (id) => {
    let item = arrayList.find(item => {
        if (item.id === id)
            return item
    })
    document.getElementById(item.id).innerHTML = `<input id="input${item.id}" value="${item.value}"/>
    <button class="float-right btn btn-success ml-2" 
    onclick="saveEdit(${item.id})">Save
    </button>
    <button class="float-right  btn btn-primary" 
    onclick="cancelSave(${item.id})">Cancel
    </button>`
}

cancelSave = (id) => {
    let item = arrayList.find(item => {
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

saveEdit = (id) => {
    let item = arrayList.find(item => {
        if (item.id === id)
            return item
    })
    item.value = document.getElementById(`input${item.id}`).value;
    arrayList.splice(id,1,item);
    storeData();
    document.getElementById(item.id).innerHTML = `${item.value} 
    <button class="float-right fas fa-trash btn btn-danger ml-2" 
    onclick="removeItem(${item.id})">
    </button>
    <button class="float-right fas fa-pencil-alt btn btn-warning" 
    onclick="editItem(${item.id})">
    </button>`
}

//render list
function renderList(list) {
    let arrObj = JSON.parse(localStorage.getItem("items"));
    if(arrObj != null){
        list = [...arrObj];
    }
  
    test = list.map((item, index) => {
        return `<li class="list-group-item" 
        id="${item.id}">${item.value} 
        <button class="float-right fas fa-trash btn btn-danger ml-2" 
        onclick="removeItem(${item.id})">
        </button>
        <button class="float-right fas fa-pencil-alt btn btn-warning" 
        onclick="editItem(${item.id})">
        </button></li>`
    })
    let str = "";
    test.forEach(item => {
        str += item
    })
    document.getElementById("list-item").innerHTML = str
}

function clean() {
    inputElement.value = ""
}


showCompleted = () => {
    console.log(completed);
    
    renderList(completed)
}
