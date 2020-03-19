var imagensList = [];

function adicionarImagem() {
    imagensList.push(Math.random()); // Adicionar um número aleatório a um array
    refreshArray(imagensList);

}
function removerImagem() {
    var max = imagensList.length;
    var min = 1;
    if (imagensList.length <= 0) {
        alert("Não existem imagens");
    } else {
        // Math.floor((Math.random() * imagensList.length -> Numero random dentro do alcance do tamanho do array
        imagensList.splice(Math.floor((Math.random() * imagensList.length)), 1); // Remover a imagem aleatoria calculada na linha anterior
        refreshArray(imagensList);
    }
}

function refreshArray(array) {
    document.getElementById("imagem").innerHTML = null;
    for(let i = 0; i < array.length; i++) {
        document.getElementById("imagem").innerHTML += "<img alt='' src='http://placeimg.com/250/150/"+ array[i] +"'>"
    }
    document.getElementById("imagensListCount").innerText = array.length.toString();
}