import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "./form/input";
import Select from "./form/Select";
import TextArea from "./form/textarea";
import { useAppContext } from "../App";
import { Movie } from "../types/models";

const EditMovie = () => {
    const navigate = useNavigate()
    const { jwtToken } = useAppContext();

    const [error, setError] = useState<Error | null>(null)
    const [errors, setErrors] = useState<string[]>([])

    const mpaaOptions = [
        { id: "G", value: "G" },
        { id: "PG", value: "PG" },
        { id: "PG13", value: "PG13" },
        { id: "R", value: "R" },
        { id: "NC17", value: "NC17" },
        { id: "18A", value: "18A" },
    ]

    const hasError = (key: string) => {
        return errors.indexOf(key) !== -1
    }

    const [movie, setMovie] = useState<Movie>({
        id: 0,
        title: "",
        release_date: "",
        runtime: "",
        mpaa_rating: "",
        description: ""
    })

    let { id } = useParams()

    useEffect(() => {
        if (jwtToken === "") {
            navigate("/login")
            return
        }
    }, [jwtToken, navigate])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        let value = event.target.value
        let name = event.target.name

        setMovie({
            ...movie,
            [name]: value
        })
    }

    return (
        <div className="text-center">
            <h2>Add/Edit Movie</h2>
            <hr />
            <pre>{JSON.stringify(movie, null, 3)}</pre>
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={movie.id} id="id"></input>

                <Input
                    title={"Title"}
                    className={"form-control"}
                    type={"text"}
                    name={"title"}
                    value={movie.title}
                    onChange={handleChange}
                    errorDiv={hasError("title") ? "text-danger" : "d-none"}
                    errorMsg={"Please enter a title"}
                />
                <Input
                    title={"Release Date"}
                    className={"form-control"}
                    type={"date"}
                    name={"release_date"}
                    value={movie.release_date}
                    onChange={handleChange}
                    errorDiv={hasError("release_date") ? "text-danger" : "d-none"}
                    errorMsg={"Please enter a release date"}
                />

                <Input
                    title={"Runtime"}
                    className={"form-control"}
                    type={"text"}
                    name={"runtime"}
                    value={movie.runtime}
                    onChange={handleChange}
                    errorDiv={hasError("runtime") ? "text-danger" : "d-none"}
                    errorMsg={"Please enter a runtime"}
                />

                <Select
                    title={"MPAA Rating"}
                    name={"mpaa_rating"}
                    options={mpaaOptions}
                    onChange={handleChange}
                    placeHolder={"Choose"}
                    errorMsg={"Please Choose"}
                    errorDiv={hasError("mpaa_rating") ? "text-danger" : "d-none"}
                    value={movie.mpaa_rating}
                />

                <TextArea
                    title="Description"
                    name={"description"}
                    value={movie.description}
                    rows={"3"}
                    onChange={handleChange}
                    errorMsg={"Please Enter a description"}
                    errorDiv={hasError("description") ? "text-danger" : "d-none"}
                />
            </form>
        </div>
    )
}
export default EditMovie;