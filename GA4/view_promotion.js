// Measure promotion views. This example assumes that information about the
// promotions displayed is available when the page loads.
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "view_promotion",
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
      promotion_id: "abc123",
      promotion_name: "summer_promo",
      creative_name: "instore_suummer",
      creative_slot: "1",
      location_id: "hero_banner",
      index: 1,
      quantity: 1
    }]
  }
});