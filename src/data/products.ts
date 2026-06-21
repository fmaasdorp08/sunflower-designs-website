export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  collection: string;
  description: string;
  details: string[];
  shipping: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  images: string[];
  related: string[];
}

export const products: Product[] = [
  {
    id: "farah-blazer",
    name: "The Farah Blazer",
    price: 2850,
    category: "Jackets & Coats",
    collection: "signature",
    description: "A structured wool-blend blazer designed for the modern South African woman. Tailored silhouette with covered buttons and structured shoulders. The charcoal colourway is versatile enough for any wardrobe, transitioning seamlessly from boardroom to dinner.",
    details: [
      "Fabric: 80% Italian wool, 20% polyamide",
      "Lining: 100% viscose",
      "Made in Cape Town, South Africa",
      "Dry clean only",
      "Do not bleach",
      "Cool iron on reverse",
      "Model wears size S"
    ],
    shipping: [
      "Free shipping on all orders over R1,500 within South Africa",
      "Standard delivery: 3-5 business days (R85)",
      "Express delivery: 1-2 business days (R150)",
      "International shipping available - calculated at checkout",
      "Returns accepted within 14 days of delivery",
      "Items must be unworn with original tags attached"
    ],
    colors: [
      { name: "Charcoal", hex: "#302E2E" },
      { name: "Camel", hex: "#B8A088" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1584273143981-41c073df8d89?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1067&fit=crop"
    ],
    related: ["silk-cami", "palazzo-trousers", "midi-skirt"]
  },
  {
    id: "palazzo-trousers",
    name: "Pleated Palazzo Trousers",
    price: 1950,
    category: "Skirts & Trousers",
    collection: "signature",
    description: "Effortless elegance in motion. High-waist, wide-leg trousers with precise pleating that creates beautiful movement with every step. Cut from fluid Japanese crepe.",
    details: [
      "Fabric: 100% Japanese polyester crepe",
      "Made in Cape Town, South Africa",
      "Hand wash cold or dry clean",
      "Do not tumble dry",
      "Cool iron on reverse",
      "Model wears size S"
    ],
    shipping: [
      "Free shipping on all orders over R1,500 within South Africa",
      "Standard delivery: 3-5 business days (R85)",
      "Express delivery: 1-2 business days (R150)",
      "Returns accepted within 14 days of delivery"
    ],
    colors: [
      { name: "Cream", hex: "#F5E6C8" },
      { name: "Charcoal", hex: "#302E2E" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1551163943-3f6a29e39426?w=800&h=1067&fit=crop"
    ],
    related: ["farah-blazer", "silk-cami", "linen-shirt"]
  },
  {
    id: "wrap-dress",
    name: "The Signature Wrap Dress",
    price: 2450,
    category: "Dresses",
    collection: "signature",
    description: "The dress that started it all. A fluid silk-blend wrap that flatters every body, tied at the waist and falling to midi length. Ink blue - our signature colour.",
    details: [
      "Fabric: 70% silk, 30% viscose blend",
      "Made in Cape Town, South Africa",
      "Hand wash cold",
      "Do not bleach",
      "Line dry in shade",
      "Cool iron",
      "Model wears size S"
    ],
    shipping: [
      "Free shipping on all orders over R1,500 within South Africa",
      "Standard delivery: 3-5 business days (R85)",
      "Express delivery: 1-2 business days (R150)",
      "Returns accepted within 14 days of delivery"
    ],
    colors: [
      { name: "Ink Blue", hex: "#1B2A4A" },
      { name: "Black", hex: "#1A1715" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&h=1067&fit=crop"
    ],
    related: ["farah-blazer", "midi-skirt", "silk-cami"]
  },
  {
    id: "midi-skirt",
    name: "A-Line Midi Skirt",
    price: 1650,
    category: "Skirts & Trousers",
    collection: "signature",
    description: "A timeless A-line midi skirt with side pockets. Cut from premium wool, this piece transitions effortlessly from office to evening.",
    details: [
      "Fabric: 100% premium wool",
      "Lining: 100% viscose",
      "Made in Cape Town, South Africa",
      "Dry clean only",
      "Model wears size S"
    ],
    shipping: [
      "Free shipping on all orders over R1,500 within South Africa",
      "Standard delivery: 3-5 business days (R85)",
      "Returns accepted within 14 days of delivery"
    ],
    colors: [
      { name: "Camel", hex: "#B8A088" },
      { name: "Charcoal", hex: "#302E2E" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=800&h=1067&fit=crop"
    ],
    related: ["farah-blazer", "silk-cami", "linen-shirt"]
  },
  {
    id: "linen-shirt",
    name: "Cropped Linen Shirt",
    price: 1250,
    category: "Tops & Shirts",
    collection: "summer",
    description: "An off-white cropped linen shirt with mother-of-pearl buttons. Styled open over a camisole or closed for a crisp, clean look. Perfect for Cape Town summers.",
    details: [
      "Fabric: 100% South African linen",
      "Mother-of-pearl buttons",
      "Made in Cape Town, South Africa",
      "Machine wash cold",
      "Line dry",
      "Model wears size S"
    ],
    shipping: [
      "Free shipping on all orders over R1,500 within South Africa",
      "Standard delivery: 3-5 business days (R85)"
    ],
    colors: [
      { name: "Off White", hex: "#FAF8F5" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=1067&fit=crop"
    ],
    related: ["palazzo-trousers", "silk-cami", "farah-blazer"]
  },
  {
    id: "wide-leg-trousers",
    name: "Tailored Wide-Leg Trousers",
    price: 1850,
    category: "Skirts & Trousers",
    collection: "signature",
    description: "Charcoal grey wide-leg trousers with a pressed crease. High-waist, side zip. The perfect partner to our Farah Blazer.",
    details: [
      "Fabric: 65% wool, 35% polyester",
      "Made in Cape Town, South Africa",
      "Dry clean only",
      "Model wears size S"
    ],
    shipping: [
      "Free shipping on all orders over R1,500 within South Africa",
      "Standard delivery: 3-5 business days (R85)"
    ],
    colors: [
      { name: "Charcoal", hex: "#302E2E" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1067&fit=crop"
    ],
    related: ["farah-blazer", "silk-cami", "studio-jacket"]
  },
  {
    id: "studio-jacket",
    name: "The Studio Jacket",
    price: 3200,
    category: "Jackets & Coats",
    collection: "winter",
    description: "A camel oversized workwear-inspired jacket with patch pockets. Unstructured, relaxed fit. The kind of piece you live in.",
    details: [
      "Fabric: 100% cotton canvas",
      "Made in Cape Town, South Africa",
      "Machine wash cold",
      "Model wears size S"
    ],
    shipping: [
      "Free shipping on all orders over R1,500 within South Africa",
      "Standard delivery: 3-5 business days (R85)"
    ],
    colors: [
      { name: "Camel", hex: "#B8A088" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1544923246-77307dd628b9?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1544923246-77307dd628b9?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1544923246-77307dd628b9?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1544923246-77307dd628b9?w=800&h=1067&fit=crop"
    ],
    related: ["wide-leg-trousers", "silk-cami", "farah-blazer"]
  },
  {
    id: "silk-cami",
    name: "Silk Camisole Top",
    price: 980,
    category: "Tops & Shirts",
    collection: "signature",
    description: "A champagne silk camisole with delicate spaghetti straps. Minimal, elegant, and endlessly versatile. Layer under blazers or wear alone.",
    details: [
      "Fabric: 100% silk",
      "Made in Cape Town, South Africa",
      "Hand wash cold",
      "Line dry in shade",
      "Model wears size S"
    ],
    shipping: [
      "Free shipping on all orders over R1,500 within South Africa",
      "Standard delivery: 3-5 business days (R85)"
    ],
    colors: [
      { name: "Champagne", hex: "#F5E6C8" },
      { name: "Black", hex: "#1A1715" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&h=1067&fit=crop",
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&h=1067&fit=crop"
    ],
    related: ["farah-blazer", "palazzo-trousers", "midi-skirt"]
  }
];

export const categories = [
  "All",
  "Dresses",
  "Tops & Shirts",
  "Skirts & Trousers",
  "Jackets & Coats",
  "Accessories"
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter(p => p.category === category);
}

export function getRelatedProducts(product: Product): Product[] {
  return product.related
    .map(id => getProductById(id))
    .filter((p): p is Product => p !== undefined);
}
