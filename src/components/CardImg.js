import React from 'react';
import rightArrrow from './../img/rightArrow.png';

function CardImg(props){
    return(
    <div className="card-2">
        <img src={props.img} className="cardImg" alt="icons" />
        <div className="card-body">
        <p className="card-text">{props.title}</p>
            <h5 className="card-title">{props.heading}</h5>
            
            <a href="#" className="btn"><img src={rightArrrow} className="right-arrow-2"/> </a>
        </div>
    </div>
    )
}

export default CardImg;