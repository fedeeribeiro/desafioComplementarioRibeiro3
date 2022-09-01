/* SITIO DE VENTA DE ENTRADAS PARA RECITALES */

// Pide nombre al usuario

let nombre_usuario = prompt("Ingrese su nombre:");

// Por si el usuario no ingresa nada
while(nombre_usuario == ""){
    nombre_usuario = prompt("ERROR. Por favor ingrese su nombre.");
}

// Efectúo el saludo en el HTML
const divSaludo = document.getElementById("saludo");

const saludo = document.createElement("h2");
saludo.textContent = "¡ACCESOTOTAL te da la bienvenida, " + nombre_usuario + "!";
divSaludo.appendChild(saludo);

// Mensaje de bienvenida
alert("¡ACCESOTOTAL te da la bienvenida, " + nombre_usuario + "!")
console.log("¡ACCESOTOTAL te da la bienvenida, " + nombre_usuario + "!")

// Funciones para calcular el precio en cuotas
function pago_en_cuotas(precio, cuotas){
    switch(cuotas){
        case 3:
            return precio_final = precio * 1.15;
        case 6:
            return precio_final = precio * 1.30;
        case 12:
            return precio_final = precio * 1.50;
    }
}

// Función para realizar el pago con tarjeta
function pago_con_tarjeta(){
    tarjeta = "";
    proveedor = prompt("Ingresá la compañía proveedora de tu tarjeta:" + "\n" + "AMEX" + "\n" + "MasterCard" + "\n" + "Visa").toUpperCase();
    while(proveedor != "AMEX" && proveedor != "MASTERCARD" && proveedor != "VISA"){
        alert("ERROR. Ingresá una compañía válida.");
        console.log("ERROR. Ingrese una compañía válida.");
        proveedor = prompt("Ingresá la compañía proveedora de tu tarjeta:" + "\n" + "AMEX" + "\n" + "MasterCard" + "\n" + "Visa").toUpperCase();
    }
    tarjeta += "Proveedor: " + proveedor + "\n";
    numero = prompt("Ingresá el número de tu tarjeta:");
    while(numero.length != 16){
        alert("ERROR. Recordá que el número de la tarjeta se compone por 16 dígitos.");
        console.log("ERROR. Recordá que el número de la tarjeta se compone por 16 dígitos.");
        numero = prompt("Ingresá el número de tu tarjeta:");
    }
    tarjeta += "Número: " + numero + "\n";
    nombre = prompt("Ingresá el nombre como figura en la tarjeta:").toUpperCase();
    while(nombre == ""){
        alert("ERROR. Dejaste el campo vacío.");
        console.log("ERROR. Dejaste el campo vacío.");
        nombre = prompt("Ingresá el nombre como figura en la tarjeta:").toUpperCase();
    }
    tarjeta += "Nombre: " + nombre + "\n";
    cvv = prompt("Ingresá el código de seguridad de tu tarjeta:");
    while(cvv.length != 3 && cvv.length != 4){
        alert("ERROR. Recordá que el código de seguridad de la tarjeta tiene entre 3 y 4 dígitos.");
        console.log("ERROR. Recordá que el código de seguridad de la tarjeta tiene entre 3 y 4 dígitos.");
        cvv = prompt("Ingresá el código de seguridad de tu tarjeta:");
    }
    tarjeta += "Código de seguridad: " + cvv;
    return alert("Los datos de tu tarjeta son los siguientes:" + "\n" + tarjeta);
}

// Creo una clase para armar objetos de cada evento a la venta
class Evento{
    constructor(nombre, precio, entradas_disponibles){
        this.nombre = nombre;
        this.precio = precio;
        this.entradas_disponibles = entradas_disponibles; 
    }
}

// Creo un array de eventos a la venta en el que guardo los eventos como objetos
let eventos = [];

eventos.push(new Evento("DUA LIPA", 7000, 2));
eventos.push(new Evento("IMAGINE DRAGONS", 5500, 0));
eventos.push(new Evento("LOLLAPALOOZA", 13500, 0));
eventos.push(new Evento("PRIMAVERA SOUND", 10300, 10));
eventos.push(new Evento("COTI", 2200, 6));
eventos.push(new Evento("HARRY STYLES", 8800, 0));
eventos.push(new Evento("LAS LIGAS MENORES", 1800, 7));
eventos.push(new Evento("RAYOS LASER", 1800, 5));

// Función para calcular el precio total de las entradas para el show elegido
function precio_entradas(cantidad, precio){
    return precio_total = cantidad * precio;
}

// Creo una clase para luego armar un array en el que se vayan guardando las compras para distintos shows, como un carrito de compras
class Pedido{
    constructor(evento, entradas, precio){
        this.evento = evento;
        this.entradas = entradas;
        this.precio = precio;
    }
}

