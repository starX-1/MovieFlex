import { useState } from "react";
import "./Search.css";

export default function Search() {
  const [query, setQuery] = useState("");

  return (
    <div className="search-container container py-5">
      <div className="text-center mb-4">
        <h1 className="search-title">🎥 Find Your Favorite Movie</h1>
        <p className="search-subtitle">Search by title, actor, or director</p>
      </div>
      <div className="input-group input-group-lg shadow search-input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Try 'Inception' or 'Leonardo DiCaprio'"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-danger" type="button">
          Search
        </button>
      </div>
    </div>
  );
}
