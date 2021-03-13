

function addToDo() {
    
    let name = document.getElementById('name').value;
let content= document.getElementById('content').value;

let inputs = document.querySelectorAll('input'); 
 inputs.forEach(input =>  input.value = ''); 
let node=document.querySelector(".list-group");
let newNode = document.createElement("a");
let inside = document.createTextNode(String(name)+':'+String(content));
    newNode.appendChild(inside);
    newNode.classList.add("list-group-item");
    newNode.classList.add("list-group-item");
    node.appendChild(newNode); 
    

}
document.querySelector("button").addEventListener("click" , addToDo());
 var node=document.querySelector(".list-group");

  node.addEventListener('click', (e) => {node.removeChild(e.target);});