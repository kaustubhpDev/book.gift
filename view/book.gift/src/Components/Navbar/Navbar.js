import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
    <div className="logo">
      <h1>Book.gift</h1>

    </div>
    <div className="nav-links">
      <h2 className="nav-item">About us</h2>
      <h2 className="nav-item">Testimonials</h2>
      <button className="nav-item">Get Started </button>

    </div>

  </div>
  );
}
export default Navbar;
