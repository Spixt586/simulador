function validarCampo(input){
    let valor = input.value.trim();
    let error = document.getElementById("error-" + input.id);

    error.innerText = "";
    input.classList.remove("input-error");

    // vacío
    if(valor === ""){
        error.innerText = "Este campo es obligatorio";
        input.classList.add("input-error");
        return false;
    }

    // máximo 5 caracteres
    if(valor.length > 5){
        error.innerText = "Máximo 5 caracteres";
        input.classList.add("input-error");
        return false;
    }

    // solo números
    if(isNaN(valor)){
        error.innerText = "Solo se permiten números";
        input.classList.add("input-error");
        return false;
    }
    //solo entre 100 y 0
    let numero = parseFloat(valor);

    if(input.id == "txtTasaInteres"){
        if(numero < 0 || numero > 100){
        error.innerText = "Debe estar entre 0 y 100";
        input.classList.add("input-error");
        return false;
    }
    }
     return true;
}   

function calcular(){

    let esValido = true;

    esValido && validarCampo(document.getElementById("txtIngresos"));
    esValido && validarCampo(document.getElementById("txtArriendo"));
    esValido && validarCampo(document.getElementById("txtAlimentacion"));
    esValido && validarCampo(document.getElementById("txtVarios"));
    esValido && validarCampo(document.getElementById("txtMonto"));
    esValido && validarCampo(document.getElementById("txtPlazo"));
    esValido && validarCampo(document.getElementById("txtTasaInteres"));

    if(!esValido){
    return;
    }

    let ingresosFloat=0;
    let arriendoFloat=0;
    let alimentacionFloat=0;
    let variosFloat=0;
    let cmpIngresosFloat;
    let cmpArriendoFloat;
    let cmpAlimentacionFloat;
    let cmpVariosFloat;
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
    let prestamoInt;
    let totalPrestamo;
    let calculoCuotaMensual;
    let cmpCuotaMensual;
    let cmpCredito;
    let creditoAnalizado;

    cmpIngresosFloat=document.getElementById("txtIngresos");
    cmpArriendoFloat=document.getElementById("txtArriendo");
    cmpAlimentacionFloat=document.getElementById("txtAlimentacion");
    cmpVariosFloat=document.getElementById("txtVarios");

    ingresosFloat=parseFloat(cmpIngresosFloat.value);
    arriendoFloat=parseFloat(cmpArriendoFloat.value);
    alimentacionFloat=parseFloat(cmpAlimentacionFloat.value);
    variosFloat=parseFloat(cmpVariosFloat.value);

    saldoDisponible = calcularDisponible(ingresosFloat,arriendoFloat, alimentacionFloat, variosFloat);
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
    interesTotal.innerText = interesesSimples.toFixed(2);

    totalPrestamo = calcularTotalPagar(montoInt,interesesSimples);
    prestamoInt = document.getElementById("spnTotalPrestamo");
    prestamoInt.innerText = totalPrestamo.toFixed(2);

    calculoCuotaMensual = calcularCuotaMensual(totalPrestamo,plazoInt);
    cmpCuotaMensual = document.getElementById("spnCuotaMensual");
    cmpCuotaMensual.innerText = calculoCuotaMensual.toFixed(2);

    let creditoAprobadoInt = aprobarCredito(capacidadDePago,calculoCuotaMensual);
    cmpCredito = document.getElementById("spnEstadoCredito");
    if(creditoAprobadoInt){
        cmpCredito.innerText = "CRÉDITO APROBADO"
    }else{
        cmpCredito.innerText = "CRÉDITO RECHAZADO"
    }
}

