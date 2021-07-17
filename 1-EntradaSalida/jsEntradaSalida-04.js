/* Abregú Juan Cruz - Div E 
 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{

	let datoIngresado;

	datoIngresado = prompt("Ingrese su nombre");

	document.getElementById("txtIdNombre").value = datoIngresado;
	
}

