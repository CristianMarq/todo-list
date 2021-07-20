export class TodoClass {
  _id;
  _tarea;
  _creado;

  constructor(tarea) {
    this._tarea = tarea;
    this._id = new Date().getTime();
    this._creado = new Date();
  }
}
