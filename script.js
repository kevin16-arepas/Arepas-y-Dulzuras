document.getElementById("calcular-total").addEventListener("click", function() {
    const precioArepaSal = 5000;
    const precioArrozLeche = 3500;
    const precioPostres = 7000;

    const cantidadArepaSal = parseInt(document.getElementById("cantidad-arepa-sal").value) || 0;
    const cantidadArrozLeche = parseInt(document.getElementById("cantidad-arroz-leche").value) || 0;
    const cantidadPostres = parseInt(document.getElementById("cantidad-postres").value) || 0;

    const total = (cantidadArepaSal * precioArepaSal) + (cantidadArrozLeche * precioArrozLeche) + (cantidadPostres * precioPostres);

    if (total === 0) {
        document.getElementById("realizar-pedido").disabled = true;
        document.getElementById("total").innerText = "Por favor, selecciona tus productos.";
    } else {
        document.getElementById("realizar-pedido").disabled = false;
        document.getElementById("total").innerText = "Total: $" + total;
    }
});

document.getElementById("realizar-pedido").addEventListener("click", function() {
    const nombreUsuario = prompt("¿Cuál es tu nombre?");
    if (!nombreUsuario) {
        alert("Por favor, ingresa tu nombre.");
        return; // Detiene el proceso si no se introduce un nombre.
    }

    const cantidadArepaSal = document.getElementById("cantidad-arepa-sal").value;
    const cantidadArrozLeche = document.getElementById("cantidad-arroz-leche").value;
    const cantidadPostres = document.getElementById("cantidad-postres").value;

    const mensaje = `
      Nombre: ${nombreUsuario}
      Pedido:
      - Arepas de Sal con Queso: ${cantidadArepaSal}
      - Arroz de Leche: ${cantidadArrozLeche}
      - Postres: ${cantidadPostres}
    `;

    const urlWhatsApp = `https://wa.me/573132540390?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp, "_blank");
}); aaa
