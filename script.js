
//Caso-1 ------------------------------------------------------------

alert("Iniciamos esta historia, estaras detras del protagonista Hildebrando el cual se esta preparando para un viaje hasta Macondo al hotel de las mariposas amarillas");

alert("Sales de trabajar el dia viernes y tienes un vuelo en la noche, tiene escala en medellin en la madrugada y oh, que es eso, una notificacion en el celular");

let opcComfirm = false;
let dineroDisponible = 2500000;
alert(`Te llego una consignacion de ${dineroDisponible}`);

alert("Llegas al aeropuerto con suficiente tiempo");
alert("Bienvenido al Aeropuerto El Dorado");
alert("Tienes algo de hambre y tiempo, asi que decides buscar algo de comer, a esta hora no hay muchas opciones...");
while (true) {
    let opcComida = prompt("lo que se puede comprar: \n\t1. Almojabana \n\t2. Subway\n\t3. Nada \n\nEscoja una opcion:");

    switch (opcComida) {
        case "1":
            alert("Quieres comprar una Almojabana con gaseosa de $15.000COP");
            opcComfirm = confirm("Ten en cuenta que esa Almojabana lleva mucho en el stand, te podria hacer daño... estas seguro que quieres continuar?");
            if (opcComfirm) {
                dineroDisponible -= 15000;
                alert(`Has comprado una Almojabana con gaseosa, dinero actual ${dineroDisponible}`);
                alert("Te da mal de estomago y corres al baño");
                alert("Suena el llamado de tu vuelo y te retrasaste por una almojabana...");
                break;
            } else {
                alert("Has decidido no comprar esa Almojabana vieja... (bien hecho) quizas quieras otra cosa?");
                break;

            }

        case "2":
            alert("Quieres comprar un Subway en combo de $23.000COP");
            opcComfirm = confirm("Este subway se ve muy bueno, seguramente quedes satisfecho... estas seguro que quieres continuar?");
            if (opcComfirm) {
                dineroDisponible -= 23000;
                alert(`Has comprado un Subway en combo, dinero actual ${dineroDisponible}`);
                alert("Estaba muy bueno, caminas a la sala de espera y te quedas jugando con el celular");
                break;
            } else {
                alert("Has decidido no comprar el Subway en combo... quizas quieras otra cosa?");
                break;
            }
        case "3":
            opcComfirm = confirm("Decides no comprar nada?");
            if (opcComfirm) {
                alert("No has comido nada... tienes hambre y se te olvidan las cosas, juegas con el celular para distraerte...")
                break;
            }

        default:
            alert("Te das cuenta que no hay algo mas abierto y toca comer algo de esto o nada...");
    }
    if (opcComida == "3" && opcComfirm || dineroDisponible < 2500000) {
        break;
    }
}
alert(`Despues de la compra, dinero actual ${dineroDisponible}`);


//Caso-2 ------------------------------------------------------------

alert("Por los parlantes suena que llaman tu nombre por un problema con tu maleta, vas al counter a preguntar que pasa..");

alert("Querido cliente, le informamos que su maleta sobrepasa el tamaño permitido por nuestra aerolinea, habra que hacer un pequeño cambio a su equipaje por sus dimensiones.");

alert("procedes a hacer un calculo rapido y con unos pequeños cambios las dimensiones de la maleta quedan bien.");
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

alert(`Las nuevas dimensiones de la maleta son:\n\tAlto: ${nuevoAlto}\n\tAncho: ${nuevoAncho}\n\tLargo: ${nuevoLargo}`);

alert("Sales de viaje hacia medellin, y llegas, todo salio bien");

//Caso-3 ------------------------------------------------------------

alert("Se presento un problema, el internet de tu celular esta fallando y no sabes que le pasa a tus datos")
alert("Debes asegurar tu reserva en el Hotel de las mariposas amarillas para mañana")
alert("Oh que es eso?, aparecio una red WIFI llamada 'ElPassEs: 01110010_01101001_01110111_01101001' pero como desifrar esto?")
alert("Luego de que apesar del cansacio recuerdas que la calculadora del celular puede decodificar binario, entonces lo hace.")
const Binaria = "01110010_01101001_01110111_01101001";
const contraseñaDecimal = Binaria.split('_').map(binario => parseInt(binario, 2));
const contraseñaCaracteres = String.fromCharCode(...contraseñaDecimal);

alert(`Contraseña decodificada: ${contraseñaCaracteres}`);

alert("Bien!, reserva confirmada.")

//Caso-4 ------------------------------------------------------------

