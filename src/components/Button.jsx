
function Button(props) {
    const {text, styling, ...buttonProps} = props
    const buttonStyling = "p-1 rounded border-2 border-slate-400";

    return (
        <button {...buttonProps} className={buttonStyling + " " + styling}>
            {text}
        </button>
    )
}

export default Button;