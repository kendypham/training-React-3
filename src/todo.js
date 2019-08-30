class Todo {
  constructor (arrayList = [], eleHtml = []) {
    this.arrayList = arrayList
    this.eleHtml = eleHtml
  }

  setListValue (value) {
    this.arrayList = value
    this.storeData(value)
  }

  setEleValue (value) {
    this.eleHtml = value
  }

  // get element to hanlde event click
  getEleHtml () {
    const edit = document.getElementsByClassName('btn-edit')
    const save = document.getElementsByClassName('btn-save')
    const cancel = document.getElementsByClassName('btn-cancel')
    const remove = document.getElementsByClassName('btn-remove')
    const undoLet = document.getElementsByClassName('btn-undo')
    const list = [edit, save, cancel, remove, undoLet]
    this.setEleValue(list)
    const that = this
    for (const key of list[0]) {
      key.addEventListener('click', function () {
        const id = (this.getAttribute('idbutton'))
        that.editItem(id)
      })
    }

    for (const key of list[1]) {
      key.addEventListener('click', function () {
        const id = (this.getAttribute('idbutton'))
        that.saveEdit(id)
      })
    }

    for (const key of list[2]) {
      key.addEventListener('click', function () {
        const id = (this.getAttribute('idbutton'))
        that.cancelSave(id)
      })
    }

    for (const key of list[3]) {
      key.addEventListener('click', function () {
        const id = (this.getAttribute('idbutton'))
        that.removeItem(id)
      })
    }

    for (const key of list[4]) {
      key.addEventListener('click', function () {
        const id = (this.getAttribute('idbutton'))
        that.undo(id)
      })
    }
  }

  getList () {
    const arrObj = JSON.parse(localStorage.getItem('items'))
    if (!arrObj) {
      return []
    }
    const list = [...arrObj]
    list.sort(function (a, b) {
      return a.id - b.id
    })
    this.setListValue(list)
    return list
  }

  // render list completed
  renderCompleted () {
    let str = ''
    const list = this.getList()
    const element = list.map((item, index) => {
      if (item.isComplete) {
        return `<li class="list-group-item" 
                        id="${item.id}">${item.value} 
                        <button class="float-right fas fa-undo btn btn-info btn-undo" 
                        idbutton="${item.id}">
                        </button></li>`
      }
    })
    element.forEach(item => {
      if (item !== undefined) { str += item }
    })
    document.getElementById('list-item').innerHTML = str
    this.getEleHtml()
  }

  // render list task to do
  renderList () {
    const list = this.getList()
    let str = ''
    const element = list.map((item, index) => {
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
    element.forEach(item => {
      if (item !== undefined) { str += item }
    })
    document.getElementById('list-item').innerHTML = str
    this.getEleHtml()
  }

  // remove item from list
  removeItem (id) {
    const list = this.getList()
    list.find(item => {
      if (item.id === parseInt(id)) {
        item.isComplete = !item.isComplete
      }
    })
    this.setListValue(list)
    this.storeData(list)
    this.renderList()
  }

  // edit item
  editItem (id) {
    const list = this.getList()
    const item = list.find(item => {
      if (item.id === parseInt(id)) { return item }
    })
    document.getElementById(item.id).innerHTML = `<input id="input${item.id}" value="${item.value}"/>
                                                        <button class="float-right btn btn-success ml-2 btn-save" 
                                                        idbutton="${item.id}">Save
                                                        </button>
                                                        <button class="float-right  btn btn-primary btn-cancel" 
                                                        idbutton="${item.id}">Cancel
                                                        </button>`
    this.getEleHtml()
  }

  // cancel save button when edit
  cancelSave (id) {
    const list = this.getList()
    const item = list.find(item => {
      if (item.id === parseInt(id)) { return item }
    })
    document.getElementById(item.id).innerHTML = `${item.value} 
                                                    <button class="float-right fas fa-trash btn btn-danger ml-2 btn-remove" 
                                                    idbutton="${item.id}">
                                                    </button>
                                                    <button class="float-right fas fa-pencil-alt btn btn-warning btn-edit" 
                                                    idbutton="${item.id}">
                                                    </button>`
    this.getEleHtml()
  }

  // button save when edit
  saveEdit (id) {
    const list = this.getList()
    const item = list.find(item => {
      if (item.id === parseInt(id)) { return item }
    })
    const pos = list.indexOf(item)
    item.value = document.getElementById(`input${item.id}`).value
    list.splice(pos, 1, item)
    this.setListValue(list)
    this.storeData(list)
    document.getElementById(item.id).innerHTML = `${item.value} 
                                                    <button class="float-right fas fa-trash btn btn-danger ml-2 btn-remove" 
                                                    idbutton="${item.id}">
                                                    </button>
                                                    <button class="float-right fas fa-pencil-alt btn btn-warning btn-edit" 
                                                    idbutton="${item.id}">
                                                    </button>`
    this.getEleHtml()
  }

  undo (id) {
    const list = this.getList()
    list.forEach(item => {
      if (item.id === parseInt(id)) {
        item.isComplete = !item.isComplete
      }
    })
    this.storeData(list)
    this.renderCompleted()
  }

  showCompleted () {
    this.renderCompleted()
  }

  showAll () {
    this.renderList()
  }

  storeData (list) {
    list.sort(function (a, b) {
      return a.id - b.id
    })
    localStorage.setItem('items', JSON.stringify(list))
  }
}

export default Todo
