import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
    const [movie, setMovie] = useState({})

    let { id } = useParams()

    useEffect(() => {
        let myMovie = {
            id: 1,
            title: "Interstellar",
            release_date: "2019-01-01",
            runtime: 200,
            mpaa_rating: "R",
            description: "GOAT Movie"
        }
        setMovie(myMovie)
    }, [id])
    return (
        <div className="text-center">
            <h2>Movie: {movie.title}</h2>
            <small>
                <em>
                    {movie.release_date}, {movie.runtime} minutes, Rated {movie.mpaa_rating}
                </em>
            </small>
            <hr />
            <p>{movie.description}</p>
        </div>

    )
}
export default Movie;