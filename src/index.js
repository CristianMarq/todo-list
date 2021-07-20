import "./styles.css";

import { TodoClass, TodoList } from "./classes";

const todoList = new TodoList();
const todo = new TodoClass("Aprender react Js");
const todo2 = new TodoClass("Aprender ingles");

todoList.nuevoTodo(todo);
todoList.nuevoTodo(todo2);

console.log(todoList);
