import { useState } from "react";

function Collapsable(props) {
    const {sectionTitle, children, ...inputProps} = props;
    const [visible, setVisible] = useState(true);

    const toggleDisplay = (e) => {
        setVisible(visible ? false : true);
        console.log(visible)
    }

    return (
        <div>
            <h1 className="hover:cursor-pointer hover:border-blue-400 hover:border-2" onClick={toggleDisplay}>{(visible ? "< " : "> ") + sectionTitle}</h1>
            {visible ? children : null}
        </div>
    )
}

export default Collapsable;