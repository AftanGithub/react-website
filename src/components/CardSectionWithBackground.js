import React from 'react';
import CardImg from "./CardImg";
import  data from './../img/data.png';
import ai from "./../img/ai.png";
import idea from './../img/idea.png';
import  machine from './../img/machine-learning.png';


function CardSectionWithBackground(){
    return(
        <div className="container-fluid pt-5 bg-skin pb-5">
            <div className="data-top mt-5">
                <h1>Our Offer Data Science and<br /> Analytics Service</h1>
                <p className="small-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                 Ut tempus quam <br /> sed ultrices rutrum. Praesent porttitor sagittis ligula.
                </p>
            </div>
            <div className="container d-flex">
                <CardImg img={ai} title="Start Your Ai" heading="Data Strategies Start Your Ai" />
                <CardImg img={data} title="Data Analysis" heading="Digital Data Consultancy for Science Lab" />
                <CardImg img={idea} title="Data Intelligence" heading="Business Intelligence For Digital Science" />
                <CardImg img={machine} title="Machine Learning" heading="Machine Learning is a Method Data Analyis" />
            </div>
        </div>
    )
}

export default CardSectionWithBackground;