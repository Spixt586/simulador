// =======================
// VALIDACIONES
// =======================

function mostrarError(idCampo, mensaje){
    let campo = document.getElementById(idCampo);

    let error = document.getElementById("error-" + idCampo);
    if(!error){
        error = document.createElement("p");
        error.id = "error-" + idCampo;
        error.style.color = "#ef4444";
        error.style.fontSize = "12px";
        error.style.marginTop = "5px";
        campo.parentNode.appendChild(error);
    }

    error.innerText = mensaje;
}

function limpiarErrores(){
    let errores = document.querySelectorAll("[id^='error-']");
    errores.forEach(e => e.remove());
}

function validar(){
    limpiarErrores();

    let valido = true;

    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);
    let monto = parseFloat(document.getElementById("txtMonto").value);
    let plazo = parseInt(document.getElementById("txtPlazo").value);
    let tasa = parseFloat(document.getElementById("txtTasaInteres").value);

    // INGRESOS
    if(isNaN(ingresos)){
        mostrarError("txtIngresos","Campo obligatorio");
        valido = false;
    } else if(ingresos <= 0){
        mostrarError("txtIngresos","Debe ser mayor a 0");
        valido = false;
    }

    // EGRESOS
    if(isNaN(egresos)){
        mostrarError("txtEgresos","Campo obligatorio");
        valido = false;
    } else if(egresos < 0){
        mostrarError("txtEgresos","No puede ser negativo");
        valido = false;
    }

    // MONTO
    if(isNaN(monto)){
        mostrarError("txtMonto","Campo obligatorio");
        valido = false;
    } else if(monto < 100 || monto > 100000){
        mostrarError("txtMonto","Debe estar entre 100 y 100000");
        valido = false;
    }

    // PLAZO
    if(isNaN(plazo)){
        mostrarError("txtPlazo","Campo obligatorio");
        valido = false;
    } else if(plazo < 1 || plazo > 30){
        mostrarError("txtPlazo","Debe estar entre 1 y 30 años");
        valido = false;
    }

    // TASA
    if(isNaN(tasa)){
        mostrarError("txtTasaInteres","Campo obligatorio");
        valido = false;
    } else if(tasa <= 0 || tasa > 100){
        mostrarError("txtTasaInteres","Debe ser entre 0 y 100%");
        valido = false;
    }

    return valido;
}

// =======================
// FUNCION PRINCIPAL
// =======================

function calcular(){

    // VALIDAR PRIMERO
    if(!validar()){
        return;
    }

    // OBTENER DATOS
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);
    let monto = parseFloat(document.getElementById("txtMonto").value);
    let plazo = parseInt(document.getElementById("txtPlazo").value);
    let tasa = parseFloat(document.getElementById("txtTasaInteres").value);

    // =======================
    // CÁLCULOS
    // =======================

    let disponible = ingresos - egresos;
    let capacidadPago = disponible * 0.4;

    let interesTotal = monto * (tasa / 100) * plazo;
    let total = monto + interesTotal;

    let cuotaMensual = total / (plazo * 12);

    // =======================
    // MOSTRAR RESULTADOS
    // =======================

    document.getElementById("spnDisponible").innerText = disponible.toFixed(2);
    document.getElementById("spnCapacidadPago").innerText = capacidadPago.toFixed(2);
    document.getElementById("spnInteresPagar").innerText = interesTotal.toFixed(2);
    document.getElementById("spnTotalPrestamo").innerText = total.toFixed(2);
    document.getElementById("spnCuotaMensual").innerText = cuotaMensual.toFixed(2);

    // =======================
    // APROBACIÓN DEL CRÉDITO
    // =======================

    let estado = document.getElementById("spnEstadoCredito");

    if(capacidadPago >= cuotaMensual){
        estado.innerText = "CRÉDITO APROBADO";
        estado.className = "estado aprobado";
    }else{
        estado.innerText = "CRÉDITO RECHAZADO";
        estado.className = "estado rechazado";
    }
}