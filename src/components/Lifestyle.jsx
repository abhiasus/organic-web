
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App.jsx";

export default function Lifestyle() {
  const { cartCount } = useContext(CartContext);

  const rituals = [
    { no: "01", title: "Begin slowly", time: "5 MINUTES", image: "breakfast.jpg", text: "Give your morning a gentle start with a nourishing breakfast and a moment away from the rush." },
    { no: "02", title: "Add a little color", time: "AT LUNCH", image: "salad.jpg", text: "Build a colorful plate with fresh ingredients, different textures, and flavors you genuinely enjoy." },
    { no: "03", title: "Keep good things close", time: "ANYTIME", image: "nuts.jpg", text: "Keep simple pantry favorites nearby for those moments when you need an easy snack." }
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg nr-navbar"><div className="container">
        <Link className="navbar-brand nr-brand" to="/"><span className="brand-mark"><i className="bi bi-flower1" /></span>Nourish <span>Ritual</span></Link>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nrNav"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="nrNav"><ul className="navbar-nav mx-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li><li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li><li className="nav-item"><Link className="nav-link active" to="/lifestyle">Lifestyle</Link></li><li className="nav-item"><Link className="nav-link" to="/recipes">Recipes</Link></li><li className="nav-item"><Link className="nav-link" to="/about">Our Story</Link></li>
        </ul><Link className="nav-cart" to="/cart"><i className="bi bi-bag" /> Bag ({cartCount})</Link></div>
      </div></nav>

      <main className="page-shell">
        <section className="page-heading"><div className="container"><span className="eyebrow">LITTLE MOMENTS, BIG LOVE</span><h1>Find your own <em>rhythm.</em></h1><p>Healthy routines don't have to be perfect. They just have to feel like yours.</p></div></section>
        <section className="section-pad"><div className="container">
          <div className="lifestyle-intro row align-items-center g-5">
            <div className="col-lg-6"><img className="rounded-editorial" src="/src/assets/image/lifestyle.jpg" alt="A calm and colorful everyday food ritual" /></div>
            <div className="col-lg-6"><span className="eyebrow">A GENTLER KIND OF WELLNESS</span><h2>Well-being lives in the little things.</h2><p>It's not about changing everything overnight. It's about finding small ways to care for yourself in the middle of real life.</p><p>Start with one ritual that feels doable, enjoy it, and let the rest grow naturally.</p><Link className="btn nr-btn" to="/pantry-builder">Build your pantry <i className="bi bi-arrow-up-right" /></Link></div>
          </div>
        </div></section>
        <section className="section-pad soft-section"><div className="container">
          <div className="section-heading"><div><span className="eyebrow">YOUR DAILY PAUSE</span><h2>Three rituals to try.</h2></div></div>
          <div className="row g-4">{rituals.map((ritual) => <div className="col-md-4" key={ritual.no} data-aos="fade-up">
            <article className="ritual-card"><img src={`/src/assets/image/${ritual.image}`} alt={ritual.title} /><div className="ritual-card-body"><div className="ritual-meta"><span>{ritual.no}</span><span>{ritual.time}</span></div><h3>{ritual.title}</h3><p>{ritual.text}</p></div></article>
          </div>)}</div>
        </div></section>
        <section className="section-pad"><div className="container"><div className="quote-panel"><i className="bi bi-quote" /><blockquote>You don't have to do it all. Start with one good thing.</blockquote><p>A little reminder from Nourish Ritual</p></div></div></section>
      </main>

      <footer className="nr-footer"><div className="container"><div className="row g-4 footer-main">
        <div className="col-lg-5"><Link className="footer-brand" to="/">Nourish <span>Ritual</span></Link><p>Make room for small rituals and everyday goodness.</p><div className="social-links"><a href="https://instagram.com/" aria-label="Instagram"><i className="bi bi-instagram" /></a><a href="https://pinterest.com/" aria-label="Pinterest"><i className="bi bi-pinterest" /></a><a href="https://facebook.com/" aria-label="Facebook"><i className="bi bi-facebook" /></a></div></div>
        <div className="col-6 col-lg-2"><h4>Explore</h4><Link to="/shop">Shop</Link><Link to="/recipes">Recipes</Link><Link to="/">Home</Link></div>
        <div className="col-6 col-lg-2"><h4>Our world</h4><Link to="/about">Our Story</Link><Link to="/pantry-builder">Pantry Builder</Link><Link to="/cart">Your Bag</Link></div>
        <div className="col-lg-3"><h4>A little reminder</h4><p>Small steps count, too.</p></div>
      </div><div className="footer-bottom"><span>© 2026 Nourish Ritual</span><span>Made with care, served with joy.</span></div></div></footer>
    </>
  );
}
