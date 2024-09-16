import { useState } from "react";

function Collapsable(props) {
    const {sectionTitle, children, ...inputProps} = props;
    const [visible, setVisible] = useState(true);
    const [hover, setHover] = useState(false);

    const toggleDisplay = (e) => {
        setVisible(visible ? false : true);
        console.log(visible)
    }

    return (
        <div className={"rounded border-2 border-white " + (hover ? "bg-blue-50 border-blue-400" : "")}>
            <h1 className="hover:cursor-pointer hover:text-gray-600 border-white" onClick={toggleDisplay} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>{(visible ? "< " : "> ") + sectionTitle}</h1>
            {visible ? children : null}
        </div>
    )
}

export default Collapsable;