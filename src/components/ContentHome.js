import React from 'react';
import Button from './Button';
import dataImg from './../img/data-img.png';
import arrow from './../img/arrow.png';
function ContentHome(){
    return(
        
            <div className="container-fluid bg-gray">
                <div className="container">
                <div className="row">
                    <div  className="col-6 mt-5">
                        <h1 className="title-text">
                            Data Analytics <br /> Solutions For Startup <br /> Agency
                        </h1>
                        <div>
                            <p className="sub-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus quam sed ultrices rutrum Praesent porttitor sagittis.
                            </p>
                            <p>
                            <i class="fa fa-check greenCheck" aria-hidden="true"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
                            <i className="fa fa-check greenCheck"></i> Ut tempus quam sed ultrices rutrum Praesent  <br />
                            </p>
                            <Button btnClass="purple-btn" value="Learn More" href="/"/>
                            <div className="learn">
                                <img src={arrow} alt="arrow" className="arrow" />
                                <br />
                                
                                <a href="/" className="learn-more"> Learn About Our <br />Latest Work info</a>
                                
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={dataImg} alt="data" className="data-img"/>
                    </div>
                </div>
                </div>  
            </div>
    
    )
}

export default ContentHome;