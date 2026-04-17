function calcularDisponible(ingresos,egresos){
    let valorDisponible;
    valorDisponible=ingresos-egresos;
    if(valorDisponible<0){
        return "0";
    }
    return valorDisponible;
}


function calcularCapacidadPago(montoDisponible){
    return montoDisponible*0.5;
}

function calcularInteresSimple(monto,tasa,plazo){
    let interesAPagar;
    interesAPagar = plazo * (tasa/100) * monto;
    return interesAPagar;
}

function calcularTotalPagar(monto,interes){
    let totalAPagar;
    totalAPagar = monto + interes + 100;
    return totalAPagar; 
}

function calcularCuotaMensual(total, plazoAnios){
    let totalCuotaMensual;
    totalCuotaMensual = total/(plazoAnios*12);
    return totalCuotaMensual;
}
