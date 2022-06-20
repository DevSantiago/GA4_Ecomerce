/**
 * Call this function when a user clicks on a promotion.
 * @param {Object} promoObj An object that represents an internal site promotion.
 */
 function onPromoClick(promoObj) {
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
      event: "select_promotion",
      ecommerce: {
        items: [{
          item_name: promoObj.name, // Name or ID is required.
          item_id: promoObj.id,
          item_brand: promoObj.brand,
          item_category: promoObj.category,
          item_category2: productObj.category_2,
          item_category3: productObj.category_3,
          item_category4: productObj.category_4,
          item_variant: promoObj.variant,
          promotion_id: promoObj.pid,
          promotion_name: promoObj.pname,
          creative_name: promoObj.pcreative_name,
          creative_slot: promoObj.pcreative_slot,
          location_id: promoObj.plocation,
          index: promoObj.index,
          quantity: promoObj.quantity,
          price: promoObj.price
        }]
      }
    });
  }