import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App.jsx";
import { img, logo } from "../assets/images.js";

const pantryItems = [
  { id: 301, name: "Golden Rolled Oats", price: 189, image: "oats.jpg", note: "For slow mornings" },
  { id: 302, name: "Berry Breakfast Blend", price: 299, image: "berries.jpg", note: "For bowls and smoothies" },
  { id: 303, name: "Daily Nut Mix", price: 279, image: "nuts.jpg", note: "For your snack shelf" },
  { id: 304, name: "Everyday Pantry Box", price: 449, image: "pantry.jpg", note: "For kitchen essentials" },
  { id: 305, name: "Garden Crunch Bowl", price: 249, image: "salad.jpg", note: "For colorful lunches" },
  { id: 306, name: "Sunshine Smoothie Kit", price: 329, image: "smoothie.jpg", note: "For quick blends" }
];

export default function PantryBuilder() {
  const { addToCart, cartCount } = useContext(CartContext);
  const [selected, setSelected] = useState([]);

  const toggleItem = (id) => {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((itemId) => itemId !== id)
        : [...current, id]
    );
  };

  const chosenItems = pantryItems.filter((item) => selected.includes(item.id));
  const total = chosenItems.reduce((sum, item) => sum + item.price, 0);

  const addSelected = () => {
    chosenItems.forEach((item) => addToCart(item));
    setSelected([]);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg nr-navbar"><div className="container">
        <Link className="navbar-brand nr-brand" to="/"><img className="brand-logo" src={logo} alt="" />Nourish <span>Ritual</span></Link>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nrNav"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="nrNav"><ul className="navbar-nav mx-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li><li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li><li className="nav-item"><Link className="nav-link" to="/lifestyle">Lifestyle</Link></li><li className="nav-item"><Link className="nav-link" to="/recipes">Recipes</Link></li><li className="nav-item"><Link className="nav-link" to="/about">Our Story</Link></li>
        </ul><Link className="nav-cart" to="/cart"><i className="bi bi-bag" /> Bag ({cartCount})</Link></div>
      </div></nav>

      <main className="page-shell">
        <section className="page-heading"><div className="container"><span className="eyebrow">MAKE IT YOURS</span><h1>Your pantry, <em>your way.</em></h1><p>Choose the everyday favorites you'd love to keep close. Your selection and total update as you go.</p></div></section>
        <section className="section-pad"><div className="container">
          <div className="builder-layout">
            <div className="builder-products">
              <div className="row g-4">{pantryItems.map((item) => {
                const isSelected = selected.includes(item.id);
                return <div className="col-6 col-lg-4" key={item.id}>
                  <article className={`builder-card ${isSelected ? "selected" : ""}`}>
                    <img src={img(item.image)} alt={item.name} />
                    <div className="builder-card-body"><span>{item.note}</span><h3>{item.name}</h3><strong>₹{item.price}</strong>
                      <button className={isSelected ? "builder-select chosen" : "builder-select"} onClick={() => toggleItem(item.id)}>
                        <i className={`bi ${isSelected ? "bi-check-circle-fill" : "bi-plus-circle"}`} /> {isSelected ? "Selected" : "Add to my pantry"}
                      </button>
                    </div>
                  </article>
                </div>;
              })}</div>
            </div>
            <aside className="builder-summary">
              <span className="eyebrow">YOUR LITTLE COLLECTION</span><h2>My pantry</h2>
              <div className="summary-count">{selected.length} items selected</div>
              {chosenItems.length === 0 ? <p className="empty-hint">Your pantry is waiting for its first good thing.</p> : <ul className="summary-list">{chosenItems.map((item) => <li key={item.id}><span>{item.name}</span><strong>₹{item.price}</strong></li>)}</ul>}
              <div className="summary-total"><span>Estimated total</span><strong>₹{total}</strong></div>
              <button className="btn nr-btn w-100" disabled={!selected.length} onClick={addSelected}>Add selection to bag <i className="bi bi-arrow-right" /></button>
              <button className="clear-selection" disabled={!selected.length} onClick={() => setSelected([])}>Clear selection</button>
            </aside>
          </div>
        </div></section>
      </main>

      <footer className="nr-footer"><div className="container"><div className="row g-4 footer-main">
        <div className="col-lg-5"><Link className="footer-brand" to="/">Nourish <span>Ritual</span></Link><p>Build a shelf full of everyday goodness.</p><div className="social-links"><a href="https://instagram.com/" aria-label="Instagram"><i className="bi bi-instagram" /></a><a href="https://pinterest.com/" aria-label="Pinterest"><i className="bi bi-pinterest" /></a><a href="https://facebook.com/" aria-label="Facebook"><i className="bi bi-facebook" /></a></div></div>
        <div className="col-6 col-lg-2"><h4>Explore</h4><Link to="/shop">Shop</Link><Link to="/lifestyle">Lifestyle</Link><Link to="/recipes">Recipes</Link></div>
        <div className="col-6 col-lg-2"><h4>Our world</h4><Link to="/about">Our Story</Link><Link to="/cart">Your Bag</Link><Link to="/">Home</Link></div>
        <div className="col-lg-3"><h4>Keep it simple</h4><p>Pick what fits your life and enjoy making it your own.</p></div>
      </div><div className="footer-bottom"><span>© 2026 Nourish Ritual</span><span>Made with care, served with joy.</span></div></div></footer>
    </>
  );
}