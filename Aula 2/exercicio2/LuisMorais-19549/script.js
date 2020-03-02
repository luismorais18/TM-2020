numeros = [];
function adicionarNumero() {
    var input= document.getElementById("input-numero").value;

    if(input) {
        if(numeros.length >= 5) {
            alert("O limite é 5 números")
            document.getElementById("btn-adicionaNumero").disabled = true;
        }else {
            numeros.push(input);
            document.getElementById("msg-adicionados").textContent = numeros.toString();
            document.getElementById("input-numero").value = "";
            document.getElementById("input-numero").focus();
            document.getElementById("Button").disabled = false;

        }
    }
    else {
        alert("Campo de input vazio")
        document.getElementById("input-numero").focus();
    }


}

function calcularMaiorNumero() {
    document.getElementById("resultado").textContent = Math.max.apply(Math, numeros).toString();
}


var input = document.getElementById("btn-submeter");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        alert("Coiso e tal")
        event.preventDefault();
        adicionarNumero();
    }
});
