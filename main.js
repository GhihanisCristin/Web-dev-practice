function CreateElement(node,tag,text){
    var alllist = document.querySelector(node);
    var t2 = document.createElement(tag);
    t2.textContent = text;
    alllist.appendChild(t2);
}
function DeleteElement(parent,child,number){
    var child = document.querySelector(child + ':nth-child(' + number + ')'); 
    var parent = document.querySelector(parent);
    parent.removeChild(child);
}

var alllist = document.getElementsByTagName('li');
for (var i = 0; i < alllist.length; i++){
    if (i%2 === 0)
    alllist[i].style.backgroundColor = "gray";
    else
    alllist[i].style.backgroundColor = "blue";
}