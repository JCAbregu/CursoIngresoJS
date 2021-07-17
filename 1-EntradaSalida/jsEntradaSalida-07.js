/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num1;
	let num2;

	num1= parseInt(document.getElementById("txtIdNumeroUno").value);
	num2= parseInt(document.getElementById("txtIdNumeroDos").value);

	alert("El resultado de la suma es: " + (num1 + num2));	
}

function restar()
{
	let num1;
	let num2;

	num1= parseInt(document.getElementById("txtIdNumeroUno").value);
	num2= parseInt(document.getElementById("txtIdNumeroDos").value);

	alert("El resultado de la resta es: " + (num1 - num2));	
}

function multiplicar()
{ 
	let num1;
	let num2;

	num1= parseInt(document.getElementById("txtIdNumeroUno").value);
	num2= parseInt(document.getElementById("txtIdNumeroDos").value);

	alert("El resultado de la multiplicación es: " + (num1 * num2));	
}

function dividir()
{
	let num1;
	let num2;

	num1= parseFloat(document.getElementById("txtIdNumeroUno").value);
	num2= parseFloat(document.getElementById("txtIdNumeroDos").value);

	alert("El resultado de la división es: " + (num1 / num2));	
}

