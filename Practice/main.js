function changeBackround(color,target){
    var element = document.getElementById(target);
    element.style.backgroundColor = color;
}
var text = "";

document.getElementById("word")
    .addEventListener("focus", (event) => {
        //console.dir(this);
        event.target.style.backgroundColor = "yellow"}
);

document.getElementById("word").addEventListener("keypress", (event)=> text = text + event.key)

document.getElementById("word")
    .addEventListener("focusout", (event) => {
        event.target.value = text.toUpperCase();//event.target.value.toUpperCase();
        //console.dir(text.toUpperCase());
    }
);