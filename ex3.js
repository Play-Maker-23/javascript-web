function changer(){
    let paragraph = document.getElementById("paragraph")
    alert(paragraph.textContent)
    paragraph.textContent = "Bonjour , monde!"
    paragraph.style.color = "red"
    paragraph.style.fontStyle = "italic"
}