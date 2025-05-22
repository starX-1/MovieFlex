import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import BookDetails from "./pages/BookDetails";
import Header from "./components/Header";
import Login from "./pages/Login";
import MovieDetail from "./pages/MovieDetail";
import ExplorePage from "./pages/ExplorePage";
import GenreExplorePage from "./pages/GenreExplorePage";

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen text-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/search" element={<Search />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/genre/:id" element={<GenreExplorePage />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
