// sursa de date pe care o primim impreuna cu imaginile din directorul img
const images = [
    { "src": "./img/img1.jpg", "alt": "1 Nature" },
    { "src": "./img/img2.jpg", "alt": "2 Fjords" }, 
    { "src": "./img/img3.jpg", "alt": "3 Mountains" },
    { "src": "./img/img4.jpg", "alt": "4 Lights" }
];

var bilute = document.querySelector(".meniu");
var bInainte = document.getElementById('inainte');
var bInapoi = document.getElementById('inapoi');
var index = 0;

function showImage(image){
    document.getElementById('slide').src = images[image].src;
    document.getElementById('slide').alt = images[image].alt;
    if (index === 0)
        bInapoi.style.display = 'none'
    else if (index === images.length-1)
        bInainte.style.display = 'none'
}
function createBiluta(tag,bTitle,bClass){
    var t2 = document.createElement(tag);
    t2.className = bClass;
    t2.title = bTitle;
    bilute.appendChild(t2);
}

for (var i=0; i<images.length; i++){
    createBiluta('span', images[i].alt, 'biluta'); 
}

window.addEventListener("load", ()=> showImage(index));

bInainte.addEventListener("click", ()=> {
    if (index < images.length - 1)
        showImage(++index);
 } );

bInapoi.addEventListener("click", ()=> {
    if (index > 0) 
        showImage(--index);
 } );
