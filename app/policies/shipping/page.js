export default function ShippingPolicy() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-primary">Shipping Policy</h1>
      <div className="space-y-4 bg-card p-6 rounded-lg shadow-md">
        <p className="text-card-foreground">EcommerceHub is committed to delivering your orders in a timely and efficient manner.</p>
        <h2 className="text-2xl font-semibold text-primary">1. Processing Time</h2>
        <p className="text-card-foreground">Orders are typically processed within 1-2 business days after payment confirmation.</p>
        <h2 className="text-2xl font-semibold text-primary">2. Shipping Methods</h2>
        <p className="text-card-foreground">We offer standard shipping and express shipping options. Delivery times may vary depending on your location.</p>
        <h2 className="text-2xl font-semibold text-primary">3. Shipping Costs</h2>
        <p className="text-card-foreground">Shipping costs are calculated based on the weight of your order and your delivery address. You can view the shipping cost at checkout before completing your purchase.</p>
      </div>
    </div>
  )
}

