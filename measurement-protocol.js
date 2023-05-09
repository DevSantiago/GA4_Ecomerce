function sendPurchaseEvent(transaction_id, product_name, quantity, price) {
    const measurement_id = "YOUR_MEASUREMENT_ID";
    const api_secret = "YOUR_API_SECRET";
    const client_id = "YOUR_CLIENT_ID";
  
    const purchase_event = {
      "client_id": client_id,
      "events": [
        {
          "name": "purchase",
          "params": {
            "transaction_id": transaction_id,
            "items": [
              {
                "item_name": product_name,
                "quantity": quantity,
                "price": price
              }
            ],
            "currency": "USD" // Asegúrate de establecer la moneda correcta.
          }
        }
      ]
    };
  
    fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${measurement_id}&api_secret=${api_secret}`, {
      method: "POST",
      body: JSON.stringify(purchase_event),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }