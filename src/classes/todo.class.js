export class TodoClass {
  _id;
  _tarea;
  _completado;
  _creado;

  static fromJson({ _tarea, _id, _completado, _creado }) {
    const tempTodo = new TodoClass(_tarea);
    tempTodo.id = _id;
    tempTodo._completado = _completado;
    tempTodo.creado = _creado;

    return tempTodo;
  }

  constructor(tarea) {
    this._tarea = tarea;
    this._id = new Date().getTime();
    this._completado = false;
    this._creado = new Date();
  }
}
