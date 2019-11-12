let clear = document.getElementsByClassName("clear");
let todoList = document.querySelector("ul");

let todos = [];

todoList.addEventListener("click", function(ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
  }
});

function newElement() {
  let li = document.createElement("li");
  let userInput = document.getElementById("todoInput").value;
  let text = document.createTextNode(userInput);
  li.appendChild(text);

  if (userInput === "") {
    alert("You must write something!");
  } else {
    document.getElementById("todoUL").appendChild(li);
    saveToLocalStorage(userInput);
  }

  document.getElementById("todoInput").value = "";

  // create the x using a span
  let span = document.createElement("span");
  let spanTxt = document.createTextNode("\u00D7");
  span.appendChild(spanTxt);
  span.className = "clear";

  // Appending the <span>x</span> to each new <li> tag
  li.appendChild(span);

  for (let i = 0; i < clear.length; i++) {
    clear[i].onclick = function() {
      let liParent = this.parentElement;
      liParent.style.display = "none";
    };
  }
}

saveToLocalStorage = todo => {
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

window.onload = () => {
  if(localStorage.getItem("todos") !== null){
    todos = JSON.parse(localStorage.getItem("todos"));
    renderTodo();
  }
};

renderTodo = () => {

  for (todo of todos) {
    console.log(todo);
    let li = document.createElement("li");
    let text = document.createTextNode(todo);
    li.appendChild(text);
    document.getElementById("todoUL").appendChild(li);


    // create the x using a span
    let span = document.createElement("span");
    let spanTxt = document.createTextNode("\u00D7");
    span.appendChild(spanTxt);
    span.className = "clear";

    // Appending the <span>x</span> to each new <li> tag
    li.appendChild(span);

    for (let i = 0; i < clear.length; i++) {
        clear[i].onclick = function() {
          let liParent = this.parentElement;
          liParent.style.display = "none";
        };
      }

  }
};
