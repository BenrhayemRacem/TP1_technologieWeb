
var Text = document.querySelector(".row").firstElementChild ;
var Size = document.getElementById("Size").addEventListener('change',function(){
    Text.style.fontSize = this.value+"px";
}) ;

var Font = document.getElementById("Font").addEventListener('change',function(){
    switch(this.value) {
            
        case "1":   Text.style.fontFamily = "Time New Roman"; break;
        case "2" :  Text.style.fontFamily = "Agency FB"; break ;
        case "3": Text.style.fontFamily = "Courier"; break;
        default : break ;
    } }) ;


var Color = document.getElementById("Color").addEventListener('change',function(){
    Text.style.color = this.value ; }) ;



          


