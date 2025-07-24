interface SelectProps {
    name: string;
    title: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    placeHolder: string;
    options: { id: string; value: string }[];
    errorDiv?: string;
    errorMsg?: string;
}

const Select = (props: SelectProps) => {
    return (
        <div className="mb-3">
            <label htmlFor={props.name} className="form-label">
                {props.title}
            </label>
            <select
                className="form-select"
                name={props.name}
                id={props.name}
                value={props.value}
                onChange={props.onChange}
            >
                <option value="">{props.placeHolder}</option>
                {props.options.map((option) => {
                    return (
                        <option
                            key={option.id}
                            value={option.id}
                        >
                            {option.value}
                        </option>
                    )
                })}
            </select>
            <div className={props.errorDiv}>{props.errorMsg}</div>
        </div>
    )
}

export default Select; 