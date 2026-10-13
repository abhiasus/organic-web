
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App.jsx";

export default function About() {
  const { cartCount } = useContext(CartContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg nr-navbar"><div className="container">
        <Link className="navbar-brand nr-brand" to="/"><span className="brand-mark"><i className="bi bi-flower1" /></span>Nourish <span>Ritual</span></Link>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nrNav"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="nrNav"><ul className="navbar-nav mx-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li><li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li><li className="nav-item"><Link className="nav-link" to="/lifestyle">Lifestyle</Link></li><li className="nav-item"><Link className="nav-link" to="/recipes">Recipes</Link></li><li className="nav-item"><Link className="nav-link active" to="/about">Our Story</Link></li>
        </ul><Link className="nav-cart" to="/cart"><i className="bi bi-bag" /> Bag ({cartCount})</Link></div>
      </div></nav>

      <main className="page-shell">
        <section className="page-heading"><div className="container"><span className="eyebrow">A LITTLE ABOUT US</span><h1>Goodness, with <em>intention.</em></h1><p>We're here to make everyday nourishment feel thoughtful, colorful, and wonderfully doable.</p></div></section>
        <section className="section-pad"><div className="container"><div className="row align-items-center g-5">
          <div className="col-lg-6"><img className="rounded-editorial" src="/src/assets/image/lifestyle.jpg" alt="Ingredients arranged for a thoughtful everyday meal" /></div>
          <div className="col-lg-6"><span className="eyebrow">WHY NOURISH RITUAL?</span><h2>Food should fit into your life, not take it over.</h2><p>Nourish Ritual began with a simple thought: caring for yourself can be easier when the good stuff is within reach.</p><p>We bring together pantry favorites, fresh inspiration, and small rituals that invite you to slow down and enjoy the everyday.</p><Link className="btn nr-btn" to="/shop">Explore our pantry <i className="bi bi-arrow-up-right" /></Link></div>
        </div></div></section>
        <section className="section-pad soft-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">WHAT MATTERS TO US</span><h2>Our little guiding principles.</h2></div></div>
          <div className="row g-4">
            <div className="col-md-4"><article className="value-card"><span className="value-icon"><i className="bi bi-heart" /></span><h3>Care over perfection</h3><p>Every small choice can count. We believe food should feel welcoming, never intimidating.</p></article></div>
            <div className="col-md-4"><article className="value-card"><span className="value-icon"><i className="bi bi-flower2" /></span><h3>Thoughtful choices</h3><p>We aim to make it easier to explore ingredients and build a pantry that suits you.</p></article></div>
            <div className="col-md-4"><article className="value-card"><span className="value-icon"><i className="bi bi-sun" /></span><h3>Joy in the everyday</h3><p>A good breakfast, a colorful lunch, or a calm cup can make a day feel brighter.</p></article></div>
          </div>
        </div></section>
      </main>

      <footer className="nr-footer"><div className="container"><div className="row g-4 footer-main">
        <div className="col-lg-5"><Link className="footer-brand" to="/">Nourish <span>Ritual</span></Link><p>A softer, happier approach to everyday nourishment.</p><div className="social-links"><a href="https://instagram.com/" aria-label="Instagram"><i className="bi bi-instagram" /></a><a href="https://pinterest.com/" aria-label="Pinterest"><i className="bi bi-pinterest" /></a><a href="https://facebook.com/" aria-label="Facebook"><i className="bi bi-facebook" /></a></div></div>
        <div className="col-6 col-lg-2"><h4>Explore</h4><Link to="/shop">Shop</Link><Link to="/lifestyle">Lifestyle</Link><Link to="/recipes">Recipes</Link></div>
        <div className="col-6 col-lg-2"><h4>Our world</h4><Link to="/pantry-builder">Pantry Builder</Link><Link to="/cart">Your Bag</Link><Link to="/">Home</Link></div>
        <div className="col-lg-3"><h4>Our promise</h4><p>Keep it thoughtful, keep it joyful, keep it yours.</p></div>
      </div><div className="footer-bottom"><span>© 2026 Nourish Ritual</span><span>Made with care, served with joy.</span></div></div></footer>
    </>
  );
}
