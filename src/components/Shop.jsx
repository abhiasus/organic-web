
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App.jsx";

const products = [
  { id: 201, name: "Berry Breakfast Blend", price: 299, category: "Breakfast", image: "berries.jpg", detail: "A bright start to your morning." },
  { id: 202, name: "Golden Rolled Oats", price: 189, category: "Breakfast", image: "oats.jpg", detail: "A pantry staple for slow mornings." },
  { id: 203, name: "Garden Crunch Bowl", price: 249, category: "Fresh", image: "salad.jpg", detail: "Fresh flavors with a satisfying crunch." },
  { id: 204, name: "Daily Nut Mix", price: 279, category: "Pantry", image: "nuts.jpg", detail: "A little handful of goodness." },
  { id: 205, name: "Sunshine Smoothie Kit", price: 329, category: "Breakfast", image: "smoothie.jpg", detail: "Blend a brighter kind of morning." },
  { id: 206, name: "Everyday Pantry Box", price: 449, category: "Pantry", image: "pantry.jpg", detail: "Thoughtful essentials for your shelf." },
  { id: 207, name: "Fresh Greens Selection", price: 199, category: "Fresh", image: "lifestyle.jpg", detail: "Colorful ingredients for your table." },
  { id: 208, name: "Recipe Starter Pack", price: 349, category: "Pantry", image: "recipe.jpg", detail: "Make everyday cooking feel special." },
  { id: 209, name: "Morning Bowl Kit", price: 319, category: "Breakfast", image: "breakfast.jpg", detail: "Everything for a cozy bowl." }
];

export default function Shop() {
  const { addToCart, cartCount } = useContext(CartContext);
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Breakfast", "Fresh", "Pantry"];
  const shown = filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <nav className="navbar navbar-expand-lg nr-navbar"><div className="container">
        <Link className="navbar-brand nr-brand" to="/"><span className="brand-mark"><i className="bi bi-flower1" /></span>Nourish <span>Ritual</span></Link>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nrNav"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="nrNav"><ul className="navbar-nav mx-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li><li className="nav-item"><Link className="nav-link active" to="/shop">Shop</Link></li><li className="nav-item"><Link className="nav-link" to="/lifestyle">Lifestyle</Link></li><li className="nav-item"><Link className="nav-link" to="/recipes">Recipes</Link></li><li className="nav-item"><Link className="nav-link" to="/about">Our Story</Link></li>
        </ul><Link className="nav-cart" to="/cart"><i className="bi bi-bag" /> Bag ({cartCount})</Link></div>
      </div></nav>

      <main className="page-shell">
        <section className="page-heading"><div className="container"><span className="eyebrow">THE NOURISH PANTRY</span><h1>Good things, <em>gathered.</em></h1><p>Everyday ingredients and feel-good favorites for the way you want to eat.</p></div></section>
        <section className="section-pad"><div className="container">
          <div className="shop-toolbar"><p>{shown.length} thoughtful picks</p><div className="filter-pills">{categories.map((cat) => <button key={cat} className={filter === cat ? "filter-pill active" : "filter-pill"} onClick={() => setFilter(cat)}>{cat}</button>)}</div></div>
          <div className="row g-4">{shown.map((product) => <div className="col-6 col-lg-4" key={product.id} data-aos="fade-up">
            <article className="product-card"><div className="product-image-wrap"><img src={`/src/assets/image/${product.image}`} alt={product.name} /><span className="product-tag">{product.category}</span><button className="quick-add" onClick={() => addToCart(product)} aria-label={`Add ${product.name}`}><i className="bi bi-plus-lg" /></button></div>
              <div className="product-info"><h3>{product.name}</h3><p>{product.detail}</p><div className="product-price-row"><strong>₹{product.price}</strong><button className="mini-add" onClick={() => addToCart(product)}>Add to bag <i className="bi bi-arrow-up-right" /></button></div></div>
            </article>
          </div>)}</div>
        </div></section>
      </main>

      <footer className="nr-footer"><div className="container"><div className="row g-4 footer-main">
        <div className="col-lg-5"><Link className="footer-brand" to="/">Nourish <span>Ritual</span></Link><p>Everyday goodness, thoughtfully gathered.</p><div className="social-links"><a href="https://instagram.com/" aria-label="Instagram"><i className="bi bi-instagram" /></a><a href="https://pinterest.com/" aria-label="Pinterest"><i className="bi bi-pinterest" /></a><a href="https://facebook.com/" aria-label="Facebook"><i className="bi bi-facebook" /></a></div></div>
        <div className="col-6 col-lg-2"><h4>Explore</h4><Link to="/">Home</Link><Link to="/lifestyle">Lifestyle</Link><Link to="/recipes">Recipes</Link></div>
        <div className="col-6 col-lg-2"><h4>Our world</h4><Link to="/about">Our Story</Link><Link to="/pantry-builder">Pantry Builder</Link><Link to="/cart">Your Bag</Link></div>
        <div className="col-lg-3"><h4>Find your feel-good</h4><p>Little everyday choices can make a lovely difference.</p></div>
      </div><div className="footer-bottom"><span>© 2026 Nourish Ritual</span><span>Made with care, served with joy.</span></div></div></footer>
    </>
  );
}
