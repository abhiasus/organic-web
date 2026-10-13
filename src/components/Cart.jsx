
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App.jsx";

export default function Cart() {
  const { cartItems, cartCount, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const demoCheckout = () => {
    if (!cartItems.length) return;
    setCheckoutMessage("This is a demo checkout. No payment has been taken.");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg nr-navbar"><div className="container">
        <Link className="navbar-brand nr-brand" to="/"><span className="brand-mark"><i className="bi bi-flower1" /></span>Nourish <span>Ritual</span></Link>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nrNav"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="nrNav"><ul className="navbar-nav mx-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li><li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li><li className="nav-item"><Link className="nav-link" to="/lifestyle">Lifestyle</Link></li><li className="nav-item"><Link className="nav-link" to="/recipes">Recipes</Link></li><li className="nav-item"><Link className="nav-link" to="/about">Our Story</Link></li>
        </ul><Link className="nav-cart active" to="/cart"><i className="bi bi-bag" /> Bag ({cartCount})</Link></div>
      </div></nav>

      <main className="page-shell">
        <section className="page-heading"><div className="container"><span className="eyebrow">YOUR GOOD THINGS</span><h1>Your little <em>bag.</em></h1><p>A few thoughtful things, picked just for you.</p></div></section>
        <section className="section-pad"><div className="container">
          {cartItems.length === 0 ? <div className="empty-cart"><span className="empty-cart-icon"><i className="bi bi-bag-heart" /></span><h2>Your bag is taking a little pause.</h2><p>Find something lovely to add to your everyday rituals.</p><Link className="btn nr-btn" to="/shop">Explore the pantry <i className="bi bi-arrow-right" /></Link></div> :
            <div className="cart-layout">
              <div className="cart-items">
                {cartItems.map((item) => <article className="cart-item" key={item.id}>
                  <img src={`/src/assets/image/${item.image}`} alt={item.name} />
                  <div className="cart-item-details"><h3>{item.name}</h3><p>Everyday goodness</p><strong>₹{item.price}</strong>
                    <div className="quantity-control"><button onClick={() => updateQuantity(item.id, -1)} aria-label={`Decrease ${item.name} quantity`}>−</button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.id, 1)} aria-label={`Increase ${item.name} quantity`}>+</button></div>
                  </div>
                  <div className="cart-item-end"><strong>₹{item.price * item.quantity}</strong><button className="remove-item" onClick={() => removeFromCart(item.id)}>Remove</button></div>
                </article>)}
                <button className="clear-selection" onClick={clearCart}>Clear entire bag</button>
              </div>
              <aside className="cart-summary"><span className="eyebrow">THE LITTLE DETAILS</span><h2>Order summary</h2><div className="summary-line"><span>Items</span><span>{cartCount}</span></div><div className="summary-line"><span>Subtotal</span><strong>₹{subtotal}</strong></div><div className="summary-line"><span>Delivery</span><span>Calculated later</span></div><div className="summary-total"><span>Total</span><strong>₹{subtotal}</strong></div><button className="btn nr-btn w-100" onClick={demoCheckout}>Continue to demo checkout <i className="bi bi-arrow-right" /></button>{checkoutMessage && <p className="checkout-message" role="status">{checkoutMessage}</p>}<p className="summary-disclaimer">Demo only. This site does not process payments or create orders.</p></aside>
            </div>}
        </div></section>
      </main>

      <footer className="nr-footer"><div className="container"><div className="row g-4 footer-main">
        <div className="col-lg-5"><Link className="footer-brand" to="/">Nourish <span>Ritual</span></Link><p>Thoughtful food and little rituals for everyday life.</p><div className="social-links"><a href="https://instagram.com/" aria-label="Instagram"><i className="bi bi-instagram" /></a><a href="https://pinterest.com/" aria-label="Pinterest"><i className="bi bi-pinterest" /></a><a href="https://facebook.com/" aria-label="Facebook"><i className="bi bi-facebook" /></a></div></div>
        <div className="col-6 col-lg-2"><h4>Explore</h4><Link to="/shop">Shop</Link><Link to="/lifestyle">Lifestyle</Link><Link to="/recipes">Recipes</Link></div>
        <div className="col-6 col-lg-2"><h4>Our world</h4><Link to="/about">Our Story</Link><Link to="/pantry-builder">Pantry Builder</Link><Link to="/">Home</Link></div>
        <div className="col-lg-3"><h4>A little note</h4><p>Thanks for making room for goodness.</p></div>
      </div><div className="footer-bottom"><span>© 2026 Nourish Ritual</span><span>Made with care, served with joy.</span></div></div></footer>
    </>
  );
}
