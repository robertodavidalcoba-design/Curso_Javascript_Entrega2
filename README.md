# Sistema Interactivo de Reserva de Vuelos

## Descripción del problema

Una aerolínea necesita un sistema simple, que funcione desde el navegador,
para que un operador registre reservas de vuelo de manera interactiva.
El sistema debe controlar el cupo disponible del vuelo y calcular el costo
de cada pasaje según el peso del equipaje.

## Funcionamiento

1. El operador ingresa el **código del vuelo** (ej: `AR1400`) mediante `prompt`.
   Puede escribir `salir` o presionar *Cancelar* para cerrar el sistema.
2. El sistema muestra los **asientos disponibles** y solicita la cantidad de
   pasajeros del grupo.
3. Si hay cupo suficiente, se registra a cada pasajero:
   - Nombre y apellido.
   - Peso del equipaje en kg.
4. Se calcula el costo de cada pasaje:
   - **Precio base:** $150.
   - **Recargo por exceso de equipaje:** +$50 si el equipaje supera los 23 kg.
5. Al finalizar el grupo, se muestra un **resumen de la reserva**: vuelo,
   pasajeros confirmados y monto total a pagar.
6. Si el vuelo se queda sin asientos, el sistema informa **sin cupo** y se cierra.

## Conceptos aplicados

- Variables (`let`) y operaciones aritméticas
- Entrada y salida de datos con `prompt`, `alert` y `console.log`
- Conversión de tipos con `Number()`
- Condicionales (`if / else if / else`)
- Ciclos `while` (sesión del sistema) y `for` (pasajeros del grupo)
- Plantillas de texto (template literals)

## Datos iniciales

| Variable | Valor |
|---|---|
| Asientos disponibles | 4 |
| Precio base | $150 |
| Recargo por exceso | $50 |
| Límite de equipaje | 23 kg |

## Ejecución

Abrir `index.html` en un navegador (con `main.js` enlazado) y seguir las
indicaciones que aparecen en pantalla. Los registros de cada pasaje se
muestran también en la consola del navegador.



