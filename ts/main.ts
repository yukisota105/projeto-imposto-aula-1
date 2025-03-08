namespace empresa{
    const calc = document.getElementById("calc") as HTMLButtonElement;
    const campoProd = document.getElementById("campoProd") as HTMLInputElement;
    const campoPreco = document.getElementById("campoPreco") as HTMLInputElement;
    const campoImposto = document.getElementById("campoImposto") as HTMLInputElement;

    calc.addEventListener("click",()=>{
        let p = new Pessoa();
        p.produto = campoProd.value;
        p.preco = parseFloat(campoPreco.value);
        p.imposto = parseFloat(campoImposto.value);


        document.getElementById("produto").textContent = p.produto;
        document.getElementById("preco").textContent = p.preco.toString();
        document.getElementById("imposto").textContent = p.imposto.toString();
        document.getElementById("res").textContent = p.calcularImposto().toString();
        document.getElementById("res2").textContent = p.calcularImposto2().toString()

    

    });
}