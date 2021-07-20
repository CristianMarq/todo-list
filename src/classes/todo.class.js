export class TodoClass {
  _id;
  _tarea;
  _completado;
  _creado;

  constructor(tarea) {
    this._tarea = tarea;
    this._id = new Date().getTime();
    this._completado = false;
    this._creado = new Date();
  }
}
