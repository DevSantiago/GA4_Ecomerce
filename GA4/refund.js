// To refund an entire transaction, provide the transaction ID.
// This example assumes the details of the completed refund are
// available when the page loads:
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "refund",
  ecommerce: {
    transaction_id: "T12345" // Transaction ID. Required for purchases and refunds.
  }
});