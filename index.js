// First we get the references to all dom elements
let input = document.getElementById("input");
let todolist = document.getElementById("list");

// Then we create a global array to store all ToDo's that are added
let listArray = [];

function deleleRow( i ) {
  listArray.splice( i, 1 );
    loadList();
}

function editRow( i ) {
    var txt = prompt("Enter updated ToDo: ");
    listArray.splice( i, 1, txt );
    loadList();
}


/*
    Here, I am not using innerHtml for the entire block because, the first span: desc will contain 
    input from the user. So it is not safe to directly put that into innerHTML. But the buttons do
    not have any such issue, so I am using innerHTML here so that we can easily pass params.
 */
function loadList() {
    todolist.innerHTML="";
    for (var i = 0; i < listArray.length; i++) {
        let todo = document.createElement('div');
        todo.className = 'todo';

        let desc = document.createElement('span');
        desc.className = 'desc';
        desc.textContent = listArray[i];

        let editB = document.createElement('span');
        editB.innerHTML = `
            <button class="edit" onclick="editRow( ${i} )">Edit</button>
        `;

        let delB = document.createElement('span');
        delB.innerHTML = `
            <button class="del" onclick="deleleRow( ${i} )" data-index="0">Delete</button>
        `;

        todo.appendChild(desc);
        todo.appendChild(editB);
        todo.appendChild(delB);

        todolist.appendChild(todo);
    }
}

function addRow() {
    txt = input.value;
    if (txt !== "") {
        listArray.push( txt );
        input.value = "";
        loadList();
    }
    else{
        if (txt === '') {
            alert("You must write something!");
          } 
        
    }
}

loadList();