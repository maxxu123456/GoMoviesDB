import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        let moviesList = [
            {
                id: 1,
                title: "Interstellar",
                release_date: "2019-01-01",
                runtime: 200,
                mpaa_rating: "R",
                description: "GOAT Movie"
            },
            {
                id: 1,
                title: "Star Wars",
                release_date: "1983-01-01",
                runtime: 150,
                mpaa_rating: "PG-13",
                description: "Great movies"
            }
        ]
        setMovies(moviesList)

    }, [])
    return (
        <div className="text-center">
            <h2>Movies</h2>
            <hr />
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Release Date</th>
                        <th>Rating</th>

                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => {
                        return <tr key={movie.id}>
                            <td>
                                <Link to={`/movies/${movie.id}`}>
                                    {movie.title}
                                </Link>
                            </td>
                            <td>
                                <Link>{movie.release_date}</Link>
                            </td>
                            <td>
                                <Link>{movie.mpaa_rating}</Link>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>

    )
}
export default Movies;