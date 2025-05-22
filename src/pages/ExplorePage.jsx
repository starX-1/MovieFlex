import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { exploreMovies } from "../services/MovieApi";
import "./Explore.css";

const ExplorePage = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);

    const fetchMovies = async (pageNumber) => {
        setLoading(true);
        try {
            const results = await exploreMovies("/discover/movie", pageNumber);
            if (results.length > 0) {
                setMovies((prev) => [...prev, ...results]);
                setPage(pageNumber);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
            setHasMore(false);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies(1);
    }, []);

    return (
        <div className="container py-5">
            <h2 className="text-white mb-4">Explore Popular Movies</h2>
            <div className="row">
                {movies.map((movie) => (
                    <div key={movie.id} className="col-6 col-md-4 col-lg-3 mb-4">
                        <Link to={`/movie/${movie.id}`} className="text-decoration-none">
                            <div className="card bg-dark text-white h-100 shadow-sm">
                                <img
                                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                    className="card-img-top"
                                    alt={movie.title}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text text-muted">⭐ {movie.vote_average.toFixed(1)}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {hasMore && (
                <div className="text-center mt-4">
                    <button
                        className="btn btn-warning"
                        onClick={() => fetchMovies(page + 1)}
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Load More"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ExplorePage;
