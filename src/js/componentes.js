import { TodoClass } from "../classes";
import { todoList } from "../index";

// Referencias al html
const divTodoList = document.querySelector(".todo-list");
const inputTodo = document.querySelector(".new-todo");
const clearButtom = document.querySelector(".clear-completed");
const ulFilter = document.querySelector(".filters");
const ancorFiltros = document.querySelectorAll(".filtro");

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
  } else if (nombreElemento.includes("button")) {
    todoList.eliminarTodo(todoId);
    divTodoList.removeChild(todoElemento);
  }
});

clearButtom.addEventListener("click", () => {
  todoList.eliminarCompletados();

  for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    const elemento = divTodoList.children[i];
    if (elemento.classList.contains("completed")) {
      divTodoList.removeChild(elemento);
    }
  }
});

ulFilter.addEventListener("click", (event) => {
  const filtro = event.target.text;
  if (!filtro) {
    return;
  }

  ancorFiltros.forEach((elemnt) => elemnt.classList.remove("selected"));

  event.target.classList.add("selected");

  for (const elemento of divTodoList.children) {
    elemento.classList.remove("hidden");
    const completado = elemento.classList.contains("completed");

    switch (filtro) {
      case "Pendientes":
        if (completado) {
          elemento.classList.add("hidden");
        }
        break;
      case "Completados":
        if (!completado) {
          elemento.classList.add("hidden");
        }
        break;
    }
  }
});
