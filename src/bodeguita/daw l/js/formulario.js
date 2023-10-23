// Obtiene una referencia a los botones por su ID
var inscribirseButton = document.getElementById("inscribirse-button");
var iniciarSesionButton = document.getElementById("iniciar-sesion-button");

// Asigna las URLs a las que deseas redirigir a los usuarios al hacer clic en los botones
var inscribirseURL = "iniciarsesion.html";
var iniciarSesionURL = "";

// Agrega un controlador de eventos para redirigir al usuario cuando se hace clic en los botones
inscribirseButton.addEventListener("click", function() {
    window.location.href = inscribirseURL;
});

iniciarSesionButton.addEventListener("click", function() {
    window.location.href = iniciarSesionURL;
});
