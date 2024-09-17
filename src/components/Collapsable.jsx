import { useState } from "react";

function Collapsable(props) {
    const {sectionTitle, children, ...inputProps} = props;
    const [visible, setVisible] = useState(true);
    const [hover, setHover] = useState(false);

    const toggleDisplay = (e) => {
        setVisible(!visible);
    }

    return (
        <div className={"rounded border-2 border-white p-1 " + (hover ? "border-blue-400" : "")}>
            <h1 className="hover:cursor-pointer hover:text-gray-600 border-white" onClick={toggleDisplay} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>{(visible ? "< " : "> ") + sectionTitle}</h1>
            {visible ? children : null}
        </div>
    )
}

export default Collapsable;