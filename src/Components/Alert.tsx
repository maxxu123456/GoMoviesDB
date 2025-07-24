interface AlertProps {
    className: string;
    message: string;
}

function Alert(props: AlertProps) {
    return (
        <div className={"alert " + props.className} role="alert">
            {props.message}
        </div>
    )
}

export default Alert;