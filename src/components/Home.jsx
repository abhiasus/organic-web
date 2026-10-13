import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App.jsx";
import { img, logo } from "../assets/images.js";

const products = [
  { id: 101, name: "Berry Breakfast Blend", price: 299, image: "berries.jpg", tag: "BESTSELLER" },
  { id: 102, name: "Golden Oats", price: 189, image: "oats.jpg", tag: "DAILY ESSENTIAL" },
  { id: 103, name: "Garden Crunch Bowl", price: 249, image: "salad.jpg", tag: "FRESH PICK" }
];

export default function Home() {
  const { addToCart, cartCount } = useContext(CartContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg nr-navbar">
        <div className="container">
          <Link className="navbar-brand nr-brand" to="/">
            <img className="brand-logo" src={logo} alt="" />
            Nourish <span>Ritual</span>
          </Link>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nrNav" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="nrNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/lifestyle">Lifestyle</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/recipes">Recipes</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">Our Story</Link></li>
            </ul>
            <Link className="nav-cart" to="/cart">
              <i className="bi bi-bag" /> <span>Bag ({cartCount})</span>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        <section className="nr-hero">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-6" data-aos="fade-up">
                <span className="eyebrow"><i className="bi bi-stars" /> A LITTLE MORE GOODNESS</span>
                <h1>Make room for<br /><em>feeling good.</em></h1>
                <p className="hero-copy">
                  Thoughtful pantry staples, feel-good food, and everyday rituals
                  that make nourishing yourself a little more joyful.
                </p>
                <div className="hero-actions">
                  <Link className="btn nr-btn" to="/shop">Explore the pantry <i className="bi bi-arrow-up-right" /></Link>
                  <Link className="text-link" to="/lifestyle">Find your ritual <i className="bi bi-arrow-right" /></Link>
                </div>
                <div className="hero-notes">
                  <span><i className="bi bi-check-circle" /> Thoughtfully sourced</span>
                  <span><i className="bi bi-check-circle" /> Everyday goodness</span>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <div className="hero-photo-wrap">
                  <img className="hero-photo" src={img("hero.jpg")} alt="Colorful wholesome food and fresh ingredients" />
                  <div className="hero-sticker"><i className="bi bi-heart-fill" /><span>Good food.<br />Good mood.</span></div>
                  <div className="hero-caption">A softer approach to everyday nourishment</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="nr-strip">
          <div className="container strip-inner">
            <span>GOOD FOOD, GENTLY SOURCED</span><i className="bi bi-flower2" />
            <span>SMALL DAILY RITUALS</span><i className="bi bi-flower2" />
            <span>MORE JOY AT YOUR TABLE</span>
          </div>
        </section>

        <section className="section-pad">
          <div className="container">
            <div className="section-heading" data-aos="fade-up">
              <div><span className="eyebrow">YOUR EVERYDAY GOODNESS</span><h2>What are you in the mood for?</h2></div>
              <Link className="text-link" to="/shop">Browse everything <i className="bi bi-arrow-right" /></Link>
            </div>
            <div className="row g-4 category-grid">
              <div className="col-6 col-lg-3" data-aos="fade-up">
                <Link to="/shop" className="category-card">
                  <img src={img("smoothie.jpg")} alt="Fresh smoothie ingredients" />
                  <div><span>01</span><h3>Blend & Sip</h3><p>Little boosts of goodness</p></div>
                </Link>
              </div>
              <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="70">
                <Link to="/shop" className="category-card">
                  <img src={img("oats.jpg")} alt="Oats and breakfast ingredients" />
                  <div><span>02</span><h3>Slow Mornings</h3><p>Start with something lovely</p></div>
                </Link>
              </div>
              <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="140">
                <Link to="/shop" className="category-card">
                  <img src={img("salad.jpg")} alt="Fresh vegetable salad bowl" />
                  <div><span>03</span><h3>Garden Goodness</h3><p>Fresh, colorful, satisfying</p></div>
                </Link>
              </div>
              <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="210">
                <Link to="/pantry-builder" className="category-card">
                  <img src={img("pantry.jpg")} alt="Jars of pantry staples and nuts" />
                  <div><span>04</span><h3>Pantry Rituals</h3><p>Stock up on the good stuff</p></div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad soft-section">
          <div className="container">
            <div className="section-heading">
              <div><span className="eyebrow">THE FEEL-GOOD EDIT</span><h2>Your new everyday favorites.</h2></div>
              <Link className="text-link" to="/shop">Shop all <i className="bi bi-arrow-right" /></Link>
            </div>
            <div className="row g-4">
              {products.map((product) => (
                <div className="col-md-4" key={product.id} data-aos="fade-up">
                  <article className="product-card">
                    <div className="product-image-wrap">
                      <img src={img(product.image)} alt={product.name} />
                      <span className="product-tag">{product.tag}</span>
                      <button className="quick-add" onClick={() => addToCart(product)} aria-label={`Add ${product.name} to bag`}>
                        <i className="bi bi-plus-lg" />
                      </button>
                    </div>
                    <div className="product-info"><h3>{product.name}</h3><p>Everyday goodness, made simple.</p><strong>₹{product.price}</strong></div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container">
            <div className="ritual-feature row g-0 align-items-stretch">
              <div className="col-lg-6">
                <img src={img("lifestyle.jpg")} alt="Calm, mindful everyday food ritual" />
              </div>
              <div className="col-lg-6 ritual-copy">
                <span className="eyebrow">A NOTE TO SLOW DOWN</span>
                <h2>Nourishment is more than what's on your plate.</h2>
                <p>It's the breakfast you make without rushing. The water you remember to drink. The colorful bowl that makes lunch feel like a pause, not another task.</p>
                <Link className="btn nr-btn" to="/lifestyle">Explore little rituals <i className="bi bi-arrow-up-right" /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="recipe-banner">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <span className="eyebrow">SOMETHING DELICIOUS AWAITS</span>
                <h2>Good things are<br /><em>made at home.</em></h2>
                <p>Easy recipes, everyday ingredients, and plenty of room to make them your own.</p>
                <Link to="/recipes" className="btn nr-btn">Get inspired <i className="bi bi-arrow-up-right" /></Link>
              </div>
              <div className="col-lg-5"><img src={img("recipe.jpg")} alt="Freshly prepared wholesome recipe" /></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="nr-footer">
        <div className="container">
          <div className="row g-4 footer-main">
            <div className="col-lg-5"><Link className="footer-brand" to="/">Nourish <span>Ritual</span></Link><p>Make space for good food, small rituals, and feeling a little more like yourself.</p><div className="social-links"><a href="https://instagram.com/" aria-label="Instagram"><i className="bi bi-instagram" /></a><a href="https://pinterest.com/" aria-label="Pinterest"><i className="bi bi-pinterest" /></a><a href="https://facebook.com/" aria-label="Facebook"><i className="bi bi-facebook" /></a></div></div>
            <div className="col-6 col-lg-2"><h4>Explore</h4><Link to="/shop">Shop</Link><Link to="/lifestyle">Lifestyle</Link><Link to="/recipes">Recipes</Link></div>
            <div className="col-6 col-lg-2"><h4>Our world</h4><Link to="/about">Our Story</Link><Link to="/pantry-builder">Pantry Builder</Link><Link to="/cart">Your Bag</Link></div>
            <div className="col-lg-3"><h4>A little note</h4><p>Good things begin with small steps. Thanks for being here.</p></div>
          </div>
          <div className="footer-bottom"><span>© 2026 Nourish Ritual</span><span>Made with care, served with joy.</span></div>
        </div>
      </footer>
    </>
  );
}