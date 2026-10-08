// Variables de configuración del vuelo
let asientosDisponibles = 4;
let precioBase = 150.0;
let sistemaActivo = true;
const RECARGO_EXCESO = 50.0;   

alert("=== SISTEMA INTERACTIVO DE RESERVA DE VUELOS ===");

// --- CICLO WHILE: Mantiene activo el punto de atención ---
while (sistemaActivo) {

    // Pedimos al operador el código de vuelo por teclado
    let codigoVuelo = prompt("Ingrese el código del vuelo (ej: AR1400) o escriba 'salir' para cerrar el sistema:");
    let recargo = 50.0;
    let costoPasaje=precioBase;
    
    // Manejo en caso de presionar 'Cancelar'
    if (codigoVuelo === null) {
        codigoVuelo = "salir";
    }

    // CONDICIONAL: Verificar cierre del sistema
    if (codigoVuelo === "salir") {
        sistemaActivo = false;
        alert("Cerrando sesión del sistema de reservas. ¡Hasta luego!");
    } else if (asientosDisponibles <= 0) {
        alert(`[SIN CUPO] El vuelo ${codigoVuelo} no tiene asientos disponibles.`);
        sistemaActivo = false;
        //continue; //  
    } else {
        // Pedir la cantidad de pasajeros para esta reserva
        let cantidadPasajerosTexto = prompt(`Vuelo ${codigoVuelo} (Asientos disponibles: ${asientosDisponibles})\n¿Cuántos pasajeros desea registrar en este grupo?`);
        let cantidadPasajeros = Number(cantidadPasajerosTexto);

        if (asientosDisponibles >= cantidadPasajeros) {
            let totalReserva = 0;
            let pasajerosConfirmados = 0;
            
            // --- CICLO FOR: Procesa uno a uno cada pasajero del grupo ---
            for (let i = 1; i <= cantidadPasajeros; i++) {
                // CONDICIONAL ANIDADO: Verificar disponibilidad antes de registrar
                if (asientosDisponibles > 0) {
                    // Solicitar datos individuales por prompt
                    let nombrePasajero = prompt(`Pasajero ${i} de ${cantidadPasajeros}:\nIngrese el nombre y apellido:`);
                    let pesoMaletaTexto = prompt(`Ingrese el peso del equipaje (en kg) para ${nombrePasajero}:`);
                    let pesoMaleta = Number(pesoMaletaTexto);
                    let recargo = 0;                       // se reinicia en cada pasajero
                    let costoPasaje = precioBase;          // se reinicia en cada pasajero

                    // CONDICIONAL: Aplicar recargo por exceso de peso
                    if (pesoMaleta > 23.0) {
                        recargo = RECARGO_EXCESO;
                        costoPasaje = precioBase + recargo;
                        alert(`Pasajero: ${nombrePasajero}\nEquipaje: ${pesoMaleta}kg (Supera los 23kg)\nCosto Boleto: $${precioBase} + Recargo $${recargo} = $${costoPasaje}`);
                    } else {
                        alert(`Pasajero: ${nombrePasajero}\nEquipaje: ${pesoMaleta}kg (Correcto)\nCosto Boleto: $${precioBase}`);
                    }

                    totalReserva += costoPasaje;
                    asientosDisponibles--; // Descontamos 1 asiento libre
                    pasajerosConfirmados++;
                    console.log("--- Registro de Pasaje ---");
                    console.log("Nombre del pasajero:", nombrePasajero);
                    console.log("Peso de equipaje :", pesoMaletaTexto);
                    console.log("Recargo por peso maleta: $ ", recargo);
                    console.log("Precio del pasaje: $ ", costoPasaje);
                } 
            }
            // Resumen final de la transacción
            alert(`--- RESUMEN DE LA RESERVA ---\nVuelo: ${codigoVuelo}\nPasajeros confirmados: ${pasajerosConfirmados}\nMonto total a pagar: $${totalReserva}`);
        } else {
            alert(`[SIN CUPO] El vuelo ${codigoVuelo} no tiene asientos disponibles.`);
            sistemaActivo = false;
            continue; 
        }    
    }
}

    

    

    
