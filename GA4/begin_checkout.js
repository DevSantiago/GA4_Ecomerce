/**
 * A function to handle a click on a checkout button.
 */
 function onCheckout() {
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
      event: "begin_checkout",
      ecommerce: {
        items: [{
          item_name: "Donut Friday Scented T-Shirt", // Name or ID is required.
          item_id: "67890",
          price: 33.75,
          item_brand: "Google",
          item_category: "Apparel",
          item_category2: "Mens",
          item_category3: "Shirts",
          item_category4: "Tshirts",
          item_variant: "Black",
          item_list_name: "Search Results",
          item_list_id: "SR123",
          index: 1,
          quantity: 1
        }]
      }
    });
  }