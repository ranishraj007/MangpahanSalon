import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Plus, SlidersHorizontal } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { filterProducts, productCategories } from "../data/products";

const formatPrice = (price) => `NPR ${price.toLocaleString("en-IN")}`;

// Local vector packaging keeps the sample catalog lightweight and self-contained.
function ProductIllustration({ product }) {
  const { id, color, shape, collection, size } = product;
  const jar = shape === "jar";
  return (
    <svg viewBox="0 0 320 280" aria-hidden="true" className="h-64 w-full motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:-translate-y-2">
      <defs>
        <linearGradient id={`${id}-shade`} x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".25" />
          <stop offset=".45" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".2" />
        </linearGradient>
      </defs>
      <ellipse cx="160" cy="252" rx="76" ry="9" fill={color} opacity=".15" />
      {jar ? <>
        <rect x="91" y="145" width="138" height="98" rx="20" fill={color} />
        <rect x="87" y="131" width="146" height="27" rx="8" fill="#292722" />
        <rect x="91" y="158" width="138" height="85" rx="18" fill={`url(#${id}-shade)`} />
      </> : <>
        <rect x="136" y={shape === "dropper" ? 37 : 40} width="48" height={shape === "dropper" ? 54 : 31} rx="6" fill="#292722" />
        <path d={shape === "tube" ? "M105 65 H215 L201 237 Q160 247 119 237 Z" : "M132 72 H188 V87 Q211 91 211 114 V230 Q211 244 197 244 H123 Q109 244 109 230 V114 Q109 91 132 87 Z"} fill={color} />
        <path d={shape === "tube" ? "M105 65 H215 L201 237 Q160 247 119 237 Z" : "M132 72 H188 V87 Q211 91 211 114 V230 Q211 244 197 244 H123 Q109 244 109 230 V114 Q109 91 132 87 Z"} fill={`url(#${id}-shade)`} />
        {shape === "tube" && <rect x="121" y="235" width="78" height="11" rx="3" fill="#292722" />}
      </>}
      <rect x="117" y={jar ? 167 : 123} width="86" height={jar ? 59 : 88} rx="2" fill="#fffaf3" />
      <text x="160" y={jar ? 183 : 142} textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fill="#292722">MANGPAHANG</text>
      <text x="160" y={jar ? 200 : 167} textAnchor="middle" fontFamily="sans-serif" fontSize="10" letterSpacing="1" fill={color}>{collection}</text>
      <text x="160" y={jar ? 217 : 195} textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#746b61">{size}</text>
    </svg>
  );
}

