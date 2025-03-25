import React from "react";
import img from '../assets/images/icon.png';

const Footer = () => {
  const year = new Date().getFullYear();

  const LinkItem = ({ href, label }) => (
    <a
      href={href}
      style={styles.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );

  const styles = {
    footer: {
      backgroundColor: "#000",
      color: "#fff",
      padding: "60px 20px",
      fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      lineHeight: "1.6",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      maxWidth: "1200px",
      margin: "0 auto",
      flexWrap: "wrap",  
    },
    column: {
      flex: "1",
      margin: "0 15px",
      minWidth: "200px",   
      boxSizing: "border-box",
    },
    heading: {
      fontSize: "22px",
      marginBottom: "15px",
      color: "#ffffff",
      fontWeight: "600",
    },
    link: {
      display: "block",
      color: "#ccc",
      textDecoration: "none",
      marginBottom: "10px",
      transition: "color 0.3s",
      fontSize: "16px",
    },
    contactLink: {
      color: "#1abc9c",
      textDecoration: "none",
      fontSize: "16px",
    },
    copyright: {
      textAlign: "center",
      marginTop: "40px",
      fontSize: "14px",
      borderTop: "1px solid #333",
      paddingTop: "15px",
      fontWeight: "300",
    },
    input: {
      backgroundColor: "black",
      padding: "10px",
      width: "100%",
      borderRadius: "8px",
      border: "1px solid #ccc",
      boxSizing: "border-box",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
    },
    logoText: {
      marginLeft: "10px",
    },

    '@media (max-width: 768px)': {
      container: {
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      },
      column: {
        width: "100%",
        marginBottom: "30px",
      },
      input: {
        width: "90%", 
      },
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        <div style={styles.column}>
          <h3 style={styles.heading}>Company</h3>
          <LinkItem href="#" label="About Us" />
          <LinkItem href="#" label="Team" />
          <LinkItem href="#" label="Careers" />
        </div>

        <div style={styles.column}>
          <h3 style={styles.heading}>Services</h3>
          <LinkItem href="#" label="Branding" />
          <LinkItem href="#" label="Web development" />
          <LinkItem href="#" label="Digital Marketing" />
          <LinkItem href="#" label="Mobile app" />
          <LinkItem href="#" label="SEO" />
          <LinkItem href="#" label="User testing" />
        </div>

        <div style={styles.column}>
          <h3 style={styles.heading}>Resources</h3>
          <LinkItem href="#" label="Blog" />
          <LinkItem href="#" label="Case study" />
          <LinkItem href="#" label="Testimonials" />
        </div>

        <div style={styles.column}>
          <h3 style={styles.heading}>Follow Us</h3>
          <LinkItem href="#" label="Instagram" />
          <LinkItem href="#" label="Figma" />
          <LinkItem href="#" label="Careers" />
        </div>

        <div style={styles.column}>
          <div style={styles.logoContainer}>
            <img src={img} height="50px" width="50px" alt="Logo" />
            <div style={styles.logoText}>
              <h3 style={styles.heading}>Shadient.co</h3>
            </div>
          </div>
          <p>Get latest updates</p>
          <input
            type="text"
            placeholder="Your Email"
            style={styles.input}
          />
        </div>
      </div>

      <div style={styles.copyright}>
        Created by Shadient.co &copy; {year}
      </div>
    </footer>
  );
};

export default Footer;
