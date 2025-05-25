import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../services/MovieApi';
import styles from './HerroCss';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const HeroSection = () => {
    const [backgroundUrl, setBackgroundUrl] = useState('');
    const [fadeIn, setFadeIn] = useState(true);
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    const handleStartWatching = () => {
        navigate(isAuthenticated ? '/watchlist' : '/login');
    };

    useEffect(() => {
        let movies = [];

        const fetchOnce = async () => {
            try {
                const response = await fetchPopularMovies();
                movies = response.results || [];
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchOnce();

        const intervalId = setInterval(() => {
            if (movies.length > 0) {
                const randomMovie = movies[Math.floor(Math.random() * movies.length)];

                if (randomMovie?.backdrop_path) {
                    setFadeIn(false); // Start fade out
                    setTimeout(() => {
                        setBackgroundUrl(`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`);
                        setFadeIn(true); // Start fade in
                    }, 3000); // Wait for fade out to complete
                }
            }
        }, 3000); // Change every 3 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div
            style={{
                ...styles.hero,
                backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : 'none',
                opacity: fadeIn ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out, background-image 0.5s ease-in-out',
            }}
        >
            <div style={styles.heroOverlay}></div>
            <div style={styles.heroContent}>
                <div style={{ fontSize: '5rem', animation: 'float 3s ease-in-out infinite' }}>🎬</div>
                <h1 style={styles.heroTitle}>
                    Movie<span style={{ color: '#4ECDC4' }}>Flex</span>
                </h1>
                <p style={styles.heroSubtitle}>
                    Discover blockbuster movies, track your watchlist, and explore the world of cinema.
                </p>
                <div style={styles.heroButtons}>
                    <button style={styles.buttonPrimary} onClick={handleStartWatching}>
                        Start Watching
                    </button>
                    <button style={styles.buttonSecondary} onClick={() => navigate('/explore')}>
                        Browse Movies
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
