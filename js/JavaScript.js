function calcular(){
	
	numero = parseInt(prompt("Ingrese su salario"));
	rango = parseInt(prompt("Ingrese su Rango"));


	//se usa una concidional para saber el salario del cliente 
	
	if (rango == 1)
	 {
		//codigo para imprimir en pantalla 
	 var resultado = numero * 15 / 100 + numero;
		 document.write("su nuevo salario es: " +resultado+  " Y su rango es: " +rango);
	 }
	else if (rango == 2) {
		var resultado = numero * 10 / 100 + numero;
		 document.write("su nuevo salario es: " +resultado+ " Y su rango es: " +rango);
	}
	else if (rango == 3) {
		var resultado = numero * 8 / 100 + numero;
		 document.write("su nuevo salario es: " +resultado+ " Y su rango es: " +rango);
	}
	else if (rango == 4) {
		var resultado = numero * 7 / 100 + numero;
		 document.write("su nuevo salario es: " +resultado+ " Y su rango es: " +rango);
	}
}




function parImpar(){
	//Declaracion de dos variables
	var numero = 1;
	var suma = 0;
	//Creacion de un for que vaya hasta el numero 100 
	for (numero=1; numero<=100; numero++)
     {
     	/*se usa una concidional para saber
	el modulo del resultado dividido entre 2 es igual a 0
	Si el residuo es 0, entonces quiere decir que es un numero par
	si no, es impar*/ 
      if (numero%2 == 0) {
		//codigo para imprimir en consola
		
		console.log("El numero: "+ numero + " es par");

	}else{
		console.log("El numero: "+ numero + " es impar");
	}
	 var suma= suma+numero;
		console.log("la suma de todos los numeros" +suma );

		}
		 
        
    }

//Creacion de mi funcion para mi seleccion de helados
function heladosPerrones() {  
var helado;
//aqui la variable guardare el numero
helado = prompt ('Por favor introduce un sabor de helado : 1.Oreo 2.Kitkat 3.cajeta 4.choconuez 5.Helado solo');
//un if? por que necesito que ingrese algo si no lo hace te dira eso
if (helado =="") { alert ('No has introducido Ningun sabor'); }
helado = Number(helado);
//Un switch para que se pueda seleccionar varios casos que pueda usar el usuario
        switch (helado) {
            case 1: document.write ("Tu helado sera de Oreo y en total son : $30 pesos mexicanos");
             break;
            case 2: document.write ("Tu helado sera de Kitkat y en total son : $35 pesos mexicanos");
             break;
            case 3: document.write ("Tu helado sera de cajeta y en total son : $30 pesos mexicanos");
             break;
            case 4: document.write ("Tu helado sera de ChocoNuez y en total son : $40 pesos mexicanos"); 
            break;
            case 5: document.write ("Tu helado Sera sin ingrediente adicional eltotal es de: $20 pesos mexicanos"); 
            break;
            default: document.write ("Lo siento no contamos con ese sabor."); break;
        }
}


function generacion(){

	var generaciones = 0;
			//Esta variable nos permitira ingresar el pirmer numero
    		var n2 = parseInt(prompt("Dime tu año de nacimiento"));
    		//Se crea la estructura ciclica para que nos realice la eleccion de fecha
		do{
			if(n2 > 1949  && n2 < 1968 ){
					document.write ("Tu generacion es baby boom");
			}
			else if (n2 > 1969  && n2 < 1980) {
				document.write ("Tu generacion es : Gneracion X");
			}
			else if (n2 > 1981  && n2 < 1993) {
				document.write ("Tu generacion es : Gneracion Y");
			}
			else if (n2 > 1994  && n2 < 2010) {
				document.write ("Tu generacion es : Gneracion Z");
			}
			//variable que nos permite ingrear el segundo numero para salir o continuar
			var n2 =parseInt(prompt("Ingres la segunda fecha SI DESEA SALIR COLOQUE 0"));
			

		}
		//Terminacion de nuestro mientras
    	while(n2>0);
    	//Alerta de que vamos a salir.
    	alert("Estamos a punto de salir");
    	document.write("Año Ingresado: " + n2);
    	
}




function viajes(){
	
var n2 = parseInt(prompt("Vas a viajar? presiona el numero 1.SI o 2.No"));

    		//Se crea la estructura ciclica para que nos realice la eleccion de fecha
		do{
			if(n2 == 1 ){
				var txt = document.getElementById("txt");
					document.write ("En  que mes viajaras?");


			}
			else if (n2 == 0) {
				document.write ("No eres apto");
			}
			//variable que nos permite ingrear el segundo numero para salir o continuar
			var n2 =parseInt(prompt("viajaras? SI DESEA SALIR COLOQUE 0"));
			

		}
		//Terminacion de nuestro mientras
    	while(n2>0);
    	//Alerta de que vamos a salir.
    	alert("Estamos a punto de salir");

    

}



