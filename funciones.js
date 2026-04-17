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