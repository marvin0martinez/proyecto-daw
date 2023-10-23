 // Función para redirigir a la página de registro
 function redirigirARegistro() {
    window.location.href = "formulario.html";
  }

  // Función para redirigir a la página de inicio de sesión
  function redirigirAInicio() {
    window.location.href = "iniciarsesion.html";
  }

  // Obtén el botón por su ID
  const mostrarProductosButton = document.getElementById("mostrarProductosButton");

  // Agrega un evento de clic al botón para redirigir a otra página
  mostrarProductosButton.addEventListener("click", function() {
    window.location.href = "Boguedita2.html"; // Reemplaza con la URL de la página deseada
  });