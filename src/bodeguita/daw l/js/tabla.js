// Función para redirigir a la página de "Regresar"
function redirigirARegresar() {
    window.location.href = "tabla2.html";
}

// Función para redirigir a la página de "Inicio"
function redirigirAInicio() {
    window.location.href = "Boguedita.html";
}

// Asignar las funciones a los botones
document.getElementById("regresarButton").addEventListener("click", redirigirARegresar);
document.getElementById("inicioButton").addEventListener("click", redirigirAInicio);