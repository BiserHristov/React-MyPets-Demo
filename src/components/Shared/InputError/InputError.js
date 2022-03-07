import './InputError.css'

const InputError = ({ children }) => {
    console.log(children);
    if (!children) {
        return null
    }

    return (
        <div className="input-error">{children}</div>
    )
}

export default InputError