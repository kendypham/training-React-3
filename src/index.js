import Todo from './todo.js'
const inputElement = document.getElementById('inputTodo')
const todo = new Todo()
todo.renderList(todo)
inputElement.addEventListener('keyup', function (e) {
  const list = todo.getList()
  if (e.key === 'Enter') {
    const obj = {
      id: list.length,
      value: inputElement.value,
      isComplete: false
    }
    list.push(obj)
    todo.setListValue(list)
    clean()
    todo.renderList(todo)
  }
})

function clean () {
  inputElement.value = ''
}

document.getElementById('btnAll').addEventListener('click', function () {
  todo.showAll()
})
document.getElementById('btnComplete').addEventListener('click', function () {
  todo.showCompleted()
})
