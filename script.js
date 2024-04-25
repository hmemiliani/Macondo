//Caso-1 ------------------------------------------------------------

let opcComfirm = false;
let dineroDisponible = 2500000;
console.log(`Te llego una consignacion de ${dineroDisponible}`);

console.log("Bienvenido a Bogota");
while (true) {
    let opcComida = prompt("Que desea comprar: \n\t1. Almojabana \n\t2. Subway\n\t3. Nada \n\nEscoja una opcion:");

    switch (opcComida) {
        case "1":
            console.log("Quieres comprar una Almojabana con gaseosa de $15.000COP");
            opcComfirm = confirm("Ten en cuenta que esa Almojabana lleva mucho en el stand, te podria hacer daño... estas seguro que quieres continuar?");
            if (opcComfirm) {
                dineroDisponible -= 15000;
                console.log(`Has comprado una Almojabana con gaseosa, dinero actual ${dineroDisponible}`);
                break;
            } else {
                console.log("Has decidido no comprar esa Almojabana vieja... (bien hecho) quizas quieras otra cosa?");
                break;

            }

        case "2":
            console.log("Quieres comprar un Subway en combo de $23.000COP");
            opcComfirm = confirm("Este subway se ve muy bueno, seguramente quedes satisfecho... estas seguro que quieres continuar?");
            if (opcComfirm) {
                dineroDisponible -= 23000;
                console.log(`Has comprado un Subway en combo, dinero actual ${dineroDisponible}`);
                break;
            } else {
                console.log("Has decidido no comprar el Subway en combo... quizas quieras otra cosa?");
                break;
            }
        case "3":
            opcComfirm = confirm("Decides no comprar nada?");
            if (opcComfirm) {
                break;
            }

        default:
            console.log("Opcion invalida, intentelo nuevamente");
    }
    if (opcComida == "3" && opcComfirm || dineroDisponible < 2500000) {
        break;
    }
}
console.log(`Despues de la compra, dinero actual ${dineroDisponible}`);


//Caso-2 ------------------------------------------------------------

console.log("Atencion, querido cliente, le informamos que su maleta sobrepasa el tamaño permitido por nuestra aerolinea, habra que hacer un pequeño cambio a su equipaje por sus dimensiones.")
//Medidas Originales
const altoOriginal = 60;
const anchoOriginal = 20;
const largoOriginal = 40;

//Medidas Permitidas
const altoPermitido = 55;
const anchoPermitido = 40;
const largoPermitido = 20;

//Factor de reduccion
const frAlto = altoPermitido / altoOriginal;
const frLargo = largoPermitido / largoOriginal;
const frAncho = anchoPermitido / anchoOriginal;

//Factor de reducción mas pequeño
const frMasPequeño = Math.min(frAlto, frAncho, frLargo);

//Nuevas Dimensiones
const nuevoAlto = altoOriginal * frMasPequeño;
const nuevoAncho = anchoOriginal * frMasPequeño;
const nuevoLargo = largoOriginal * frMasPequeño;

console.log(`Las nuevas dimensiones de la maleta son:\n\tAlto: ${nuevoAlto}\n\tAncho: ${nuevoAncho}\n\tLargo: ${nuevoLargo}`);


//Caso-3 ------------------------------------------------------------

const Binaria = "01110010_01101001_01110111_01101001";
const contraseñaDecimal = Binaria.split('_').map(binario => parseInt(binario, 2));
const contraseñaCaracteres = String.fromCharCode(...contraseñaDecimal);

console.log("Contraseña decodificada:", contraseñaCaracteres);

//Caso-4 ------------------------------------------------------------

const hablar = prompt("Digite lo que quiere pedir? quizas decirle a un taxi que te lleve al hotel de las mariposas amarillas??")

const hablarConI = hablar.replace(/[aeouAEOU]/g, 'i');

console.log(`la traduccion de lo que quieres decir es: ${hablarConI}`);


//Caso-5 ------------------------------------------------------------

const opcionesJuego = ['papel', 'piedra', 'tijera'];
let opcionHildebrando = prompt("Que quieres escoger: \n\t1.Piedra\n\t2.Papel\n\t3.Tijeras\nEscoge un numero:")
const opcionTaxista = opcionesJuego[Math.floor(Math.random() * opcionesJuego.length)];

