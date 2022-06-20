/**
 * Call this function when a user clicks on a product link.
 * @param {Object} productObj An object that represents the product that is clicked.
 */
 function onProductClick(productObj) {
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
      event: "select_item",
      ecommerce: {
        items: [{
          item_name: productObj.name, // Name or ID is required.
          item_id: productObj.id,
          item_brand: productObj.brand,
          item_category: productObj.category,
          item_category2: productObj.category_2,
          item_category3: productObj.category_3,
          item_category4: productObj.category_4,
          item_variant: productObj.variant,
          item_list_name: productObj.list_name,
          item_list_id: productObj.list_id,
          index: productObj.index,
          quantity: productObj.quantity,
          price: productObj.price
        }]
      }
    });
  }