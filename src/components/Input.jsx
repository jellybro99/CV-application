import { useState } from "react"

function Input(props) {
    const {id, label, onChange, textArea, ...inputProps} = props

    const inputStyling = "p-2 bg-slate-100 rounded border-2 w-full pt-5";
    const labelStyling = "ml-3 text-slate-500 absolute left-0 top-1/4 -translate-y-1/2 text-xs";

    return (
        <label className="relative">
            {textArea && <textArea {...inputProps} onChange={onChange} className={inputStyling}></textArea>}
            {!textArea && <input {...inputProps} onChange={onChange} className={inputStyling}/>}
            <span className={labelStyling}>{label}</span>
        </label>
    )
}

export default Input