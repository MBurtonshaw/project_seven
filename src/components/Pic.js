import React from "react";

//Accessing props and using dot notation to dynamically add the properties to each picture
const Pic = ( props ) => (
    <li>
        <img key={ props.id } src={ props.src } alt={ props.title }/>
    </li>
);

export default Pic;