import React, { useState, useEffect } from 'react';

const Content = () => {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setColumns(1); 
      } else if (window.innerWidth <= 768) {
        setColumns(2);  
      } else {
        setColumns(3); 
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#121212',
      color: '#ffffff',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
    },
    grid: {
      display: 'grid',
      gap: '20px',
      maxWidth: '1200px',
      width: '100%',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      transition: 'all 0.3s ease-in-out',
    },
    box: {
      backgroundColor: '#1E1E1E',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.8)',
      borderRadius: '16px',
      padding: '30px',
      textAlign: 'center',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
    },
    boxHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 30px rgba(0, 0, 0, 1)',
    },
    heading: {
      fontSize: '36px',
      color: '#FFFFFF',
      marginBottom: '10px',
      textAlign: 'center',
    },
    description: {
      maxWidth: '800px',
      fontSize: '18px',
      lineHeight: '1.6',
      color: '#ccc',
      textAlign: 'center',
      marginBottom: '40px',
    },
    title: {
      fontSize: '24px', 
      color: '#FFFFFF',
      margin: '0 0 15px',
    },
    text: {
      color: '#B0BEC5',
      fontSize: '16px',
    },
    '@media (max-width: 480px)': {
      container: {
        padding: '20px 10px',
      },
      grid: {
        gridTemplateColumns: '1fr',  
      },
      box: {
        padding: '20px',
      },
    },
  };

  const boxData = [
    { id: 1, title: 'Branding', description: 'Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices' },
    { id: 2, title: 'Marketing', description: 'Integer ante non nunc, eget est justo vel semper nunc. Lacus' },
    { id: 3, title: 'Web Development', description: 'Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.' },
    { id: 4, title: 'Web Development', description: 'Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.' },
    { id: 5, title: 'Web Development', description: 'Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.' },
    { id: 6, title: 'Web Development', description: 'Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.' }
  ];

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-8px)';
    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 1)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.8)';
  };

  return (
    <div style={styles.container}>
      <div>
        <h2 style={styles.heading}>We Offer</h2>
        <p style={styles.description}>
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.
        </p>
      </div>

      <div style={styles.grid}>
        {boxData.map((box) => (
          <div
            key={box.id}
            style={styles.box}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            role="button"
            tabIndex={0}
            aria-label={`Box ${box.id}`}
          >
            <h2 style={styles.title}>{box.title}</h2>
            <p style={styles.text}>{box.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
