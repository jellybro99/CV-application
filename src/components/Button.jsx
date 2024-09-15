
function Button(props) {
    const {text, ...buttonProps} = props

    return (
        <button buttonProps className="p-1 rounded border-2 border-slate-400">
            {text}
        </button>
    )
}

export default Button;