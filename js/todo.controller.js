function TodoController(TodoService) {
  const ctrl = this
  ctrl.newTodo = ''
  function getTodos () {
    TodoService
      .retrieve()
      .then((response) => ctrl.list = response)
  }
  ctrl.list = []
  ctrl.addTodo = () => {
    if (!ctrl.newTodo) {
      return;
    }
    TodoService
      .create({
        title: ctrl.newTodo,
        completed: false
      }).then((response) => {
        ctrl.list.unshift(response)
        ctrl.newTodo = ''
      })
  }
  ctrl.removeTodo = (item, index) => {
    TodoService
      .remove(item)
      .then((response) => ctrl.list.splice(index, 1))
  }
  ctrl.updateTodo = (item, index) => {
    if (!item.title) {
      ctrl.removeTodo(item, index)
      return
    }
    TodoService.update(item)
  }
  ctrl.getRemaining = () => ctrl.list.filter((item) => !item.completed)
  ctrl.toggleState = (item) => {
    TodoService
      .update(item)
      .then(function () {

      }, function () {
        item.completed = !item.completed
      })
  }
  getTodos()
}

angular
  .module('app')
  .controller('TodoController', TodoController)
