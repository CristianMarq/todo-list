import { TodoClass } from "../classes";
import { todoList } from "../index";

// Referencias al html
const divTodoList = document.querySelector(".todo-list");
const inputTodo = document.querySelector(".new-todo");

const stringToHtml = (string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(string, "text/html");
  return doc.body.firstChild;
};

export const crearTodoHtml = (todo) => {
  const todoHtml = stringToHtml(
    `<li class="${todo._completado ? "completed" : ""}" data-id="${todo._id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${
          todo._completado ? "checked" : ""
        }>
        <label>${todo._tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li>`
  );

  divTodoList.append(todoHtml);

  return todoHtml;
};

//Eventos
inputTodo.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && inputTodo.value.length > 0) {
    const nuevoTodo = new TodoClass(inputTodo.value);
    todoList.nuevoTodo(nuevoTodo);
    crearTodoHtml(nuevoTodo);

    inputTodo.value = "";
  }
});

divTodoList.addEventListener("click", (event) => {
  const nombreElemento = event.target.localName;
  const todoElemento = event.target.parentElement.parentElement;
  const todoId = todoElemento.getAttribute("data-id");

  if (nombreElemento.includes("input")) {
    todoList.marcarCompletado(todoId);
    todoElemento.classList.toggle("completed");
  }

  console.log(todoList);
});
