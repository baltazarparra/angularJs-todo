function todoApp() {
  return {
    restrict: 'E',
    controller: 'TodoController as todo',
    template: `
        <div class="todo">
          <form class="todo__form" ng-submit="todo.addTodo()">
            <input type="text" placeholder="Digita os bang que vc tem pa faze" ng-model="todo.newTodo">
          </form>
          <ul class="todo__list">
            <li ng-repeat="item in todo.list">
              <input
                id="todo-{{$index}}"
                type="checkbox"
                ng-model="item.completed"
                ng-change="todo.toggleState(item)">
              <label class="toggle" for="todo-{{$index}}"></label>
              <p ng-dblclick="showEditField = true" ng-hide="showEditField">
                {{item.title}}
              </p>
              <div ng-show="showEditField">
                <input
                  type="text"
                  ng-model="item.title"
                  ng-blur="todo.updateTodo(item, $index); showEditField = false;"
                  todo-autofocus="showEditField">
              </div>
              <a href="" ng-click="todo.removeTodo(item, $index)">
                &#215;
              </a>
            </li>
          </ul>
          <p class="todo__remaining">
            <span ng-hide="todo.getRemaining().length === 0">
              tu tem uns {{todo.getRemaining().length}} de {{todo.list.length}} bang pa faze
            </span>
            <span ng-show="todo.getRemaining().length === 0">
              Cêé o bixaum memo hen doido!
            </span>
          </p>
        </div>
        <small>*clica duas vez pa edita</small>
    `
  };
}

angular
  .module('app')
  .directive('todoApp', todoApp)
