import React from 'react';
import RightArrow from './../img/rightArrow.png';


function Card(props){
    return(
        <div className={`card ${props.color}`}>

            <h4>{props.title}</h4>
            <h2 className="card-title">{props.heading}</h2>
            <div className={`circle ${props.color}-circle`}>
            <a href="/" ><img src={RightArrow} alt="right-arrow" className="right-arrow" /></a>
            </div>
            
            

        </div>
    )
}

export default Card;