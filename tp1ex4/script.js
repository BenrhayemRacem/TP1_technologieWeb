const ul = document.querySelector("ul");

ul.addEventListener("click" , (e)=> {
    changeRandomColor(e.target);
})

function changeRandomColor(element) {

    var randomColor = Math.floor(Math.random() *16777216);
    element.style.color = "#"+randomColor.toString(16) ;
}