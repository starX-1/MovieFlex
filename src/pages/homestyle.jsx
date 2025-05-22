const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0F0F23 0%, #1A1A2E 50%, #16213E 100%)',
    color: 'white'
  },
  hero: {
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4, #45B7D1)',
    color: 'white',
    minHeight: '70vh'
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  heroContent: {
    position: 'relative',
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '96px 16px',
    textAlign: 'center',
    zIndex: 2
  },
  heroTitle: {
    fontSize: '5rem',
    fontWeight: 'bold',
    marginBottom: '24px',
    lineHeight: 1.1,
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '32px',
    maxWidth: '768px',
    margin: '0 auto 32px',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
  },
  buttonPrimary: {
    backgroundColor: '#FF6B6B',
    color: 'white',
    padding: '16px 32px',
    borderRadius: '50px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    margin: '0 8px',
    boxShadow: '0 10px 25px rgba(255, 107, 107, 0.3)',
    transition: 'all 0.3s ease',
    fontSize: '1.1rem'
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    color: 'white',
    padding: '16px 32px',
    borderRadius: '50px',
    fontWeight: '600',
    border: '2px solid white',
    cursor: 'pointer',
    margin: '0 8px',
    transition: 'all 0.3s ease',
    fontSize: '1.1rem'
  },
  floatingIcon: {
    position: 'absolute',
    color: 'rgba(255, 255, 255, 0.2)',
    fontSize: '4rem',
    animation: 'float 3s ease-in-out infinite'
  },
  statsContainer: {
    maxWidth: '1280px',
    margin: '-48px auto 64px',
    padding: '0 16px',
    position: 'relative',
    zIndex: 10,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px'
  },
  statCard: {
    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '32px',
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,0.1)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  },
  statIcon: {
    fontSize: '3rem',
    marginBottom: '16px',
    display: 'block'
  },
  statValue: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginBottom: '8px'
  },
  statLabel: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '1.1rem'
  },
  mainContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 16px 64px'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '32px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  genresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px',
    marginBottom: '64px'
  },
  genreCard: {
    borderRadius: '20px',
    padding: '32px 24px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.1)'
  },
  genreIcon: {
    fontSize: '3rem',
    marginBottom: '16px',
    display: 'block'
  },
  genreName: {
    fontWeight: '700',
    fontSize: '1.2rem'
  },
  moviesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '24px',
    marginBottom: '64px'
  },
  movieCard: {
    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative'
  },
  movieImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover'
  },
  movieContent: {
    padding: '20px'
  },
  movieTitle: {
    fontWeight: 'bold',
    marginBottom: '8px',
    fontSize: '1rem',
    lineHeight: '1.3',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical'
  },
  movieYear: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: '0.9rem',
    marginBottom: '8px'
  },
  movieRating: {
    color: '#FFD700',
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  },
  ratingBadge: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
    color: '#000',
    padding: '6px 10px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  },
  loadingSkeleton: {
    background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 100%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite',
    borderRadius: '20px'
  },
  skeletonImage: {
    height: '300px',
    marginBottom: '16px'
  },
  skeletonText: {
    height: '16px',
    marginBottom: '8px'
  },
  skeletonTextSmall: {
    height: '12px',
    width: '75%'
  },
  ctaSection: {
    textAlign: 'center',
    background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
    borderRadius: '30px',
    padding: '60px 40px',
    color: 'white',
    boxShadow: '0 20px 40px rgba(255, 107, 107, 0.3)',
    position: 'relative',
    overflow: 'hidden'
  },
  ctaTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '16px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
  },
  ctaSubtitle: {
    fontSize: '1.3rem',
    opacity: 0.9,
    marginBottom: '32px'
  }
};

export default styles;