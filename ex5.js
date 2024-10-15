let button = document.getElementById("MyButton");
let divi=document.getElementById("div1")
button.addEventListener("click", function(){
    let nouvellP = document.createElement("h1");
    nouvellP.textContent="nouvelle P";
    divi.appendChild(nouvellP);
    nouvellP.style.color="red";
});