while(true){
    switch(opcionHildebrando){

        case '1':
            opcionHildebrando = 2;
            break;

        case '2':
            opcionHildebrando = 1;
            break;

        case '3':
            opcionHildebrando = 3;
            break;
        
        default:
            console.log("Opcion Invalida");
            break;
    }

    if (opcionHildebrando in ["1","2","3"]) {
        break;
    }
}


if (opcionHildebrando === opcionTaxista) {
    console.log("Empate, nadie paga.");
} else if ((opcionHildebrando === 'papel' && opcionTaxista === 'piedra') ||
    (opcionHildebrando === 'piedra' && opcionTaxista === 'tijera') ||
    (opcionHildebrando === 'tijera' && opcionTaxista === 'papel')) {
    console.log("Hildebrando gana! No tiene que pagar al taxista.");
} else {
    dineroDisponible -= 300000;
    console.log(`El taxista gana! Dinero disponible despues del juego: $${dineroDisponible}COP`);
}

//Caso-6 ------------------------------------------------------------

let diasEnMacondo = 0;
let respuesta;
let morir = false;
while (true) {
    let eleccion = prompt("que actividad quieres realizar hoy? \n\t1. Amarillo \n\t2. Verde\n\t3. Roja\n\t4. Azul \nDigite una opcion:");

    switch (eleccion) {
        case '1':
            respuesta = prompt("¿Desea meterse en la piscina? (si/no): ").toLowerCase();
            if (respuesta === "si") {
                console.log("Se ahoga por el exceso de cloro. (F)");
                morir = true;
                break;
            } else {
                console.log("Decide no meterse en la piscina.");
                break;
            }
            

        case '2':
            respuesta = prompt("¿Desea realizar la caminata? (si/no): ").toLowerCase();
            if (respuesta === "si") {
                console.log("Disfruta de una hermosa cascada y se toma fotos.");
            } else {
                console.log("Se devuelve solo y se pierde de noche.");
            }
            break;

        case '3':
            console.log("Realiza actividades en la playa:");
            actividad = prompt("¿Qué actividad desea realizar? (voleibol/nadar en el mar/tomar cócteles): ").toLowerCase();
            if (actividad === "voleibol") {
                console.log("Juega voleibol y la pasa genial.");
            } else if (actividad === "nadar en el mar") {
                console.log("Nada en el mar y monta moto acuática.");
            } else if (actividad === "tomar cócteles") {
                console.log("Siente un fuerte dolor de cabeza y pierde la visión. Chirrinchi adulterado! y muere (F).");
                morir = true;
                break;
            } else {
                console.log("Actividad no reconocida.");
            }
            break;

        case '4':
            console.log("Participa en actividades dentro del hotel:");
            actividad = prompt("¿Qué actividad desea realizar? (bingo/bailar/casino): ").toLowerCase();
            if (actividad === "bingo") {
                console.log("Gana en el bingo y aumenta su dinero.");
                dineroDisponible += 50000; // Suponiendo que gana 50,000 pesos en el bingo
            } else if (actividad === "bailar") {
                console.log("Baila y la pasa muy bien.");
            } else if (actividad === "casino") {
                console.log("Apuesta en el casino y solo se queda con el pasaje de regreso. ¡Vacaciones terminadas!");
                morir = true;
                break;
            } else {
                console.log("Actividad no reconocida.");
            }
            break;
    
        default:
            console.log("Patrón de vestimenta no reconocido.");
            break;
    }
    diasEnMacondo++;
    if(diasEnMacondo == 4 || morir==true){
        break;
    }
}

    
// Resultados finales ------------------------------------------------------------

    console.log("\n--- Resultados finales ---");
    console.log("Días en Macondo:", diasEnMacondo);
    if (diasEnMacondo === 4) {
        console.log("Hildebrando completó su estadía de 4 días en Macondo.");
    } else {
        console.log("Hildebrando no completó su estadía de 4 días en Macondo.");
    }
    if (diasEnMacondo < 4 || morir == true) {
        console.log("Hildebrando murió durante su estadía en Macondo.");
    } else {
        console.log("Hildebrando Sobrevivio.");
    }
    
    console.log(`Dinero restante ${dineroDisponible} COP\nDinero Gastado: ${2500000 - dineroDisponible} COP`);