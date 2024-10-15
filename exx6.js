

let form1 = document.getElementById("form1");

form1.addEventListener("submit", function(event) {
     // Récupérer les éléments du formulaire
     let err = document.getElementById("erreur");
     let nom = document.getElementById("nom");

      // Expression régulière pour vérifier si le champ contient uniquement des lettres alphabétiques et des espaces
    let reg = /^[a-zA-Z-\s]+$/;
    // Vérifier si le champ est vide
if (nom.value.trim() == "") {
    err.textContent = "Le champ ne peut pas être vide.";
    err.style.color = "#ff0000";
    event.preventDefault();
} else if (reg.test(nom.value) == false) { // Vérifier si le champ contient uniquement des lettres alphabétiques et des espaces
    err.textContent = "Le champ ne peut contenir que des lettres alphabétiques et des espaces.";
    err.style.color = "#ff0000";
   event.preventDefault();
} else {
    err.textContent = "OK"; // Effacer le message d'erreur s'il n'y a pas d'erreur
}


});
