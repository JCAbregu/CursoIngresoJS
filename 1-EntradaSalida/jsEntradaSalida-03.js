// Juan Cruz Abregú - Division E
/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let edadIngresada;


	edadIngresada = parseInt(document.getElementById("txtIdNombre").value);	

	if(edadIngresada > 17 ){
		alert("Es mayor de edad");
	}
	else{
		alert("Es menor de edad");
	}

}


