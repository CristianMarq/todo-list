import "./styles.css";

import { TodoClass, TodoList } from "./classes";
import { crearTodoHtml } from "./js/componentes";

const todoList = new TodoList();
const todo = new TodoClass("Aprender react Js");

todoList.nuevoTodo(todo);

console.log(todoList);

crearTodoHtml(todo);
