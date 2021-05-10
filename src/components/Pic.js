import React from "react";

const Pic = (props) => (
    <li>
        <img key={props.id} src={props.url} alt=""/>
    </li>
);

export default Pic;