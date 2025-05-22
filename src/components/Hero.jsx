import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../services/MovieApi'; // Adjust path accordingly
import styles from './HerroCss';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';



const HeroSection = () => {
    const [backgroundUrl, setBackgroundUrl] = useState('');
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();


    const handleStartWatching = () => {
        if (isAuthenticated) {
            navigate('/watchlist');
        } else {
            navigate('/login');
        }
    };

    useEffect(() => {
        const getRandomBackground = async () => {
            try {
                const response = await fetchPopularMovies(); // Should return results array
                const movies = response.results || [];
                const randomMovie = movies[Math.floor(Math.random() * movies.length)];

                if (randomMovie?.backdrop_path) {
                    setBackgroundUrl(`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`);
                }
            } catch (error) {
                console.error('Error fetching hero background:', error);
            }
        };

        getRandomBackground();
    }, []);

    return (
        <div style={{ ...styles.hero, backgroundImage: `url(${backgroundUrl})` }}>
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