alert("finalmente has llegado a Macondo! ...pero porque todos hablan tan raro? solo hablan con la vocal 'i' de alguna manera pides un taxi, pero usas la app de tu celular para traducir")
const hablar = prompt("TRADUCTOR: quizas decirle a un taxi que te lleve al hotel de las mariposas amarillas??")

const hablarConI = hablar.replace(/[aeouAEOU]/g, 'i');

alert(`la traduccion de lo que quieres decir es: ${hablarConI}`);

alert("El taxista identifica que no eres de ahi y sonrie misteriosamente...");


//Caso-5 ------------------------------------------------------------

alert("Al llegar al Hotel, el taxista te dice");

alert("Bienvenido a Macondo, la carrera serian 300.000 pesitos".replace(/[aeouAEOU]/g, 'i'));

alert("No entiendes bien y crees que es un mal entendido, pruebas con el traductor y el taxista dijo '...la carrera serian 300.000 pesitos.'");

alert("Estupefacto, piensas que si esta loco y que si te quiere estafar");

alert("Calmadamente negocias con el taxista el cual resulta ser un ludopata")

alert("Haran una sola partida de 'piedra, papel o tijeras' \nlas condiciones son simples\n1. si ganas, no tienes que pagar\n2. si pierdes, pagaras sin problemas\n3. empate, aqui no pagas tampoco");

alert("El Taxista acepto estas condiciones tan desfavorables para el porque tenia prisa")

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
            alert("Opcion Invalida");
            break;
    }

    if (opcionHildebrando in ["1","2","3"]) {
        break;
    }
}


if (opcionHildebrando === opcionTaxista) {
    alert("Empate, nadie paga.");
} else if ((opcionHildebrando === 'papel' && opcionTaxista === 'piedra') ||
    (opcionHildebrando === 'piedra' && opcionTaxista === 'tijera') ||
    (opcionHildebrando === 'tijera' && opcionTaxista === 'papel')) {
    alert("Hildebrando gana! No tiene que pagar al taxista.");
} else {
    dineroDisponible -= 300000;
    alert(`El taxista gana! Dinero disponible despues del juego: $${dineroDisponible}COP`);
}

alert("luego del 'incidente' con el taxista, FINALMENTE LLEGAS AL HOTEL");

//Caso-6 ------------------------------------------------------------

alert("Al llegar al hotel te explican que cada actividad tiene un codigo de vestimenta");

alert("Amarillo: Zonas humedas del hotel\nVerde: Zonas verdes\nRojo: Zona de playa\nAzul: Zona interior del hotel");

