// Measure product views / impressions
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "view_item_list",
  ecommerce: {
    items: [
     {
       item_name: "Edifier G2000 Gaming Activos",       // Name or ID is required.
       item_id: "12345",
       price: 15.25,
       item_brand: "Edifier",
       item_category: "Parlantes Home & Hi-Fi",
       item_category2: "Parlantes Activos",
       item_category3: "Whatever",
       item_category4: "Whatever",
       item_variant: "Black",
       item_list_name: "Parlantes Activos",
       item_list_id: "SR123",
       index: 1,
       quantity: 1
     },
     {
       item_name: "Edifier R1280DBs Activos",
       item_id: "67890",
       price: 33.75,
       item_brand: "Edifier",
       item_category: "Parlantes Home & Hi-Fi",
       item_category2: "Parlantes Activos",
       item_category3: "Whatever",
       item_category4: "Whatever",
       item_variant: "Black",
       item_list_name: "Parlantes Activos",
       item_list_id: "SR123",
       index: 2,
       quantity: 1
     }]
  }
});