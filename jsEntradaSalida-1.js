//Debemos lograr mostrar un mensaje al presionar el botón  'mostrar'.
function mostrar()
{
	var ingreso = "si"
	var nombre;
	var cantPersonas = 0;
	var cantDia = 0;
	var formaPago;
	var mayorCantPersona = 0;
	var cantReserva = 0;
	var mayorCantDia = 0;
	var cantEfectivo = 0;
	var cantTarjeta = 0;
	var cantqr = 0;
	var totalCantDias = 0;
	var promedio;


	while(ingreso == "si")
	{
		cantReserva++;

		nombre = prompt("Ingrese su nombre.")
		while((!isNaN(nombre)))
		{
			alert("Dato incorrecto.");
			nombre = prompt("Ingrese su nombre.")
		}

		cantPersonas = prompt("Ingrese cantidad de personas.")
		while((isNaN(cantPersonas)) || cantPersonas < 0)
		{
			alert("Dato incorrecto.");
			cantPersonas = prompt("Ingrese cantidad de personas,")
		}

		cantDia = parseInt(prompt("Ingrese la cantidad de dias que se quedaran."));
		while((isNaN(cantDia)) || cantDia < 0)
		{
			alert("Dato incorrecto..");
			cantDia = parseInt(prompt("Ingrese la cantidad de dias que se quedaran."));
		}

		formaPago = prompt("Ingrese forma de pago. efectivo, tarjeta o QR");
		while(formaPago != "efectivo" && formaPago != "tarjeta" && formaPago != "qr")
		{
			alert("Dato incorrecto..");
			formaPago = prompt("Ingrese forma de pago. efectivo, tarjeta o QR");
		}

		ingreso = prompt("Desea seguir ingresando reservas? si/no");
		while(ingreso != "si" && ingreso != "no")
		{
			alert("Dato incorrecto")
			ingreso = prompt("Desea seguir ingresando? si/no");
		}

		if(cantReserva == "1" || cantPersonas > mayorCantPersona)
		{
			mayorCantPersona = cantPersonas;
			nombreMayorCantPersona = nombre;
		}
		if(cantReserva == "1" || cantDia > mayorCantDia)
		{
			mayorCantDia = cantDia;
			mayorCantPersona = cantPersonas;
		}

		if(formaPago == "efectivo")
		{
			cantEfectivo++;
		}
		else if(formaPago == "tarjeta")
		{
			cantTarjeta++;
		}
		else
		{
			cantqr++;
		}

/*
		switch(formaPago)
		{
			case "efectivo":
				cantEfectivo++;
				break;
			case "tarjeta":
				cantTarjeta++;
				break;
			case "qr":
				cantQr++;
				break;
		}
*/
		

	}
	
	if(cantqr > cantEfectivo && cantTarjeta)
	{
		document.write("La forma de pago mas utilizada es qr <br>");
	}
	else if(cantTarjeta > cantqr && cantEfectivo)
	{
		document.write("La forma de pago mas utilizada es la tarjeta <br>");
	}
	else
	{
		document.write("La forma de pago mas utilizada es efectivo <br>");
	}


	totalCantDias = totalCantDias + cantDia;
	promedio = totalCantDias / cantReserva;

	document.write("Nombre de huesped mayor cantidad de personas en una sola reserva son: " + nombreMayorCantPersona + "<br>");
	document.write("La persona que se quedo mas dias son:" + mayorCantPersona + "<br>");
	document.write("Cantidad de dias por reserva:" + promedio);

}

