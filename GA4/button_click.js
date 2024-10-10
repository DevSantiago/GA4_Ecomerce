// Medir clic a botones

dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "button_click",
  parms: {
    button_text: "Liquidaciones", // Debe ser el texto del botón que se ha clickeado: Beneficios, Ver más, WhatsApp, Pagar ahora
    location: "payment", // Debe ser tanto el path como el ancla: /cart/, #payment, #shipping
  }
});
