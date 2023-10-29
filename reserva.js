let nombreCompleto = "Ada Lovelace";
let numeroTelefono = 78034288282;
let fechaReserva = "2023-10-30";
let horaReserva = "19:00";
let numeroPersonas = 12;

const CAPACIDAD_MAXIMA_PERSONAS = 50;
const DESCUENTO_GRUPO_GRANDE = 10;
const LIMITE_PERSONAS_RESTAURANTE = 30;
const precioPromedioDeConsumo = Math.floor(Math.random() * 4000) + 1000; // Valor entre 1000 y 5000

// Función para crear una nueva reserva
function crearNuevaReserva() {
  let numeroPersonasExcedeLimite = numeroPersonas > LIMITE_PERSONAS_RESTAURANTE;
  let aplicaDescuento = numeroPersonas > 10;
  let valorPorPersona = precioPromedioDeConsumo * numeroPersonas;

  console.log("Nombre Completo:", nombreCompleto);
  console.log("Número de Teléfono:", numeroTelefono);
  console.log("Fecha de Reserva:", fechaReserva);
  console.log("Hora de Reserva:", horaReserva);
  console.log("Número de Personas:", numeroPersonas);
  console.log("Capacidad Máxima del Restaurante:", CAPACIDAD_MAXIMA_PERSONAS);
  console.log("Descuento para Grupo Grande (10%):", aplicaDescuento);
  console.log(
    "Número Límite de Personas en el Restaurante:",
    LIMITE_PERSONAS_RESTAURANTE
  );
  console.log("Precio Promedio de Consumo:", precioPromedioDeConsumo);
  console.log(
    "Número de Personas Excede el Límite del Restaurante:",
    numeroPersonasExcedeLimite
  );
  console.log("Valor por Persona:", valorPorPersona);
}

// Llama a la función para crear una nueva reserva
crearNuevaReserva();
