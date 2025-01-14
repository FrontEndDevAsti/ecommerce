export default function ShippingPolicy() {
  return (
    <div className="container mx-auto max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Shipping Policy</h1>
      <p className="mb-4">
        DummyShop is committed to delivering your orders in a timely and efficient manner.
      </p>
      <h2 className="text-2xl font-semibold mb-2">1. Processing Time</h2>
      <p className="mb-4">
        Orders are typically processed within 1-2 business days after payment confirmation.
      </p>
      <h2 className="text-2xl font-semibold mb-2">2. Shipping Methods</h2>
      <p className="mb-4">
        We offer standard shipping and express shipping options. Delivery times may vary depending on your location.
      </p>
      <h2 className="text-2xl font-semibold mb-2">3. Shipping Costs</h2>
      <p className="mb-4">
        Shipping costs are calculated based on the weight of your order and your delivery address. You can view the shipping cost at checkout before completing your purchase.
      </p>
      {/* Add more sections as needed */}
    </div>
  )
}

