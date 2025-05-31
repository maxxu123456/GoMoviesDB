import { useEffect, useState } from "react";
import { data, Link, useNavigate, useOutletContext } from "react-router-dom";

const ManageCatalogue = () => {
    const [movies, setMovies] = useState([])
    const { jwtToken } = useOutletContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (jwtToken === "") {
            navigate("/login")
            return
        }

        const headers = new Headers()
        headers.append("Content-Type", "application/json")
        headers.append("Authorization", "Bearer " + jwtToken)

        const requestOptions = {
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
                                <Link to={`/admin/movies/${movie.id}`}>
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
export default ManageCatalogue;