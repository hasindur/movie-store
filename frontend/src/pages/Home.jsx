import MovieCart from "../components/MovieCart.jsx";
import "../css/Home.css"
import { searchMovies, getPopularMovies } from "../services/api.js";
import { useEffect, useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.log(error);
                setError("Fail to load.....");

            }
            finally {
                setLoading(false);
            }
        };
        loadPopularMovies();
    }, []);


    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");

    }
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-btn" type="submit">Search</button>
            </form>
            <div className="movie-grid">
                {movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && <MovieCart key={movie.id} movie={movie} />

                ))}
            </div>
        </div>
    );
}

export default Home;