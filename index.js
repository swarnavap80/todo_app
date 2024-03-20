const input = document.getElementById("input-box");
const list_con = document.getElementById("list-con");
const btn = document.getElementById("btn")


function submit() {
    if(input.value === '') {
        alert("You must add some task!")
    }else {
        let li = document.createElement("li")
        li.innerHTML = input.value;
        list_con.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
    saveData();
    
}

list_con.addEventListener("click", function(e) {
      if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData();
      }else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
      }
}, false)

function saveData() {
    localStorage.setItem("data", list_con.innerHTML);
}
function getData() {
    list_con.innerHTML = localStorage.getItem("data");
}
getData();