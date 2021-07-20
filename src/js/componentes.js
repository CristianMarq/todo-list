// Referencias al html
const divTodoList = document.querySelector(".todo-list");

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
