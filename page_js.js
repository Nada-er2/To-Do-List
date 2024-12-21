const inputbox = document.getElementById("input-box");
const listccontainer = document.getElementById("list-container");
function addtask() {
    if (inputbox.value === "") {
        alert('You must write something ! ')
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listccontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // "\u00d7" ==>'X'
        li.appendChild(span);
    }
    inputbox.value = "";
    savedata();
}
listccontainer.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        savedata();
    }
}, false);
function savedata(){
    localStorage.setItem("data", listccontainer.innerHTML);
}
function showtask(){
    listccontainer.innerHTML=localStorage.getItem("data");
}
showtask();