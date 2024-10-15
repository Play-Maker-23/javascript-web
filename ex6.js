let form1 = document.getElementById("form1");
form1.addEventListener("submit", function(event){
    let err = document.getElementById("erreur");
    let nom = document.getElementById("nom");
    let reg = /^[a-zA-Z-\s]+$/;
if(nom.value.trim()==""){
    err.textContent= "le champ ne peut pas etre vide";
    err.style.color = "#ff0000";
    event.preventDefault();

}
else if(reg.test(nom.value)== false){
    err.textContent="le champ ne peut contenir que des lettres alphebetiques et des espaces.";
    err.style.color = "#ff0000";
    event.preventDefault();
}else{
    err.textContent = "ok";
}
});