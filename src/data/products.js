// Sample catalog. Replace descriptions, illustrations and prices before selling.
export const products = [
  { id: "daily-shampoo", name: "Everyday Hydration Shampoo", category: "Hair care", collection: "HYDRATE", size: "250 ml", price: 1250, color: "#657568", background: "#e8ede5", shape: "bottle", description: "A gentle cleansing step for your everyday wash routine.", use: "Massage into wet hair, lather, then rinse thoroughly." },
  { id: "soft-conditioner", name: "Soft Finish Conditioner", category: "Hair care", collection: "SOFTEN", size: "250 ml", price: 1350, color: "#b18a65", background: "#f1e7da", shape: "bottle", description: "A creamy conditioner for smooth, easy-to-manage lengths.", use: "Apply through damp mid-lengths and ends. Leave for 2–3 minutes, then rinse." },
  { id: "weekly-mask", name: "Sunday Ritual Hair Mask", category: "Hair care", collection: "NOURISH", size: "200 g", price: 1850, color: "#84728b", background: "#eee8f0", shape: "jar", description: "A little extra care for your weekly wash-day ritual.", use: "Smooth through clean, damp lengths. Leave for 5 minutes, then rinse." },
  { id: "shine-serum", name: "Gloss Drop Hair Serum", category: "Styling", collection: "POLISH", size: "50 ml", price: 1650, color: "#9b683f", background: "#f3e6d6", shape: "dropper", description: "A lightweight finishing touch for a sleek, polished look.", use: "Warm 1–2 drops between your palms and smooth over hair ends." },
  { id: "matte-clay", name: "Everyday Matte Styling Clay", category: "Styling", collection: "SCULPT", size: "75 g", price: 950, color: "#52616a", background: "#e4eaed", shape: "jar", description: "Build texture and definition with a soft matte finish.", use: "Work a small amount between your hands and shape into dry hair." },
  { id: "hand-cream", name: "Soft Touch Hand Cream", category: "Hand & nail", collection: "RESTORE", size: "75 ml", price: 650, color: "#b17d79", background: "#f4e7e3", shape: "tube", description: "An everyday companion for your hand and nail care routine.", use: "Massage a small amount into clean hands and around the cuticles." },
];

export const productCategories = ["All products", "Hair care", "Styling", "Hand & nail"];

export function filterProducts(category, query, sort) {
  const search = query.trim().toLowerCase();
  return products.filter((product) =>
    (category === "All products" || product.category === category) &&
    `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(search),
  ).sort((a, b) => sort === "price-low" ? a.price - b.price : sort === "price-high" ? b.price - a.price : 0);
}
