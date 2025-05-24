import { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {

        const headers = new Headers()
        headers.append("Content-Type", "application/json")

        const requestOptions = {
            method: "GET",
            headers: headers,
        }
        fetch(`http://localhost:8080/movies`, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data)
            })
            .catch(err => {
                console.log(err)
            })

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