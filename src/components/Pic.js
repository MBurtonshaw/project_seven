import React from "react";

const Pic = (props) => (
    <li>
        <img key={ props.id } src={ props.src } alt={ props.title }/>
    </li>
);

export default Pic;