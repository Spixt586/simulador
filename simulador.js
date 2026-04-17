function calcular(){
    let ingresosFloat=0;
    let egresosFloat=0;
    let cmpIngresosFloat;
    let cmpEgresosFloat;
    let montoInt = 0;
    let plazoInt = 0;
    let tasaInt = 0;
    let cmpMontoInt;
    let cmpPlazoInt;
    let cmpTasaInt;
    let interesesSimples
    let interesTotal;
    let total;
    let saldoDisponible;


    cmpIngresosFloat=document.getElementById("txtIngresos");
    cmpEgresosFloat=document.getElementById("txtEgresos");
    ingresosFloat=parseFloat(cmpIngresosFloat.value);
    egresosFloat=parseFloat(cmpEgresosFloat.value);
    saldoDisponible = calcularDisponible(ingresosFloat,egresosFloat);
    total=document.getElementById("spnDisponible");
    total.innerText = saldoDisponible;

    let capacidadDePago = calcularCapacidadPago(saldoDisponible);
    let mostrarCapacidadPago = document.getElementById("spnCapacidadPago");
    mostrarCapacidadPago.innerText = parseFloat(capacidadDePago);
    
    cmpMontoInt = document.getElementById("txtMonto");
    cmpPlazoInt = document.getElementById("txtPlazo");
    cmpTasaInt = document.getElementById("txtTasaInteres");
    montoInt = parseInt(cmpMontoInt.value);
    plazoInt = parseInt(cmpPlazoInt.value);
    tasaInt = parseInt(cmpTasaInt.value);
    interesesSimples = calcularInteresSimple(montoInt,tasaInt,plazoInt);
    interesTotal = document.getElementById("spnInteresPagar");
    interesTotal.innerText = interesesSimples;

    calcularTotalPagar(monto,interes){
        
    }
}

