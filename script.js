let opcion = parseInt(prompt("Ingresa el numero del ejercicio que deseas hacer: "));

if (opcion >= 1 & opcion <= 12) {
    if (opcion === 1) {
        let bello = prompt("¿Eres bellisimo/a?");
        bello = bello.toUpperCase();
        if (bello === "SI") {
            document.write("Ciertamente");
        }else if(bello === "NO"){
            document.write("No te creo");
        }else{
            document.write("Ingresa como respuesta SI o NO");
        }
    }
    if (opcion === 2) {
        let num = parseInt(prompt(("Ingresa un número: ")));
        if (num % 2 === 0) {
            document.write(`${num} es divisible entre dos`);
        }else{
            document.write(`${num} no es divisible entre dos`);
        }
    }
    if (opcion === 3) {
        let num = parseInt(prompt(("Ingresa un número: ")));
        if (num % 2 === 0) {
                
        }else{
            alert("El número es impar");
        }
    }
    if (opcion === 4) {
        let num = parseInt(prompt(("Ingresa tu número de cliente: ")));
        if (num === 1000) {
            document.write("Ganaste un premio");
        }else{
            document.write("Lo sentimos, sigue participando");
        }
    }
    if (opcion === 5) {
        let num = parseInt(prompt(("Ingresa un número: ")));
        let num2 = parseInt(prompt(("Ingresa otro número: ")));
        if (num < num2) {
            document.write(`El número menor es ${num}`);
        }else if(num2 < num){
            document.write(`El número menor es ${num2}`);
        }else if(num2 === num){
            document.write(`Los numeros son iguales`);
        }else{
            document.write("Ingresa un número válido");
        }
    }
    if (opcion === 6) {
        let num = parseInt(prompt(("Ingresa un número: ")));
        let num2 = parseInt(prompt(("Ingresa otro número: ")));
        let num3 = parseInt(prompt(("Ingresa un tercer número: ")));
        if (num > num2 & num > num3) {
            document.write(`El número mayor es ${num}`);
        }else if (num2 > num & num2 > num3) {
            document.write(`El número mayor es ${num2}`);
        }else if (num3 > num & num3 > num2) {
            document.write(`El número mayor es ${num3}`);
        }else if (num === num2 || num === num3 || num2 === num3) {
            document.write("Algunos números son iguales y no es posible determinar cuál es el mayor");
        }
    }
    if (opcion === 7) {
        let dia = prompt("Escribe un día de la semana: ");
        dia = dia.toUpperCase();
        if (dia === "LUNES") {
            document.write("¡Feliz inicio de semana!");
        }else if (dia === "MARTES") {
            document.write("Los martes las personas son más productivas");
        }else if (dia === "MIERCOLES") {
            document.write("¡Ya estás a mitad de semana!");
        }else if (dia === "JUEVES") {
            document.write("¡Ánimo!, ya es juernes, ¿que tal ir a cine?");
        }else if (dia === "VIERNES") {
            document.write("Día de farra y compartir con amigos");
        }else if (dia === "SABADO") {
            document.write("Descansar, salir y quizas un partido de fútbol");
        }else if (dia === "DOMINGO") {
            document.write("Día para pasar en familia :)");
        }else{
            document.write("Ingresa un día válido");
        }            
    }
    if (opcion === 8) {
        let num = parseInt(prompt(("Ingresa tu calificacion, debe ser un número entre 1 y 10: ")));
        if (num >= 1 & num < 6) {
            document.write("Reprobado");
        }
        else if (num >= 6 & num <= 8) {
            document.write("Regular");
        }
        else if (num === 9) {
            document.write("Bien");
        }
        else if (num === 10) {
            document.write("Excelente");
        }else{
            document.write("Error");
        }
    }
}else{
    alert("Ingresa un número válido entre el 1 y el 12");
}