/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;

	importe = parseFloat(document.getElementById("txtIdImporte").value);

	document.getElementById("txtIdResultado").value = importe - (importe * 25 / 100);

}
