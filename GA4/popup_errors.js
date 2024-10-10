// Medir clic a botones

dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "popup_errors",
  parms: {
    error_text: "Something wrong", // Debe ser el texto del botón que se ha clickeado: Beneficios, Ver más, WhatsApp, Pagar ahora
    location: "payment", // ruta o ancla donde ocurre el error
  }
});
