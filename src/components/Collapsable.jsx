import { useState } from "react";

function Collapsable(props) {
    const {sectionTitle, children, ...inputProps} = props;
    const [visible, setVisible] = useState(true);

    const toggleDisplay = (e) => {
        setVisible(visible ? false : true);
        console.log(visible)
    }

    return (
        <>
            <h1 className="hover:cursor-pointer" onClick={toggleDisplay}>{sectionTitle}</h1>
            {visible ? children : null}
        </>
    )
}

export default Collapsable;