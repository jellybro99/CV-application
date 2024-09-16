
function Button(props) {
    const {text, ...buttonProps} = props
    const buttonStyling = "p-1 rounded border-2 border-slate-400";

    return (
        <button {...buttonProps} className={buttonStyling}>
            {text}
        </button>
    )
}

export default Button;