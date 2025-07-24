import { useRouteError } from "react-router-dom";

interface RouteError {
    statusText?: string;
    message?: string;
}

export default function ErrorPage() {
    const error = useRouteError();

    const getErrorMessage = () => {
        if (typeof error === 'object' && error !== null) {
            const err = error as RouteError;
            return err.statusText || err.message;
        }
        return 'An unknown error occurred';
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="mt-3">Oops!</h1>
                    <p>An unexpected error has occured!</p>
                    <p>
                        <em>{getErrorMessage()}</em>
                    </p>
                </div>
            </div>
        </div>
    )
}