import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './homestyle';
import genres from '../constants/genres';
import { fetchMovies } from '../services/MovieApi';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/Hero';

const Home = () => {
    const [featuredMovies, setFeaturedMovies] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    // Movie genres for categories
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

    // Fetch movies from TMDb API


    // Fetch different categories of movies
    useEffect(() => {
        const loadMovies = async () => {
            setIsLoading(true);
            try {
                const [popular, trending, upcoming, topRated] = await Promise.all([
                    fetchMovies('/movie/popular'),
                    fetchMovies('/trending/movie/week'),
                    fetchMovies('/movie/upcoming'),
                    fetchMovies('/movie/top_rated')
                ]);

                setFeaturedMovies(popular);
                setTrendingMovies(trending);
                setUpcomingMovies(upcoming);
                setTopRatedMovies(topRated);
            } catch (error) {
                console.error('Error loading movies:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadMovies();
    }, []);

    // Get movie poster URL
    const getPosterUrl = (movie, size = 'w300') => {
        if (movie.poster_path) {
            return `${IMAGE_BASE_URL}/${size}${movie.poster_path}`;
        }
        return '/api/placeholder/300/450';
    };

    // Get movie release year
    const getYear = (dateString) => {
        return dateString ? new Date(dateString).getFullYear() : 'N/A';
    };

    // Movie card component
    const MovieCard = ({ movie, featured = false }) => (
        <div
            style={styles.movieCard}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(255, 107, 107, 0.3)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ position: 'relative' }}>
                    <img
                        src={getPosterUrl(movie, featured ? 'w500' : 'w300')}
                        alt={movie.title}
                        style={{
                            ...styles.movieImage,
                            height: featured ? '400px' : '300px'
                        }}
                    />

                    {/* Rating badge */}
                    {movie.vote_average && (
                        <div style={styles.ratingBadge}>
                            <span>⭐</span>
                            {movie.vote_average.toFixed(1)}
                        </div>
                    )}
                </div>

                <div style={styles.movieContent}>
                    <h3 style={styles.movieTitle}>
                        {movie.title}
                    </h3>
                    <p style={styles.movieYear}>
                        {getYear(movie.release_date)}
                    </p>
                    <div style={styles.movieRating}>
                        <span>🎬</span>
                        <span>{movie.vote_count} votes</span>
                    </div>
                </div>
            </Link>
        </div>
    );

    // Loading skeleton
    const MovieSkeleton = () => (
        <div style={styles.loadingSkeleton}>
            <div style={{ ...styles.loadingSkeleton, ...styles.skeletonImage }}></div>
            <div style={{ padding: '20px' }}>
                <div style={{ ...styles.loadingSkeleton, ...styles.skeletonText }}></div>
                <div style={{ ...styles.loadingSkeleton, ...styles.skeletonTextSmall }}></div>
            </div>
        </div>
    );

    return (
        <div style={styles.container}>
            {/* Add CSS animations */}
            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(-10px) rotate(-5deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 107, 107, 0.5); }
          50% { box-shadow: 0 0 30px rgba(78, 205, 196, 0.5); }
        }
      `}</style>

            {/* Hero Section */}
            <HeroSection />
                

            {/* Statistics Section */}
            <div style={styles.statsContainer}>
                {[
                    { icon: '🎬', label: 'Movies Available', value: '50K+' },
                    { icon: '👥', label: 'Active Users', value: '2M+' },
                    { icon: '⭐', label: 'Reviews & Ratings', value: '10M+' }
                ].map((stat, index) => (
                    <div
                        key={index}
                        style={styles.statCard}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 107, 107, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <span style={styles.statIcon}>{stat.icon}</span>
                        <div style={styles.statValue}>{stat.value}</div>
                        <div style={styles.statLabel}>{stat.label}</div>
                    </div>
                ))}
            </div>

            <div style={styles.mainContent}>
                {/* Browse by Genres */}
                <section style={{ marginBottom: '64px' }}>
                    <h2 style={styles.sectionTitle}>
                        <span style={{ fontSize: '2.5rem' }}>🎭</span>
                        Browse by Genres
                    </h2>
                    <div style={styles.genresGrid}>
                        {genres.map((genre, index) => (
                            <div
                                key={index}
                                style={{
                                    ...styles.genreCard,
                                    background: genre.gradient
                                }}
                                onClick={() => navigate(`/genre/${genre.id}`, { state: { genreName: genre.name } })}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.1) rotate(2deg)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <span style={styles.genreIcon}>{genre.icon}</span>
                                <h3 style={styles.genreName}>{genre.name}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Featured Movies */}
                <section style={{ marginBottom: '64px' }}>
                    <h2 style={styles.sectionTitle}>
                        <span style={{ fontSize: '2.5rem' }}>🌟</span>
                        Popular Movies
                    </h2>

                    {isLoading ? (
                        <div style={styles.moviesGrid}>
                            {[...Array(6)].map((_, i) => <MovieSkeleton key={i} />)}
                        </div>
                    ) : (
                        <div style={styles.moviesGrid}>
                            {featuredMovies.slice(0, 6).map((movie, index) => (
                                <MovieCard key={movie.id} movie={movie} featured />
                            ))}
                        </div>
                    )}
                </section>

                {/* Trending Now */}
                <section style={{ marginBottom: '64px' }}>
                    <h2 style={styles.sectionTitle}>
                        <span style={{ fontSize: '2.5rem' }}>🔥</span>
                        Trending This Week
                    </h2>

                    {isLoading ? (
                        <div style={styles.moviesGrid}>
                            {[...Array(8)].map((_, i) => <MovieSkeleton key={i} />)}
                        </div>
                    ) : (
                        <div style={styles.moviesGrid}>
                            {trendingMovies.slice(0, 8).map((movie, index) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </div>
                    )}
                </section>

                {/* Top Rated */}
                <section style={{ marginBottom: '64px' }}>
                    <h2 style={styles.sectionTitle}>
                        <span style={{ fontSize: '2.5rem' }}>🏆</span>
                        Top Rated Movies
                    </h2>

                    {isLoading ? (
                        <div style={styles.moviesGrid}>
                            {[...Array(8)].map((_, i) => <MovieSkeleton key={i} />)}
                        </div>
                    ) : (
                        <div style={styles.moviesGrid}>
                            {topRatedMovies.slice(0, 8).map((movie, index) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </div>
                    )}
                </section>

                {/* Call to Action */}
                <section style={styles.ctaSection}>
                    <h2 style={styles.ctaTitle}>Ready for Movie Night?</h2>
                    <p style={styles.ctaSubtitle}>
                        Join millions of movie lovers and create your ultimate watchlist
                    </p>
                    <div>
                        <button
                            style={{ ...styles.buttonPrimary, backgroundColor: 'white', color: '#FF6B6B' }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#f8f8f8';
                                e.target.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'white';
                                e.target.style.transform = 'scale(1)';
                            }}
                        >
                            Create Watchlist
                        </button>
                        <button
                            onClick={() => navigate('/explore')}
                            style={styles.buttonSecondary}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'white';
                                e.target.style.color = '#FF6B6B';
                                e.target.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = 'white';
                                e.target.style.transform = 'scale(1)';
                            }}
                        >
                            Explore More
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;