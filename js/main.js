"use strict";
var empresa;
(function (empresa) {
    const calc = document.getElementById("calc");
    const campoProd = document.getElementById("campoProd");
    const campoPreco = document.getElementById("campoPreco");
    const campoImposto = document.getElementById("campoImposto");
    calc.addEventListener("click", () => {
        let p = new empresa.Pessoa();
        p.produto = campoProd.value;
        p.preco = parseFloat(campoPreco.value);
        p.imposto = parseFloat(campoImposto.value);
        document.getElementById("produto").textContent = p.produto;
        document.getElementById("preco").textContent = p.preco.toString();
        document.getElementById("imposto").textContent = p.imposto.toString();
        document.getElementById("res").textContent = p.calcularImposto().toString();
        document.getElementById("res2").textContent = p.calcularImposto2().toString();
    });
})(empresa || (empresa = {}));
