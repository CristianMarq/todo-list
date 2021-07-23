import { todoList } from "..";

export class TodoList {
  // _todos;

  constructor() {
    // this._todos = [];
    this.cargarLocalStorage();
  }

  nuevoTodo(todo) {
    this._todos.push(todo);
    this.guardarLocalStorage();
  }

  eliminarTodo(id) {
    this._todos = this._todos.filter((todo) => todo._id != id);
    this.guardarLocalStorage();
  }

  marcarCompletado(id) {
    for (const todo of this._todos) {
      if (todo._id == id) {
        todo._completado = !todo._completado;
        this.guardarLocalStorage();
        break;
      }
    }
  }

  eliminarCompletados() {
    this._todos = this._todos.filter((todo) => !todo._completado);
    this.guardarLocalStorage();
  }

  guardarLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(this._todos));
  }

  cargarLocalStorage() {
    this._todos = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
  }
}