// Creo array de carrito de compras
let carrito_de_compras = [];

// Función para ver si ya se hizo un pedido para un show
function repetido(carrito, evento){
    return carrito.some(pedido => evento == pedido.evento);
}

// Función para ver el carrito de compras
function ver_carrito(carrito_de_compras){
    pedido_final = "Tu carrito se compone de:" + "\n";
    for(let pedido of carrito_de_compras){
        pedido_final += pedido.entradas.toString() + " entradas para " + pedido.evento + 
        ". El total por estas entradas es de $" + pedido.precio + "." + "\n";
    }
    return pedido_final;
}

/* ---------------ENCIERRO EL CÓDIGO EN UN BUCLE while PARA QUE EL USUARIO PUEDA COMPRAR TODAS LAS VECES QUE QUIERA--------------- */

let seguir_comprando = false;

let respuesta_inicial = prompt("Si deseás comprar entradas ingresá la letra 'S'. De lo contrario, se saldrá de la operación.").toLowerCase();

if(respuesta_inicial != "s"){
    seguir_comprando = false;
}else{
    seguir_comprando = true;
}

while(seguir_comprando){
    // Pedido de ingreso del show para el que desea comprar entradas
    let evento_elegido = prompt("¿Para qué evento querés comprar entradas?" + "\n" + "Estos son los eventos disponibles:"
        + "\n" + "Dua Lipa" + "\n" + "Imagine Dragons" + "\n" + "Lollapalooza" + "\n" + "Primavera Sound" + "\n" + "Coti" + "\n" +
        "Harry Styles" + "\n" + "Las Ligas Menores" + "\n" + "Rayos Laser").toUpperCase();

    while(evento_elegido != "DUA LIPA" && evento_elegido != "COTI" && evento_elegido != "IMAGINE DRAGONS" &&
        evento_elegido != "LOLLAPALOOZA" && evento_elegido != "PRIMAVERA SOUND" && evento_elegido != "HARRY STYLES" &&
        evento_elegido != "LAS LIGAS MENORES" && evento_elegido != "RAYOS LASER"){
        alert("ERROR. Seleccioná un evento válido.");
        console.log("ERROR. Seleccioná un evento válido.");
        evento_elegido = prompt("¿Para qué evento querés comprar entradas?" + "\n" + "Estos son los eventos disponibles:"
        + "\n" + "Dua Lipa" + "\n" + "Imagine Dragons" + "\n" + "Lollapalooza" + "\n" + "Primavera Sound" + "\n" + "Coti" + "\n" +
        "Harry Styles" + "\n" + "Las Ligas Menores" + "\n" + "Rayos Laser").toUpperCase();
    }

    let precio_evento = 0;

    let entradas_disponibles = 0;

    for(let evento of eventos){
        if(evento.nombre == evento_elegido){
            precio_evento = evento.precio;
            entradas_disponibles = evento.entradas_disponibles;
        }
    }

    let respuesta_final = "";

    // Verificación de entradas disponibles y cálculo de precio total para el pedido hecho
    if(entradas_disponibles == 0){
        alert("Ya no quedan entradas disponibles para " + evento_elegido + ".");
        console.log("Ya no quedan entradas disponibles para " + evento_elegido + ".");
        respuesta_final = prompt("Si deseás seguir comprando entradas ingrese la letra 'S'." + "\n" +
        "Si no querés seguir comprando pero ya hiciste algún pedido, se pasará al carrito para terminar con la compra.").toLowerCase();
        
        if(respuesta_final != "s"){
            seguir_comprando = false;
        }else{
            seguir_comprando = true;
        }
    }else{
        alert("¡Excelente! Continuemos con la compra de entradas para " + evento_elegido + ".");
        console.log("¡Excelente! Continuemos con la compra de entradas para " + evento_elegido + ".");
        
        alert("El precio de las entradas para " + evento_elegido + " es de $" + precio_evento + ".");
        console.log("El precio de las entradas para " + evento_elegido + " es de $" + precio_evento + ".");

        // Pedido de ingreso de la cantidad de entradas que desea comprar
        let cant_entradas = parseInt(prompt("Ingresá la cantidad de entradas que querés comprar:"));

        while(cant_entradas != cant_entradas || cant_entradas < 1){
            alert("ERROR. Ingresá una cantidad válida de entradas para comprar.");
            cant_entradas = parseInt(prompt("Ingresá la cantidad de entradas que querés comprar:"));
        }
        
        while(cant_entradas > entradas_disponibles || cant_entradas != cant_entradas || cant_entradas < 1){
            alert("Lo siento, solo quedan " + entradas_disponibles + " entradas para " + evento_elegido + ".");
            console.log("Lo siento, solo quedan " + entradas_disponibles + " entradas para " + evento_elegido + ".");
            cant_entradas = parseInt(prompt("Ingresá la cantidad de entradas que querés comprar:"));
        }

        // Resto las entradas pedidas a las disponibles del evento en el array de eventos
        for(let evento of eventos){
            if(evento.nombre == evento_elegido){
                evento.entradas_disponibles -= cant_entradas;
            }
        }

        alert("¡Perfecto! El precio total de las entradas seleccionadas es $" + precio_entradas(cant_entradas, precio_evento) + ".");
        console.log("¡Perfecto! El precio total de las entradas seleccionadas es $" + precio_entradas(cant_entradas, precio_evento) + ".");
        respuesta_final = prompt("Si deseás seguir comprando entradas ingresá la letra 'S'." + "\n" + 
        "De lo contrario, se pasará al carrito para terminar con la compra.").toLowerCase();
        
        if(carrito_de_compras.length != 0){
            if(repetido(carrito_de_compras, evento_elegido)){
                for(let pedido of carrito_de_compras){
                    if(pedido.evento == evento_elegido){
                        pedido.entradas += cant_entradas;
                        pedido.precio += precio_entradas(cant_entradas, precio_evento);
                    }
                }
            }else{
                carrito_de_compras.push(new Pedido(evento_elegido, cant_entradas, precio_entradas(cant_entradas, precio_evento)));
            }
        }else{
            carrito_de_compras.push(new Pedido(evento_elegido, cant_entradas, precio_entradas(cant_entradas, precio_evento)));
        }
        
        if(respuesta_final != "s"){
            seguir_comprando = false;
        }else{
            seguir_comprando = true;
        }
    }
}

