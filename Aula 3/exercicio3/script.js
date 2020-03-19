
function preencherTagHtml() {
    document.getElementById("innerHtml").innerHTML = "<h3>ID: " + document.getElementById('link').id + "<h3>" +
                                                          "<h3>href : " + document.getElementById('link').href + "<h3>" +
                                                          "<h3>target : " + document.getElementById('link').target + " <h3>" +
                                                          "<h3>type :  " + document.getElementById('link').type + " <h3>";
}

function preencheCorVermelha() {
    var titulo = document.getElementsByClassName("titulo");
    for(var i = 0; i < titulo.length; i++) {
        titulo[i].style.color = "red";
    }
}

function tabela(clicked){
    var popup = prompt("Introduza o novo valor")
    var v = document.getElementById(clicked)
    v.innerHTML = popup;
    v.style.background =  "#99e599"
}