let diasEnMacondo = 0;
let respuesta;
let morir = false;
while (true) {
    let eleccion = prompt("Que codigo de vestimenta quieres elegir hoy? \n\t1. Amarillo \n\t2. Verde\n\t3. Roja\n\t4. Azul \nDigite una opcion:");

    switch (eleccion) {
        case '1':
            respuesta = prompt("La piscina tiene un fuerte olor pero no determinas que es");
            respuesta = prompt("Te gustaria ignorar el ojor entrar a la piscina?\n\t1. Si\n\t2. No ");
            if (respuesta === "1") {
                alert("La piscina tiene demasiado cloro, se te irrita la piel, los ojos, la nariz y las membranas mucosas, tus tejidos empiesan a supurar y arder, el dolor te hace entrar en shock y mueres.");
                morir = true;
                break;
            } else {
                alert("Decide no meterse en la piscina.");
                break;
            }
            

        case '2':
            respuesta = prompt("Las vistas son hermosas, hay un pequeño rio que se ve hermoso, vas con el grupo pero te encuentras con dos caminos, en uno vas con el grupo y el otro aparentemente es para regresar");
            respuesta = prompt("Te gustaria regresar o vas con el grupo??\n\t1. Ir con el grupo\n\t2. Estoy cansado, mejor regreso. ");
            if (respuesta === "1") {
                alert("Disfruta de una hermosa cascada, compra algunas bebidas y se toma fotos, regresaste a salvo al hotel.");
                dineroDisponible -= 30000;
                alert(`Las bebidas costaron $30.000COP - Dinero Disponible: ${dineroDisponible}`);

            } else {
                alert("Regresas solo, pero ese no era el camino te pierdes hasta la noche y te rescata un guardia que casualmente estaba por ahi.");
            }
            break;

        case '3':
            alert("Decides ir a la playa, a pasar un buen rato con el sol, la arena y el agua:");
            actividad = prompt("¿Qué actividad desea realizar? \n\t1. voleibol\n\t2. nadar en el mar\n\t3. tomar cocteles): ");
            if (actividad === "1") {
                alert("Juega voleibol con nuevas amigas y la pasa genial.");
            } else if (actividad === "2") {
                alert("Nadas en el mar y montas Jetsky con valor de 100.000COP.");
                dineroDisponible -= 100000;
                alert(`Dinero Disponible: ${dineroDisponible}`);
            } else if (actividad === "3") {
                alert("Pide un coctel especial que se veia muy bien pero era misteriosamente economico, solo 10.000COP cuando el siguiente costaba 50.000COP");
                dineroDisponible -= 10000;
                alert("Sientes un fuerte dolor de cabeza, se siente horrible y pierde la visión. Era chirrinchi adulterado! y muere (F).");
                morir = true;
                break;
            } else {
                alert("Decides no hacer ninguna actividad y solo relajarte en la playa");
                alert("Compras un pequeño recuerdo que te vendio una persona que iba por ahi a $40.000COP");
                dineroDisponible -= 40000;
                alert(`Dinero Disponible: ${dineroDisponible}`);
                
            }
            break;

        case '4':
            alert("Vas a ver que actividades te ofrese el Hotel en su interior, hay un Bingo, una discoteca y un casino, aunque hay gente un poco rara en este ultimo");
            actividad = prompt("Que quieres hacer \n\t1. Ir al bingo\n\t2. Ir a bailar\n\t3. Ir al casino): ");
            if (actividad === "1") {
                alert("Gana en el bingo y aumenta su dinero.");
                dineroDisponible += 1000000;
                alert(`Dinero Disponible: ${dineroDisponible}`);
                alert("se pone muy contento y les invita bebidas a todos");
                dineroDisponible -= 450000;
                alert(`Dinero Disponible: ${dineroDisponible}`);
            } else if (actividad === "2") {
                alert("Baila y la pasa muy bien.");
                alert("Conoce a una persona que lo seduce y se toman unos tragos");
                alert(`Dinero Disponible: ${dineroDisponible}`);
                dineroDisponible -= 200000;
            } else if (actividad === "3") {
                alert("Apuesta en el casino y todo va bien");
                dineroDisponible += 345000;
                alert(`Dinero Disponible: ${dineroDisponible}`);
                alert("Todo iba bien hasta que por una mala jugada perdio mucho");
                dineroDisponible -= 1000000;
                alert(`Dinero Disponible: ${dineroDisponible}`);
                alert("te convencen de hacer un prestamo de 3.000.000 para recuperarte...");
                dineroDisponible += 3000000;
                alert(`Dinero Disponible: ${dineroDisponible}`);
                alert("...pero lo pierdes");
                dineroDisponible -= 3500000;
                alert("los prestamistas te quitan todo tu dinero porque no alcanzas a pagar y te 'desviven'");
                dineroDisponible-=dineroDisponible;
                alert(`Dinero Disponible: ${dineroDisponible}`);
                morir = true;
                break;
            } else {
                alert("Decidiste simplemente relajarte en el bar del hotel y hacer algunos amigos, conoces algunas personas de muchos lugares y tomaste tanto que te fuiste a domrir");
                dineroDisponible -= 200000;
                alert(`Gastaste $200.000COP en bebidas - Dinero Disponible: ${dineroDisponible}`);
            }
            break;
    
        default:
            alert("Decidiste no hacer actividades en el hotel y pasear por Macondo");
            alert("Te costaba entenderle a la gente y preferiste regresar al hotel");
            dineroDisponible -= 150000;
                alert(`Gastaste $150.000COP en transporte y mecatos en macondo - Dinero Disponible: ${dineroDisponible}`);
            break;
    }
    diasEnMacondo++;
    if(diasEnMacondo == 4 || morir==true){
        break;
    }
}

    
// Resultados finales ------------------------------------------------------------

    alert("\n--- Resultados finales ---");
    alert(`Días en Macondo: ${diasEnMacondo}`);
    if (diasEnMacondo === 4) {
        alert("Hildebrando completó su estadía de 4 días en Macondo.");
    } else {
        alert("Hildebrando no completó su estadía de 4 días en Macondo.");
    }
    if (diasEnMacondo < 4 || morir == true) {
        alert("Hildebrando murió durante su estadía en Macondo.");
    } else {
        alert("Hildebrando Sobrevivio.");
    }
    
    alert(`Dinero restante ${dineroDisponible} COP\nDinero Gastado: ${2500000 - dineroDisponible} COP`);
