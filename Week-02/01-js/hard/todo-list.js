/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  add = function (todo) {
    this.todos.push(todo);
  };
  remove = function (idx) {
    if (idx >= this.todos.length) return this.todos;
    this.todos.splice(idx, 1);
  };
  update = function (idx, updatedTodo) {
    if (idx >= this.todos.length) return;
    this.todos[idx] = updatedTodo;
  };
  getAll = function () {
    return this.todos;
  };
  get = function (idx) {
    if (idx >= this.todos.length) return null;
    return this.todos[idx];
  };
  clear = function () {
    this.todos = [];
  };
}

module.exports = Todo;
