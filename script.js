const itemsList = document.getElementById('list-item');

function add() {
    let newItem = document.getElementById('input-item').value;
    let tag = document.createElement("dl");
    if (newItem != null && newItem !== '') {
        tag.innerHTML = `${newItem}<span id="btn" class = 'todo-delete' value = clicks onclick = 'deleteToDo(this.parentElement)'>x</span>`
        itemsList.append(tag);
        var list = document.getElementsByTagName("dl");
        click(list);
        document.getElementById('input-item').value = ""
    } else {
        alert("Enter an item name!")
    }
}


function click(list) {
    for (i = 0, len = list.length; i < len; i++) {
        list[i].onclick = markSelection;
    }
}

var list = document.getElementsByTagName("dl");
click(list);


function markSelection() {
    if (this.style.fontWeight !== "lighter") {
        this.style.fontWeight = "lighter";
        this.style.backgroundColor = "#ccf3ff";
        this.style.textDecoration = "line-through";
        this.style.color = "rgb(169, 169, 169)";

    } else {
        this.style.fontWeight = "normal";
        this.style.backgroundColor = "transparent";
        this.style.textDecoration = "none";
        this.style.textDecorationColor = "normal";
        this.style.color = "black";

    }
}

function deleteToDo(element) {

    var result = confirm("Are you sure to delete?");
    if (result) {
        itemsList.removeChild(element)
    } 
}


var input = document.getElementById("input-item");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button-addon1").click();
    }
});