export default function Products() {
  const [category, setCategory] = useState("All products");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const visibleProducts = filterProducts(category, query, sort);

  return (
    <PageTransition>
      <SEO title="Hair & Beauty Products" description="Explore a sample collection of hair care, styling, and hand care products at Mangpahang Unisex Salon in Kathmandu." canonical="/products" />
      <section className="page-hero px-4 pb-20 pt-36 text-center">
        <p className="text-xs tracking-[4px] text-[#d6b05b] uppercase font-medium mb-5">The everyday ritual</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">Salon care.<br /><span className="text-[#d6b05b]">Your daily routine.</span></h1>
        <p className="text-white/70 max-w-lg mx-auto mt-6 text-sm leading-7">Discover our products for the moments between appointments. A little care, a little confidence, every day.</p>
        <a href="#collection" className="btn-primary inline-flex items-center gap-3 mt-8">Explore products <ArrowRight size={17} /></a>
      </section>
      <Breadcrumbs />
      <section id="collection" className="bg-[#fffaf3] py-14 md:py-20 scroll-mt-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
            <div><p className="eyebrow mb-3">Care beyond the chair</p><h2 className="text-3xl md:text-4xl font-bold text-[#171412]">Your shelf, elevated.</h2></div>
            <p className="text-sm text-[#746b61] max-w-sm leading-6">Sample collection · Products, packaging, and prices are illustrative. Contact us for our current range.</p>
          </div>
          <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Product categories">
            {productCategories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`min-h-11 rounded-full border px-5 py-2 text-sm font-medium transition-colors ${category === item ? "bg-[#171412] border-[#171412] text-white" : "bg-white border-[#eadfce] text-[#746b61] hover:border-[#8f681b]"}`}>{item}</button>)}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-5">
            <label className="flex items-center gap-3 bg-white border border-[#eadfce] rounded-xl px-4 flex-1 focus-within:ring-2 focus-within:ring-[#b68a2a]">
              <Search size={18} className="text-[#746b61] shrink-0" aria-hidden="true" /><span className="sr-only">Search products</span>
              <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find your everyday essential…" className="w-full min-w-0 bg-transparent py-3 text-sm text-[#171412] outline-none" />
            </label>
            <label className="flex items-center gap-3 rounded-xl border border-[#eadfce] bg-white px-4 text-sm text-[#171412]">
              <SlidersHorizontal size={17} aria-hidden="true" /><span className="sr-only">Sort products</span>
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="bg-transparent py-3 pr-3 w-full"><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select>
            </label>
          </div>
          <p role="status" className="text-xs text-[#746b61] mb-6">{visibleProducts.length} {visibleProducts.length === 1 ? "product" : "products"}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProducts.map((product) => <article key={product.id} className="group surface-card rounded-2xl overflow-hidden flex flex-col">
              <div className="relative px-5 pt-7" style={{ backgroundColor: product.background }}>
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest rounded-full bg-white/70 px-3 py-1 text-[#51493f]">{product.category}</span>
                <ProductIllustration product={product} />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs text-[#746b61] mb-2">MANGPAHANG · {product.size}</p>
                <h3 className="text-lg font-semibold text-[#171412]">{product.name}</h3>
                <p className="text-sm leading-6 text-[#746b61] mt-3 mb-5">{product.description}</p>
                <div className="mt-auto flex items-baseline gap-2"><span className="text-lg font-semibold text-[#171412]">{formatPrice(product.price)}</span><span className="text-xs text-[#746b61]">sample price</span></div>
                <details className="mt-4 border-t border-[#eadfce] group/details">
                  <summary className="flex justify-between items-center py-4 cursor-pointer list-none text-sm text-[#51493f]">How to use <Plus size={16} className="group-open/details:rotate-45" aria-hidden="true" /></summary>
                  <p className="text-sm leading-6 text-[#746b61] pb-4">{product.use}</p>
                </details>
                <a href={`mailto:mangpahangsalon@gmail.com?subject=${encodeURIComponent(`Product inquiry: ${product.name}`)}&body=${encodeURIComponent(`Hello, I saw ${product.name} in your sample collection. Do you have this or a similar product available? Please share current pricing and details.`)}`} aria-label={`Ask about ${product.name} by email`} className="flex items-center justify-between rounded-xl border border-[#eadfce] px-4 py-3 text-sm font-semibold text-[#51493f] hover:bg-[#f7efe2] hover:border-[#b68a2a] transition-colors">Ask about this product <ArrowRight size={16} /></a>
              </div>
            </article>)}
          </div>
          {visibleProducts.length === 0 && <div className="rounded-2xl border border-[#eadfce] bg-white py-16 px-6 text-center"><h3 className="text-xl font-semibold text-[#171412]">No products found</h3><p className="text-sm text-[#746b61] mt-3 mb-6">Try a different search or explore the full collection.</p><button type="button" className="btn-primary" onClick={() => { setCategory("All products"); setQuery(""); setSort("featured"); }}>Show all products</button></div>}
          <div className="premium-panel rounded-3xl p-8 md:p-12 mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div><p className="text-xs uppercase tracking-[3px] text-[#d6b05b] mb-3">A routine that feels like you</p><h2 className="text-2xl md:text-3xl font-bold text-white">Not sure where to start?</h2><p className="text-sm text-white/70 mt-3 max-w-lg leading-6">Tell us about your hair and your everyday routine. Our team can help you explore the options available at the salon.</p></div>
            <Link to="/contact" className="btn-primary inline-flex gap-3 items-center shrink-0">Talk to our team <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
