import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { fetchMoviesByGenre } from "../services/MovieApi";
import "./Explore.css";
import { CircleLoader } from "react-spinners";

const GenreExplorePage = () => {
    const { id } = useParams();
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);

    const genreName = location.state?.genreName || "Selected Genre";

    useEffect(() => {
        // Reset on new genre ID
        setMovies([]);
        setPage(1);
        setHasMore(true);
        loadMovies(1);
    }, [id]);

    const loadMovies = async (pageNum) => {
        setLoading(true);
        try {
            const results = await fetchMoviesByGenre(id, pageNum);
            if (results.length === 0) {
                setHasMore(false);
            } else {
                setMovies((prev) => [...prev, ...results]);
                setPage(pageNum);
            }
        } catch (error) {
            console.error("Error fetching genre movies:", error);
        } finally {
            // Delay hiding the loader by 2 seconds
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    };


    const handleLoadMore = () => {
        loadMovies(page + 1);
    };

    return (
        <div className="container py-5">
            <h2 className="text-white mb-4">
                Explore {genreName} Movies
            </h2>
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

            {loading && (


                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    backgroundColor: "#000" // optional: make it blend with your theme
                }}>
                    <CircleLoader color="white" />
                </div>
            )
            }
            {!loading && hasMore && (
                <div className="text-center mt-4">
                    <button className="btn btn-outline-warning px-4 py-2" onClick={handleLoadMore}>
                        Load More
                    </button>
                </div>
            )}

            {!hasMore && !loading && (
                <div className="text-center text-muted mt-4">No more movies to show.</div>
            )}
        </div>
    );
};

export default GenreExplorePage;
