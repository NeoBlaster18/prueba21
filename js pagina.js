
function mostrarMensaje() {
    // Obtener el texto ingresado en el textarea
    var texto = document.getElementById("mensaje").value;
  
    // Crear un nuevo elemento de párrafo para mostrar el mensaje
    var nuevoMensaje = document.createElement("p");
    var textoMensaje = document.createTextNode(texto);
    nuevoMensaje.appendChild(textoMensaje);
  
    // Agregar el nuevo elemento al div de mensajes mostrados
    var divMensajesMostrados = document.getElementById("mensajesMostrados");
    divMensajesMostrados.appendChild(nuevoMensaje);

  }
  
  function guardarMensaje() {
    var mensaje = document.getElementById("mensaje").value;
    var archivo = new Blob([mensaje], {type: 'text/plain'});
    var enlace = document.createElement("a");
    enlace.download = "MensajesPágina.txt";
    enlace.href = URL.createObjectURL(archivo);
    enlace.click();
  }
  