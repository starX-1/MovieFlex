import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import "./MovieDetail.css";
import { fetchSingleMovie } from "../services/MovieApi";
import { fetchTrailer } from "../services/MovieApi";

const MovieDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [trailerKey, setTrailerKey] = useState<string | null>(null);
    const [showTrailer, setShowTrailer] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetchSingleMovie(id);
                setMovie(response);
                await fetchTrailerData(); // Call the local fetchTrailerData function
                setLoading(false);
            } catch (error) {
                console.error("Error fetching movie:", error);
                setLoading(false);
            }
        };

        const fetchTrailerData = async () => { // Renamed to avoid conflict with imported function
            try {
                const response = await fetchTrailer(id);
                setTrailerKey(response.key);
            } catch (error) {
                console.error("Error fetching trailer:", error);
            }
        };
        fetchMovie();
    }, [id]);

    if (loading) return <div className="text-center text-white py-5">Loading...</div>;
    if (!movie) return <div className="text-center text-danger py-5">Movie not found.</div>;

    return (
        <>
            <div
                className="movie-detail-page"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
                }}
            >
                <div className="overlay">
                    <div className="container py-5">
                        <div className="row align-items-center">
                            <div className="col-md-4 text-center mb-4 mb-md-0">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className="img-fluid rounded shadow movie-poster"
                                />
                            </div>
                            <div className="col-md-8 text-light">
                                <h1 className="movie-title">
                                    {movie.title}{" "}
                                    <span className="text-warning">({movie.release_date.slice(0, 4)})</span>
                                </h1>
                                <p className="movie-meta">
                                    {movie.genres?.map((g: any) => g.name).join(", ")} • {movie.runtime} min
                                </p>
                                <p className="movie-description">{movie.overview}</p>
                                <p className="mb-1">
                                    <strong>Rating:</strong> ⭐ {movie.vote_average}
                                </p>
                                <p>
                                    <strong>Status:</strong> {movie.status}
                                </p>

                                {trailerKey && (
                                    <button
                                        className="btn btn-warning mt-4"
                                        onClick={() => setShowTrailer(true)}
                                    >
                                        Watch Trailer
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trailer Modal */}
            <Modal show={showTrailer} onHide={() => setShowTrailer(false)} centered size="lg">
                <Modal.Header closeButton className="bg-dark text-white">
                    <Modal.Title>{movie.title} - Trailer</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark p-0">
                    {trailerKey ? (
                        <div className="ratio ratio-16x9">
                            <iframe
                                src={`https://www.youtube.com/embed/${trailerKey}`}
                                title="Trailer"
                                allowFullScreen
                            />
                        </div>
                    ) : (
                        <div className="text-white p-3">No trailer available.</div>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default MovieDetail;
