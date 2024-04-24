//Caso-1 ------------------------------------------------------------

let opcComfirm = false;
let dineroDisponible = 2500000;
console.log(`Te llego una consignacion de ${dineroDisponible}`);

console.log("Bienvenido a Bogota");
while (true){
    let opcComida = prompt("Que desea comprar: \n\t1. Almojabana \n\t2. Subway\n\t3. Nada \n\nEscoja una opcion:");

    switch(opcComida){
        case "1":
            console.log("Quieres comprar una Almojabana con gaseosa de $15.000COP");
            opcComfirm = confirm("Ten en cuenta que esa Almojabana lleva mucho en el stand, te podria hacer daño... estas seguro que quieres continuar?");
            if(opcComfirm){
                dineroDisponible -= 15000;
                console.log(`Has comprado una Almojabana con gaseosa, dinero actual ${dineroDisponible}`);
                break;
            } else{
                console.log("Has decidido no comprar esa Almojabana vieja... (bien hecho) quizas quieras otra cosa?");
                break;

            }
        
        case "2":
            console.log("Quieres comprar un Subway en combo de $23.000COP");
            opcComfirm = confirm("Este subway se ve muy bueno, seguramente quedes satisfecho... estas seguro que quieres continuar?");
            if(opcComfirm){
                dineroDisponible -= 23000;
                console.log(`Has comprado un Subway en combo, dinero actual ${dineroDisponible}`);
                break;
            } else{
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
    if (opcComida=="3" && opcComfirm || dineroDisponible < 2500000) {
        break;
    }
}
console.log(`Despues de la compra, dinero actual ${dineroDisponible}`);


//Caso-2 ------------------------------------------------------------

console.log("Atencion, querido cliente, le informamos que su maleta sobrepasa el tamaño permitido por nuestra aerolinea, habra que hacer un pequeño cambio a su equipaje por sus dimensiones.")
//Medidas Originales
const altoOriginal = 60;
const anchoOriginal = 20;
const largoOriginal =40;

//Medidas Permitidas
const altoPermitido = 55;
const anchoPermitido = 40;
const largoPermitido =20;

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

