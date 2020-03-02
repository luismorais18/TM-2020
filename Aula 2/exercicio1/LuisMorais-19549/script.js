function alternaTexto() {
    var input= document.getElementById("input-aula1").value;
    if(input) {
        document.getElementById("p-aula1").textContent = input;
    } else {
        alert("Campo de input vazio");
    }
}
