import React from 'react';
import Card from './Card';

function CardSection(){
return(
    <div className="container p-5 d-flex justify-content-around">
        <Card title="Solutions Visualization" heading="Data Visualization Practices To Improve" color="purple" />
        <div className="middle-card">
        <Card title="Data Consulting" heading="Consulting On Invoice Data Capture" color="red" />
        </div>
        <Card title=" Data Case Studies" heading="Delivering the Insights Data Case" color="green" />
    </div>
)
}

export default CardSection;