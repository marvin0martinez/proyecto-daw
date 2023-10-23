// Obtiene una referencia a los botones por su ID
var iniciarSesionButton = document.getElementById("iniciar-sesion-button");
var registrarseButton = document.getElementById("registrarse-button");

// Asigna las URLs a las que deseas redirigir a los usuarios al hacer clic en los botones
var iniciarSesionURL = "Boguedita2.html";
var registrarseURL = "formulario.html";

// Agrega un controlador de eventos para redirigir al usuario cuando se hace clic en los botones
iniciarSesionButton.addEventListener("click", function() {
    window.location.href = iniciarSesionURL;
});

registrarseButton.addEventListener("click", function() {
    window.location.href = registrarseURL;
});
