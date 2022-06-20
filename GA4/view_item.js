// Measure a view of product details. This example assumes the detail view occurs on pageload,
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "view_item",
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
      item_list_name: "Search Results",  // If associated with a list selection.
      item_list_id: "SR123",  // If associated with a list selection.
      index: 1,  // If associated with a list selection.
      quantity: 1
    }]
  }
});