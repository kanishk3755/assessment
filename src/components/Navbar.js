import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navStyle = {
    backgroundColor: "#fff",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    position: "fixed",
    top: 0,
    zIndex: 1000,
    transition: "0.3s",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "70px",
    transition: "0.3s",
  };

  const linkStyle = {
    color: "#333",
    textDecoration: "none",
    padding: "10px 15px",
    fontSize: "16px",
    transition: "color 0.3s",
  };

  const buttonStyle = {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  const mobileMenuStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    padding: "15px",
    backgroundColor: "#fff",
    borderTop: "1px solid #ccc",
    transition: "0.3s",
  };

  const desktopMenuStyle = {
    display: "flex",
    gap: "20px",
  };

  const mobileBtnStyle = {
    display: "none",
    cursor: "pointer",
  };

  const mediaQuery = `
    @media (max-width: 768px) {
      .desktop-menu {
        display: none;
      }
      .mobile-menu-btn {
        display: flex !important;
      }
    }
    
    @media (min-width: 769px) {
      .mobile-menu {
        display: none;
      }
    }

    /* For smaller screens ≤ 400px */
    @media (max-width: 400px) {
      .container {
        padding: 0 10px !important;
      }

      .mobile-menu {
        gap: 10px !important;
        padding: 10px !important;
      }

      .mobile-menu a {
        font-size: 14px !important;
        padding: 8px 10px !important;
      }

      .mobile-menu button {
        padding: 8px 15px !important;
        font-size: 14px !important;
      }

      .logo {
        font-size: 18px !important;
      }

      .mobile-menu-btn {
        transform: scale(0.9);
      }
    }
  `;

  return (
    <>
      <style>{mediaQuery}</style>

      <nav style={navStyle}>
        <div className="container" style={containerStyle}>
          <a href="/" style={{ ...linkStyle, fontSize: "22px", fontWeight: "bold" }} className="logo">
            Headfield assignment
          </a>

          {/* Desktop Menu */}
          <div style={desktopMenuStyle} className="desktop-menu">
            <a href="#" style={linkStyle}>Home</a>
            <a href="#" style={linkStyle}>About</a>
            <a href="#" style={linkStyle}>Services</a>
            <a href="#" style={linkStyle}>Contact</a>
            <button
              style={buttonStyle}
              onMouseOver={(e) => (e.target.style.background = buttonHoverStyle.backgroundColor)}
              onMouseOut={(e) => (e.target.style.background = buttonStyle.backgroundColor)}
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="mobile-menu-btn"
            style={mobileBtnStyle}
            onClick={toggleMenu}
          >
            {isOpen ? <X size={28} color="#333" /> : <Menu size={28} color="#333" />}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={mobileMenuStyle} className="mobile-menu">
            <a href="#" style={linkStyle}>Home</a>
            <a href="#" style={linkStyle}>About</a>
            <a href="#" style={linkStyle}>Services</a>
            <a href="#" style={linkStyle}>Contact</a>
            <button style={buttonStyle}>Login</button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
