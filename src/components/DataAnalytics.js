import React from 'react';
import analytics from './../img/analytics.jpg';
import Button from './Button';

function DataAnalytics()
{
    return(
        <div className="container-fluid mt-2">
            <div className="data-top">
                <div className="bigCircle">
                    
                </div>
                <h1>Why Data Science SDot Data <br />Science for Everyone</h1>
                <div className="oval-orange">
                    
                </div>
            </div>
            <div className="container pb-5">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="head-content">
                            <h3>
                                Data Science SDot is one of the leading  platform providing data science solution
                            </h3>
                            <div className="sub-content">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus quam sed ultrices rutrum. 
                                Praesent porttitor sagittis ligula.
                                </p>
                                <p>
                                Maecenas nisl lacus, rutrum et porta non, pulvinar vel purus. Donec finibus sapien vel commodo tincidunt.
                                In eget lorem vel ligula porta pellentesque non vel dolor.
                                </p>
                            </div>
                            <Button btnClass="outline-black" value="Learn More" />
                        </div>

                       
                    </div>
                    <div className="col-md-6">
                            <img src={analytics} alt="analytics" className="analytics-img"/>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default DataAnalytics;