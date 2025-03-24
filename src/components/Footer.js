const Footer = () => {
  const footerStyle = {
    backgroundColor: "#f8f9fa",
    color: "#333",
    padding: "40px 20px",
    borderTop: "1px solid #ccc",
    textAlign: "center",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "30px",
  };

  const columnStyle = {
    flex: "1",
    minWidth: "250px",
    textAlign: "left",
  };

  const linkStyle = {
    color: "#007BFF",
    textDecoration: "none",
    display: "block",
    marginBottom: "10px",
    transition: "color 0.3s",
  };

  const linkHoverStyle = {
    color: "#0056b3",
  };

  const headingStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
  };

  const copyrightStyle = {
    marginTop: "30px",
    fontSize: "14px",
    color: "#666",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        
        {/* Column 1 */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>About Us</h3>
          <p>Head Field Group is headquartered in Noida, India. Over the years, we have created a world-class portfolio that has a global presence. The group has positioned itself to be the market leader in its outsourcing businesses.</p>
        </div>

        {/* Column 2 */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>Quick Links</h3>
          <a
            href="#"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          >
            Home
          </a>
          <a
            href="#"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          >
            Services
          </a>
          <a
            href="#"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          >
            About
          </a>
          <a
            href="#"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          >
            Contact
          </a>
        </div>

        {/* Column 3 */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>Contact Us</h3>
          <p>Email: info@headfield.com</p>
          <p>Phone: +91 9310568481</p>
          <p>Location: B-8, SECTOR 59, NOIDA-201301(UP)</p>
        </div>
      </div>

      <div style={copyrightStyle}>
        © {new Date().getFullYear()} Headfield. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
