import { todoList } from "..";

export class TodoList {
  _todos;

  constructor() {
    this._todos = [];
  }

  nuevoTodo(todo) {
    this._todos.push(todo);
  }

  eliminarTodo(id) {}

  marcarCompletado(id) {
    for (const todo of this._todos) {
      if (todo._id == id) {
        todo._completado = !todo._completado;
        break;
      }
    }
  }

  eliminarCompletados() {}
}
