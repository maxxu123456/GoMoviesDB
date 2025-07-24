interface TextAreaProps {
    name: string;
    title: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    rows: string;
    errorDiv?: string;
    errorMsg?: string;
}

const TextArea = (props: TextAreaProps) => {
    return (
        <div className="mb-3">
            <label htmlFor={props.name} className="form-label">
                {props.title}
            </label>
            <textarea
                className="form-control"
                id={props.name}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                rows={parseInt(props.rows)}
            />
            <div className={props.errorDiv}>{props.errorMsg}</div>
        </div>
    )
}

export default TextArea; 