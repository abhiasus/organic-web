
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App.jsx";

const recipes = [
  { id: 1, title: "Berry Morning Bowl", category: "BREAKFAST", time: "10 MIN", image: "breakfast.jpg", text: "Creamy oats, juicy berries, and a little crunch to start the day." },
  { id: 2, title: "The Colorful Lunch Bowl", category: "LUNCH", time: "15 MIN", image: "recipe.jpg", text: "A fresh, flexible bowl packed with texture and colorful ingredients." },
  { id: 3, title: "Green Garden Plate", category: "FRESH & SIMPLE", time: "12 MIN", image: "salad.jpg", text: "Crisp greens and a simple dressing for a bright, easy meal." }
];

export default function Recipes() {
  const { cartCount } = useContext(CartContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg nr-navbar"><div className="container">
        <Link className="navbar-brand nr-brand" to="/"><span className="brand-mark"><i className="bi bi-flower1" /></span>Nourish <span>Ritual</span></Link>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nrNav"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="nrNav"><ul className="navbar-nav mx-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li><li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li><li className="nav-item"><Link className="nav-link" to="/lifestyle">Lifestyle</Link></li><li className="nav-item"><Link className="nav-link active" to="/recipes">Recipes</Link></li><li className="nav-item"><Link className="nav-link" to="/about">Our Story</Link></li>
        </ul><Link className="nav-cart" to="/cart"><i className="bi bi-bag" /> Bag ({cartCount})</Link></div>
      </div></nav>

      <main className="page-shell">
        <section className="page-heading"><div className="container"><span className="eyebrow">FROM OUR LITTLE KITCHEN</span><h1>Simple food, <em>full hearts.</em></h1><p>Recipes that celebrate everyday ingredients and the joy of making something for yourself.</p></div></section>
        <section className="section-pad"><div className="container">
          <div className="recipe-feature row g-0 align-items-center">
            <div className="col-lg-7"><img src="/src/assets/image/recipe.jpg" alt="A nourishing homemade recipe" /></div>
            <div className="col-lg-5 recipe-feature-copy"><span className="eyebrow">THE EASY FAVORITE</span><h2>Make a little magic with what's already in your kitchen.</h2><p>Keep it simple. Mix flavors you love, use what you have, and let your own taste lead the way.</p><a className="btn nr-btn" href="#recipe-list">Explore recipes <i className="bi bi-arrow-down" /></a></div>
          </div>
        </div></section>
        <section className="section-pad soft-section" id="recipe-list"><div className="container">
          <div className="section-heading"><div><span className="eyebrow">GOOD FOOD, NO FUSS</span><h2>Pick your next favorite.</h2></div></div>
          <div className="row g-4">{recipes.map((recipe) => <div className="col-md-4" key={recipe.id} data-aos="fade-up">
            <article className="recipe-card"><img src={`/src/assets/image/${recipe.image}`} alt={recipe.title} /><div className="recipe-card-body"><div className="recipe-meta"><span>{recipe.category}</span><span><i className="bi bi-clock" /> {recipe.time}</span></div><h3>{recipe.title}</h3><p>{recipe.text}</p><Link className="text-link" to="/shop">Find ingredients <i className="bi bi-arrow-right" /></Link></div></article>
          </div>)}</div>
          <p className="small-note mt-4">Recipe inspiration only. Adjust ingredients and portions to your preferences and dietary needs.</p>
        </div></section>
      </main>

      <footer className="nr-footer"><div className="container"><div className="row g-4 footer-main">
        <div className="col-lg-5"><Link className="footer-brand" to="/">Nourish <span>Ritual</span></Link><p>Recipes for everyday goodness and happier tables.</p><div className="social-links"><a href="https://instagram.com/" aria-label="Instagram"><i className="bi bi-instagram" /></a><a href="https://pinterest.com/" aria-label="Pinterest"><i className="bi bi-pinterest" /></a><a href="https://facebook.com/" aria-label="Facebook"><i className="bi bi-facebook" /></a></div></div>
        <div className="col-6 col-lg-2"><h4>Explore</h4><Link to="/shop">Shop</Link><Link to="/lifestyle">Lifestyle</Link><Link to="/">Home</Link></div>
        <div className="col-6 col-lg-2"><h4>Our world</h4><Link to="/about">Our Story</Link><Link to="/pantry-builder">Pantry Builder</Link><Link to="/cart">Your Bag</Link></div>
        <div className="col-lg-3"><h4>From our kitchen</h4><p>Keep it simple and make it yours.</p></div>
      </div><div className="footer-bottom"><span>© 2026 Nourish Ritual</span><span>Made with care, served with joy.</span></div></div></footer>
    </>
  );
}
