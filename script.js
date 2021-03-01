const itemsList = document.getElementById('list-item');

let styleDark = "list-group-item list-group-item-dark";
let stylePrimary = "list-group-item list-group-item-primary";
let styleGreen = "list-group-item list-group-item-success";

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
    save();
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
        this.style.textDecoration = "line-through";
        this.style.color = "red";
        this.style.textShadow = "0px 0px 15px #ff0000";

    } else {
        this.style.fontWeight = "normal";
        this.style.textDecoration = "none";
        this.style.textDecorationColor = "normal";
        this.style.color = "black";
        this.style.textShadow = "none"
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


var storedItems = localStorage.getItem("storedItems");

function save() {
    var list = document.getElementsByTagName("dl");
    let savedList = [];
    for (i = 0, len = list.length; i < len; i++) {
        console.log(`this is the item list ${list[i].innerHTML}`);
        savedList[i] = list[i].innerHTML;
    }

    localStorage.setItem("storedItems", savedList)

}

function get() {
    if (storedItems !== null) {
        var list = document.getElementsByTagName("dl");
        let loadList = storedItems.split(",");
        for (let i = 0; i < loadList.length; i++) {
            let tag = document.createElement("dl");
            tag.innerHTML = loadList[i]
            itemsList.append(tag);
            var list = document.getElementsByTagName("dl");
            click(list);

        }
    }
}

function reset() {
    localStorage.clear();
    window.location.reload();
}

var selectOption = 'list-group-item';
$('#color-style').change(function () {
    $('dl').removeClass(selectOption).addClass($(this).val());
    selectOption += $(this).val();
})