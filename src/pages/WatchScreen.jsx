// src/pages/WatchScreen.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchSingleMovie } from '../services/MovieApi';// adjust path to your project
import './WatchScreen.css';

const WatchScreen = () => {
    const { imdbId } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const loadMovie = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/find/${imdbId}?api_key=${import.meta.env.VITE_API_KEY}&external_source=imdb_id`);
            const data = await response.json();
            if (data.movie_results && data.movie_results.length > 0) {
                const tmdbMovie = data.movie_results[0];
                const fullMovie = await fetchSingleMovie(tmdbMovie.id);
                setMovie(fullMovie);
            }
        };
        loadMovie();
    }, [imdbId]);

    return (
        <div className="watch-container">
            <div className="player-section">
                <iframe
                    src={`https://vidsrc.xyz/embed/movie/${imdbId}`}
                    title="Movie Player"
                    allowFullScreen
                    frameBorder="0"
                />
            </div>

            <div className="details-section">
                {movie ? (
                    <>
                        <h2>{movie.title} ({new Date(movie.release_date).getFullYear()})</h2>
                        <p><strong>Overview:</strong> {movie.overview}</p>
                        <p><strong>Genres:</strong> {movie.genres.map(g => g.name).join(', ')}</p>
                        <p><strong>Rating:</strong> ⭐ {movie.vote_average.toFixed(1)} / 10</p>
                        <p><strong>Runtime:</strong> ⏱️ {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</p>
                        <p><strong>Release Date:</strong> {movie.release_date}</p>
                        <p><strong>Language:</strong> {movie.original_language.toUpperCase()}</p>
                        <p><strong>Production:</strong> {movie.production_companies.map(p => p.name).join(', ')}</p>
                    </>
                ) : (
                    <p>Loading movie details...</p>
                )}
                <button onClick={() => navigate(-1)} className="back-button">⬅ Go Back</button>
            </div>
        </div>
    );
};

export default WatchScreen;
