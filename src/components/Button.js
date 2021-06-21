import React from 'react';


function Button(props){
    return(
        <a className={`btn ${props.btnClass}`} href={props.link}>{props.value}</a>
    )
}

export default Button;