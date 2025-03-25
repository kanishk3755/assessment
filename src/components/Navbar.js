import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import img from '../assets/images/icon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const navStyle = {
    background: "linear-gradient(90deg, #000000, #333333)",  
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
    width: "100%",
    position: "fixed",
    top: 0,
    zIndex: 1000,
    transition: "0.3s",
  };

  const navHoverStyle = {
    boxShadow: "0 4px 15px rgba(255, 255, 255, 0.2)",  
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
    color: "#fff",  
    textDecoration: "none",
    padding: "10px 15px",
    fontSize: "16px",
    transition: "color 0.3s",
  };

  const buttonStyle = {
    backgroundColor: "transparent",     
    color: "#FF8C00",                   
    border: "2px solid #FF8C00",       
    padding: "10px 25px",               
    borderRadius: "30px",               
    cursor: "pointer",                  
    fontSize: "16px",                   
    transition: "all 0.3s ease",        
};

const buttonHoverStyle = {
    //backgroundColor: "#FF8C00",         
    color: "#fff",                      
    border: "2px solid #FF8C00",       
};

  const mobileMenuStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    padding: "15px",
    backgroundColor: "#222",
    borderTop: "1px solid #444",
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

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",  
    textDecoration: "none",
    color: "#fff",
    fontSize: "22px",
    fontWeight: "bold",
  };

  const imageStyle = {
    width: "35px",   
    height: "35px",
    borderRadius: "50%", 
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
  const MenuLinks = () => (
    <>
      <a href="#" style={linkStyle}>Home</a>
      <a href="#" style={linkStyle}>About</a>
      <a href="#" style={linkStyle}>Services</a>
      <a href="#" style={linkStyle}>Contact</a>
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.background = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.background = buttonStyle.backgroundColor)}
      >
        Contact
      </button>
    </>
  );
  return (
    <>
      <style>{mediaQuery}</style>
      <nav
        style={isOpen ? { ...navStyle, ...navHoverStyle } : navStyle}
        onMouseOver={(e) => (e.currentTarget.style.boxShadow = navHoverStyle.boxShadow)}
        onMouseOut={(e) => (e.currentTarget.style.boxShadow = navStyle.boxShadow)}
      >
        <div className="container" style={containerStyle}>
          <a href="/" style={logoStyle}>
            <img
              src={img}  
              alt="Shadient Logo"
              style={imageStyle}
            />
            Shadient.co
          </a>

          <div style={desktopMenuStyle} className="desktop-menu">
            <MenuLinks />
          </div>

          <div
            className="mobile-menu-btn"
            style={mobileBtnStyle}
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
          >
            {isOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
          </div>
        </div>

        {isOpen && (
          <div style={mobileMenuStyle} className="mobile-menu">
            <MenuLinks />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
