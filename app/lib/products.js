export const products = [
  {
    id: 1,
    name: 'Sleek Smartwatch',
    description: 'Stay connected with this stylish and feature-packed smartwatch',
    price: 12999,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
  },
  {
    id: 2,
    name: 'Wireless Earbuds',
    description: 'Immerse yourself in crystal-clear audio with these comfortable earbuds',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
  },
  {
    id: 3,
    name: 'Ergonomic Keyboard',
    description: 'Type comfortably for hours with this ergonomic mechanical keyboard',
    price: 6499,
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  },
  {
    id: 4,
    name: 'Ultra-wide Monitor',
    description: 'Boost your productivity with this immersive ultra-wide monitor',
    price: 29999,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 5,
    name: 'Noise-cancelling Headphones',
    description: 'Experience pure audio bliss with these premium noise-cancelling headphones',
    price: 24999,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 6,
    name: 'High-Performance Gaming Mouse',
    description: 'Dominate your games with precision using this responsive gaming mouse',
    price: 7999,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1628&q=80',
  },
  {
    id: 7,
    name: 'Portable SSD Drive',
    description: 'Store and transfer your data quickly with this compact, high-speed SSD',
    price: 14999,
    image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
  },
  {
    id: 8,
    name: '4K Webcam',
    description: 'Look your best in video calls with this crystal-clear 4K webcam',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1722488359737-7a9b8a8436c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
  },
  {
    id: 9,
    name: 'Smart Home Hub',
    description: 'Control all your smart devices from one central hub for a connected home',
    price: 19999,
    image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
  },
  {
    id: 10,
    name: 'Foldable Smartphone',
    description: 'Experience the future of mobile with this innovative foldable smartphone',
    price: 149999,
    image: 'https://images.unsplash.com/photo-1657731739861-b21d95062cbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
  },
]

export function getProductById(id) {
  return products.find(product => product.id === parseInt(id))
}

