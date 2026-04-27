
import { BusinessInfo, Product } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Sri Manjunatha Electrical Service",
  tagline: "Professional Electrical Services & Premium Supplies in Bengaluru",
  address: "#17, Shankar Nagar Main Road, Nandini Layout, Bengaluru - 560096",
  phone: "+91 98459 32212",
  email: "contact@srimanjunathaelectrical.com",
  whatsapp: "919845932212",
  workingHours: {
    days: "Monday - Saturday",
    time: "9:30 AM - 8:30 PM",
  }
};

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Polycab Slim Panel LED",
    category: "Lighting",
    description: "Energy-efficient 12W/18W LED slim panel lights for residential and commercial false ceilings. Ultra-slim design with high lumen output.",
    imageUrl: "https://m.media-amazon.com/images/I/61S+8-8LSDL._SL1500_.jpg",
    priceRange: "₹450 - ₹950",
    isFeatured: true,
    stockStatus: 'In Stock'
  },
  {
    id: "2",
    name: "Finolex House Wires (FR-LSH)",
    category: "Wires & Cables",
    description: "Premium copper wires with Flame Retardant Low Smoke & Halogen properties. Triple-layer insulation for maximum safety.",
    imageUrl: "https://m.media-amazon.com/images/I/71p0vD+pUFL._SL1500_.jpg",
    priceRange: "₹1,450 - ₹4,800/Coil",
    isFeatured: true,
    stockStatus: 'In Stock'
  },
  {
    id: "3",
    name: "Orient Table Fan",
    category: "Fans",
    description: "Powerful high-speed air delivery with 3-speed control and smooth oscillation. Durable motor for long-lasting performance.",
    imageUrl: "https://m.media-amazon.com/images/I/71Y8vQxZ88L._SL1500_.jpg",
    priceRange: "₹2,450 - ₹3,800",
    isFeatured: true,
    stockStatus: 'In Stock'
  },
  {
    id: "4",
    name: "Bajaj Majesty Geyser (25L)",
    category: "Appliances",
    description: "Long-lasting storage water heater with Titanium Armour technology. High efficiency and low energy consumption.",
    imageUrl: "https://m.media-amazon.com/images/I/61N+1A0zSDL._SL1500_.jpg",
    priceRange: "₹7,200 - ₹9,500",
    stockStatus: 'In Stock'
  },
  {
    id: "5",
    name: "Surya 9W LED Bulb (Pack of 10)",
    category: "Lighting",
    description: "Pack of 10 high-intensity LED bulbs. 85% energy savings compared to incandescent bulbs. 2-year warranty.",
    imageUrl: "https://m.media-amazon.com/images/I/61bM5V4Z9HL._SL1500_.jpg",
    priceRange: "₹950 - ₹1,200",
    stockStatus: 'In Stock'
  },
  {
    id: "6",
    name: "Crompton Solarium Isole",
    category: "Appliances",
    description: "Instant water heater with advanced safety features. Rust-proof body and high-pressure rating for high-rise buildings.",
    imageUrl: "https://m.media-amazon.com/images/I/51wB7-7M90L._SL1000_.jpg",
    priceRange: "₹4,250 - ₹7,100",
    stockStatus: 'In Stock'
  },
  {
    id: "7",
    name: "Precision PVC Conduits",
    category: "Installation Materials",
    description: "High-impact rigid PVC conduits for concealed and surface wiring. ISO certified for industrial reliability.",
    imageUrl: "https://m.media-amazon.com/images/I/41B26J-zXDL._SL1000_.jpg",
    priceRange: "₹28 - ₹85/Length",
    stockStatus: 'In Stock'
  },
  {
    id: "8",
    name: "Anchor ROMA Modular Switches",
    category: "Switches",
    description: "Elegant modular switch range with antimicrobial properties. Smooth soft-touch operation and long mechanical life.",
    imageUrl: "https://m.media-amazon.com/images/I/31I0fX-XqSL.jpg",
    priceRange: "₹45 - ₹120/Unit",
    isFeatured: true,
    stockStatus: 'In Stock'
  },
  {
    id: "9",
    name: "Usha Ceiling Fan (High Speed)",
    category: "Fans",
    description: "Classic high-speed ceiling fan with copper motor and rust-free blades. Superior air delivery and energy efficiency.",
    imageUrl: "https://m.media-amazon.com/images/I/41uB2Y+LSDL._SL1000_.jpg",
    priceRange: "₹2,250 - ₹3,100",
    stockStatus: 'In Stock'
  },
  {
    id: "10",
    name: "V-Guard Mainline Stabilizer",
    category: "Appliances",
    description: "Digital display mainline voltage stabilizer. Advanced IC technology for total electrical equipment safety.",
    imageUrl: "https://m.media-amazon.com/images/I/41-S88-LSDL._SL1200_.jpg",
    priceRange: "₹5,400 - ₹8,500",
    stockStatus: 'In Stock'
  },
  {
    id: "11",
    name: "Luminous Eco Watt Inverter",
    category: "Solar & Power",
    description: "Efficient power backup inverter with smart charging and eco-mode. Supports all standard battery types.",
    imageUrl: "https://m.media-amazon.com/images/I/61-8-8LSDL._SL1500_.jpg",
    priceRange: "₹5,200 - ₹8,200",
    stockStatus: 'In Stock'
  },
  {
    id: "12",
    name: "Havells Armoured Cable (LT)",
    category: "Wires & Cables",
    description: "High-voltage armored cable for main power lines. Steel wire armor for mechanical protection and underground safety.",
    imageUrl: "https://m.media-amazon.com/images/I/71Xm+L-LSDL._SL1500_.jpg",
    priceRange: "₹450 - ₹2,800/Meter",
    stockStatus: 'In Stock'
  }
];

export const SERVICE_EXPERT = {
  name: "DEVARAJU N",
  phone: "9902145266",
  experience: "20+ Years",
  specialization: "Electrical Contractor & Master Electrician"
};

export const CATEGORIES = [
  "All",
  "Lighting",
  "Fans",
  "Appliances",
  "Wires & Cables",
  "Switches",
  "Solar & Power",
  "Installation Materials"
];
