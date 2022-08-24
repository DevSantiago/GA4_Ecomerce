/**
 * El valor de step debe variar dependiendo del paso que está aterrizando el cliente. 
 */
function onCheckout() {
  dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
  dataLayer.push({
    'event': 'checkout',
    'ecommerce': {
      'checkout': {
        'actionField': {'step': 1, 'option': 'Visa'},
        'products': [{
          'name': 'Triblend Android T-Shirt',
          'id': '12345',
          'price': '15.25',
          'brand': 'Google',
          'category': 'Apparel',
          'variant': 'Gray',
          'quantity': 1
       }]
     }
   },
   'eventCallback': function() {
      document.location = 'checkout.html';
   }
  });
}
