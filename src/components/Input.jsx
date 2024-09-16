
function Input(props) {
    const {id, label, onChange, ...inputProps} = props

    return (
        <div className="flex flex-col">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} className="p-2 bg-slate-100 rounded border-2"/>
        </div>
    )
}

export default Input