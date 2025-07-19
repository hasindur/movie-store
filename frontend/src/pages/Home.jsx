import MovieCard from "../components/MovieCard.jsx";

function Home() {
    const movies = [
        { id: 1, title: "The Matrix 01", release_date: "1999" },
        { id: 2, title: "The Matrix 02", release_date: "2003" },
        { id: 3, title: "The Matrix 03", release_date: "2003" },
    ]

    const handleSearch = (e) => {
        e.preventDefault();
    }
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" className="search-input" placeholder="Search" />
                <button className="search-btn" type="submit"></button>
            </form>
            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}