import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  const image = 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1911&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div style={styles.homeContainer}>
      <img src={image} alt="Background" style={styles.backgroundImage} />
      <div style={styles.overlay}></div>
      <div style={styles.container}>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <img src="https://img.freepik.com/free-vector/beauty-salon-pattern_1284-35826.jpg?w=740&t=st=1722596113~exp=1722596713~hmac=22158036243bb100edc39e530b957eb289bc007fd126076558dfa3e4dd2efa29" alt="Saloon" style={styles.cardImage} />
            <div style={styles.cardBody}>
              <p style={styles.cardText}>Click Here for Registering as a Saloon.</p>
              <Link to="/saloonRegister" style={styles.button}>Saloon</Link>
            </div>
          </div>
          <div style={styles.card}>
            <img src="https://img.freepik.com/free-vector/barber-shop-flat-design_1284-16129.jpg?w=740&t=st=1722595917~exp=1722596517~hmac=14166cedf8b803128549bb051e7fe42fad94a7ce0d1869505330bdc90867c75c" alt="Customer" style={styles.cardImage} />
            <div style={styles.cardBody}>
              <p style={styles.cardText}>Click Here for Registering as a User.</p>
              <Link to="/userRegister" style={styles.button}>Customer</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  homeContainer: {
    position: 'relative',
    height: '100%', // Ensure container grows with content
    overflowY: 'auto', // Enable scrolling if content exceeds height
    textAlign: 'center',
    color: 'white',
  },
  backgroundImage: {
    position: 'fixed', // Use fixed to keep the image in place
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -2,
    objectFit: 'cover',
  },
  overlay: {
    position: 'fixed', // Use fixed to ensure overlay covers background image
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: -1,
  },
  container: {
    zIndex: 1,
    marginTop: '50px',
    padding: '0 20px',
    width: '100%',
    maxWidth: '1200px',
    boxSizing: 'border-box',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap', // Allow cards to wrap to the next line
  },
  card: {
    width: '20rem',
    border: '2px solid royalblue',
    margin: '10px',
    boxSizing: 'border-box',
  },
  cardImage: {
    width: '100%',
    height: 'auto',
  },
  cardBody: {
    padding: '1rem',
  },
  cardText: {
    marginBottom: '1rem',
  },
  button: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: 'lightsteelblue',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  },
  // Responsive design
  '@media (max-width: 768px)': {
    cardContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    card: {
      width: '90%',
      margin: '10px 0',
    },
    cardBody: {
      padding: '0.5rem',
    },
    cardText: {
      fontSize: '0.9rem',
    },
    button: {
      padding: '0.4rem 0.8rem',
      fontSize: '0.9rem',
    },
  },
};

export default Home;
