import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Movie } from "../types/models";
import { useAppContext } from "../App";

const ManageCatalogue = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const { jwtToken } = useAppContext();
    const navigate = useNavigate()

    useEffect(() => {
        if (jwtToken === "") {
            navigate("/login")
            return
        }

        const headers = new Headers()
        headers.append("Content-Type", "application/json")
        headers.append("Authorization", "Bearer " + jwtToken)

        const requestOptions: RequestInit = {
            method: "GET",
            headers: headers,
        }
        fetch(`/admin/movies`, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [jwtToken, navigate])
    return (
        <div className="text-center">
            <h2>Manage Catalogue</h2>
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
                                <Link to={`/admin/movie/${movie.id}`}>
                                    {movie.title}
                                </Link>
                            </td>
                            <td>
                                {movie.release_date}
                            </td>
                            <td>
                                {movie.mpaa_rating}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>

    )
}
export default ManageCatalogue;