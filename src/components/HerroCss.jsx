const styles = {
  hero: {
    position: 'relative',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    padding: '0 20px',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3))',
    zIndex: 1,
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
  },
  heroTitle: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    marginBottom: '32px',
    color: '#ccc',
  },
  heroButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    flexWrap: 'wrap',
  },
  buttonPrimary: {
    backgroundColor: '#FF6B6B',
    border: 'none',
    padding: '12px 28px',
    fontSize: '1rem',
    borderRadius: '8px',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    border: '2px solid white',
    padding: '12px 28px',
    fontSize: '1rem',
    borderRadius: '8px',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  }
};

export default styles;