/* ---------------                              FIN DEL BUCLE while PRINCIPAL                              --------------- */

if(carrito_de_compras.length != 0){
    // Vista final del carrito de compras
    alert(ver_carrito(carrito_de_compras));
    console.log(ver_carrito(carrito_de_compras));

    // Pregunto al usuario si desea eliminar elementos del carrito de compras
    let eliminar_del_carrito = prompt("Si querés eliminar entradas del carrito ingresá la letra 'S'." + "\n" +
    "De lo contrario, se procederá con el pago.").toLowerCase();
    
    // Pregunto al usuario si quiere elimnar solo algunas entradas o todas las entradas para un show
    while(eliminar_del_carrito == "s" && carrito_de_compras.length != 0){
        let shows_carrito = carrito_de_compras.map(pedido => pedido.evento);
        let show_a_eliminar = prompt("¿Para qué evento deseás eliminar entradas?" + "\n" + shows_carrito.join("\n")).toUpperCase();
        while(shows_carrito.includes(show_a_eliminar) != true){
            alert("ERROR. Seleccioná un evento válido.");
            console.log("ERROR. Seleccioná un evento válido.");
            show_a_eliminar = prompt("¿Para qué evento deseás eliminar entradas?" + "\n" + shows_carrito.join("\n")).toUpperCase();
        }
        let cuantos_elimina = prompt("¿Querés eliminar algunas o todas las entradas para este evento del carrito?" + "\n" + "Algunas" + "\n" +
        "Todas").toUpperCase();
        while(cuantos_elimina != "TODAS" && cuantos_elimina != "ALGUNAS"){
            alert("ERROR. Seleccioná una opción válida.");
            console.log("ERROR. Seleccioná una opción válida.");
            cuantos_elimina = prompt("¿Querés eliminar algunas o todas las entradas para este evento del carrito?" + "\n" + "Algunas" + "\n" +
            "Todas").toUpperCase();
        }
        if(cuantos_elimina == "TODAS"){
            carrito_de_compras = carrito_de_compras.filter(pedido => pedido.evento != show_a_eliminar);
            alert("Se han eliminado del carrito todas las entradas para " + show_a_eliminar + ".");
            console.log("Se han eliminado del carrito todas las entradas para " + show_a_eliminar + ".");
        }else{
            let entradas_en_carrito = (carrito_de_compras.filter(pedido => pedido.evento == show_a_eliminar))[0].entradas;
            let entradas_a_eliminar = parseInt(prompt("¿Cuántas entradas para " + show_a_eliminar + " deseás eliminar?"));
            while(entradas_a_eliminar > entradas_en_carrito || entradas_a_eliminar != entradas_a_eliminar || entradas_a_eliminar < 1){
                alert("ERROR. Seleccioná un valor entre 1 y " + entradas_en_carrito + ".");
                console.log("ERROR. Seleccioná un valor entre 1 y " + entradas_en_carrito + ".");
                entradas_a_eliminar = parseInt(prompt("¿Cuántas entradas para " + show_a_eliminar + " deseás eliminar?"));
            }
            for(let pedido of carrito_de_compras){
                if(pedido.evento == show_a_eliminar){
                    pedido.entradas -= entradas_a_eliminar;
                    pedido.precio -= (pedido.precio / entradas_en_carrito) * entradas_a_eliminar;
                }
            }
            if(entradas_a_eliminar != 1){
                alert("Se han eliminado del carrito " + entradas_a_eliminar + " entradas para " + show_a_eliminar + ".");
                console.log("Se han eliminado del carrito " + entradas_a_eliminar + " entradas para " + show_a_eliminar + ".");
            }else{
                alert("Se ha eliminado del carrito " + entradas_a_eliminar + " entrada para " + show_a_eliminar + ".");
                console.log("Se ha eliminado del carrito " + entradas_a_eliminar + " entrada para " + show_a_eliminar + ".");
            }
        }
        carrito_de_compras = carrito_de_compras.filter(pedido => pedido.entradas != 0);
        if(carrito_de_compras.length == 0){
            alert("El carrito ha quedado vacío.");
            console.log("El carrito ha quedado vacío.");
        }
        if(carrito_de_compras.length != 0){
            eliminar_del_carrito = prompt("Si querés seguir eliminando entradas del carrito ingresá la letra 'S'." + "\n" +
            "De lo contrario, se procederá con el pago.").toLowerCase(); 
        }
    }

    if(carrito_de_compras.length != 0){
        // Muestro el carrito de compras en el HTML
        const contenedorCarrito = document.querySelector(".listado-carrito");
        contenedorCarrito.innerHTML = `<p class="texto-pedido">Tu carrito se compone de:</p>`;

        carrito_de_compras.forEach(function(pedido) {
            const divPedido = document.createElement("div");   
            const textoPedido = document.createElement("p");
            textoPedido.textContent = pedido.entradas + "x entradas para " + pedido.evento + " por $" + pedido.precio;
            textoPedido.className = "texto-pedido";
            
            divPedido.appendChild(textoPedido);           
            contenedorCarrito.appendChild(divPedido);
        });

        alert(ver_carrito(carrito_de_compras));
        console.log(ver_carrito(carrito_de_compras));

        let precio_total = carrito_de_compras.reduce((acumulador, pedido) => acumulador + pedido.precio, 0);

        alert("El precio total de tu pedido es de $" + precio_total + ".");
        console.log("El precio total de tu pedido es de $" + precio_total + ".");

        // Se pasa a abonar la compra
        let modo_de_pago = "";

        let cuotas = 0;

        alert("Se puede abonar la compra al contado o en cuotas. Si se abona en cuotas, se efectúa un recargo.");
        console.log("Se puede abonar la compra al contado o en cuotas. Si se abona en cuotas, se efectúa un recargo.");

        modo_de_pago = prompt("¿Cómo deseás abonar?." + "\n" + "Cuotas" + "\n" + "Al contado").toLowerCase();

        while(modo_de_pago != "cuotas" && modo_de_pago != "al contado"){
            alert("ERROR. Seleccioná un modo de pago válido.");
            console.log("ERROR. Seleccioná un modo de pago válido.");
            modo_de_pago = prompt("¿Cómo deseás abonar?." + "\n" + "Cuotas" + "\n" + "Al contado").toLowerCase();
        }

        if(modo_de_pago == "cuotas"){
            cuotas = parseInt(prompt("Seleccioná la cantidad de cuotas que querés. Pueden ser 3, 6 o 12."));
            while(cuotas != 3 && cuotas != 6 && cuotas != 12){
                alert("ERROR. Seleccioná una cantidad de cuotas válida.");
                console.log("ERROR. Seleccioná una cantidad de cuotas válida");
                cuotas = parseInt(prompt("Seleccioná la cantidad de cuotas que querés. Pueden ser 3, 6 o 12."));
            }
            alert("El precio final a pagar es $" + pago_en_cuotas(precio_total, cuotas).toFixed(2) + ".");
            console.log("El precio final a pagar es $" + pago_en_cuotas(precio_total, cuotas).toFixed(2) + ".");
        }else{
            alert("El precio final a pagar es $" + precio_total + ".");
            console.log("El precio final a pagar es $" + precio_total + ".");
        }

        pago_con_tarjeta();

        alert("El pago se ha realizado correctamente." + "\n" + "¡Disfrutá de tus entradas!");
        console.log("El pago se ha realizado correctamente." + "\n" + "¡Disfrutá de tus entradas!");
    }
}

alert("¡Que tengas un buen día!");
console.log("¡Que tengas un buen día!");