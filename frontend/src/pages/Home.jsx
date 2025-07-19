import MovieCart from "../components/MovieCart.jsx";
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        { id: 1, title: "Apple", release_date: "1999" },
        { id: 2, title: "Batman", release_date: "2003" },
        { id: 3, title: "Cat @ Dog", release_date: "2003" },
    ]

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