function calculer(){
    let a= prompt("entrer la valeur de A: ");
    let b= prompt("entrer la valeur de B: ");
    if (isNaN(a)|| isNaN(b)){
        alert("veuillez saisir des nombres valides pour A et B: ")
    
    } else{
        let d = a + b;
        alert("la somme de" + a +"et" +b + "est egale à " +d);
        let c = Number(a) + Number(b);
        alert("la somme de" + a +"et" +b + "en tant que nombres est: " +c);
    }
}
