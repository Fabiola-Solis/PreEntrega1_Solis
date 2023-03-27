//////ENTREGA#1--SIMULADOR-INTERACTIVO//////
///////////////////////////////////////////

/*FIT-MARKET 
Mercado y/o tienda virtual enfocada en la venta minorista de productos relacionados con la salud y nutrición.
Incluyendo proteínas, vitaminas, anábolicos, entre otros. Con servicio de 'Delivery' para los clientes del GAM, en: 
San José, Costa Rica.

//PASOS a seguir--Simulador:

1.Ingresar Nombre > Mostrar: Saludo + Nombre de usuario.
2.Opción de incluión de 'Password', con tres intentos para ingresarlo.

/// PASSWORD-CORRECTO: 1234 ///

  > Si se ingresa correctamente el 'Password', aparece un mensaje de: 'Bienvenida'.
  > Pero si se ingresa incorrectamente, aparece un mensaje de 'Error'. 

  3.Pantalla con opciones de Productos (para solicitarlos/pedirlos):
  
  > Proteína.
  > Vitaminas.
  > Suplementos.
  > Anabólicos.

  **Cliquea en alguna de las opciones/productos para hacer el pedido.
  **Presionar 'X' para salir de la pantalla de opciones.

  4. Para finalizar, aparece un mensaje de 'Comunicación con el cliente en menos de 24hrs (para acordar entrega de pedido)'.
*/



//FUNCTION//

let nombre = prompt ("Ingresa tu nombre");

function saludoConNombre(nombre) {
  alert("Hola" + " " + nombre); 
}
saludoConNombre(nombre);


//CONDICIONAL//

let passGuardado = "1234";
let ingreso=false;

for (let i = 2; i >= 0; i--) {
  let ingresoPASS = prompt("Ingresa tu contraseña. Tienes " + (i + 1) + " Intentos");
  if(ingresoPASS === passGuardado){
    alert("👋 Bienvenido/a ya puedes iniciar tu pedido.");
    ingreso = true;
    break;
  } else {
    alert("⛔ Error");
  }
}

//BUCLE-CICLO//
if(ingreso){
  let opcion = prompt(
    "🗳️ Selecciona algún producto de 1 a 4 y se realizará el pedido: \n1- Proteína. \n2- Vitaminas. \n3- Suplementos. \n4- Anabólicos. \nPresioná 'X' para finalizar."
);

while(opcion !="x")
{
  switch (opcion) {
    case "1":
      alert("✅'Proteína' ha sido seleccionado y/o pedido satisfactoriamente!");
      break;

    case "2":
      alert("✅'Vitaminas' ha sido seleccionado y/o pedido satisfactoriamente!");
      break;

    case "3":
      alert("✅‘Suplementos’ ha sido seleccionado y/o pedido satisfactoriamente!");
      break;

    case "4":
      alert("✅‘Anabólicos’ ha sido seleccionado y/o pedido satisfactoriamente!");
      break;
  
    default:
      alert("⛔ Opción no valida.");
      break;
  }
  opcion = prompt(
    "🗳️ Seleccionar algún producto de 1 a 4 y se realizará el pedido: \n1- Proteína. \n2- Vitaminas. \n3- Suplementos. \n4- Anabólicos. \nPresioná X para finalizar."
  );
  }

} else {
alert("⛔ Se ha excedido el número máximo de intentos fallidos. Comunícate al 800-000-000... ");
}

alert("📳 Nos comunicaremos contigo en menos de 24hrs.")

