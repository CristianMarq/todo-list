import "./styles.css";

import { TodoClass, TodoList } from "./classes";
import { crearTodoHtml } from "./js/componentes";

export const todoList = new TodoList();

todoList._todos.forEach((element) => crearTodoHtml(element));
