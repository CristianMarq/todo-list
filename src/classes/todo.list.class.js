export class TodoList {
  _todos;

  constructor() {
    this._todos = [];
  }

  nuevoTodo(todo) {
    this._todos.push(todo);
  }

  eliminarTodo(id) {}

  marcarCompletado(id) {}

  eliminarCompletados() {}
}
