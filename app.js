function showAlert() {
    // Obtener los valores de los campos del formulario
    const firstName = document.getElementById('Nombres').value;
    const lastName = document.getElementById('Apellidos').value;
    const phoneNumber = document.getElementById('Telefono').value;
    const email = document.getElementById('Escriba su correo electronico').value;
    const birthDate = document.getElementById('Fecha').value;
    const message = document.getElementById('Mensaje').value;

    // Crear el mensaje del alert
    const alertMessage = `Nombres: ${firstName}\nApellidos: ${lastName}\nTelefono: ${phoneNumber}\nEscriba su correo electronico: ${email}\nFecha: ${birthDate}\nMensaje: ${message}`;

    // Mostrar el alert con los datos ingresados
    alert(alertMessage);
}