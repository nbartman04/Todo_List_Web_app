
//declaring new global variable for the clear function
let clear = document.getElementsByClassName('clear')


// function for creating new items
function newItem(){

    // create a new li element
    let li = document.createElement("li");

    // link it by ID tag for the user input 
    let userInput = document.getElementById("todoInput").value;

    //store the string input in to a variable 
    let text = document.createTextNode(userInput)

    //adds the test from above to the li variable
    li.appendChild(text)

    // adds the list item on the li, but calling the ID tag and li from above 
    document.getElementById("todoUL").appendChild(li)

    //declared two new variables
    let span = document.createElement("span");
    let spanTxt = document.createTextNode('\u00D7');
    span.appendChild(spanTxt);

    // add the clear class to the page
    span.className = "clear"

    //Appending the <span>x</span> to each of the new <li> tag
    li.appendChild(span)

    for(let i=0)
    [1,2,3,4,5,6]

}

