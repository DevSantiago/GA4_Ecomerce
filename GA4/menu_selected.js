// Medir clic a menú con opción de menú, categoría y submenú.

dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "menu_selected",
  parms: {
    menu_option: "Audio",
    menu_category: "Audifonos",
    submenu_category: "Gaming",
  }
});

// Medir clic a menú con opción de menú, categoría y en caso de que no haya submenú, el valor por default debe ser NA

dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "menu_selected",
  parms: {
     menu_option: "Audio",
    menu_category: "Combos de Audio",
    submenu_category: "NA",
  }
});
