function readyFn( ) {
    // Este código es lanzado por el elemento <body onload="readyFn()">
    epprSignature()
    // Definimos 2 constantes al seleccionar elementos por Id.
    const entrada  = document.getElementById("input");
    const selector = document.getElementById("select");

    // Creamos un "Listener" para escuchar eventos en el elemento selector en este ejemplo, el evento es "change".
    selector.addEventListener("change", (event) => {
        // Imprimir en la consola de nuestro navegador el valor del elemento seleccionado.
        console.log(event.target.value)
    })

    // Creamos un "Listener" para escuchar eventos en nuestra página, en este ejemplo, el evento es "click".
    document.getElementById("submit").addEventListener("click", () => {
        // Aquí es donde vamos a realizar todas nuestras actividades.
        var algoritmo = selector.value // Actualizar el valor más reciente de la constante "selector".
        var texto = entrada.value // Actualizar el valor de la constante "entrada", por si ha cambiado recientemente.
        texto = texto.toString() // Este paso convierte cualquier valor en una cadena de texto (String variable)
        // ACTIVIDADES (Algoritmos):
        if ( algoritmo == "1"){
            // 1) Todo el texto en Mayúsculas. // .toUpperCase()
            texto = texto.toUpperCase()
        }
         if ( algoritmo == "2"){
            // 2) Todo el texto en Minúsculas. // .toLowerCase()
            texto = texto.toLowerCase()
         }
        if ( algoritmo == "3"){
            // 3) Detectar si el texto es un número o no. // isNaN(x)
            texto = ( isNaN(texto) ) ? "No es un número" : "Número Válido" ;
        }
        if ( algoritmo == "4"){
            // 4) Solo aceptar números. // .replace(/\D/g,'') // RegEx \D
            texto = texto.replace(/\D/g,'')
        }
        if ( algoritmo == "5"){
            // 5) Determinar si un número es par o impar. // Operador Resto (x % 2)
            var par = ( texto % 2 !== 1) ? "Par" : "Impar" ;
        }
        if ( algoritmo == "6"){
            // 6) Dado un nombre completo, mostrar el apellido primero
            var separa = texto.split(" ",2);
            // console.log(separa[1]);
            var nombre = separa[0]
            var apellido = separa[1]
            var resultado = `Apellido: ${apellido} Nombre: ${nombre}`;
            texto = resultado;
            // texto = "probando";

            }
        if ( algoritmo == "7"){
            // 7) Si el texto no incluye EPPR mostrar un mensaje de error //
            var word = 'EPPR'
            console.log(`La palabra ${word} ${texto.includes(word) ? "Si" : "Error" } `);
        }
        if ( algoritmo == "8"){
            // 8) Número de 10 dígitos o no//
            if (texto.length < 10){
                alert ('Este no es un número de 10 dígitos')
                return false;
            }

        }
        myFunction(texto)
    });

}

// Función predeterminada que nos ayuda a imprimir en consola y además a modificar el resultado.
function myFunction( texto ) {
    // Seleccionar Elemento con clase "resultado"
    const resultado = document.querySelector('.resultado');
    // Modificar el contenido del elemento seleccionado.
    resultado.textContent = `${texto}`;
    // Imprimir en la consola de nuestro navegador.
    console.log(texto)
}

// Ejemplo de una función nueva
function newFunction( input ) {
    // El nombre de esta funcion es "newFunction" y tiene una variable de entrada llamada "input"
    // Ejemplo para usar esta función: newFunction("Hola")
}

// Función para imprimir el logotipo de EPPR en la consola al cargar la página.
function epprSignature(){
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    console.log("%%%%%%%%%%%%%%%/ .*/#%%%%%%%%%%%%%%%%%%%%")
    console.log("%%%%%%%%%%%%#                  .,/(%%%%%%")
    console.log("%%%%%%%%%%,                       ,%%%%%%")
    console.log("%%%%%%%/             .,,,..     #%%%%%%%%")
    console.log("%%%%#.        .%%#(.         *#%%%%%%%%%%")
    console.log("%%,        (%/       .,*/*,.  *#%%%%%%%%%")
    console.log("%%%%,(/*,%#    .##%(,       ./%%%%%%%%%%%")
    console.log("%%%%* %%%%%  %%*                 .%%%%%%%")
    console.log("%%%%#  %%%%%%.                      (%%%%")
    console.log("%%%%%%%%%%%(              .          .%%%")
    console.log("%%%%%%%%%%(       ,%#    (%  #%*      ,%%")
    console.log("%%%%%%%%%%.    .%#.     #%     .#%,    %%")
    console.log("%%%%%%%%%%.      #%/   /%     /%#      %%")
    console.log("%%%%%%%%%%#         * /%     ,        ,%%")
    console.log("%%%%%%%%%%%#                         ,%%%")
    console.log("%%%%%%%%%%%%%.                      #%%%%")
    console.log("%%%%%%%%%%%%%%%(                 *%%%%%%%")
    console.log("%%%%%%%%%%%%%%%%%%%#/.     .,#%%%%%%%%%%%")
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    console.log("%%%%%%%%%%% EPPR CLASE 304 %%%%%%%%%%%%%%")
    console.log("Visita https://github.com/eppr/304 Para más información.")
}
