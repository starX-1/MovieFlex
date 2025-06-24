import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // import useNavigate
import { exploreMovies } from "../services/MovieApi";
// import { onAuthStateChanged } from "firebase/auth"; // or your auth provider
// import { auth } from "../firebase"; // your firebase config
import { fetchImdbId } from "../services/MovieApi";
import "./Explore.css";
// import { toast } from "react-toastify";

const ExplorePage = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    // const [user, setUser] = useState(null);
    const navigate = useNavigate();  // initialize navigate

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
    //         setUser(firebaseUser);
    //     });
    //     return () => unsubscribe();
    // }, []);

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

    const handleImageClick = async (movie) => {
        // if (!user) {
        //     toast.error("Please Login to watch movies");
        //     navigate('/login');
        //     return;
        // }
        const imdbId = await fetchImdbId(movie.id);  // make sure fetchImdbId is imported
        if (imdbId) {
            navigate(`/watch/${imdbId}`);
        } else {
            alert("IMDB ID not found for this movie");
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
                        <div className="card bg-dark text-white h-100 shadow-sm">
                            <img
                                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                className="card-img-top"
                                alt={movie.title}
                                onClick={() => handleImageClick(movie)}
                                style={{ cursor: 'pointer' }} // show pointer cursor on hover
                            />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text text-muted">⭐ {movie.vote_average.toFixed(1)}</p>
                                <Link to={`/movie/${movie.id}`} className="text-decoration-none">
                                    <button className="btn btn-outline-warning btn-sm">Details</button>
                                </Link>
                            </div>
                        </div>
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
