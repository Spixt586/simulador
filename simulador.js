function calcular(){
    let ingresosFloat = 0;
    let egresosFloat = 0;
    let cmpIngresos;
    let cmpEgresos;
    let cmpValorDisponibleFloat;
    cmpIngresos = document.getElementById("txtIngresos");
    cmpEgresos = document.getElementById("txtEgresos");
    let valorDisponibleFloat;
    ingresosFloat = parseFloat(cmpIngresos.value);
    egresosFloat= parseFloat(cmpEgresos.value);
    valorDisponibleFloat = calcularDisponible(ingresosFloat, egresosFloat);
    console.log(valorDisponibleFloat);
    cmpValorDisponibleFloat = document.getElementById("spnDisponible");
    cmpValorDisponibleFloat.innerText = valorDisponibleFloat
}

function calcularCapacidadPago(montoDisponible){
    
}
