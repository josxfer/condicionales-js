let opcion = parseInt(prompt("Ingresa el numero del ejercicio que deseas hacer: "));

if (opcion >= 1 & opcion <= 11) {
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
    if (opcion === 9) {
        let adicion = prompt("¿Quieres topping para tu helado?, por favor responde si o no: ");
        adicion = adicion.toUpperCase();
        if (adicion === "SI") {
            let topping = prompt("Escribe a continuacion cuál topping quieres para tu helado (Oreo, KitKat o Brownie): ");
            topping = topping.toUpperCase();
            if (topping === "OREO") {
                document.write("Tu helado cuesta 60 MXN");
            }else if (topping === "KITKAT") {
                document.write("Tu helado cuesta 65 MXN");
            }else if (topping === "BROWNIE") {
                document.write("Tu helado cuesta 70 MXN");
            }else{
                document.write("No tenemos este topping, lo sentimos. Tu helado cuesta 50 MXN");
            }
        }else if (adicion === "NO") {
            document.write("Tu helado cuesta 50 MXN")
        }else{
            document.write("Ingresa una respuesta válida")
        }
    }
    if (opcion === 10) {
        let course= 4999;
        let carrera = 3999;
        let master = 2999;
        let programa = prompt("Por favor escribe cual programa deseas estudiar (Course, Carrera o Master): ");
        programa = programa.toUpperCase();
        if (programa === "COURSE" || programa === "CARRERA" || programa === "MASTER") {
            descuento = prompt("¿Tienes alguna beca de descuento? (Responde Si o No): ");
            descuento = descuento.toUpperCase();
            if (descuento === "SI") {
                let beca = prompt("Cual beca tienes (Facebook, Google o Jesua) ");
                beca = beca.toUpperCase();
                if (programa === "COURSE" & beca === "FACEBOOK") {
                    let val_mensual = course -((course/100)*20);
                    let val_total = val_mensual * 2;
                    document.write("El valor a pagar mensual por el programa Course con el descuento incluido son: " + val_mensual.toFixed(2) + " MXN" + "<br>" + "El valor a pagar por el total del programa son: " + val_total.toFixed(2) + " MXN por dos meses.");
                }else if (programa === "COURSE" & beca === "GOOGLE") {
                    let val_mensual = course -((course/100)*15);
                    let val_total = val_mensual * 2;
                    document.write("El valor a pagar mensual por el programa Course con el descuento incluido son: " + val_mensual.toFixed(2) + " MXN" + "<br>" + "El valor a pagar por el total del programa son: " + val_total.toFixed(2) + " MXN por dos meses.");
                }else if (programa === "COURSE" & beca === "JESUA") {
                    let val_mensual = course -((course/100)*50);
                    let val_total = val_mensual * 2;
                    document.write("El valor a pagar mensual por el programa Course con el descuento incluido son: " + val_mensual.toFixed(2) + " MXN" + "<br>" + "El valor a pagar por el total del programa son: " + val_total.toFixed(2) + " MXN por dos meses.");
                }else if (programa === "CARRERA" & beca === "FACEBOOK") {
                    let val_mensual = carrera -((carrera/100)*20);
                    let val_total = val_mensual * 6;
                    document.write("El valor a pagar mensual por el programa Carrera con el descuento incluido son: " + val_mensual.toFixed(2) + " MXN" + "<br>" + "El valor a pagar por el total del programa son: " + val_total.toFixed(2) + " MXN por seis meses.");
                }else if (programa === "CARRERA" & beca === "GOOGLE") {
                    let val_mensual = carrera -((carrera/100)*15);
                    let val_total = val_mensual * 6;
                    document.write("El valor a pagar mensual por el programa Carrera con el descuento incluido son: " + val_mensual.toFixed(2) + " MXN" + "<br>" + "El valor a pagar por el total del programa son: " + val_total.toFixed(2) + " MXN por seis meses.");
                }else if (programa === "CARRERA" & beca === "JESUA") {
                    let val_mensual = carrera -((carrera/100)*50);
                    let val_total = val_mensual * 6;
                    document.write("El valor a pagar mensual por el programa Carrera con el descuento incluido son: " + val_mensual.toFixed(2) + " MXN" + "<br>" + "El valor a pagar por el total del programa son: " + val_total.toFixed(2) + " MXN por seis meses.");
                }else if (programa === "MASTER" & beca === "FACEBOOK") {
                    let val_mensual = master -((master/100)*20);
                    let val_total = val_mensual * 12;
                    document.write("El valor a pagar mensual por el programa Master con el descuento incluido son: " + val_mensual.toFixed(2) + " MXN" + "<br>" + "El valor a pagar por el total del programa son: " + val_total.toFixed(2) + " MXN por doce meses.");
                }else if (programa === "MASTER" & beca === "GOOGLE") {
                    let val_mensual = master -((master/100)*15);
                    let val_total = val_mensual * 12;
                    document.write("El valor a pagar mensual por el programa Master con el descuento incluido son: " + val_mensual.toFixed(2) + " MXN" + "<br>" + "El valor a pagar por el total del programa son: " + val_total.toFixed(2) + " MXN por doce meses.");
                }else if (programa === "MASTER" & beca === "JESUA") {
                    let val_mensual = master -((master/100)*50);
                    let val_total = val_mensual * 12;
                    document.write("El valor a pagar mensual por el programa Master con el descuento incluido son: " + val_mensual.toFixed(2) + " MXN" + "<br>" + "El valor a pagar por el total del programa son: " + val_total.toFixed(2) + " MXN por doce meses.");
                }else{
                    document.write("Este no es un descuento válido");
                }
            }else if(descuento === "NO"){
                if (programa === "COURSE") {
                    let val_total = course * 2;
                    document.write("El valor a pagar mensual por el programa Course son: " + course.toFixed(2) + " MXN" + "<br>" + "El valor a pagar por el total del programa son: " + val_total.toFixed(2) + " MXN por dos meses.");
                }else if (programa === "CARRERA") {
                    let val_total = carrera * 6;
                    document.write("El valor a pagar mensual por el programa Carrera son: " + carrera.toFixed(2) + " MXN" + "<br>" + "El valor a pagar por el total del programa son: " + val_total.toFixed(2) + " MXN por seis meses.");
                }else if (programa === "MASTER") {
                    let val_total = master * 12;
                    document.write("El valor a pagar mensual por el programa Master son: " + master.toFixed(2) + " MXN" + "<br>" + "El valor a pagar por el total del programa son: " + val_total.toFixed(2) + " MXN por doce meses.");
                }
            }else{
                document.write("Por favor ingresa una opción válida (Si o No)")
            }
        }else{
            document.write("Por favor ingresa una opción Válida (Course, Carrera o Master)")
        }
    }
    if (opcion === 11) {
        let coche = 0.20;
        let moto = 0.10;
        let autobus = 0.5;
        let tipo = prompt("¿Cuál vehículo usaste para tu recorrido? (Escribe coche, moto o autobus)");
        tipo = tipo.toUpperCase();
        let distancia = parseInt(prompt("¿Escribe cuantos kilometros recorriste?"));
        if (distancia <= 100 & tipo === "COCHE") {            
            let total = (coche * distancia) + 5;
            document.write("El valor a pagar por tu distancia recorrida es de: $" + total.toFixed(2));            
        }else if (distancia <= 100 & tipo === "MOTO") {            
            let total = (moto * distancia) + 5;
            document.write("El valor a pagar por tu distancia recorrida es de: $" + total.toFixed(2));            
        }else if (distancia <= 100 & tipo === "AUTOBUS") {            
            let total = (autobus * distancia) + 5;
            document.write("El valor a pagar por tu distancia recorrida es de: $" + total.toFixed(2));            
        }else if (distancia > 100 & tipo === "COCHE") {            
            let total = (coche * distancia) + 10;
            document.write("El valor a pagar por tu distancia recorrida es de: $" + total.toFixed(2));            
        }else if (distancia > 100 & tipo === "MOTO") {            
            let total = (moto * distancia) + 10;
            document.write("El valor a pagar por tu distancia recorrida es de: $" + total.toFixed(2));            
        }else if (distancia > 100 & tipo === "AUTOBUS") {            
            let total = (autobus * distancia) + 10;
            document.write("El valor a pagar por tu distancia recorrida es de: $" + total.toFixed(2));            
        }else{
            document.write("Escribe un valor correcto");
        }
    }
}else{
    alert("Ingresa un número válido entre el 1 y el 11");
}