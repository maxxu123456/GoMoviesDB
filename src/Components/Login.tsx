import { useState } from "react";
import Input from "./form/input";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../App";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { setJwtToken, setAlertClassName, setAlertMessage, toggleRefresh } = useAppContext();

    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        //build request payload
        let payload = {
            email: email,
            password: password,
        }

        const requestOptions: RequestInit = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify(payload)
        }
        fetch(`/authenticate`, requestOptions).then((res) => res.json()).then((data) => {
            if (data.error) {
                setAlertClassName("alert-danger")
                setAlertMessage(data.message)
            } else {
                setJwtToken(data.access_token)
                setAlertClassName("d-none")
                setAlertMessage("")
                toggleRefresh(true)
                navigate("/")
            }
        }).catch(error => {
            setAlertClassName("alert-danger")
            setAlertMessage(error)
        })
    }
    return (
        <div className="col-md-6 offset-md-3">
            <h2>Login</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <Input title="Email Address" type="email" className="form-control" name="email" autoComplete="email-new" onChange={(event) => { setEmail(event.target.value) }} value={email} />
                <Input title="Password" type="password" className="form-control" name="password" autoComplete="password-new" onChange={(event) => { setPassword(event.target.value) }} value={password} />

                <hr />
                <input type="submit" className="btn btn-primary" value="Login"></input>
            </form>
        </div>

    )
}
export default Login;