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
    </div>
);

export default MovieCard;