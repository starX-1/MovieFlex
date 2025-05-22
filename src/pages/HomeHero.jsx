const style = {
    hero: {
        position: 'relative',
        height: '100vh',
        color: 'white',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 20px',
    },
    heroBackground: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', // dark cinematic gradient
        zIndex: 1,
    },
    heroOverlay: {
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(4px)',
        zIndex: 2,
    },
    heroContent: {
        position: 'relative',
        zIndex: 3,
        maxWidth: '800px',
    },
    heroTitle: {
        fontSize: '4rem',
        fontWeight: 'bold',
        marginBottom: '16px',
        letterSpacing: '1px',
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
    },
    floatingIcon: {
        position: 'absolute',
        fontSize: '2.5rem',
        animation: 'float 4s ease-in-out infinite',
        zIndex: 2,
    }
};

export default style;