// Medir clic a banners tipo slidee

dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "banners_click",
  parms: {
    type: "slider",
    position: "0", // Debe ser la posición del slider
    alt: "Debe ser el valor del atributo alt de la imange",
  }
});

// Medir clic a banner único

dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "banners_click",
  parms: {
    type: "section", // Section
    position: "NA", // En este caso, no hay más banners, el valor por default debe ser NA
    alt: "Debe ser el valor del atributo alt de la imange",
  }
});
