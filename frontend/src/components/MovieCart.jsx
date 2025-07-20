import React from "react";


function MovieCart({ movie }) {
    function onFavoriteClick() {
        alert("Clicked on favorite");
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.Title} />
            </div>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}>🤍</button>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    );
}

export default MovieCart;